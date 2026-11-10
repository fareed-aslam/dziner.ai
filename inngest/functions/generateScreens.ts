import { openRouter } from "@/lib/openrouter";
import { inngest } from "../client";
import { success, z } from "zod";
import { generateObject, generateText } from "ai";
import { FrameType } from "@/types/project";
import { ANALYSIS_PROMPT, GENERATION_SYSTEM_PROMPT } from "@/lib/prompt";
import prisma from "@/lib/prisma";
import { BASE_VARIABLES, THEME_LIST } from "@/lib/themes";
import { resolveImagesInHTML } from "@/lib/image-resolver";
import { realtime, staticSchema } from "inngest/realtime";

const userChannel = realtime.channel({
  name: (params: { userId: string }) => `user:${params.userId}`,
  topics: {
    "generation.start": {
      schema: staticSchema<{ status: string; projectId: string }>(),
    },
    "analysis.start": {
      schema: staticSchema<{ status: string; projectId: string }>(),
    },
    "analysis.complete": {
      schema: staticSchema<{
        status: string;
        theme: string;
        totalScreens: number;
        screens: {
          id: string;
          name: string;
          purpose: string;
          visualDescription: string;
        }[];
        projectId: string;
      }>(),
    },
    "frame.created": {
      schema: staticSchema<{
        frame: Record<string, unknown>;
        screenId: string;
        projectId: string;
      }>(),
    },
    "generation.complete": {
      schema: staticSchema<{ status: string; projectId: string }>(),
    },
  },
});

const AnalysisSchema = z.object({
  theme: z
    .string()
    .describe(
      "The Specific visual theme ID (e.g.,'midnight','ocean-breeze','neo-brutalism')",
    ),
  screens: z
    .array(
      z.object({
        id: z
          .string()
          .describe(
            "Unique identifier for the screen (e.g., 'home-dashboard', 'profile-settings','transaction-history'). Use kebab-case.",
          ),
        name: z
          .string()
          .describe(
            "Short descriptive name of the screen (e.g., 'Home Dashboard', 'Profile', 'Transaction History')",
          ),
        purpose: z
          .string()
          .describe(
            "One clear sentence explaining what this screen accomplishes for the user and its role in the app",
          ),
        visualDescription: z
          .string()
          .describe(
            "A dense high-fidelity visual directive (like an image generation prompt). Describe the layout, specific data examples (e.g. 'Oct-Mar'), component hierarchy, and physical attributes (e.g. 'Chunky cards','Floating header', 'Floating action button', 'Bottom navigation', Header with user avatar).",
          ),
      }),
    )
    .min(1)
    .max(4),
});

export const generateScreens = inngest.createFunction(
  { id: "generate-ui-screens", triggers: [{ event: "ui/generate.screens" }] },
  async ({ event, step }) => {
    const { 
      userId,
      projectId,
      prompt,
      frames,
      theme: existingTheme,
    } = event.data;
    const CHANNEL = userChannel({ userId });
    const isExistingGeneration = Array.isArray(frames) && frames.length > 0;

    await step.realtime.publish(
      "realtime-generation-start",
      CHANNEL["generation.start"],
      { status: "running", projectId },
    );

    await step.realtime.publish(
      "realtime-analysis-start",
      CHANNEL["analysis.start"],
      { status: "analyzing", projectId },
    );

    const analysis = await step.run("analyze-and-plan-screens", async () => {
      const contextHTML = isExistingGeneration
        ? frames
            .slice(0, 4)
            .map((frame: FrameType) => frame.htmlContent)
            .join("\n")
        : "";

      const analysisPrompt = isExistingGeneration
        ? `USER REQUEST:${prompt}
      SELECTED THEME:${existingTheme}
      CONTEXT HTML:${contextHTML}
      TASK: Generate 1 to 3 new complementary screens matching the theme and existing flow based on the user request.`.trim()
        : `USER REQUEST:${prompt}
      TASK: Generate a complete mobile application with 3 to 4 distinct screens: 1. Welcome / Onboarding, 2. Main Dashboard, 3. Detail / Activity Screen, 4. Profile / Settings Screen.`.trim();

      const { object } = await generateObject({
        model: openRouter.chat("google/gemini-2.5-flash-lite"),
        schema: AnalysisSchema,
        system: ANALYSIS_PROMPT,
        prompt: analysisPrompt,
      });

      const themeToUse = isExistingGeneration ? existingTheme : object.theme;
      if (!isExistingGeneration) {
        await prisma.project.update({
          where: {
            id: projectId,
            userId: userId,
          },
          data: { theme: themeToUse },
        });
      }
      return { ...object, themeToUse };
    });

    await step.realtime.publish(
      "realtime-analysis-complete",
      CHANNEL["analysis.complete"],
      {
        status: "generating",
        theme: analysis.themeToUse,
        totalScreens: analysis.screens.length,
        screens: analysis.screens,
        projectId,
      },
    );

    for (let i = 0; i < analysis.screens.length; i++) {
      const screenPlan = analysis.screens[i];
      const selectedTheme = THEME_LIST.find(
        (t) => t.id === analysis.themeToUse,
      );

      const fullThemeCSS = `${BASE_VARIABLES} ${selectedTheme?.style || ""}`;

      const { frame } = await step.run(`generated-screen-${i}`, async () => {
        const result = await generateText({
          model: openRouter.chat("google/gemini-2.5-flash-lite"),
          system: GENERATION_SYSTEM_PROMPT,
          prompt: `
          - Screen ${i + 1}/${analysis.screens.length}
          - Screen ID: ${screenPlan.id}
          - Screen Name: ${screenPlan.name}
          - Screen Purpose: ${screenPlan.purpose}
          
          VISUAL DESCRIPTION: ${screenPlan.visualDescription}
          THEME STYLE (Use these for colors): ${fullThemeCSS}
          
          CRITICAL REQUIREMENTS :
          1. **Generate ONLY raw HTML markup for this mobile app screen using Tailwind CSS.**
            Use Tailwind classes for layout, spacing, typography, shadows, etc.
            Use theme CSS variables ONLY for color-related properties (bg-[var(--background)], text-[var(--foreground)], border-[var(--border)], ring-[var(--ring)], etc.)
          2. **All content must be inside a single root <div> that controls the layout.**
            - No overflow classes on the root.
            - All scrollable content must be in inner containers with hidden scrollbars: [&::-webkit-scrollbar]:hidden scrollbar-none
          3. **For absolute overlays (maps, bottom sheets, modals, etc.):**
            - Use \`relative w-full h-screen\` on the top div of the overlay.
          4. **For regular content:**
            - Use \`w-full h-full min-h-screen\` on the top div.
          5. **Do not use h-screen on inner content unless absolutely required.**
            - Height must grow with content; content must be fully visible inside an iframe.
          6. **For z-index layering:**
            - Ensure absolute elements do not block other content unnecessarily.
          7. **Output raw HTML only, starting with <div>.**
            - Do not include markdown, comments, <html>, <body>, or <head>.
          8. **Hardcode a style only if a theme variable is not needed for that element.**
          9. **Ensure iframe-friendly rendering:**
            - All elements must contribute to the final scrollHeight so your parent iframe can correctly resize.
          Generate the complete, production-ready HTML for this screen now`.trim(),
        });

        let rawText = result.text ?? "";

        // If the generation is empty or missing <div, do an immediate direct fallback retry
        if (!rawText || !rawText.includes("<div")) {
          const retryResult = await generateText({
            model: openRouter.chat("google/gemini-2.5-flash-lite"),
            system: "You are an expert mobile UI designer. Output complete, raw HTML only starting with <div class=\"relative w-full min-h-screen bg-[var(--background)] p-4\"> and ending with </div>. Use Tailwind CSS classes.",
            prompt: `Create a mobile app screen for "${screenPlan.name}". Purpose: ${screenPlan.purpose}. Details: ${screenPlan.visualDescription}`,
          });
          rawText = retryResult.text ?? rawText;
        }

        const match = rawText.match(/<div[\s\S]*<\/div>/);
        let finalHtml = match ? match[0] : rawText;
        finalHtml = finalHtml.replace(/```(?:html)?/g, "").replace(/```/g, "").trim();

        if (!finalHtml.startsWith("<div")) {
          finalHtml = `<div class="relative w-full min-h-screen bg-[var(--background)] p-5 text-[var(--foreground)]">${finalHtml || `<h2>${screenPlan.name}</h2>`}</div>`;
        }

        // Resolve all image placeholders to real Unsplash photos
        finalHtml = await resolveImagesInHTML(finalHtml);

        const frame = await prisma.frame.create({
          data: { projectId, title: screenPlan.name, htmlContent: finalHtml },
        });
        return { frame };
      });

      await step.realtime.publish(
        `realtime-frame-created-${i}`,
        CHANNEL["frame.created"],
        {
          frame: frame as unknown as Record<string, unknown>,
          screenId: screenPlan.id,
          projectId,
        },
      );
    }

    await step.realtime.publish(
      "realtime-generation-complete",
      CHANNEL["generation.complete"],
      { status: "completed", projectId },
    );
  },
);

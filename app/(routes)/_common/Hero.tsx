"use client";

import React, { memo, useState } from "react";
import PromptInput from "@/components/prompt-input";
import { useCreateProject, useGetProjects } from "@/features/use-project";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { Spinner } from "@/components/ui/spinner";
import { ProjectType } from "@/types/project";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  Smartphone,
  Clock,
  Sparkles,
  FolderOpen,
  Terminal,
  Layers,
  Code2,
} from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { toast } from "sonner";
import { motion } from "motion/react";

const Hero = () => {
  const [promptText, setPromptText] = useState<string>("");
  const { mutate, isPending } = useCreateProject();
  const { user } = useKindeBrowserClient();
  const userId = user?.id;

  const {
    data: projects = [],
    isLoading,
    isError,
  } = useGetProjects(userId);

  const handlePresetSelect = (val: string) => {
    setPromptText(val);
  };

  const handleSubmit = () => {
    if (!promptText.trim()) return;
    if (!user) {
      toast.error("Please sign in or create an account to start generating mobile apps.");
      return;
    }
    mutate(promptText.trim());
  };

  const samplePresets = [
    {
      label: "Gourmet Food Delivery",
      prompt:
        "Food delivery mobile app with complete multi-screen experience. 1. Welcome splash and location picker screen. 2. Home feed with top search bar, hero carousel of daily deals, restaurant list with food thumbnails, and bottom nav. 3. Restaurant menu and item detail screen with add-to-cart. 4. Order checkout and delivery tracking screen. Style: Vibrant and appetizing, warm colors, rounded cards with subtle drop shadows.",
    },
    {
      label: "Crypto Wealth Vault",
      prompt:
        "Finance app with complete multi-screen experience. 1. Welcome onboarding screen. 2. Main statistics screen with current balance, spending bar chart (Oct-Mar), transaction list, and bottom navigation. 3. Transaction details and budget breakdown screen. 4. User profile and card settings. Style: Dark technical mode, glowing charts, bold typography.",
    },
    {
      label: "Sleep Recovery Ring",
      prompt:
        "Fitness activity tracker with full multi-screen flow. 1. Welcome onboarding screen. 2. Main activity tracking dashboard with large progress ring, weekly streak, calorie burn cards, and bottom navigation. 3. Workout log and heart rate analytics screen. 4. Profile and personal records screen. Style: Minimalist luxury wellness, dark mode, glowing rings.",
    },
    {
      label: "Streetwear Raffle",
      prompt:
        "Sneaker streetwear e-commerce app with complete multi-screen flow. 1. Splash / new drops onboarding screen. 2. Product discovery feed with trending sneakers and category pills. 3. Product detail page with large sneaker photo, color swatches, size grid, and sticky Add to Cart. 4. Cart and order summary screen. Style: Neo-brutalism, high contrast, bold solid colors.",
    },
  ];

  return (
    <section className="w-full relative overflow-hidden pt-28 sm:pt-36 pb-16">
      {/* Aurora Ambient Spotlight Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/25 via-purple-500/10 to-transparent blur-[140px] pointer-events-none -z-10 animate-pulse-glow"></div>
      
      {/* Subtle Grid Matrix Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Release Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border/80 bg-background/80 backdrop-blur-xl shadow-xs text-xs font-medium text-foreground/85 mb-8 hover:border-primary/50 transition-colors"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="font-mono text-[11px] text-muted-foreground">Dziner 2.0</span>
          <span className="text-border">|</span>
          <span>Autonomous Mobile UI Engine</span>
          <ArrowRight className="size-3 text-muted-foreground ml-0.5" />
        </motion.div>

        {/* Display Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-foreground leading-[1.02] max-w-5xl"
        >
          Design mobile apps <br />
          <span className="bg-gradient-to-r from-primary via-purple-500 to-sky-400 bg-clip-text text-transparent">
            at the speed of thought.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-base sm:text-xl text-muted-foreground max-w-2xl mt-6 mb-10 leading-relaxed font-normal"
        >
          From a single prompt to a production-ready, multi-screen mobile prototype.
          Clean Tailwind CSS, authentic photography, and live adaptive design tokens.
        </motion.p>

        {/* Command Bar Prompt Studio */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-3xl relative group"
        >
          {/* Subtle Outer Neon Border Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/40 via-purple-500/20 to-sky-400/40 rounded-[32px] blur-lg opacity-40 group-hover:opacity-75 transition duration-500"></div>

          <div className="relative rounded-[28px] bg-card/90 backdrop-blur-2xl border border-white/[0.12] dark:border-white/[0.08] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] p-3 sm:p-4 text-left">
            <PromptInput
              className="min-h-[120px] sm:min-h-[140px] border-none focus-within:ring-0 shadow-none text-sm sm:text-base bg-transparent p-0"
              promptText={promptText}
              setPromptText={setPromptText}
              isLoading={isPending}
              onSubmit={handleSubmit}
            />

            {/* Bottom Controls Bar inside Input */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pt-3 border-t border-border/40 text-xs text-muted-foreground">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1 font-mono text-[11px] text-primary">
                  <Terminal className="size-3.5" />
                  <span>3-4 Connected Screens</span>
                </span>
                <span className="text-border">•</span>
                <span className="flex items-center gap-1 text-[11px]">
                  <Code2 className="size-3 text-emerald-500" />
                  <span>Tailwind Markup</span>
                </span>
              </div>
              <span className="hidden sm:inline font-mono text-[11px] text-muted-foreground/80">
                Press ↵ to generate
              </span>
            </div>
          </div>
        </motion.div>

        {/* Clean Idea Starters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-2 mt-6 text-xs text-muted-foreground"
        >
          <span className="font-semibold text-foreground/80">Quick ideas:</span>
          {samplePresets.map((preset, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handlePresetSelect(preset.prompt)}
              className="px-3 py-1 rounded-lg bg-muted/50 hover:bg-muted text-foreground/80 hover:text-foreground border border-border/50 hover:border-primary/40 transition-all cursor-pointer text-xs font-medium"
            >
              {preset.label}
            </button>
          ))}
        </motion.div>

        {/* Existing Projects Gallery (when authenticated) */}
        {userId && (
          <div id="projects" className="w-full max-w-5xl mx-auto pt-20 text-left scroll-mt-24">
            <div className="flex items-center justify-between border-b border-border/50 pb-3 mb-6">
              <div className="flex items-center gap-2">
                <FolderOpen className="size-5 text-primary" />
                <h2 className="font-bold text-xl tracking-tight text-foreground">
                  Your Recent Projects
                </h2>
              </div>
              <span className="text-xs text-muted-foreground font-mono">
                {projects.length} {projects.length === 1 ? "project" : "projects"}
              </span>
            </div>

            {isLoading ? (
              <div className="flex items-center justify-center py-12">
                <Spinner className="size-8 text-primary" />
              </div>
            ) : projects.length === 0 ? (
              <div className="p-10 text-center rounded-3xl border border-dashed border-border/70 bg-card/40">
                <Smartphone className="size-10 text-muted-foreground/40 mx-auto mb-2" />
                <p className="text-sm font-semibold text-foreground">No projects yet</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Type an app idea into the command bar above to generate your first mobile app flow.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {projects.map((project: ProjectType) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            )}
            {isError && (
              <p className="text-destructive text-xs mt-2 text-center">
                Failed to load projects. Please refresh the page.
              </p>
            )}
          </div>
        )}

      </div>
    </section>
  );
};

const ProjectCard = memo(({ project }: { project: ProjectType }) => {
  const router = useRouter();
  const createdAtDate = new Date(project.createdAt);
  const timeAgo = formatDistanceToNow(createdAtDate, { addSuffix: true });
  const thumbnail = project.thumbnail || null;

  const onRoute = () => {
    router.push(`/project/${project.id}`);
  };

  return (
    <div
      role="button"
      tabIndex={0}
      className="group flex flex-col border border-border/70 rounded-2xl cursor-pointer hover:border-primary/50 hover:shadow-xl transition-all duration-200 overflow-hidden bg-card text-left"
      onClick={onRoute}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onRoute();
        }
      }}
    >
      <div className="h-44 bg-muted/40 relative overflow-hidden flex items-center justify-center border-b border-border/40">
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={project.name}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
            <Smartphone className="size-7" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
          <span className="text-xs font-semibold text-white flex items-center gap-1">
            Open Canvas <ArrowRight className="size-3" />
          </span>
        </div>
      </div>

      <div className="p-4 flex flex-col justify-between flex-1">
        <h3 className="font-semibold text-sm truncate w-full text-foreground group-hover:text-primary transition-colors">
          {project.name}
        </h3>
        <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1 font-mono">
          <Clock className="size-3" />
          {timeAgo}
        </p>
      </div>
    </div>
  );
});

ProjectCard.displayName = "ProjectCard";

export default Hero;

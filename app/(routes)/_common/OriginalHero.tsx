"use client";

import React, { memo, useState } from "react";
import Header from "./Header";
import PromptInput from "@/components/prompt-input";
import { Suggestion, Suggestions } from "@/components/ai-elements/suggestion";
import { useCreateProject, useGetProjects } from "@/features/use-project";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { Spinner } from "@/components/ui/spinner";
import { ProjectType } from "@/types/project";
import { useRouter } from "next/navigation";
import {
  FolderOpenDotIcon,
  CreditCard,
  Activity,
  Utensils,
  Plane,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import { formatDistanceToNow } from "date-fns";

const OriginalHero = ({ user: initialUser }: { user?: any }) => {
  const [promptText, setPromptText] = useState<string>("");
  const { mutate, isPending } = useCreateProject();
  const { user: clientUser } = useKindeBrowserClient();
  const user = clientUser || initialUser;
  const userId = user?.id;

  const {
    data: projects = [],
    isLoading,
    isError,
  } = useGetProjects(userId);

  const handleSuggestionClick = (val: string) => {
    setPromptText(val);
  };

  const handleSubmit = () => {
    if (!promptText.trim()) return;
    mutate(promptText.trim());
  };

  const suggestions = [
    {
      label: "Finance Tracker",
      icon: <CreditCard className="size-3 text-sky-400 shrink-0" />,
      value:
        "Finance app with complete multi-screen experience. 1. Welcome onboarding screen. 2. Main statistics screen with current balance, spending bar chart (Oct-Mar), transaction list, and bottom navigation. 3. Transaction details and budget breakdown screen. 4. User profile and card settings. Style: Light mode, bold and colorful, chunky rounded cards, playful but professional, modern sans-serif typography, Gen Z fintech vibe.",
    },
    {
      label: "Fitness Activity",
      icon: <Activity className="size-3 text-emerald-400 shrink-0" />,
      value:
        "Fitness activity tracker with full multi-screen flow. 1. Welcome onboarding screen. 2. Main activity tracking dashboard with large progress ring, weekly streak, calorie burn cards, and bottom navigation. 3. Workout log and heart rate analytics screen. 4. Profile and personal records screen. Style: Energetic and motivating, bright accent colors, rounded cards, polished wellness app vibe.",
    },
    {
      label: "Food Delivery",
      icon: <Utensils className="size-3 text-orange-400 shrink-0" />,
      value:
        "Food delivery mobile app with complete multi-screen experience. 1. Welcome splash and location picker screen. 2. Home feed with top search bar, hero carousel of daily deals, restaurant list with food thumbnails, and bottom nav. 3. Restaurant menu and item detail screen with add-to-cart. 4. Order checkout and delivery tracking screen. Style: Vibrant and appetizing, warm colors (orange, red, yellow), rounded cards with subtle drop shadows.",
    },
    {
      label: "Travel Booking",
      icon: <Plane className="size-3 text-cyan-400 shrink-0" />,
      value:
        "Travel booking app with multi-screen flow. 1. Inspiring onboarding screen with hero imagery. 2. Destination explore feed with search, category filters, and curated trip cards. 3. Destination detail screen with immersive beach photography, rating, price per night, and Book Now bottom sheet. 4. Trip itinerary and user profile screen. Style: Minimalist luxury, ample whitespace, elegant typography, airy high-end vibe.",
    },
    {
      label: "E-Commerce",
      icon: <ShoppingBag className="size-3 text-purple-400 shrink-0" />,
      value:
        "Sneaker streetwear e-commerce app with complete multi-screen flow. 1. Splash / new drops onboarding screen. 2. Product discovery feed with trending sneakers and category pills. 3. Product detail page with large sneaker photo, color swatches, size grid, and sticky Add to Cart. 4. Cart and order summary screen. Style: Neo-brutalism, high contrast, thick outlines, bold solid colors (yellow and black), streetwear aesthetic.",
    },
    {
      label: "Meditation",
      icon: <Sparkles className="size-3 text-amber-400 shrink-0" />,
      value:
        "Meditation and mindfulness app with multi-screen flow. 1. Welcome calming screen. 2. Daily home feed with guided meditation recommendations, breathing timer, and mood tracker. 3. Active session player screen with calming illustration, audio progress, and ambient sound picker. 4. Mindful streak and profile screen. Style: Serene and restorative, soft neutral colors, smooth rounded cards, soothing wellness vibe.",
    },
  ];

  return (
    <div className="w-full min-h-screen">
      <div className="flex flex-col">
        <Header />
        <div className="relative overflow-hidden pt-28">
          <div className="max-w-6xl mx-auto flex flex-col items-center justify-center">
            <div className="space-y-3">
              <h1 className="text-center font-semibold text-4xl tracking-tight sm:text-5xl">
                Design mobile apps <br className="md:hidden" />
                <span className="text-primary">in minutes</span>
              </h1>
              <p className="mx-auto max-w-2xl text-center font-medium text-foreground leading-relaxed sm:text-lg">
                Go from idea to beautiful app mockups in minutes by chatting
                with AI.
              </p>
            </div>

            <div className="flex w-full max-w-3xl flex-col items-center gap-8 relative z-50 mt-6">
              <div className="w-full">
                <PromptInput
                  className="ring-2 ring-primary"
                  promptText={promptText}
                  setPromptText={setPromptText}
                  isLoading={isPending}
                  onSubmit={handleSubmit}
                />
              </div>
              <div className="flex flex-wrap justify-center gap-2 px-5">
                <Suggestions>
                  {suggestions.map((s) => (
                    <Suggestion
                      key={s.label}
                      suggestion={s.label}
                      className="!text-xs !h-7 px-2.5 !pt-1 cursor-pointer flex items-center gap-1.5"
                      onClick={() => handleSuggestionClick(s.value)}
                    >
                      {s.icon}
                      <span>{s.label}</span>
                    </Suggestion>
                  ))}
                </Suggestions>
              </div>
            </div>

            <div className="absolute -translate-x-1/2 left-1/2 w-[5000px] h-[3000px] top-[80%] -z-10">
              <div className="-translate-x-1/2 absolute bottom-[calc(100%-300px)] left-1/2 h-[2000px] w-[2000px] opacity-20 bg-radial-primary"></div>
              <div className="absolute -mt-2.5 size-full rounded-[50%] bg-primary/20 opacity-70 [box-shadow:0_-15px_24.8px_var(--primary)]"></div>
              <div className="absolute z-0 size-full rounded-[50%] bg-background"></div>
            </div>
          </div>
        </div>

        <div className="w-full py-10">
          <div className="mx-auto max-w-3xl px-4">
            {userId && (
              <div>
                <h2 className="font-medium text-xl tracking-tight">
                  Recent Projects
                </h2>
                {isLoading ? (
                  <div className="flex items-center justify-center py-6">
                    <Spinner className="size-10 text-primary" />
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-3">
                    {projects.map((project: ProjectType) => (
                      <ProjectCard key={project.id} project={project} />
                    ))}
                  </div>
                )}
                {isError && (
                  <p className="text-red-500 mt-2"> Failed to load projects</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
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
      className="w-full flex flex-col border border-border/80 rounded-xl cursor-pointer hover:shadow-md hover:border-primary/50 overflow-hidden bg-card text-left transition-all group"
      onClick={onRoute}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onRoute();
        }
      }}
    >
      <div className="h-40 bg-muted/30 relative overflow-hidden flex items-center justify-center">
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={project.name || "thumbnail"}
            loading="lazy"
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-primary/5 via-muted/40 to-muted/20 p-4 relative overflow-hidden">
            {/* Elegant preview skeleton while thumbnail is loading */}
            <div className="w-16 h-24 rounded-lg border border-primary/20 bg-background/70 shadow-xs p-1.5 flex flex-col justify-between opacity-80 group-hover:scale-105 transition-transform">
              <div className="w-6 h-1 rounded-full bg-primary/30 mx-auto" />
              <div className="space-y-1">
                <div className="w-full h-1.5 rounded bg-muted-foreground/20" />
                <div className="w-3/4 h-1 rounded bg-muted-foreground/15" />
              </div>
              <div className="w-full h-3 rounded bg-primary/20" />
            </div>
            <span className="text-[10px] font-mono text-muted-foreground mt-2">
              Ready to view
            </span>
          </div>
        )}
      </div>

      <div className="p-3.5 flex flex-col justify-between">
        <h3 className="font-semibold text-sm truncate w-full mb-0.5 group-hover:text-primary transition-colors">
          {project.name}
        </h3>
        <p className="text-[11px] text-muted-foreground font-mono">{timeAgo}</p>
      </div>
    </div>
  );
});

ProjectCard.displayName = "ProjectCard";

export default OriginalHero;


"use client";

import React from "react";
import {
  Layers,
  Palette,
  Camera,
  Code2,
  Image as ImageIcon,
  Zap,
} from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: <Layers className="size-5 text-sky-500" />,
      title: "Cohesive Multi-Screen Flows",
      description:
        "Every project generates a complete, connected 3-to-4 screen mobile journey—onboarding, main discovery feed, detailed item views, and profile controls with linked navigation.",
    },
    {
      icon: <Code2 className="size-5 text-emerald-500" />,
      title: "Semantic Tailwind CSS Markup",
      description:
        "Zero proprietary black boxes. Every screen compiles into clean, responsive Tailwind CSS utility classes and SVG charts ready to paste into React, Next.js, or React Native.",
    },
    {
      icon: <Palette className="size-5 text-purple-500" />,
      title: "Live Theme Switching",
      description:
        "Switch color palettes—Ocean Breeze, Sunset Ember, Cyber Neon, Rose Gold—and watch all screens re-render dynamically across your entire canvas at once.",
    },
    {
      icon: <ImageIcon className="size-5 text-amber-500" />,
      title: "Dynamic Unsplash Asset Pipeline",
      description:
        "No broken links, dead URLs, or grey placeholder boxes. High-resolution, contextually relevant photography and avatars are fetched and resolved automatically.",
    },
    {
      icon: <Camera className="size-5 text-rose-500" />,
      title: "Headless Chrome Camera Export",
      description:
        "Generate crisp, high-DPI PNG screenshots directly from the canvas with one click. Ideal for client decks, user testing, and developer specifications.",
    },
    {
      icon: <Zap className="size-5 text-orange-500" />,
      title: "Real-Time Event Streaming",
      description:
        "Orchestrated with Inngest and OpenRouter Gemini 2.5 Flash Lite. Screens materialize progressively on your canvas without page refreshes.",
    },
  ];

  return (
    <section id="features" className="w-full py-20 px-4 sm:px-6 lg:px-8 border-t border-border/40 bg-muted/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Headline */}
        <div className="max-w-3xl mb-14 text-left">
          <p className="text-xs font-mono uppercase tracking-wider text-primary font-semibold mb-2">
            Engineering & Craft
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            Built for speed. <br />
            <span className="text-muted-foreground font-normal">Engineered for production.</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-3 max-w-xl">
            Everything needed to go from high-level product concept to interactive, pitch-ready mobile prototypes in seconds.
          </p>
        </div>

        {/* Feature Grid with subtle borders and micro-hover animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border border-border/70 bg-card hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-muted/50 border border-border/40 flex items-center justify-center mb-4">
                  {f.icon}
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">
                  {f.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {f.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

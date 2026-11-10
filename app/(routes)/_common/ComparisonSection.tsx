"use client";

import React from "react";
import { X, Check, Clock, Zap, Layers, RefreshCw } from "lucide-react";

export const ComparisonSection = () => {
  return (
    <section className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-border/40 bg-muted/10">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Heading (LightUGC tone) */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-primary font-bold mb-2">
            The Transformation
          </p>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-foreground">
            Stop losing 6 weeks between design & code.
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground mt-2 max-w-xl mx-auto">
            Traditional app prototyping is fragmented across static Figma boards and disconnected frontends. Dziner replaces the manual friction with a single autonomous canvas.
          </p>
        </div>

        {/* Side-by-Side Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Left: Traditional Way */}
          <div className="p-6 sm:p-8 rounded-2xl border border-border/70 bg-card/60 backdrop-blur-md relative overflow-hidden">
            <div className="flex items-center gap-2 mb-4 text-xs font-mono font-bold text-muted-foreground uppercase">
              <span className="size-2 rounded-full bg-red-500/80"></span>
              <span>The Traditional Grind</span>
            </div>
            <h3 className="text-lg font-bold text-foreground mb-4">
              4 Weeks of Figma + 6 Weeks of Code
            </h3>
            <ul className="space-y-3.5 text-xs sm:text-sm text-muted-foreground">
              <li className="flex items-start gap-2.5">
                <X className="size-4 text-red-500 shrink-0 mt-0.5" />
                <span>Single static screens designed in isolation without real user journeys.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <X className="size-4 text-red-500 shrink-0 mt-0.5" />
                <span>Engineers rewrite every component from scratch in React Native.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <X className="size-4 text-red-500 shrink-0 mt-0.5" />
                <span>Color tokens, fonts, and dark mode manually synced across files.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <X className="size-4 text-red-500 shrink-0 mt-0.5" />
                <span>Placeholder boxes and missing images until late in development.</span>
              </li>
            </ul>
          </div>

          {/* Right: The Dziner Way */}
          <div className="p-6 sm:p-8 rounded-2xl border-2 border-primary/40 bg-card/90 backdrop-blur-xl relative shadow-xl overflow-hidden">
            <div className="absolute top-0 right-0 px-3 py-1 bg-primary text-primary-foreground text-[10px] font-mono font-bold rounded-bl-xl uppercase tracking-wider">
              Autonomous
            </div>
            <div className="flex items-center gap-2 mb-4 text-xs font-mono font-bold text-primary uppercase">
              <span className="size-2 rounded-full bg-primary animate-pulse"></span>
              <span>The Dziner Engine</span>
            </div>
            <h3 className="text-lg font-bold text-foreground mb-4">
              3-4 Connected Screens in 45 Seconds
            </h3>
            <ul className="space-y-3.5 text-xs sm:text-sm text-foreground/90 font-medium">
              <li className="flex items-start gap-2.5">
                <Check className="size-4 text-primary shrink-0 mt-0.5" />
                <span>Complete multi-screen UX flow generated simultaneously on a unified canvas.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="size-4 text-primary shrink-0 mt-0.5" />
                <span>Direct production-ready Tailwind CSS & TSX components ready to copy.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="size-4 text-primary shrink-0 mt-0.5" />
                <span>Switch design tokens & dark/light palettes live with 1 click across all screens.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="size-4 text-primary shrink-0 mt-0.5" />
                <span>Curated authentic Unsplash photography and real typography resolved automatically.</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};


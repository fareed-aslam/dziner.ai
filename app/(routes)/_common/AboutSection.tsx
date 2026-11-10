"use client";

import React from "react";
import {
  Workflow,
  Sparkles,
  Palette,
  Terminal,
  ShieldCheck,
  Zap,
} from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="architecture" className="w-full py-20 px-4 sm:px-6 lg:px-8 border-t border-border/40 bg-background scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-14 text-left">
          <p className="text-xs font-mono uppercase tracking-wider text-primary font-semibold mb-2">
            The Philosophy
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            Why We Replaced the Blank Canvas.
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-3 max-w-2xl leading-relaxed">
            Starting a mobile project from a blank Figma artboard is tedious. You spend hours drawing rectangles, hunting for high-res food or sneaker photos, and manually wiring navigation tabs before validating if the product idea even makes sense.
          </p>
        </div>

        {/* Narrative & Architecture Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          <div className="p-7 rounded-2xl border border-border/70 bg-card/60 backdrop-blur-md hover:border-primary/40 transition-all duration-300">
            <div className="w-9 h-9 rounded-lg bg-sky-500/10 text-sky-500 flex items-center justify-center mb-4">
              <Workflow className="size-5" />
            </div>
            <h3 className="text-base font-bold text-foreground mb-2">
              Holistic App Flows
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Real mobile apps are systems, not disconnected snapshots. Dziner AI drafts coordinated journeys (Onboarding ➔ Discovery Feed ➔ Action Detail ➔ Profile) sharing identical design tokens and active tabs.
            </p>
          </div>

          <div className="p-7 rounded-2xl border border-border/70 bg-card/60 backdrop-blur-md hover:border-primary/40 transition-all duration-300">
            <div className="w-9 h-9 rounded-lg bg-purple-500/10 text-purple-500 flex items-center justify-center mb-4">
              <Palette className="size-5" />
            </div>
            <h3 className="text-base font-bold text-foreground mb-2">
              CSS Token Isolation
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Every screen is styled with CSS variables rather than hardcoded hex values. Change a palette in the toolbar and your entire multi-screen prototype updates instantaneously across the canvas.
            </p>
          </div>

          <div className="p-7 rounded-2xl border border-border/70 bg-card/60 backdrop-blur-md hover:border-primary/40 transition-all duration-300">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-4">
              <Terminal className="size-5" />
            </div>
            <h3 className="text-base font-bold text-foreground mb-2">
              Real Assets, Real Code
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              No lorem ipsum. No broken grey squares. Every prototype incorporates authentic Unsplash imagery, realistic prices, numbers, and SVG charts, backed by clean semantic HTML and Tailwind markup.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

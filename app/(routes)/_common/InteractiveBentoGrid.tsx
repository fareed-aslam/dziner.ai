"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Layers,
  Palette,
  Camera,
  Code2,
  Copy,
  Check,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export const InteractiveBentoGrid = () => {
  const [copiedCode, setCopiedCode] = useState(false);
  const [selectedPalette, setSelectedPalette] = useState<"ocean" | "sunset" | "cyber" | "emerald">("ocean");
  const [shutterFlashing, setShutterFlashing] = useState(false);

  const palettes = {
    ocean: { name: "Ocean", hex: "#0ea5e9", bgClass: "bg-sky-500" },
    sunset: { name: "Sunset", hex: "#f97316", bgClass: "bg-orange-500" },
    cyber: { name: "Cyber", hex: "#a855f7", bgClass: "bg-purple-500" },
    emerald: { name: "Emerald", hex: "#10b981", bgClass: "bg-emerald-500" },
  };

  const handleCopy = () => {
    const snippet = `<div className="w-full min-h-screen bg-[var(--background)] p-4 text-[var(--foreground)]">
  <div className="flex justify-between items-center mb-4">
    <h2 className="text-lg font-bold">Activity</h2>
  </div>
  <div className="p-4 rounded-2xl bg-[var(--card)] border border-[var(--border)]">
    <p className="text-xs text-[var(--muted-foreground)]">Burned</p>
    <p className="text-2xl font-black mt-1">2,480 kcal</p>
  </div>
</div>`;
    navigator.clipboard.writeText(snippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleTriggerShutter = () => {
    setShutterFlashing(true);
    setTimeout(() => setShutterFlashing(false), 300);
  };

  return (
    <section id="capabilities" className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-border/40 bg-muted/5 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        
        {/* Minimal Section Header */}
        <div className="text-left mb-10">
          <p className="text-xs font-mono uppercase tracking-widest text-primary font-bold mb-1.5">
            Platform Capabilities
          </p>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-foreground">
            Precision engineering for product teams.
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1 max-w-lg">
            Turn product intent into multi-screen mobile prototypes without tedious Figma drafting or throwaway wireframes.
          </p>
        </div>

        {/* Minimalist 4-Card Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Card 1: Multi-Screen Architecture (Span 2) */}
          <div className="md:col-span-2 p-5 sm:p-6 rounded-2xl border border-border/70 bg-card/80 backdrop-blur-md flex flex-col justify-between hover:border-border transition-colors">
            <div>
              <div className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-primary font-semibold mb-2">
                <Layers className="size-3.5" />
                <span>Multi-Screen UX Architecture</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-foreground mb-1.5">
                Connected journeys, not isolated screens.
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed max-w-lg">
                Dziner structures complete journeys simultaneously. Onboarding, discovery feed, and checkout drawers share synchronized typography, color tokens, and navigation paths.
              </p>
            </div>

            {/* Minimal Horizontal Pipeline Visual */}
            <div className="mt-6 pt-4 border-t border-border/40 flex items-center justify-between gap-2 text-center text-xs">
              <div className="p-2.5 rounded-xl bg-muted/40 border border-border/50 flex-1">
                <p className="text-[9px] font-mono text-muted-foreground">01 • ONBOARDING</p>
                <p className="text-xs font-semibold text-foreground mt-0.5">Welcome Splash</p>
              </div>
              <ArrowRight className="size-3.5 text-muted-foreground/50 shrink-0" />
              <div className="p-2.5 rounded-xl bg-card border border-primary/40 ring-1 ring-primary/20 flex-1 shadow-xs">
                <p className="text-[9px] font-mono text-primary font-bold">02 • ACTIVE FEED</p>
                <p className="text-xs font-semibold text-foreground mt-0.5">Discovery Hub</p>
              </div>
              <ArrowRight className="size-3.5 text-muted-foreground/50 shrink-0" />
              <div className="p-2.5 rounded-xl bg-muted/40 border border-border/50 flex-1">
                <p className="text-[9px] font-mono text-muted-foreground">03 • CHECKOUT</p>
                <p className="text-xs font-semibold text-foreground mt-0.5">Cart Drawer</p>
              </div>
            </div>
          </div>

          {/* Card 2: Live Design Tokens (Span 1) */}
          <div className="p-5 sm:p-6 rounded-2xl border border-border/70 bg-card/80 backdrop-blur-md flex flex-col justify-between hover:border-border transition-colors">
            <div>
              <div className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-purple-400 font-semibold mb-2">
                <Palette className="size-3.5" />
                <span>Live Design Tokens</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-foreground mb-1.5">
                Dynamic Theming
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Click a swatch to see the active CSS theme token update live:
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-border/40 space-y-3">
              <div className="flex items-center justify-between gap-1.5">
                {(["ocean", "sunset", "cyber", "emerald"] as const).map((key) => {
                  const p = palettes[key];
                  const isActive = selectedPalette === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setSelectedPalette(key)}
                      className={`size-8 rounded-full transition-transform cursor-pointer flex items-center justify-center border ${
                        isActive ? "scale-110 ring-2 ring-foreground/40 border-foreground" : "border-transparent opacity-75 hover:opacity-100"
                      }`}
                    >
                      <span className={`size-6 rounded-full ${p.bgClass}`}></span>
                    </button>
                  );
                })}
              </div>

              <div className="p-2 rounded-lg bg-muted/40 border border-border/50 text-[10px] font-mono flex items-center justify-between">
                <span className="text-muted-foreground">--primary:</span>
                <span style={{ color: palettes[selectedPalette].hex }} className="font-bold">
                  {palettes[selectedPalette].hex}
                </span>
              </div>
            </div>
          </div>

          {/* Card 3: Production Tailwind TSX (Span 1) */}
          <div className="p-5 sm:p-6 rounded-2xl border border-border/70 bg-card/80 backdrop-blur-md flex flex-col justify-between hover:border-border transition-colors">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                  <Code2 className="size-3.5" />
                  <span>Tailwind TSX</span>
                </div>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="px-2 py-0.5 rounded text-[10px] font-mono bg-muted hover:bg-muted/80 text-foreground transition-colors flex items-center gap-1 cursor-pointer"
                >
                  {copiedCode ? <Check className="size-2.5 text-emerald-400" /> : <Copy className="size-2.5" />}
                  <span>{copiedCode ? "Copied" : "Copy"}</span>
                </button>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-foreground mb-1.5">
                Zero Proprietary Bloat
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Clean, standard semantic Tailwind utility classes ready to copy directly into your repository.
              </p>
            </div>

            <div className="mt-4 p-2.5 rounded-xl bg-slate-950 text-slate-300 font-mono text-[9px] leading-relaxed border border-white/10 overflow-x-auto">
              <span className="text-purple-400">&lt;div</span> <span className="text-sky-300">className</span>=<span className="text-amber-200">&quot;w-full min-h-screen bg-[var(--background)]&quot;</span>&gt;<br />
              &nbsp;&nbsp;<span className="text-purple-400">&lt;h2&gt;</span>Activity<span className="text-purple-400">&lt;/h2&gt;</span><br />
              <span className="text-purple-400">&lt;/div&gt;</span>
            </div>
          </div>

          {/* Card 4: Retina PNG Snapshot (Span 2) */}
          <div className="md:col-span-2 p-5 sm:p-6 rounded-2xl border border-border/70 bg-card/80 backdrop-blur-md flex flex-col justify-between relative overflow-hidden hover:border-border transition-colors">
            {/* Shutter flash animation overlay */}
            {shutterFlashing && (
              <div className="absolute inset-0 bg-white z-50 animate-out fade-out duration-300 pointer-events-none"></div>
            )}

            <div>
              <div className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-rose-400 font-semibold mb-2">
                <Camera className="size-3.5" />
                <span>Camera Snapshot Engine</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-foreground mb-1.5">
                Retina Screen Capture
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed max-w-lg">
                Click the camera icon on any canvas device frame to trigger a headless browser snapshot. Download pixel-perfect 2x PNGs ready for pitch decks and App Store listings.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-border/40 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="size-8 rounded-lg bg-rose-500/10 text-rose-500 flex items-center justify-center">
                  <Camera className="size-4" />
                </div>
                <span className="text-xs font-mono text-muted-foreground">393 × 852 @ 2x PNG</span>
              </div>
              <button
                type="button"
                onClick={handleTriggerShutter}
                className="px-3 py-1.5 rounded-lg bg-foreground text-background text-xs font-semibold hover:opacity-90 active:scale-95 transition-all cursor-pointer shadow-xs"
              >
                Simulate Snapshot
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

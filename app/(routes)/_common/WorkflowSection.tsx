"use client";

import React from "react";
import { motion } from "motion/react";
import {
  MessageSquareCode,
  Cpu,
  Download,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export const WorkflowSection = () => {
  const steps = [
    {
      num: "01",
      title: "Articulate Intent",
      icon: <MessageSquareCode className="size-5 text-sky-400" />,
      tagline: "Natural Language Prompt",
      desc: "Describe your app vision. Specify aesthetics (e.g. 'Dark mode neo-brutalist sneaker store' or 'Minimalist health ring').",
    },
    {
      num: "02",
      title: "Multi-Screen Compilation",
      icon: <Cpu className="size-5 text-purple-400" />,
      tagline: "Autonomous Generation",
      desc: "Dziner AI structures a cohesive 3-4 screen journey—generating responsive layout, theme tokens, and resolving real Unsplash photography.",
    },
    {
      num: "03",
      title: "Verify & Export",
      icon: <Download className="size-5 text-emerald-400" />,
      tagline: "Production Handoff",
      desc: "Re-skin with 12+ live color themes, copy clean semantic Tailwind markup, or capture retina PNG screenshots with the camera engine.",
    },
  ];

  return (
    <section id="workflow" className="w-full py-24 px-4 sm:px-6 lg:px-8 border-t border-border/40 bg-background scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 text-left">
          <p className="text-xs font-mono uppercase tracking-wider text-primary font-semibold mb-2">
            The Process
          </p>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-foreground">
            From mental model to <br />
            <span className="text-muted-foreground font-normal">interactive prototype in seconds.</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-3 max-w-xl">
            A frictionless workflow built specifically to reduce ideation lag for engineers, indie founders, and product teams.
          </p>
        </div>

        {/* 3 Step Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="p-8 rounded-3xl border border-border/80 bg-card/70 backdrop-blur-xl shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-muted/60 border border-border/50 flex items-center justify-center">
                    {step.icon}
                  </div>
                  <span className="text-2xl font-black text-muted-foreground/30 font-mono">
                    {step.num}
                  </span>
                </div>
                <p className="text-[10px] font-mono uppercase tracking-wider text-primary font-bold mb-1">
                  {step.tagline}
                </p>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 rounded-3xl border border-border/80 bg-gradient-to-r from-primary/10 via-purple-500/5 to-sky-500/10 p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-3 tracking-tight">
            Design your next mobile prototype right now.
          </h3>
          <p className="text-sm text-muted-foreground max-w-lg mx-auto mb-6">
            Jump in directly. Type any app idea in the studio prompt bar above and watch a complete multi-screen mobile flow generate in seconds.
          </p>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-foreground text-background font-semibold text-xs sm:text-sm hover:bg-foreground/90 transition-all shadow-md cursor-pointer"
          >
            <span>Jump to Prompt Studio</span>
            <ArrowRight className="size-4" />
          </a>
        </div>

      </div>
    </section>
  );
};


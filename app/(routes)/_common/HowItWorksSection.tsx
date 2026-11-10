"use client";

import React from "react";
import { Sparkles, MessageSquareQuote, Cpu, SlidersHorizontal, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const HowItWorksSection = () => {
  const steps = [
    {
      step: "01",
      icon: <MessageSquareQuote className="size-6 text-primary" />,
      title: "Describe Your Vision",
      description:
        "Type your app concept in natural language. Mention specific styles (e.g. 'Neo-brutalism sneaker shop', 'Minimalist fintech with charts').",
    },
    {
      step: "02",
      icon: <Cpu className="size-6 text-purple-500" />,
      title: "AI Architects the Flow",
      description:
        "Dziner AI breaks your concept into 3-4 coordinated mobile screens with custom navigation, responsive Tailwind layouts, and Unsplash photos.",
    },
    {
      step: "03",
      icon: <SlidersHorizontal className="size-6 text-emerald-500" />,
      title: "Customize & Export",
      description:
        "Switch color themes instantly, edit prompts, inspect clean HTML code, and download high-resolution PNG snapshots with the camera tool.",
    },
  ];

  return (
    <section id="how-it-works" className="w-full py-20 px-4 sm:px-6 lg:px-8 border-t border-border/40 bg-muted/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
            <Sparkles className="size-3.5" />
            Simple 3-Step Process
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            How Dziner AI <span className="text-primary">Works</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Turn your ideas into tangible, beautiful mobile prototypes in three straightforward steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="relative p-6 sm:p-8 rounded-3xl border border-border/70 bg-card hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-muted/70 flex items-center justify-center">
                    {s.icon}
                  </div>
                  <span className="text-2xl font-black text-muted-foreground/30">
                    {s.step}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {s.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA banner below steps */}
        <div className="mt-16 rounded-3xl border border-primary/30 bg-gradient-to-r from-primary/10 via-primary/5 to-purple-500/10 p-8 sm:p-12 text-center max-w-4xl mx-auto relative overflow-hidden">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-3">
            Ready to design your next mobile app?
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto mb-6">
            Jump in right now. Pick a suggestion or write your own custom prompt above to experience autonomous multi-screen mobile UI creation.
          </p>
          <a href="#prompt-section">
            <Button size="lg" className="rounded-full px-8 font-semibold shadow-lg shadow-primary/20 cursor-pointer">
              <span>Start Designing Now</span>
              <ArrowRight className="size-4 ml-2" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};


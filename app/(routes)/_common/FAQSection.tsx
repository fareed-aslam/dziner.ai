"use client";

import React, { useState } from "react";
import { ChevronDown, Sparkles, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "How does Dziner generate multi-screen flows instead of single screens?",
      answer:
        "Unlike generic image generators, Dziner AI is an autonomous application architecture engine. It breaks down your prompt into user intent stages (e.g. Welcome Onboarding -> Live Dashboard -> Interactive Cart / Details -> Profile Settings), generating cohesive layouts with matching typography, consistent color tokens, and linked navigation states.",
    },
    {
      question: "Can I export the generated code directly to my React Native or Next.js app?",
      answer:
        "Yes! Every screen is compiled into standard, semantic Tailwind CSS and TSX components. You can copy the code with 1 click, customize it in your IDE, or integrate it with Expo, React Native, and Tailwind-based web apps.",
    },
    {
      question: "How does the live theme token switcher work?",
      answer:
        "All visual components in Dziner use dynamic CSS variables (`--primary`, `--background`, `--card`, `--border`). When you switch themes (Ocean, Sunset, Cyber, Emerald, etc.), the tokens update live across all connected artboards simultaneously without reloading.",
    },
    {
      question: "Do I need a credit card to start designing?",
      answer:
        "No credit card required. You can sign up with your Google, GitHub, or email account via Kinde Auth and immediately generate and explore mobile prototypes.",
    },
    {
      question: "Can I customize the camera and capture high-resolution exports?",
      answer:
        "Yes, the built-in retina screenshot engine lets you download 2x high-resolution PNGs of any artboard, perfect for pitch decks, client demos, App Store mockups, and design reviews.",
    },
  ];

  return (
    <section id="faq" className="w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-border/40 bg-background scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-mono uppercase tracking-widest text-primary font-bold mb-2">
            Frequently Asked Questions
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground">
            Everything you need to know.
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-3 max-w-lg mx-auto">
            Got questions about how Dziner works? Here are answers to common questions about code generation, tokens, and exports.
          </p>
        </div>

        {/* FAQ Accordion List (LightUGC style) */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-border/70 bg-card/60 backdrop-blur-md overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-muted/30 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-foreground">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`size-5 text-muted-foreground shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-muted-foreground leading-relaxed border-t border-border/30">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};


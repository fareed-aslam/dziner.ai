"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "motion/react";

export const SideProgressNav = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  const [activeSection, setActiveSection] = useState("hero");

  const sections = [
    { id: "hero", label: "Overview", href: "#" },
    { id: "slider", label: "Showcase", href: "#slider" },
    { id: "capabilities", label: "Capabilities", href: "#capabilities" },
    { id: "workflow", label: "Workflow", href: "#workflow" },
    { id: "faq", label: "FAQ", href: "#faq" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 220;
      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec.id === "hero") {
          if (window.scrollY < 260) {
            setActiveSection("hero");
            break;
          }
        } else {
          const el = document.getElementById(sec.id);
          if (el && el.offsetTop <= scrollPos) {
            setActiveSection(sec.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    /* Floating Side Progress Indicator (Desktop Right Side ONLY - Top Bar Removed!) */
    <div className="fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-4 pointer-events-auto select-none">
      
      {/* Vertical Rail with Animated Liquid Progress */}
      <div className="relative w-1 h-32 bg-border/40 rounded-full overflow-hidden shadow-inner">
        <motion.div
          className="w-full bg-primary rounded-full origin-top shadow-[0_0_8px_var(--primary)]"
          style={{ scaleY, height: "100%" }}
        />
      </div>

      {/* Section Navigation Nodes */}
      <div className="flex flex-col items-center gap-3">
        {sections.map((sec) => {
          const isActive = activeSection === sec.id;
          return (
            <button
              key={sec.id}
              type="button"
              onClick={() => scrollTo(sec.href)}
              className="group relative flex items-center justify-center p-1 cursor-pointer focus:outline-none"
              aria-label={`Jump to ${sec.label}`}
            >
              {/* Node Dot */}
              <span
                className={`size-2 rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-primary scale-125 ring-4 ring-primary/20 shadow-[0_0_8px_var(--primary)]"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/60 hover:scale-110"
                }`}
              />

              {/* Floating Tooltip Pill on Hover */}
              <span className="absolute right-6 px-2.5 py-1 rounded-md bg-card/95 border border-border text-[10px] font-mono font-medium text-foreground whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md backdrop-blur-md">
                {sec.label}
              </span>
            </button>
          );
        })}
      </div>

    </div>
  );
};

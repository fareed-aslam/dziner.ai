"use client";

import React from "react";
import { Sparkles, Layers, Palette, Code2, Download, ArrowRight, Smartphone, Eye } from "lucide-react";

export const StudioPreviewMockup = () => {
  return (
    <div id="showcase" className="w-full max-w-6xl mx-auto px-4 sm:px-6 my-12 scroll-mt-24">
      {/* Container Frame simulating the Dziner AI Studio Interface */}
      <div className="relative rounded-2xl md:rounded-3xl border border-border/70 bg-card/70 backdrop-blur-xl shadow-2xl overflow-hidden transition-all duration-300 hover:border-primary/40">
        
        {/* Studio Window Chrome Bar */}
        <div className="h-12 border-b border-border/60 bg-muted/30 px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
            <span className="ml-3 text-xs font-medium text-muted-foreground hidden sm:inline-block">
              Dziner AI Studio — Food Delivery Flow (3 Screens)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Live Canvas
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-xs text-muted-foreground px-2 py-1 rounded-md bg-background/50 border border-border/40">
              <Palette className="size-3 text-primary" />
              Theme: Ocean Breeze
            </span>
          </div>
        </div>

        {/* Studio Prompt Simulation Header */}
        <div className="p-4 sm:p-6 border-b border-border/40 bg-background/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3 w-full md:w-auto">
            <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
              <Sparkles className="size-4" />
            </div>
            <div className="space-y-0.5 flex-1">
              <p className="text-xs font-semibold text-primary uppercase tracking-wider">
                Autonomous Prompt Executed
              </p>
              <p className="text-sm sm:text-base font-medium text-foreground line-clamp-1">
                &ldquo;Food delivery app with onboarding splash, home feed with daily deals, and restaurant menu with add-to-cart&rdquo;
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-muted-foreground self-end md:self-auto shrink-0">
            <span className="px-2.5 py-1 rounded-lg bg-primary/10 text-primary font-medium flex items-center gap-1">
              <Layers className="size-3.5" />
              3 Connected Screens
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-muted text-foreground/80 font-medium hidden sm:inline-flex items-center gap-1">
              <Code2 className="size-3.5 text-blue-500" />
              Tailwind CSS
            </span>
          </div>
        </div>

        {/* Canvas Display with 3 Mobile Devices */}
        <div className="p-6 sm:p-10 bg-gradient-to-b from-muted/20 via-background to-muted/30 overflow-x-auto">
          <div className="flex items-center justify-center gap-6 sm:gap-8 min-w-[720px] py-4">
            
            {/* Phone 1: Welcome Onboarding */}
            <div className="w-[230px] sm:w-[250px] shrink-0 rounded-[36px] p-2 bg-foreground/90 shadow-xl border-4 border-foreground/80 transition-transform duration-300 hover:-translate-y-2">
              <div className="relative rounded-[30px] overflow-hidden bg-slate-950 text-white h-[470px] flex flex-col justify-between p-4">
                {/* Dynamic Island */}
                <div className="w-20 h-4 bg-black rounded-full mx-auto mb-2 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-900 ml-auto mr-1.5"></div>
                </div>

                {/* Hero Food Background */}
                <div className="absolute inset-0 -z-10">
                  <img
                    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80"
                    alt="Food background"
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
                </div>

                <div className="mt-4 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-semibold w-max">
                  🔥 Gourmet Delivered
                </div>

                <div className="space-y-3 z-10 mb-2">
                  <h3 className="text-xl font-bold leading-tight">
                    Craving something delicious?
                  </h3>
                  <p className="text-xs text-white/70 leading-relaxed">
                    Over 500+ top-rated local restaurants delivered hot to your doorstep in 20 mins.
                  </p>
                  <button className="w-full py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold text-xs shadow-lg shadow-orange-500/30 flex items-center justify-center gap-1">
                    Get Started <ArrowRight className="size-3" />
                  </button>
                </div>
              </div>
              <p className="text-center text-[11px] font-semibold text-muted-foreground mt-2">
                01. Onboarding Splash
              </p>
            </div>

            {/* Phone 2: Main Home Feed */}
            <div className="w-[230px] sm:w-[250px] shrink-0 rounded-[36px] p-2 bg-foreground/90 shadow-2xl border-4 border-primary ring-4 ring-primary/20 scale-105 z-10 transition-transform duration-300 hover:scale-110">
              <div className="relative rounded-[30px] overflow-hidden bg-background text-foreground h-[490px] flex flex-col justify-between p-3.5">
                {/* Dynamic Island */}
                <div className="w-20 h-4 bg-foreground rounded-full mx-auto mb-2 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-background ml-auto mr-1.5"></div>
                </div>

                {/* Top Location & Avatar */}
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="text-[10px] text-muted-foreground">Deliver to</p>
                    <p className="text-xs font-bold text-foreground">Downtown, NY 📍</p>
                  </div>
                  <img
                    src="https://i.pravatar.cc/150?u=sarah"
                    alt="avatar"
                    className="w-7 h-7 rounded-full ring-2 ring-primary"
                  />
                </div>

                {/* Search Bar */}
                <div className="h-8 rounded-xl bg-muted/50 border border-border/50 px-2.5 flex items-center gap-1.5 text-[11px] text-muted-foreground mb-2">
                  <span>🔍</span>
                  <span className="truncate">Search burgers, sushi, ramen...</span>
                </div>

                {/* Category Pills */}
                <div className="flex gap-1.5 overflow-hidden mb-2">
                  <span className="px-2 py-1 rounded-lg bg-primary text-primary-foreground text-[10px] font-bold">
                    🍔 All
                  </span>
                  <span className="px-2 py-1 rounded-lg bg-muted text-[10px] font-medium text-foreground">
                    🍕 Pizza
                  </span>
                  <span className="px-2 py-1 rounded-lg bg-muted text-[10px] font-medium text-foreground">
                    🍣 Sushi
                  </span>
                  <span className="px-2 py-1 rounded-lg bg-muted text-[10px] font-medium text-foreground">
                    🥗 Bowls
                  </span>
                </div>

                {/* Featured Card */}
                <div className="rounded-xl overflow-hidden border border-border/50 bg-card mb-2 shadow-sm">
                  <div className="h-20 relative">
                    <img
                      src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80"
                      alt="Burger"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded-md bg-red-500 text-white font-bold text-[9px]">
                      20% OFF
                    </span>
                  </div>
                  <div className="p-2 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold truncate">Smash Burger Co.</p>
                      <p className="text-[10px] text-muted-foreground">⭐ 4.9 • 15-20 min</p>
                    </div>
                    <span className="text-[10px] font-bold text-primary">$12.50</span>
                  </div>
                </div>

                {/* Bottom Navigation */}
                <div className="h-11 rounded-2xl bg-card/90 backdrop-blur-md border border-border/60 px-3 flex items-center justify-between shadow-lg">
                  <span className="text-xs text-primary font-bold">🏠</span>
                  <span className="text-xs text-muted-foreground">🧭</span>
                  <span className="text-xs text-muted-foreground">🛍️</span>
                  <span className="text-xs text-muted-foreground">👤</span>
                </div>
              </div>
              <p className="text-center text-[11px] font-bold text-primary mt-2">
                02. Discovery Dashboard (Active)
              </p>
            </div>

            {/* Phone 3: Restaurant Detail & Menu */}
            <div className="w-[230px] sm:w-[250px] shrink-0 rounded-[36px] p-2 bg-foreground/90 shadow-xl border-4 border-foreground/80 transition-transform duration-300 hover:-translate-y-2">
              <div className="relative rounded-[30px] overflow-hidden bg-background text-foreground h-[470px] flex flex-col justify-between p-3.5">
                {/* Dynamic Island */}
                <div className="w-20 h-4 bg-foreground rounded-full mx-auto mb-2 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-background ml-auto mr-1.5"></div>
                </div>

                {/* Header Photo */}
                <div className="h-28 rounded-2xl overflow-hidden relative mb-2">
                  <img
                    src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=400&q=80"
                    alt="Restaurant"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-2">
                    <div>
                      <h4 className="text-xs font-bold text-white">Artisan Trattoria</h4>
                      <p className="text-[9px] text-white/80">Italian • Woodfired Pizza</p>
                    </div>
                  </div>
                </div>

                {/* Menu Items List */}
                <div className="space-y-1.5 flex-1">
                  <div className="p-2 rounded-xl bg-card border border-border/40 flex items-center justify-between">
                    <div className="truncate mr-2">
                      <p className="text-[11px] font-bold truncate">Truffle Margherita</p>
                      <p className="text-[9px] text-muted-foreground">$16.00</p>
                    </div>
                    <button className="px-2 py-1 rounded-lg bg-primary text-primary-foreground text-[10px] font-bold">
                      + Add
                    </button>
                  </div>

                  <div className="p-2 rounded-xl bg-card border border-border/40 flex items-center justify-between">
                    <div className="truncate mr-2">
                      <p className="text-[11px] font-bold truncate">Pesto Burrata</p>
                      <p className="text-[9px] text-muted-foreground">$18.50</p>
                    </div>
                    <button className="px-2 py-1 rounded-lg bg-primary text-primary-foreground text-[10px] font-bold">
                      + Add
                    </button>
                  </div>
                </div>

                {/* Cart Action Button */}
                <div className="mt-2">
                  <button className="w-full py-2 rounded-xl bg-primary text-primary-foreground font-bold text-xs shadow-md flex items-center justify-between px-3">
                    <span>View Cart (2 items)</span>
                    <span>$34.50</span>
                  </button>
                </div>
              </div>
              <p className="text-center text-[11px] font-semibold text-muted-foreground mt-2">
                03. Menu & Checkout
              </p>
            </div>
          </div>
        </div>

        {/* Studio Feature Footer Pills */}
        <div className="p-4 sm:p-5 bg-card/90 border-t border-border/50 grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
          <div className="flex items-center justify-center gap-2 text-xs font-medium text-foreground/80">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            3-4 Connected Screens
          </div>
          <div className="flex items-center justify-center gap-2 text-xs font-medium text-foreground/80">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            100% Tailwind CSS
          </div>
          <div className="flex items-center justify-center gap-2 text-xs font-medium text-foreground/80">
            <span className="w-2 h-2 rounded-full bg-purple-500"></span>
            Real Unsplash Imagery
          </div>
          <div className="flex items-center justify-center gap-2 text-xs font-medium text-foreground/80">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            Instant PNG Screenshot Export
          </div>
        </div>
      </div>
    </div>
  );
};


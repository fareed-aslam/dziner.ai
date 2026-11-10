"use client";

import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Palette,
  Maximize2,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Flame,
  Search,
  ShoppingCart,
  Heart,
  CreditCard,
  Shield,
  Activity,
  Layers,
  Code,
} from "lucide-react";

interface ProjectFlow {
  id: string;
  category: string;
  title: string;
  promptSnippet: string;
  theme: string;
  accentColor: string;
  screens: {
    title: string;
    type: string;
    render: (accent: string) => React.ReactNode;
  }[];
}

export const CanvasShowcaseSlider = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [activeTheme, setActiveTheme] = useState<"ocean" | "sunset" | "cyber" | "emerald">("ocean");

  const themes = {
    ocean: {
      name: "Ocean Breeze",
      primary: "rgb(14, 165, 233)",
      primaryHex: "#0ea5e9",
      bgClass: "bg-sky-500",
      textClass: "text-sky-500",
      borderClass: "border-sky-500/30",
    },
    sunset: {
      name: "Sunset Ember",
      primary: "rgb(249, 115, 22)",
      primaryHex: "#f97316",
      bgClass: "bg-orange-500",
      textClass: "text-orange-500",
      borderClass: "border-orange-500/30",
    },
    cyber: {
      name: "Cyber Neon",
      primary: "rgb(168, 85, 247)",
      primaryHex: "#a855f7",
      bgClass: "bg-purple-500",
      textClass: "text-purple-500",
      borderClass: "border-purple-500/30",
    },
    emerald: {
      name: "Emerald Mint",
      primary: "rgb(16, 185, 129)",
      primaryHex: "#10b981",
      bgClass: "bg-emerald-500",
      textClass: "text-emerald-500",
      borderClass: "border-emerald-500/30",
    },
  };

  const currentThemeObj = themes[activeTheme];

  const projects: ProjectFlow[] = [
    {
      id: "food-delivery",
      category: "Food & Dining",
      title: "Artisan Kitchen Delivery",
      promptSnippet: "Gourmet food delivery app with onboarding splash, search feed with deals, and restaurant dish details.",
      theme: "Vibrant / Warm",
      accentColor: currentThemeObj.primaryHex,
      screens: [
        {
          title: "01. Onboarding Splash",
          type: "Splash",
          render: (accent) => (
            <div className="relative h-full flex flex-col justify-between p-4 bg-slate-950 text-white rounded-[26px] overflow-hidden">
              <div className="absolute inset-0 -z-10">
                <img
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=500&q=80"
                  alt="food"
                  className="w-full h-full object-cover opacity-50 scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
              </div>
              <div className="flex items-center justify-between text-[10px] text-white/70">
                <span>9:41</span>
                <span>5G 100%</span>
              </div>
              <div className="space-y-2.5 z-10">
                <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded bg-white/20 backdrop-blur-md">
                  Chef Driven
                </span>
                <h4 className="text-lg font-bold leading-tight">
                  Handcrafted meals, delivered in 25 min.
                </h4>
                <p className="text-[11px] text-white/70 leading-relaxed">
                  Experience Michelin-starred cuisine at your dining table.
                </p>
                <div
                  style={{ backgroundColor: accent }}
                  className="w-full py-2 rounded-xl text-white font-semibold text-xs text-center shadow-lg transition-colors cursor-pointer"
                >
                  Explore Menus
                </div>
              </div>
            </div>
          ),
        },
        {
          title: "02. Discovery Dashboard",
          type: "Feed",
          render: (accent) => (
            <div className="relative h-full flex flex-col justify-between p-3.5 bg-background text-foreground rounded-[26px] overflow-hidden border border-border/40">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[9px] text-muted-foreground uppercase tracking-wider">Location</p>
                    <p className="text-xs font-bold">SoHo, Manhattan</p>
                  </div>
                  <img src="https://i.pravatar.cc/150?u=chef" alt="user" className="w-6 h-6 rounded-full ring-2" style={{ borderColor: accent }} />
                </div>
                <div className="h-7 rounded-xl bg-muted/60 px-2 flex items-center gap-1.5 text-[10px] text-muted-foreground border border-border/40">
                  <Search className="size-3" />
                  <span className="truncate">Search woodfired pizza, bowls...</span>
                </div>
                <div className="flex gap-1 overflow-hidden">
                  <span style={{ backgroundColor: accent }} className="px-2 py-0.5 rounded-md text-white text-[9px] font-bold">
                    All
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-muted text-[9px] font-medium">Pizza</span>
                  <span className="px-2 py-0.5 rounded-md bg-muted text-[9px] font-medium">Bowls</span>
                  <span className="px-2 py-0.5 rounded-md bg-muted text-[9px] font-medium">Sushi</span>
                </div>
                <div className="rounded-xl overflow-hidden border border-border/40 bg-card shadow-xs">
                  <div className="h-16 relative">
                    <img
                      src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80"
                      alt="burger"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-1.5 flex items-center justify-between">
                    <div>
                      <p className="text-[11px] font-bold leading-none">Prime Truffle Burger</p>
                      <p className="text-[9px] text-muted-foreground mt-0.5">⭐ 4.9 (420+ reviews)</p>
                    </div>
                    <span style={{ color: accent }} className="text-[11px] font-extrabold">$14.50</span>
                  </div>
                </div>
              </div>
              <div className="h-10 rounded-xl bg-card border border-border/60 px-3 flex items-center justify-between shadow-xs">
                <span style={{ color: accent }} className="text-xs font-bold">🏠</span>
                <span className="text-xs text-muted-foreground">🧭</span>
                <span className="text-xs text-muted-foreground">🛍️</span>
                <span className="text-xs text-muted-foreground">👤</span>
              </div>
            </div>
          ),
        },
        {
          title: "03. Dish & Cart Drawer",
          type: "Detail",
          render: (accent) => (
            <div className="relative h-full flex flex-col justify-between p-3.5 bg-background text-foreground rounded-[26px] overflow-hidden border border-border/40">
              <div className="space-y-2">
                <div className="h-24 rounded-xl overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80"
                    alt="Salad"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-1.5 right-1.5 p-1 rounded-full bg-black/40 backdrop-blur-md text-white">
                    <Heart className="size-3 text-red-400 fill-red-400" />
                  </span>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <h5 className="text-xs font-bold">Harvest Avocado Bowl</h5>
                    <span style={{ color: accent }} className="text-xs font-extrabold">$16.00</span>
                  </div>
                  <p className="text-[9px] text-muted-foreground mt-0.5 line-clamp-2">
                    Organic quinoa, Haas avocado, wild arugula, toasted sesame dressing.
                  </p>
                </div>
                <div className="p-2 rounded-lg bg-muted/40 border border-border/40 text-[9px] space-y-1">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Calories</span>
                    <span className="font-semibold">480 kcal</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Protein</span>
                    <span className="font-semibold">24g</span>
                  </div>
                </div>
              </div>
              <div
                style={{ backgroundColor: accent }}
                className="w-full py-2 rounded-xl text-white font-bold text-xs flex items-center justify-between px-3 shadow-sm cursor-pointer"
              >
                <span>Add to Cart</span>
                <span>$16.00</span>
              </div>
            </div>
          ),
        },
      ],
    },
    {
      id: "fintech-wealth",
      category: "Fintech & Wealth",
      title: "Apex Crypto & Wealth Tracker",
      promptSnippet: "Minimalist wealth tracking app with portfolio gradient charts, multi-currency assets, and biometric card lock.",
      theme: "Dark / Technical",
      accentColor: currentThemeObj.primaryHex,
      screens: [
        {
          title: "01. Portfolio Overview",
          type: "Dashboard",
          render: (accent) => (
            <div className="relative h-full flex flex-col justify-between p-3.5 bg-slate-950 text-white rounded-[26px] overflow-hidden border border-white/10">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-white/50 tracking-wider">NET WORTH</span>
                  <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-0.5">
                    <TrendingUp className="size-3" /> +14.8%
                  </span>
                </div>
                <div>
                  <h4 className="text-xl font-extrabold tracking-tight">$84,290.50</h4>
                  <p className="text-[10px] text-white/50 mt-0.5">Updated 2m ago • All Vaults</p>
                </div>
                {/* SVG Curve Chart */}
                <div className="h-20 w-full relative">
                  <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                    <path
                      d="M0,35 Q20,30 35,18 T70,12 T100,5"
                      fill="none"
                      stroke={accent}
                      strokeWidth="2.5"
                    />
                    <path
                      d="M0,35 Q20,30 35,18 T70,12 T100,5 L100,40 L0,40 Z"
                      fill={accent}
                      fillOpacity="0.15"
                    />
                  </svg>
                </div>
                <div className="grid grid-cols-2 gap-1.5 text-[9px]">
                  <div className="p-1.5 rounded-lg bg-white/5 border border-white/10">
                    <p className="text-white/50">Invested</p>
                    <p className="font-bold text-[11px]">$62,400</p>
                  </div>
                  <div className="p-1.5 rounded-lg bg-white/5 border border-white/10">
                    <p className="text-white/50">Cash Yield</p>
                    <p className="font-bold text-[11px] text-emerald-400">5.15% APY</p>
                  </div>
                </div>
              </div>
              <div className="h-9 rounded-xl bg-white/5 border border-white/10 px-3 flex items-center justify-between text-[11px]">
                <span style={{ color: accent }} className="font-bold">Portfolio</span>
                <span className="text-white/40">Trade</span>
                <span className="text-white/40">Yield</span>
                <span className="text-white/40">Card</span>
              </div>
            </div>
          ),
        },
        {
          title: "02. Assets & Allocations",
          type: "Analytics",
          render: (accent) => (
            <div className="relative h-full flex flex-col justify-between p-3.5 bg-slate-950 text-white rounded-[26px] overflow-hidden border border-white/10">
              <div className="space-y-2">
                <h5 className="text-xs font-bold">Holdings</h5>
                <div className="space-y-1.5">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-[10px] font-bold">
                        ₿
                      </div>
                      <div>
                        <p className="text-[11px] font-bold">Bitcoin</p>
                        <p className="text-[9px] text-white/40">1.24 BTC</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-[11px] font-bold">$78,120</p>
                      <p className="text-[9px] text-emerald-400">+6.4%</p>
                    </div>
                  </div>
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-[10px] font-bold">
                        Ξ
                      </div>
                      <div>
                        <p className="text-[11px] font-bold">Ethereum</p>
                        <p className="text-[9px] text-white/40">8.50 ETH</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-[11px] font-bold">$22,450</p>
                      <p className="text-[9px] text-emerald-400">+3.1%</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{ backgroundColor: accent }}
                className="w-full py-2 rounded-xl text-white font-bold text-xs text-center shadow-md cursor-pointer"
              >
                Deposit / Transfer
              </div>
            </div>
          ),
        },
        {
          title: "03. Virtual Card Security",
          type: "Security",
          render: (accent) => (
            <div className="relative h-full flex flex-col justify-between p-3.5 bg-slate-950 text-white rounded-[26px] overflow-hidden border border-white/10">
              <div className="space-y-2">
                <div
                  style={{
                    background: `linear-gradient(135deg, ${accent} 0%, #1e1b4b 100%)`,
                  }}
                  className="h-28 rounded-xl p-3 flex flex-col justify-between text-white shadow-lg relative overflow-hidden"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-[9px] font-mono tracking-widest">APEX PLATINUM</span>
                    <Shield className="size-3.5 text-white/80" />
                  </div>
                  <div>
                    <p className="text-xs font-mono tracking-wider">•••• 4892</p>
                    <div className="flex justify-between text-[8px] text-white/70 mt-1">
                      <span>ALEX R.</span>
                      <span>12/28</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-1.5 pt-1">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/10 text-[10px]">
                    <span className="text-white/70">Freeze Card</span>
                    <span className="w-7 h-4 rounded-full bg-white/20 relative cursor-pointer">
                      <span className="w-3 h-3 rounded-full bg-white absolute top-0.5 left-0.5"></span>
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/10 text-[10px]">
                    <span className="text-white/70">Biometric Touch</span>
                    <span className="text-emerald-400 font-semibold">Enabled</span>
                  </div>
                </div>
              </div>
              <div className="text-center text-[10px] text-white/50">
                FDIC Insured up to $250,000
              </div>
            </div>
          ),
        },
      ],
    },
    {
      id: "health-sleep",
      category: "Health & Wearables",
      title: "Pulse Bio-Recovery Ring",
      promptSnippet: "Biometric health tracker with daily recovery score rings, 7-day sleep cycles, and HRV analytics.",
      theme: "Editorial / Wellness",
      accentColor: currentThemeObj.primaryHex,
      screens: [
        {
          title: "01. Daily Recovery",
          type: "Score",
          render: (accent) => (
            <div className="relative h-full flex flex-col justify-between p-3.5 bg-neutral-950 text-white rounded-[26px] overflow-hidden border border-neutral-800">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-neutral-400">TODAY'S RECOVERY</span>
                  <span className="text-[10px] text-neutral-400">9:41 AM</span>
                </div>
                <div className="relative w-28 h-28 mx-auto flex items-center justify-center my-1">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="50%" cy="50%" r="42%" stroke="#262626" strokeWidth="7" fill="transparent" />
                    <circle
                      cx="50%"
                      cy="50%"
                      r="42%"
                      stroke={accent}
                      strokeWidth="7"
                      strokeDasharray="260"
                      strokeDashoffset="30"
                      strokeLinecap="round"
                      fill="transparent"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-black">94%</span>
                    <span className="text-[8px] text-neutral-400 uppercase tracking-wider">Optimal</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-1.5 text-[9px]">
                  <div className="p-1.5 rounded-lg bg-neutral-900 border border-neutral-800">
                    <p className="text-neutral-400">Resting HR</p>
                    <p className="font-bold text-[11px]">48 bpm</p>
                  </div>
                  <div className="p-1.5 rounded-lg bg-neutral-900 border border-neutral-800">
                    <p className="text-neutral-400">Sleep Score</p>
                    <p className="font-bold text-[11px]" style={{ color: accent }}>8h 22m</p>
                  </div>
                </div>
              </div>
              <div className="h-8 rounded-xl bg-neutral-900 border border-neutral-800 px-3 flex items-center justify-between text-[10px] text-neutral-400">
                <span style={{ color: accent }} className="font-bold">Recovery</span>
                <span>Sleep</span>
                <span>Activity</span>
              </div>
            </div>
          ),
        },
        {
          title: "02. Sleep Architecture",
          type: "Sleep",
          render: (accent) => (
            <div className="relative h-full flex flex-col justify-between p-3.5 bg-neutral-950 text-white rounded-[26px] overflow-hidden border border-neutral-800">
              <div className="space-y-2">
                <h5 className="text-xs font-bold">Sleep Cycles</h5>
                <div className="space-y-1.5 text-[9px]">
                  <div>
                    <div className="flex justify-between mb-0.5">
                      <span className="text-neutral-400">Deep Sleep</span>
                      <span className="font-semibold">2h 14m (28%)</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-neutral-800 overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: "28%", backgroundColor: accent }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-0.5">
                      <span className="text-neutral-400">REM Sleep</span>
                      <span className="font-semibold">2h 05m (26%)</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-neutral-800 overflow-hidden">
                      <div className="h-full bg-purple-500 rounded-full" style={{ width: "26%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-0.5">
                      <span className="text-neutral-400">Light Sleep</span>
                      <span className="font-semibold">3h 40m (44%)</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-neutral-800 overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full" style={{ width: "44%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{ backgroundColor: accent }}
                className="w-full py-2 rounded-xl text-neutral-950 font-bold text-xs text-center cursor-pointer"
              >
                Log Journal Notes
              </div>
            </div>
          ),
        },
        {
          title: "03. Live Workout HR",
          type: "Workout",
          render: (accent) => (
            <div className="relative h-full flex flex-col justify-between p-3.5 bg-neutral-950 text-white rounded-[26px] overflow-hidden border border-neutral-800">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[10px]">
                  <span className="text-red-400 font-semibold flex items-center gap-1">
                    <Flame className="size-3 text-red-400" /> Zone 4
                  </span>
                  <span className="text-neutral-400 font-mono">00:42:18</span>
                </div>
                <div className="text-center py-2">
                  <span className="text-3xl font-black text-white">164</span>
                  <span className="text-[10px] text-neutral-400 block">BPM</span>
                </div>
                <div className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-[10px] space-y-1">
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Active Calories</span>
                    <span className="font-bold">485 kcal</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Avg Pace</span>
                    <span className="font-bold">4'32" /km</span>
                  </div>
                </div>
              </div>
              <div className="w-full py-2 rounded-xl bg-red-500/20 border border-red-500/30 text-red-400 font-bold text-xs text-center cursor-pointer">
                End Session
              </div>
            </div>
          ),
        },
      ],
    },
    {
      id: "streetwear-drop",
      category: "Commerce",
      title: "HypeDrop Streetwear Raffles",
      promptSnippet: "Neo-brutalist sneaker drops app with drop countdown timer, shoe gallery, and fast Apple Pay checkout.",
      theme: "High Contrast",
      accentColor: currentThemeObj.primaryHex,
      screens: [
        {
          title: "01. Raffle Countdown",
          type: "Drop",
          render: (accent) => (
            <div className="relative h-full flex flex-col justify-between p-3.5 bg-zinc-950 text-white rounded-[26px] overflow-hidden border-2 border-white/20">
              <div className="space-y-2">
                <div className="flex justify-between text-[9px] uppercase tracking-widest font-mono text-zinc-400">
                  <span>RAFFLE LIVE</span>
                  <span>02:14:55</span>
                </div>
                <div className="h-28 rounded-xl overflow-hidden relative border border-white/10">
                  <img
                    src="https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=400&q=80"
                    alt="sneaker"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h5 className="text-xs font-black uppercase tracking-tight">Retro High '85 OG</h5>
                  <p className="text-[10px] text-zinc-400">$210 USD</p>
                </div>
              </div>
              <div
                style={{ backgroundColor: accent }}
                className="w-full py-2 rounded-xl text-black font-black text-xs text-center uppercase tracking-wider cursor-pointer"
              >
                Enter Drawing
              </div>
            </div>
          ),
        },
        {
          title: "02. Drops Gallery",
          type: "Catalog",
          render: (accent) => (
            <div className="relative h-full flex flex-col justify-between p-3.5 bg-zinc-950 text-white rounded-[26px] overflow-hidden border-2 border-white/20">
              <div className="space-y-2">
                <h5 className="text-xs font-black uppercase">Upcoming</h5>
                <div className="space-y-1.5">
                  <div className="p-1.5 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center gap-2">
                    <img
                      src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=150&q=80"
                      alt="sneaker"
                      className="w-10 h-10 rounded-lg object-cover"
                    />
                    <div className="flex-1 truncate">
                      <p className="text-[10px] font-bold truncate">Air Zoom Alpha</p>
                      <p className="text-[8px] text-zinc-400">Drop Oct 24 • $180</p>
                    </div>
                  </div>
                  <div className="p-1.5 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center gap-2">
                    <img
                      src="https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&w=150&q=80"
                      alt="sneaker"
                      className="w-10 h-10 rounded-lg object-cover"
                    />
                    <div className="flex-1 truncate">
                      <p className="text-[10px] font-bold truncate">Dunk Low Panda</p>
                      <p className="text-[8px] text-zinc-400">Drop Oct 28 • $115</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-8 rounded-xl bg-zinc-900 border border-zinc-800 px-3 flex items-center justify-between text-[10px] text-zinc-400">
                <span style={{ color: accent }} className="font-bold">Drops</span>
                <span>Raffles</span>
                <span>Bag</span>
              </div>
            </div>
          ),
        },
        {
          title: "03. Instant Bag & Pay",
          type: "Checkout",
          render: (accent) => (
            <div className="relative h-full flex flex-col justify-between p-3.5 bg-zinc-950 text-white rounded-[26px] overflow-hidden border-2 border-white/20">
              <div className="space-y-2">
                <h5 className="text-xs font-black uppercase">Bag Summary</h5>
                <div className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1 text-[9px]">
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Selected Size</span>
                    <span className="font-bold">US 10.5</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Subtotal</span>
                    <span className="font-bold">$210.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Standard Shipping</span>
                    <span className="text-emerald-400 font-bold">FREE</span>
                  </div>
                </div>
              </div>
              <div className="w-full py-2.5 rounded-xl bg-white text-black font-black text-xs text-center flex items-center justify-center gap-1.5 cursor-pointer shadow-lg">
                <span> Pay</span>
                <span className="text-[10px] opacity-70">($210.00)</span>
              </div>
            </div>
          ),
        },
      ],
    },
  ];

  const currentProject = projects[currentProjectIndex];

  const handleNext = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="canvas-studio" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-20">
      
      {/* Studio Header & Theme Switcher Bar */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
              Interactive Canvas Studio
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground mt-1">
            Explore Multi-Screen Flows in Real Time
          </h2>
        </div>

        {/* Live Theme Changer */}
        <div className="flex items-center gap-2 bg-muted/40 p-1 rounded-xl border border-border/50 self-stretch md:self-auto justify-between md:justify-start">
          <span className="text-xs font-medium text-muted-foreground px-2 hidden sm:inline flex items-center gap-1">
            <Palette className="size-3 text-primary" /> Theme:
          </span>
          {(["ocean", "sunset", "cyber", "emerald"] as const).map((tKey) => {
            const t = themes[tKey];
            const isSelected = activeTheme === tKey;
            return (
              <button
                key={tKey}
                type="button"
                onClick={() => setActiveTheme(tKey)}
                className={`text-xs px-2.5 py-1 rounded-lg transition-all flex items-center gap-1.5 font-medium cursor-pointer ${
                  isSelected
                    ? "bg-background text-foreground shadow-xs font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${t.bgClass}`}></span>
                <span>{t.name.split(" ")[0]}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Studio Window Frame */}
      <div className="rounded-2xl sm:rounded-3xl border border-border/80 bg-card/60 backdrop-blur-xl shadow-2xl overflow-hidden transition-all duration-300">
        
        {/* Studio Window Chrome Topbar */}
        <div className="h-12 border-b border-border/60 bg-muted/20 px-4 sm:px-6 flex items-center justify-between">
          
          {/* Project selector tabs */}
          <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto scrollbar-none py-1">
            {projects.map((proj, idx) => {
              const active = idx === currentProjectIndex;
              return (
                <button
                  key={proj.id}
                  type="button"
                  onClick={() => setCurrentProjectIndex(idx)}
                  className={`text-xs px-3 py-1.5 rounded-lg whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    active
                      ? "bg-background text-foreground font-semibold shadow-xs border border-border/60"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                  }`}
                >
                  {proj.category}
                </button>
              );
            })}
          </div>

          {/* Left / Right Sliding Controls */}
          <div className="flex items-center gap-1 shrink-0 pl-2">
            <span className="text-[11px] font-mono text-muted-foreground mr-2 hidden sm:inline">
              {currentProjectIndex + 1} of {projects.length}
            </span>
            <button
              type="button"
              onClick={handlePrev}
              className="p-1.5 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer border border-border/40"
              aria-label="Previous app flow"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="p-1.5 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer border border-border/40"
              aria-label="Next app flow"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>

        {/* Prompt Directive Bar */}
        <div className="p-4 sm:p-5 border-b border-border/40 bg-muted/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-primary font-bold">
                Flow Prompt
              </span>
              <span className="text-xs font-bold text-foreground">
                {currentProject.title}
              </span>
            </div>
            <p className="text-xs text-muted-foreground line-clamp-1 italic">
              &ldquo;{currentProject.promptSnippet}&rdquo;
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-muted-foreground self-end sm:self-auto shrink-0">
            <span className="px-2 py-0.5 rounded-md bg-muted/60 text-[11px] font-mono border border-border/40 flex items-center gap-1">
              <Layers className="size-3 text-primary" />
              3 Connected Screens
            </span>
            <span className="px-2 py-0.5 rounded-md bg-muted/60 text-[11px] font-mono border border-border/40 flex items-center gap-1">
              <Code className="size-3 text-emerald-500" />
              Tailwind CSS
            </span>
          </div>
        </div>

        {/* Interactive Canvas Viewport (Sliding Device Frames) */}
        <div className="p-6 sm:p-10 bg-gradient-to-b from-background via-muted/10 to-background overflow-x-auto">
          <div className="flex items-center justify-center gap-6 sm:gap-8 min-w-[760px] py-2">
            {currentProject.screens.map((screen, idx) => (
              <div
                key={idx}
                className="w-[230px] sm:w-[250px] shrink-0 rounded-[34px] p-2 bg-foreground/90 shadow-xl border-4 border-foreground/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                {/* Dynamic island notch */}
                <div className="w-16 h-3.5 bg-black rounded-full mx-auto mb-2 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-slate-900 ml-auto mr-1"></div>
                </div>

                {/* Mobile screen container */}
                <div className="h-[430px]">
                  {screen.render(currentThemeObj.primaryHex)}
                </div>

                <p className="text-center text-[11px] font-medium text-muted-foreground mt-2">
                  {screen.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Canvas Bottom Action Bar */}
        <div className="p-4 bg-muted/20 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: currentThemeObj.primaryHex }}></span>
              Theme applied live across all 3 frames
            </span>
            <span className="hidden md:inline text-border">•</span>
            <span className="hidden md:inline">Use arrows above or click categories to slide between app prototypes</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              className="px-3 py-1.5 rounded-lg border border-border/60 hover:bg-muted text-foreground transition-colors cursor-pointer flex items-center gap-1 text-xs"
            >
              <ChevronLeft className="size-3.5" /> Previous Flow
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="px-3 py-1.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity cursor-pointer flex items-center gap-1 text-xs"
            >
              Next Flow <ChevronRight className="size-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};


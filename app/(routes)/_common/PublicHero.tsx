"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  CornerDownLeft,
  Search,
  CheckCircle2,
  TrendingUp,
  Flame,
  Shield,
  Layers,
  Palette,
  Camera,
  GitBranch,
  MousePointer,
  Hand,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Wand2,
  Heart,
  Star,
  Clock,
  ArrowUpRight,
  CreditCard,
  Activity,
  Wifi,
  Battery,
  Signal,
  Home,
  Compass,
  ShoppingBag,
  User,
  Lock,
} from "lucide-react";

// Reusable Minimal Status Bar for Hero Mockups
const HeroStatusBar = ({
  dark = false,
  time = "9:41",
}: {
  dark?: boolean;
  time?: string;
}) => (
  <div
    className={`flex items-center justify-between text-[9px] font-semibold tracking-tight px-0.5 mb-1.5 select-none ${
      dark ? "text-white/80" : "text-foreground/80"
    }`}
  >
    <span className="font-mono text-[8.5px]">{time}</span>
    <div className="flex items-center gap-1 text-current">
      <Signal className="size-2.5" />
      <Wifi className="size-2.5" />
      <Battery className="size-3" />
    </div>
  </div>
);

export const PublicHero = () => {
  const [promptText, setPromptText] = useState("");
  const [activeAppIndex, setActiveAppIndex] = useState(0);
  const [activeTheme, setActiveTheme] = useState<"ocean" | "sunset" | "cyber" | "emerald">("ocean");
  const [selectedScreenIndex, setSelectedScreenIndex] = useState<number>(1);
  const [activeTool, setActiveTool] = useState<"pointer" | "hand">("pointer");
  const [zoomLevel, setZoomLevel] = useState<number>(100);

  const themes = {
    ocean: {
      name: "Ocean",
      hex: "#0ea5e9",
      bgClass: "bg-sky-500",
      accentBorder: "border-sky-500/40",
      badgeClass: "bg-sky-500/15 text-sky-400 border-sky-500/30",
    },
    sunset: {
      name: "Sunset",
      hex: "#f97316",
      bgClass: "bg-orange-500",
      accentBorder: "border-orange-500/40",
      badgeClass: "bg-orange-500/15 text-orange-400 border-orange-500/30",
    },
    cyber: {
      name: "Cyber",
      hex: "#a855f7",
      bgClass: "bg-purple-500",
      accentBorder: "border-purple-500/40",
      badgeClass: "bg-purple-500/15 text-purple-400 border-purple-500/30",
    },
    emerald: {
      name: "Emerald",
      hex: "#10b981",
      bgClass: "bg-emerald-500",
      accentBorder: "border-emerald-500/40",
      badgeClass: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    },
  };

  const currentTheme = themes[activeTheme];

  const handleRedirectToLogin = () => {
    window.location.href = "/api/auth/login?post_login_redirect_url=/";
  };

  const appDemos = [
    {
      title: "Gourmet Food Delivery",
      prompt: "Gourmet food delivery app with onboarding splash, dish search feed, and cart checkout.",
      branch: "bistro-flow-v2",
      screens: [
        {
          tag: "Onboarding",
          title: "Welcome Splash",
          render: (accent: string) => (
            <div className="h-full p-3 flex flex-col justify-between bg-gradient-to-b from-slate-900 via-slate-950 to-black text-white relative overflow-hidden">
              <div className="absolute inset-0 -z-10 opacity-50">
                <img
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=500&q=80"
                  alt="food"
                  className="w-full h-full object-cover scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-transparent" />
              </div>
              <HeroStatusBar dark time="9:41" />
              <div className="space-y-2 z-10 mt-auto">
                <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-orange-500/20 border border-orange-500/40 backdrop-blur-md">
                  <Star className="size-2.5 text-orange-400 fill-orange-400" />
                  <span className="text-[8px] font-mono tracking-wider uppercase text-orange-300 font-bold">
                    Michelin Guide
                  </span>
                </div>
                <h4 className="text-sm font-black leading-tight text-white tracking-tight">
                  Artisan flavors, crafted with chef precision.
                </h4>
                <p className="text-[9px] text-white/75 line-clamp-2 leading-relaxed">
                  300+ seasonal tasting menus delivered warm in under 20 minutes.
                </p>
                <div
                  style={{ backgroundColor: accent }}
                  className="w-full py-1.5 rounded-xl text-white font-bold text-[11px] text-center shadow-md cursor-pointer hover:opacity-95 transition-opacity"
                >
                  Explore Menus ➔
                </div>
              </div>
            </div>
          ),
        },
        {
          tag: "Feed",
          title: "Discovery Hub",
          render: (accent: string) => (
            <div className="h-full p-3 flex flex-col justify-between bg-card text-foreground">
              <div>
                <HeroStatusBar time="9:41" />
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="text-[7px] text-muted-foreground uppercase font-mono tracking-wider">DELIVERING TO</p>
                    <p className="text-[10px] font-bold text-foreground">Tribeca, New York 📍</p>
                  </div>
                  <div className="size-5 rounded-full ring-2 flex items-center justify-center bg-muted text-[9px] font-bold" style={{ borderColor: accent }}>
                    <User className="size-3 text-muted-foreground" />
                  </div>
                </div>

                {/* Search Bar */}
                <div className="h-6 rounded-lg bg-muted/60 border border-border/60 px-2 flex items-center gap-1.5 text-[8.5px] text-muted-foreground mb-2">
                  <Search className="size-2.5" />
                  <span className="truncate">Search bowls, pasta, grill...</span>
                </div>

                {/* Featured Dish Card */}
                <div className="rounded-xl overflow-hidden border border-border/50 bg-card shadow-xs">
                  <div className="h-16 rounded-t-lg overflow-hidden relative">
                    <img
                      src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80"
                      alt="dish"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-1 right-1 px-1.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-white text-[7.5px] font-bold flex items-center gap-0.5">
                      <Star className="size-2 text-amber-400 fill-amber-400" /> 4.9
                    </span>
                  </div>
                  <div className="p-1.5 flex justify-between items-center">
                    <div>
                      <p className="text-[9.5px] font-bold text-foreground leading-tight">Artisan Harvest Bowl</p>
                      <p className="text-[7.5px] text-muted-foreground">Organic Quinoa, Avocado</p>
                    </div>
                    <span style={{ color: accent }} className="text-[10.5px] font-extrabold font-mono">$16.50</span>
                  </div>
                </div>
              </div>

              {/* Clean 4-Tab iOS Navigation with SVG Icons */}
              <div className="h-8 rounded-xl bg-muted/50 border border-border/60 px-3 flex items-center justify-between text-muted-foreground">
                <div className="flex flex-col items-center" style={{ color: accent }}>
                  <Home className="size-3.5" />
                </div>
                <div className="flex flex-col items-center hover:text-foreground transition-colors cursor-pointer">
                  <Compass className="size-3.5" />
                </div>
                <div className="flex flex-col items-center hover:text-foreground transition-colors cursor-pointer">
                  <ShoppingBag className="size-3.5" />
                </div>
                <div className="flex flex-col items-center hover:text-foreground transition-colors cursor-pointer">
                  <User className="size-3.5" />
                </div>
              </div>
            </div>
          ),
        },
        {
          tag: "Checkout",
          title: "Cart & Order",
          render: (accent: string) => (
            <div className="h-full p-3 flex flex-col justify-between bg-card text-foreground">
              <div>
                <HeroStatusBar time="9:41" />
                <div className="flex items-center justify-between mb-2">
                  <h5 className="text-[10.5px] font-bold">Order Summary</h5>
                  <span className="text-[8px] font-mono text-emerald-500 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded">1 Item</span>
                </div>

                {/* Dish Mini Row */}
                <div className="p-2 rounded-xl bg-muted/40 border border-border/50 flex items-center gap-2 mb-2">
                  <img
                    src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=200&q=80"
                    alt="burger"
                    className="w-9 h-9 rounded-lg object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-[9.5px] font-bold truncate">Prime Truffle Burger</p>
                    <p className="text-[7.5px] text-muted-foreground">Brioche • Black Truffle Aioli</p>
                  </div>
                  <span style={{ color: accent }} className="text-[10px] font-bold font-mono">$18.00</span>
                </div>

                {/* Receipt Specs */}
                <div className="p-2 rounded-xl bg-muted/30 border border-border/50 text-[8px] font-mono space-y-1">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-semibold">$18.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Estimated Delivery</span>
                    <span className="text-emerald-500 font-bold">FREE (20m)</span>
                  </div>
                </div>
              </div>

              {/* Order Button */}
              <div
                style={{ backgroundColor: accent }}
                className="w-full py-1.5 rounded-xl text-white font-bold text-[11px] text-center shadow-md cursor-pointer hover:opacity-95 transition-opacity"
              >
                Confirm Order • $18.00
              </div>
            </div>
          ),
        },
      ],
    },
    {
      title: "Crypto Wealth Tracker",
      prompt: "Crypto wealth tracker with live balance graph, bitcoin holdings, and obsidian card.",
      branch: "apex-crypto-v1",
      screens: [
        {
          tag: "Portfolio",
          title: "Apex Vault",
          render: (accent: string) => (
            <div className="h-full p-3 flex flex-col justify-between bg-zinc-950 text-white rounded-[22px] border border-white/10">
              <div>
                <HeroStatusBar dark time="9:41" />
                <div className="flex justify-between items-center text-[8.5px] text-zinc-400 font-mono mt-1">
                  <span>TOTAL WEALTH</span>
                  <span className="text-emerald-400 font-bold flex items-center gap-0.5">
                    <TrendingUp className="size-2.5" /> +18.4%
                  </span>
                </div>
                <h4 className="text-lg font-black text-white tracking-tight mt-0.5">$84,290.50</h4>
                <div className="h-12 w-full my-1">
                  <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                    <path d="M0,32 Q25,28 45,15 T75,10 T100,4" fill="none" stroke={accent} strokeWidth="2.5" />
                    <path d="M0,32 Q25,28 45,15 T75,10 T100,4 L100,40 L0,40 Z" fill={accent} fillOpacity="0.15" />
                    <circle cx="100" cy="4" r="2" fill={accent} />
                  </svg>
                </div>
                <div className="grid grid-cols-2 gap-1.5 text-[8px] font-mono">
                  <div className="p-1.5 rounded-lg bg-white/5 border border-white/10">
                    <p className="text-zinc-400">Bitcoin</p>
                    <p className="font-bold text-white text-[9.5px]">$58,210</p>
                  </div>
                  <div className="p-1.5 rounded-lg bg-white/5 border border-white/10">
                    <p className="text-zinc-400">Ethereum</p>
                    <p className="font-bold text-white text-[9.5px]">$26,080</p>
                  </div>
                </div>
              </div>

              {/* 4-Tab Bar */}
              <div className="h-7 rounded-xl bg-white/5 border border-white/10 px-3 flex items-center justify-between text-zinc-400">
                <Layers className="size-3 text-sky-400" />
                <TrendingUp className="size-3" />
                <CreditCard className="size-3" />
                <User className="size-3" />
              </div>
            </div>
          ),
        },
        {
          tag: "Yield",
          title: "Asset Breakdown",
          render: (accent: string) => (
            <div className="h-full p-3 flex flex-col justify-between bg-zinc-950 text-white rounded-[22px] border border-white/10">
              <div>
                <HeroStatusBar dark time="9:41" />
                <div className="flex justify-between items-center text-[8.5px] text-zinc-400 font-mono mb-2">
                  <span>ACTIVE YIELD VAULTS</span>
                  <span className="text-sky-400 font-bold">Auto-Compounding</span>
                </div>
                <div className="space-y-1.5">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 flex justify-between items-center">
                    <div>
                      <p className="text-[9.5px] font-bold">Staking Vault</p>
                      <p className="text-[7.5px] text-zinc-400">Locked 30d • Zero fee</p>
                    </div>
                    <span className="text-[9.5px] text-emerald-400 font-bold font-mono">5.85% APY</span>
                  </div>
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 flex justify-between items-center">
                    <div>
                      <p className="text-[9.5px] font-bold">USDC Liquidity</p>
                      <p className="text-[7.5px] text-zinc-400">Daily real-time payouts</p>
                    </div>
                    <span className="text-[9.5px] text-sky-400 font-bold font-mono">4.92% APY</span>
                  </div>
                </div>
              </div>
              <div style={{ backgroundColor: accent }} className="w-full py-1.5 rounded-xl text-white font-bold text-[11px] text-center shadow-md cursor-pointer hover:opacity-95 transition-opacity">
                Deposit Assets ➔
              </div>
            </div>
          ),
        },
        {
          tag: "Card",
          title: "Obsidian Titanium",
          render: (accent: string) => (
            <div className="h-full p-3 flex flex-col justify-between bg-zinc-950 text-white rounded-[22px] border border-white/10">
              <div>
                <HeroStatusBar dark time="9:41" />
                <div className="h-24 rounded-2xl p-2.5 my-1 flex flex-col justify-between bg-gradient-to-br from-purple-900/60 via-purple-950/80 to-black border border-purple-500/30 shadow-md relative overflow-hidden">
                  <div className="flex justify-between text-[7.5px] font-mono text-purple-200">
                    <span>APEX OBSIDIAN</span>
                    <Shield className="size-2.5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono tracking-widest text-white">•••• 9842</p>
                    <div className="flex justify-between text-[7px] text-purple-300/80 mt-0.5 font-mono">
                      <span>JORDAN M.</span>
                      <span>08/29</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center text-[8px] p-2 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-zinc-300">Biometric Card Lock</span>
                  <span className="text-emerald-400 font-bold">Active</span>
                </div>
              </div>
              <div className="w-full py-1.5 rounded-xl bg-white/10 text-white font-bold text-[11px] text-center cursor-pointer hover:bg-white/15 transition-colors">
                Freeze Card
              </div>
            </div>
          ),
        },
      ],
    },
    {
      title: "Pulse Bio-Recovery Ring",
      prompt: "Oura-style recovery ring with circular sleep index, HRV metrics, and zone 4 cardio.",
      branch: "pulse-health-v3",
      screens: [
        {
          tag: "Score",
          title: "Daily Recovery",
          render: (accent: string) => (
            <div className="h-full p-3 flex flex-col justify-between bg-neutral-950 text-white rounded-[22px] border border-neutral-800">
              <div>
                <HeroStatusBar dark time="9:41" />
                <div className="flex justify-between text-[8px] text-neutral-400 font-mono mt-0.5">
                  <span>READINESS SCORE</span>
                  <span className="text-emerald-400 font-bold">PRIME</span>
                </div>
                <div className="relative w-20 h-20 mx-auto flex items-center justify-center my-1">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="50%" cy="50%" r="42%" stroke="#262626" strokeWidth="6" fill="transparent" />
                    <circle cx="50%" cy="50%" r="42%" stroke={accent} strokeWidth="6" strokeDasharray="210" strokeDashoffset="25" strokeLinecap="round" fill="transparent" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-lg font-black">94%</span>
                    <span className="text-[6.5px] text-emerald-400 font-bold uppercase tracking-wider">Optimal</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-1.5 text-[8px] font-mono">
                  <div className="p-1.5 rounded-lg bg-neutral-900 border border-neutral-800">
                    <p className="text-neutral-400">HRV Score</p>
                    <p className="font-bold text-white text-[9.5px]">74 ms</p>
                  </div>
                  <div className="p-1.5 rounded-lg bg-neutral-900 border border-neutral-800">
                    <p className="text-neutral-400">Resting HR</p>
                    <p className="font-bold text-emerald-400 text-[9.5px]">46 bpm</p>
                  </div>
                </div>
              </div>
              <div style={{ backgroundColor: accent }} className="w-full py-1.5 rounded-xl text-neutral-950 font-bold text-[11px] text-center cursor-pointer shadow-md">
                View Details
              </div>
            </div>
          ),
        },
        {
          tag: "Sleep",
          title: "Sleep Architecture",
          render: (accent: string) => (
            <div className="h-full p-3 flex flex-col justify-between bg-neutral-950 text-white rounded-[22px] border border-neutral-800">
              <div>
                <HeroStatusBar dark time="9:41" />
                <div className="flex justify-between items-center text-[8.5px] text-neutral-400 font-mono mb-2">
                  <span>SLEEP ARCHITECTURE</span>
                  <span className="text-emerald-400 font-bold">8h 22m (92%)</span>
                </div>
                <div className="space-y-1.5 text-[7.5px] font-mono">
                  <div className="p-1.5 rounded-xl bg-neutral-900 border border-neutral-800">
                    <div className="flex justify-between mb-1 text-neutral-300"><span>Deep Restorative</span><span className="font-bold">2h 14m</span></div>
                    <div className="h-1 rounded-full bg-neutral-800 overflow-hidden"><div className="h-full bg-purple-500 rounded-full w-[28%]" /></div>
                  </div>
                  <div className="p-1.5 rounded-xl bg-neutral-900 border border-neutral-800">
                    <div className="flex justify-between mb-1 text-neutral-300"><span>REM Mental Recovery</span><span className="font-bold">2h 05m</span></div>
                    <div className="h-1 rounded-full bg-neutral-800 overflow-hidden"><div className="h-full bg-sky-500 rounded-full w-[26%]" /></div>
                  </div>
                </div>
              </div>
              <div style={{ backgroundColor: accent }} className="w-full py-1.5 rounded-xl text-neutral-950 font-bold text-[11px] text-center cursor-pointer">
                View Full Biomarkers
              </div>
            </div>
          ),
        },
        {
          tag: "Workout",
          title: "Telemetry",
          render: (accent: string) => (
            <div className="h-full p-3 flex flex-col justify-between bg-neutral-950 text-white rounded-[22px] border border-neutral-800">
              <div>
                <HeroStatusBar dark time="9:41" />
                <div className="space-y-0.5 text-center my-1">
                  <span className="text-[8px] text-red-400 font-bold flex items-center justify-center gap-1">
                    <Flame className="size-2.5 text-red-400" /> Zone 4 Cardio
                  </span>
                  <span className="text-2xl font-black text-white block">168</span>
                  <span className="text-[7.5px] text-neutral-400 font-mono tracking-wider">BEATS / MIN</span>
                </div>
                <div className="grid grid-cols-2 gap-1.5 text-[8px] font-mono">
                  <div className="p-1.5 rounded-lg bg-neutral-900 border border-neutral-800">
                    <p className="text-neutral-400">Active Burn</p>
                    <p className="font-bold text-white text-[9.5px]">492 kcal</p>
                  </div>
                  <div className="p-1.5 rounded-lg bg-neutral-900 border border-neutral-800">
                    <p className="text-neutral-400">Pace</p>
                    <p className="font-bold text-white text-[9.5px]">4'18" /km</p>
                  </div>
                </div>
              </div>
              <div className="w-full py-1.5 rounded-xl bg-red-500 text-white font-bold text-[11px] text-center cursor-pointer shadow-md hover:bg-red-600 transition-colors">
                Pause Workout
              </div>
            </div>
          ),
        },
      ],
    },
  ];

  const currentApp = appDemos[activeAppIndex];

  const handleSelectIdea = (idx: number, prompt: string) => {
    setActiveAppIndex(idx);
    setPromptText(prompt);
  };

  return (
    <section className="w-full relative overflow-hidden pt-24 sm:pt-32 pb-14">
      
      {/* Background Subtle Gradient Aura */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/15 via-purple-500/5 to-transparent blur-[120px] pointer-events-none -z-10"></div>

      {/* LightUGC-Style Flanking Floating Preview Cards (Left & Right - Desktop Only) */}
      <motion.div
        initial={{ opacity: 0, x: -50, rotate: -6 }}
        animate={{ opacity: 0.85, x: 0, rotate: -3, y: [0, -8, 0] }}
        transition={{
          opacity: { duration: 0.8, delay: 0.4 },
          x: { duration: 0.8, delay: 0.4 },
          y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
        }}
        className="hidden lg:block absolute left-2 xl:left-8 top-36 w-[185px] h-[360px] rounded-[26px] p-2 bg-card/80 border border-border/70 shadow-2xl backdrop-blur-md pointer-events-none -z-0 ring-1 ring-black/5 dark:ring-white/10"
      >
        <div className="h-full rounded-[20px] p-3 flex flex-col justify-between bg-zinc-950 text-white border border-white/10">
          <HeroStatusBar dark time="9:41" />
          <div className="flex justify-between text-[8px] text-zinc-400 font-mono">
            <span>Apex Wealth</span>
            <span className="text-emerald-400 font-bold">+18%</span>
          </div>
          <div className="space-y-1">
            <h5 className="text-sm font-black">$84,290</h5>
            <div className="h-10 w-full">
              <svg className="w-full h-full" viewBox="0 0 100 35">
                <path d="M0,28 Q30,25 50,12 T100,4" fill="none" stroke="#0ea5e9" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <div className="p-1 rounded bg-white/5 text-[8px] font-mono text-zinc-400 text-center">
            Synced 2m ago
          </div>
          <div className="w-12 h-0.5 bg-white/20 rounded-full mx-auto mt-1"></div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50, rotate: 6 }}
        animate={{ opacity: 0.85, x: 0, rotate: 3, y: [0, 8, 0] }}
        transition={{
          opacity: { duration: 0.8, delay: 0.4 },
          x: { duration: 0.8, delay: 0.4 },
          y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
        }}
        className="hidden lg:block absolute right-2 xl:right-8 top-36 w-[185px] h-[360px] rounded-[26px] p-2 bg-card/80 border border-border/70 shadow-2xl backdrop-blur-md pointer-events-none -z-0 ring-1 ring-black/5 dark:ring-white/10"
      >
        <div className="h-full rounded-[20px] p-3 flex flex-col justify-between bg-neutral-950 text-white border border-neutral-800">
          <HeroStatusBar dark time="9:41" />
          <div className="flex justify-between text-[8px] text-neutral-400 font-mono">
            <span>Pulse Ring</span>
            <span className="text-emerald-400 font-bold">Optimal</span>
          </div>
          <div className="text-center py-1">
            <span className="text-2xl font-black text-white">94%</span>
            <span className="text-[7px] text-emerald-400 block font-mono">DAILY RECOVERY</span>
          </div>
          <div className="p-1 rounded bg-neutral-900 text-[8px] font-mono text-neutral-400 text-center">
            74 ms HRV
          </div>
          <div className="w-12 h-0.5 bg-white/20 rounded-full mx-auto mt-1"></div>
        </div>
      </motion.div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center relative z-10">
        
        {/* Animated Headline with LightUGC Signature Animated Circle Marker */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-foreground leading-[1.08] max-w-4xl"
        >
          The AI mobile UI engine for{" "}
          <span className="relative inline-block whitespace-nowrap">
            <span className="relative z-10 text-primary">builders</span>
            {/* Animated SVG marker loop (LightUGC signature) */}
            <svg
              aria-hidden="true"
              viewBox="0 0 200 60"
              preserveAspectRatio="none"
              className="pointer-events-none absolute left-[-0.35em] top-[-0.1em] h-[1.15em] w-[calc(100%+1.1em)] -rotate-2 overflow-visible text-primary/85"
            >
              <title>marker</title>
              <motion.path
                d="M99 5 C151 3 191 14 192 30 C193 46 150 56 99 55 C47 54 8 44 7 29 C6 14 48 5 99 5 C118 5 133 7 146 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.6"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.3, delay: 0.35, ease: "easeInOut" }}
              />
            </svg>
          </span>
        </motion.h1>

        {/* Animated Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="text-sm sm:text-base text-muted-foreground max-w-2xl mt-4 mb-8 leading-relaxed font-normal"
        >
          From a single sentence to a complete multi-screen mobile experience on an infinite canvas. Authentic UX flows, cohesive Tailwind CSS, and switchable design tokens.
        </motion.p>

        {/* Base44-Inspired Interactive Prompt Command Box */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
          className="w-full max-w-2xl relative text-left"
        >
          {/* Subtle Ambient Border Glow */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 via-purple-500/15 to-sky-400/20 rounded-2xl blur-md opacity-40 hover:opacity-60 transition duration-300"></div>

          <div className="relative rounded-2xl bg-card/95 backdrop-blur-xl border border-border/80 shadow-[0_12px_36px_-12px_rgba(0,0,0,0.15)] p-3.5 sm:p-4">
            <textarea
              value={promptText}
              onChange={(e) => setPromptText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleRedirectToLogin();
                }
              }}
              placeholder="Describe the mobile app you want to build (e.g. Minimalist crypto wealth tracker with obsidian card)..."
              className="w-full bg-transparent resize-none outline-none text-foreground placeholder:text-muted-foreground/60 text-xs sm:text-sm min-h-[64px] leading-relaxed"
            />

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 pt-2.5 border-t border-border/40">
              <span className="text-[11px] text-muted-foreground flex items-center gap-1.5 font-medium">
                <Sparkles className="size-3 text-primary" />
                <span>Generates 3-4 connected screens per project</span>
              </span>

              <button
                type="button"
                onClick={handleRedirectToLogin}
                className="w-full sm:w-auto h-8 px-4 rounded-full font-semibold text-xs bg-primary hover:bg-primary/90 text-primary-foreground shadow-xs transition-all cursor-pointer flex items-center justify-center gap-1.5 group active:scale-[0.98]"
              >
                <span>Sign in & Design</span>
                <CornerDownLeft className="size-3.5 opacity-80 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Quick Idea Starters (Clicking these syncs both textarea & the live stage below!) */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 mt-3 text-xs text-muted-foreground">
            <span className="text-[11px] font-semibold text-foreground/70">Inspirations:</span>
            {appDemos.map((item, idx) => {
              const isSelected = activeAppIndex === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSelectIdea(idx, item.prompt)}
                  className={`px-2.5 py-0.5 rounded-full transition-all cursor-pointer text-[11px] font-medium ${
                    isSelected
                      ? "bg-primary text-primary-foreground font-semibold shadow-xs"
                      : "bg-card/80 hover:bg-muted text-foreground/80 hover:text-foreground border border-border/50"
                  }`}
                >
                  {item.title}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* ============================================================== */}
        {/* Dessn & Figma-Inspired Professional Interactive Canvas Stage   */}
        {/* ============================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
          className="w-full max-w-5xl mt-10 sm:mt-14"
        >
          <div className="rounded-2xl sm:rounded-3xl border border-border/80 bg-card/90 backdrop-blur-2xl shadow-2xl overflow-hidden text-left relative ring-1 ring-black/5 dark:ring-white/10">
            
            {/* Studio Window Chrome Topbar (Figma / Dessn style) */}
            <div className="h-11 border-b border-border/70 bg-muted/40 px-3 sm:px-5 flex items-center justify-between select-none">
              
              {/* Left: Window Controls + Git Branch Breadcrumb */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="size-2.5 rounded-full bg-red-500/80"></span>
                  <span className="size-2.5 rounded-full bg-amber-500/80"></span>
                  <span className="size-2.5 rounded-full bg-emerald-500/80"></span>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-mono text-muted-foreground pl-1 border-l border-border/60">
                  <GitBranch className="size-3 text-primary" />
                  <span className="text-foreground font-semibold">dziner-canvas</span>
                  <span className="text-muted-foreground">/</span>
                  <span className="text-primary font-mono">{currentApp.branch}</span>
                </div>
              </div>

              {/* Center: Canvas Workspace Controls (Pointer / Hand / Zoom) */}
              <div className="hidden md:flex items-center gap-1 px-2 py-1 rounded-lg bg-background/80 border border-border/60 text-xs">
                <button
                  type="button"
                  onClick={() => setActiveTool("pointer")}
                  className={`p-1 rounded transition-colors cursor-pointer ${
                    activeTool === "pointer" ? "bg-muted text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                  title="Selection Tool (V)"
                >
                  <MousePointer className="size-3" />
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTool("hand")}
                  className={`p-1 rounded transition-colors cursor-pointer ${
                    activeTool === "hand" ? "bg-muted text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                  title="Hand / Pan Tool (H)"
                >
                  <Hand className="size-3" />
                </button>
                <span className="w-px h-3 bg-border/60 mx-1"></span>
                <button
                  type="button"
                  onClick={() => setZoomLevel((z) => Math.max(z - 10, 70))}
                  className="p-1 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  title="Zoom Out"
                >
                  <ZoomOut className="size-3" />
                </button>
                <span className="text-[10px] font-mono font-semibold px-1 text-foreground/80">{zoomLevel}%</span>
                <button
                  type="button"
                  onClick={() => setZoomLevel((z) => Math.min(z + 10, 130))}
                  className="p-1 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  title="Zoom In"
                >
                  <ZoomIn className="size-3" />
                </button>
              </div>

              {/* Right: Live Theme Switcher + Device Viewport Spec */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <span className="text-[9px] font-mono text-muted-foreground hidden sm:inline">Theme:</span>
                  {(Object.keys(themes) as (keyof typeof themes)[]).map((key) => {
                    const t = themes[key];
                    const isActive = activeTheme === key;
                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setActiveTheme(key)}
                        className={`px-2 py-0.5 rounded text-[9px] font-mono flex items-center gap-1 transition-all cursor-pointer ${
                          isActive
                            ? "bg-foreground text-background font-bold shadow-xs scale-105"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted"
                        }`}
                      >
                        <span className={`size-1.5 rounded-full ${t.bgClass}`}></span>
                        <span>{t.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Canvas Surface with Blueprint Dotted Grid Texture */}
            <div className="p-6 sm:p-10 relative overflow-x-auto bg-[radial-gradient(#d1d5db_1px,transparent_1px)] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:20px_20px] bg-muted/10">
              
              {/* Flow Wires SVG with animated dash marching effect */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none -z-0">
                <defs>
                  <linearGradient id="wireGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor={currentTheme.hex} stopOpacity="0.8" />
                    <stop offset="100%" stopColor={currentTheme.hex} stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                <path
                  d="M275,210 C340,210 340,210 405,210"
                  stroke="url(#wireGradient)"
                  strokeWidth="2"
                  strokeDasharray="5 5"
                  className="animate-pulse"
                  fill="none"
                />
                <circle cx="340" cy="210" r="3" fill={currentTheme.hex} />
                <path
                  d="M575,210 C640,210 640,210 705,210"
                  stroke="url(#wireGradient)"
                  strokeWidth="2"
                  strokeDasharray="5 5"
                  className="animate-pulse"
                  fill="none"
                />
                <circle cx="640" cy="210" r="3" fill={currentTheme.hex} />
              </svg>

              <div
                style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: "center top" }}
                className="flex items-start justify-center gap-6 min-w-[760px] py-2 relative transition-transform duration-200"
              >
                {currentApp.screens.map((screen, sIdx) => {
                  const isSelected = selectedScreenIndex === sIdx;
                  return (
                    <motion.div
                      key={`${activeAppIndex}-${sIdx}`}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.35, delay: sIdx * 0.1 }}
                      onClick={() => setSelectedScreenIndex(sIdx)}
                      className={`w-[225px] shrink-0 rounded-[32px] p-2 transition-all duration-300 relative z-10 cursor-pointer ${
                        isSelected
                          ? "bg-card shadow-2xl ring-2 ring-primary ring-offset-2 ring-offset-background"
                          : "bg-card/90 shadow-lg border border-border/80 hover:-translate-y-1 hover:shadow-xl opacity-90 hover:opacity-100"
                      }`}
                    >
                      {/* Floating Artboard Header with Figma/Dessn coordinates */}
                      <div className="flex items-center justify-between text-[8px] font-mono text-muted-foreground px-2 py-1 mb-1.5 border-b border-border/50">
                        <span className="font-bold text-foreground">0{sIdx + 1} • {screen.title}</span>
                        <span style={{ color: currentTheme.hex }} className="font-bold uppercase tracking-wider">
                          ● {screen.tag}
                        </span>
                      </div>

                      {/* iPhone Titanium Dynamic Island */}
                      <div className="w-14 h-3 bg-black rounded-full mx-auto my-1 flex items-center justify-between px-2 pointer-events-none">
                        <div className="size-1 rounded-full bg-slate-800"></div>
                        <div className="size-1 rounded-full bg-blue-950/70"></div>
                      </div>

                      {/* Viewport Screen Content */}
                      <div className="h-[310px] rounded-[22px] overflow-hidden shadow-inner relative">
                        {screen.render(currentTheme.hex)}
                      </div>

                      {/* iPhone Home Swipe Bar */}
                      <div className="w-16 h-1 bg-foreground/20 rounded-full mx-auto mt-2 pointer-events-none"></div>

                      {/* Active Artboard Selection Pill */}
                      {isSelected && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-primary text-primary-foreground text-[8px] font-mono font-bold shadow-md">
                          Active Artboard
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>

            </div>

            {/* Stage Bottom Floating Mini-Toolbar */}
            <div className="px-4 py-2.5 bg-muted/30 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground select-none">
              <div className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                <span className="text-[11px] font-mono">
                  State: <strong className="text-foreground">{currentApp.title}</strong> • 3 Screens Synchronized
                </span>
              </div>

              <div className="flex items-center gap-3 text-[11px] font-mono">
                <span className="hidden sm:inline text-muted-foreground">Viewport: 393 × 852 (iPhone 16 Pro)</span>
                <span className="text-border">•</span>
                <span className="text-primary font-semibold">100% Native Tailwind TSX</span>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

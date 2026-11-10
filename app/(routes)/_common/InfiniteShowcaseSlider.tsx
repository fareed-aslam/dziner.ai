"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import {
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Flame,
  Search,
  Shield,
  Layers,
  Sparkles,
  Plane,
  Coffee,
  CheckCircle2,
  Code2,
  Pause,
  Play,
  Heart,
  Star,
  Clock,
  ArrowUpRight,
  Lock,
  Compass,
  ShoppingBag,
  User,
  Activity,
  CreditCard,
  Wifi,
  Battery,
  Signal,
} from "lucide-react";

interface ScreenArtboard {
  id: string;
  artboardNumber: string;
  category: string;
  appTitle: string;
  screenType: string;
  accent: string;
  render: () => React.ReactNode;
}

// Consistent Native iOS Status Bar with Dynamic Island Pill
const ScreenStatusBar = ({
  dark = true,
  time = "9:41",
}: {
  dark?: boolean;
  time?: string;
}) => (
  <div
    className={`flex items-center justify-between text-[10px] font-semibold tracking-tight px-0.5 mb-2 select-none ${
      dark ? "text-white/80" : "text-zinc-800"
    }`}
  >
    <span className="font-mono text-[9px]">{time}</span>
    {/* Dynamic Island pill */}
    <div className="w-16 h-3.5 bg-black rounded-full flex items-center justify-between px-2 shadow-xs border border-white/10">
      <span className="size-1 rounded-full bg-slate-700"></span>
      <span className="size-1 rounded-full bg-blue-900/60"></span>
    </div>
    <div className="flex items-center gap-1.5 text-current">
      <Signal className="size-2.5" />
      <Wifi className="size-2.5" />
      <Battery className="size-3" />
    </div>
  </div>
);

// Consistent Native iOS Home Swipe Indicator
const ScreenHomeIndicator = ({ dark = true }: { dark?: boolean }) => (
  <div className="pt-2 flex justify-center">
    <div
      className={`w-20 h-1 rounded-full ${
        dark ? "bg-white/20" : "bg-black/20"
      }`}
    />
  </div>
);

export const InfiniteShowcaseSlider = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPausedManually, setIsPausedManually] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const lastTimeRef = useRef(performance.now());
  const isDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollStartRef = useRef(0);

  const screens: ScreenArtboard[] = [
    {
      id: "food-bistro",
      artboardNumber: "01",
      category: "Food & Dining",
      appTitle: "Bistro Gourmet",
      screenType: "Splash Onboarding",
      accent: "#f97316",
      render: () => (
        <div className="relative h-full flex flex-col justify-between p-3.5 bg-slate-950 text-white rounded-[22px] overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80"
              alt="bistro"
              className="w-full h-full object-cover opacity-50 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/20" />
          </div>

          <ScreenStatusBar dark time="9:41" />

          <div className="space-y-2.5 z-10 mt-auto">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-orange-500/20 border border-orange-500/40 backdrop-blur-md">
              <Star className="size-3 text-orange-400 fill-orange-400" />
              <span className="text-[9px] font-mono tracking-wider uppercase text-orange-300 font-bold">
                Michelin Guide 2026
              </span>
            </div>

            <div className="space-y-1">
              <h4 className="text-xl font-black leading-tight text-white tracking-tight">
                Gastronomy crafted with precision.
              </h4>
              <p className="text-[11px] text-white/70 leading-relaxed">
                300+ chef-curated tasting menus delivered hot to your door in 20m.
              </p>
            </div>

            <div className="space-y-1.5 pt-1">
              <div className="p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-between text-[10px]">
                <span className="text-white/90 font-medium">Truffle Tagliolini</span>
                <span className="font-mono text-orange-400 font-bold">$28 • 18m</span>
              </div>
              <div className="p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-between text-[10px]">
                <span className="text-white/90 font-medium">A5 Wagyu Striploin</span>
                <span className="font-mono text-orange-400 font-bold">$44 • 22m</span>
              </div>
            </div>

            <div className="w-full py-2.5 rounded-xl bg-orange-500 text-white font-bold text-xs text-center shadow-lg shadow-orange-500/30 cursor-pointer hover:bg-orange-600 transition-colors">
              Explore Menus ➔
            </div>

            <ScreenHomeIndicator dark />
          </div>
        </div>
      ),
    },
    {
      id: "crypto-vault",
      artboardNumber: "02",
      category: "Fintech & Web3",
      appTitle: "Apex Wealth",
      screenType: "Portfolio Vault",
      accent: "#0ea5e9",
      render: () => (
        <div className="relative h-full flex flex-col justify-between p-3.5 bg-zinc-950 text-white rounded-[22px] overflow-hidden border border-white/10">
          <div>
            <ScreenStatusBar dark time="9:41" />

            {/* Header & Balance */}
            <div className="mt-2 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-wider">TOTAL NET WORTH</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-bold text-[9px] flex items-center gap-1">
                  <TrendingUp className="size-2.5" /> +18.4%
                </span>
              </div>
              <h4 className="text-2xl font-black tracking-tight text-white">$84,290.50</h4>
              <p className="text-[9px] text-zinc-500 font-mono">Synced 2s ago • Multi-Chain Vault</p>
            </div>

            {/* SVG Balance Wave */}
            <div className="h-20 w-full relative my-2">
              <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="cryptoGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <path d="M0,32 Q25,28 45,15 T75,10 T100,4" fill="none" stroke="#0ea5e9" strokeWidth="2.5" />
                <path d="M0,32 Q25,28 45,15 T75,10 T100,4 L100,40 L0,40 Z" fill="url(#cryptoGrad)" />
                <circle cx="100" cy="4" r="2.5" fill="#0ea5e9" />
                <circle cx="100" cy="4" r="1.5" fill="#ffffff" />
              </svg>
            </div>

            {/* Asset Allocations */}
            <div className="space-y-1.5">
              <div className="p-2 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="size-6 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center font-bold text-[10px]">
                    ₿
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-white">Bitcoin</p>
                    <p className="text-[8px] text-zinc-400 font-mono">0.84 BTC</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[11px] font-bold text-white font-mono">$58,210</p>
                  <p className="text-[8px] text-emerald-400 font-mono">+2.4%</p>
                </div>
              </div>

              <div className="p-2 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="size-6 rounded-full bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center font-bold text-[10px]">
                    Ξ
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-white">Ethereum</p>
                    <p className="text-[8px] text-zinc-400 font-mono">7.25 ETH</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[11px] font-bold text-white font-mono">$26,080</p>
                  <p className="text-[8px] text-emerald-400 font-mono">+5.1%</p>
                </div>
              </div>
            </div>
          </div>

          {/* 4-Tab iOS Bottom Bar */}
          <div>
            <div className="h-10 rounded-xl bg-white/5 border border-white/10 px-4 flex items-center justify-between text-zinc-400">
              <div className="flex flex-col items-center gap-0.5 text-sky-400">
                <Layers className="size-3.5" />
                <span className="text-[7px] font-bold">Vault</span>
              </div>
              <div className="flex flex-col items-center gap-0.5 hover:text-white transition-colors cursor-pointer">
                <TrendingUp className="size-3.5" />
                <span className="text-[7px]">Markets</span>
              </div>
              <div className="flex flex-col items-center gap-0.5 hover:text-white transition-colors cursor-pointer">
                <CreditCard className="size-3.5" />
                <span className="text-[7px]">Cards</span>
              </div>
              <div className="flex flex-col items-center gap-0.5 hover:text-white transition-colors cursor-pointer">
                <User className="size-3.5" />
                <span className="text-[7px]">Profile</span>
              </div>
            </div>
            <ScreenHomeIndicator dark />
          </div>
        </div>
      ),
    },
    {
      id: "health-pulse",
      artboardNumber: "03",
      category: "Health & Bio-Tech",
      appTitle: "Pulse Ring",
      screenType: "Daily Bio-Recovery",
      accent: "#10b981",
      render: () => (
        <div className="relative h-full flex flex-col justify-between p-3.5 bg-neutral-950 text-white rounded-[22px] overflow-hidden border border-neutral-800">
          <div>
            <ScreenStatusBar dark time="9:41" />

            <div className="mt-1 flex items-center justify-between">
              <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-wider">BIO-RECOVERY INDEX</span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[8px] font-mono font-bold">
                PRIME
              </span>
            </div>

            {/* SVG Ring Gauge */}
            <div className="relative w-28 h-28 mx-auto flex items-center justify-center my-2">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="50%" cy="50%" r="42%" stroke="#262626" strokeWidth="7" fill="transparent" />
                <circle
                  cx="50%"
                  cy="50%"
                  r="42%"
                  stroke="#10b981"
                  strokeWidth="7"
                  strokeDasharray="260"
                  strokeDashoffset="26"
                  strokeLinecap="round"
                  fill="transparent"
                  className="filter drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-black tracking-tight">94%</span>
                <span className="text-[8px] text-emerald-400 font-mono font-bold uppercase tracking-wider">Peak Ready</span>
              </div>
            </div>

            {/* Biomarker Stats Grid */}
            <div className="grid grid-cols-2 gap-2 text-[9px] font-mono">
              <div className="p-2 rounded-xl bg-neutral-900 border border-neutral-800">
                <div className="flex items-center justify-between text-neutral-400 mb-0.5">
                  <span>HRV Score</span>
                  <Activity className="size-2.5 text-emerald-400" />
                </div>
                <p className="font-bold text-xs text-white">74 ms</p>
                <span className="text-[8px] text-emerald-400 font-medium">+8ms vs avg</span>
              </div>
              <div className="p-2 rounded-xl bg-neutral-900 border border-neutral-800">
                <div className="flex items-center justify-between text-neutral-400 mb-0.5">
                  <span>Resting HR</span>
                  <Heart className="size-2.5 text-rose-400" />
                </div>
                <p className="font-bold text-xs text-emerald-400">46 bpm</p>
                <span className="text-[8px] text-neutral-400 font-medium">Optimal state</span>
              </div>
            </div>

            {/* Sleep Bar */}
            <div className="mt-2 p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-[9px]">
              <div className="flex justify-between items-center mb-1">
                <span className="text-neutral-400 font-mono">Sleep Architecture</span>
                <span className="font-mono text-emerald-400 font-bold">8h 24m (92%)</span>
              </div>
              <div className="h-1.5 rounded-full bg-neutral-800 overflow-hidden flex">
                <div className="h-full bg-purple-500 w-[28%]" />
                <div className="h-full bg-sky-500 w-[26%]" />
                <div className="h-full bg-emerald-500 w-[46%]" />
              </div>
            </div>
          </div>

          <div>
            <div className="w-full py-2 rounded-xl bg-emerald-500 text-neutral-950 font-bold text-xs text-center shadow-lg shadow-emerald-500/20 cursor-pointer hover:bg-emerald-400 transition-colors">
              View Health Trends
            </div>
            <ScreenHomeIndicator dark />
          </div>
        </div>
      ),
    },
    {
      id: "sneaker-drop",
      artboardNumber: "04",
      category: "Commerce",
      appTitle: "HypeDrop",
      screenType: "Raffle Countdown",
      accent: "#e11d48",
      render: () => (
        <div className="relative h-full flex flex-col justify-between p-3.5 bg-zinc-950 text-white rounded-[22px] overflow-hidden border border-white/20">
          <div>
            <ScreenStatusBar dark time="9:41" />

            {/* Live Badge & Countdown */}
            <div className="mt-1 flex justify-between items-center text-[9px] font-mono uppercase tracking-widest text-zinc-400">
              <span className="px-2 py-0.5 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-400 font-bold flex items-center gap-1">
                <span className="size-1.5 rounded-full bg-rose-500 animate-ping" />
                LIVE RAFFLE
              </span>
              <span className="font-mono font-bold text-white tracking-wider">02:14:55</span>
            </div>

            {/* Sneaker Visual Container */}
            <div className="h-28 rounded-2xl overflow-hidden relative my-2 border border-white/10 bg-gradient-to-b from-zinc-900 to-zinc-950 flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=400&q=80"
                alt="sneaker"
                className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-300"
              />
              <span className="absolute bottom-1.5 right-1.5 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md text-[8px] font-mono text-white/90">
                500 PAIRS WORLDWIDE
              </span>
            </div>

            {/* Sneaker Spec */}
            <div className="space-y-1">
              <h5 className="text-sm font-black uppercase tracking-tight text-white leading-tight">
                Air Jordan 1 Retro High '85
              </h5>
              <div className="flex items-center justify-between text-[10px]">
                <span className="text-zinc-400 font-mono">Chicago OG Colorway</span>
                <span className="text-rose-400 font-bold font-mono">$210 USD</span>
              </div>
            </div>

            {/* Size Selector */}
            <div className="mt-2 flex items-center gap-1.5 text-[9px] font-mono">
              <span className="px-2 py-1 rounded-lg bg-white/5 border border-white/10 text-zinc-400">US 9.5</span>
              <span className="px-2 py-1 rounded-lg bg-rose-500/20 border border-rose-500/60 text-white font-bold">US 10</span>
              <span className="px-2 py-1 rounded-lg bg-white/5 border border-white/10 text-zinc-400">US 10.5</span>
              <span className="px-2 py-1 rounded-lg bg-white/5 border border-white/10 text-zinc-400">US 11</span>
            </div>
          </div>

          <div>
            <div className="w-full py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-black text-xs text-center uppercase tracking-wider shadow-lg shadow-rose-600/30 cursor-pointer transition-colors">
              Enter Drawing Now
            </div>
            <ScreenHomeIndicator dark />
          </div>
        </div>
      ),
    },
    {
      id: "travel-voyage",
      artboardNumber: "05",
      category: "Travel & Hospitality",
      appTitle: "Voyage",
      screenType: "Luxury Retreats",
      accent: "#06b6d4",
      render: () => (
        <div className="relative h-full flex flex-col justify-between p-3.5 bg-slate-950 text-white rounded-[22px] overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
              alt="beach"
              className="w-full h-full object-cover opacity-60 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-slate-950/20" />
          </div>

          <ScreenStatusBar dark time="9:41" />

          <div className="space-y-2.5 z-10 mt-auto">
            <div className="flex items-center justify-between text-[10px] text-white/80 font-mono">
              <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 font-bold text-[8px] uppercase tracking-wider">
                Amalfi Coast, Italy
              </span>
              <span className="flex items-center gap-1 text-amber-300 font-bold">
                <Star className="size-3 fill-amber-300" /> 4.98
              </span>
            </div>

            <div className="space-y-1">
              <h4 className="text-base font-bold leading-tight text-white">Cliffside Villa Belvedere</h4>
              <p className="text-[10px] text-white/70">Private infinity edge pool with panoramic Tyrrhenian views.</p>
            </div>

            {/* Amenities Chips */}
            <div className="flex items-center gap-1.5 text-[8px] text-white/80 font-mono">
              <span className="px-2 py-0.5 rounded-md bg-white/10 backdrop-blur-md">Infinity Pool</span>
              <span className="px-2 py-0.5 rounded-md bg-white/10 backdrop-blur-md">Private Chef</span>
              <span className="px-2 py-0.5 rounded-md bg-white/10 backdrop-blur-md">Sea View</span>
            </div>

            {/* Booking Drawer Action */}
            <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-between">
              <div>
                <span className="text-xs font-black text-white font-mono">$480</span>
                <span className="text-[9px] text-white/70"> / night</span>
              </div>
              <div className="px-3.5 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs cursor-pointer transition-colors shadow-md">
                Reserve ➔
              </div>
            </div>

            <ScreenHomeIndicator dark />
          </div>
        </div>
      ),
    },
    {
      id: "fintech-titanium",
      artboardNumber: "06",
      category: "Banking",
      appTitle: "Nova Bank",
      screenType: "Obsidian Titanium Card",
      accent: "#a855f7",
      render: () => (
        <div className="relative h-full flex flex-col justify-between p-3.5 bg-zinc-950 text-white rounded-[22px] overflow-hidden border border-white/10">
          <div>
            <ScreenStatusBar dark time="9:41" />

            {/* Header */}
            <div className="mt-1 flex justify-between items-center text-[10px] text-zinc-400">
              <span className="font-mono text-[9px] uppercase tracking-wider">TITANIUM CARD</span>
              <span className="flex items-center gap-1 text-purple-400 font-semibold text-[9px]">
                <Shield className="size-3" /> Protected
              </span>
            </div>

            {/* Obsidian Titanium Physical Card */}
            <div className="h-28 rounded-2xl p-3 my-2 flex flex-col justify-between bg-gradient-to-br from-purple-900/60 via-purple-950/80 to-black border border-purple-500/30 shadow-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-400/10 via-transparent to-transparent pointer-events-none" />
              <div className="flex justify-between items-center text-[8px] font-mono tracking-widest text-purple-200">
                <span>NOVA OBSIDIAN</span>
                <span className="size-4 rounded-full bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-[7px] text-amber-300 font-mono">
                  ▦
                </span>
              </div>
              <div>
                <p className="text-xs font-mono tracking-widest text-white/90">•••• 9842</p>
                <div className="flex justify-between text-[8px] text-purple-300/80 mt-1 font-mono">
                  <span>JORDAN M.</span>
                  <span>08/29</span>
                </div>
              </div>
            </div>

            {/* Quick Security Controls */}
            <div className="space-y-1.5 text-[9px] font-mono">
              <div className="flex items-center justify-between p-2 rounded-xl bg-white/5 border border-white/10">
                <span className="text-zinc-300">Biometric Security</span>
                <span className="text-emerald-400 font-semibold">Active</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-xl bg-white/5 border border-white/10">
                <span className="text-zinc-300">Daily Spending Limit</span>
                <span className="text-white font-bold">$10,000</span>
              </div>
            </div>
          </div>

          <div>
            <div className="w-full py-2 rounded-xl bg-purple-600/20 border border-purple-500/40 text-purple-300 font-bold text-xs text-center cursor-pointer hover:bg-purple-600/30 transition-colors">
              Lock & Freeze Card
            </div>
            <ScreenHomeIndicator dark />
          </div>
        </div>
      ),
    },
    {
      id: "cardio-workout",
      artboardNumber: "07",
      category: "Fitness Telemetry",
      appTitle: "Zenith Workout",
      screenType: "High-Intensity Cardio",
      accent: "#ef4444",
      render: () => (
        <div className="relative h-full flex flex-col justify-between p-3.5 bg-neutral-950 text-white rounded-[22px] overflow-hidden border border-neutral-800">
          <div>
            <ScreenStatusBar dark time="9:41" />

            {/* Header */}
            <div className="mt-1 flex justify-between items-center text-[9px] text-neutral-400 font-mono">
              <span className="text-red-400 font-bold flex items-center gap-1">
                <Flame className="size-3 text-red-400" /> Zone 4 Cardio
              </span>
              <span className="tracking-wider">00:38:42</span>
            </div>

            {/* Heart Rate Centerpiece */}
            <div className="text-center py-2">
              <span className="text-3xl font-black text-white tracking-tight">168</span>
              <span className="text-[9px] text-neutral-400 block tracking-widest font-mono">BEATS / MIN</span>

              {/* Animated ECG Pulse Line */}
              <div className="h-6 w-32 mx-auto mt-1">
                <svg className="w-full h-full" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path
                    d="M0,10 L30,10 L35,2 L40,18 L45,5 L50,14 L55,10 L100,10"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="2"
                    className="animate-pulse"
                  />
                </svg>
              </div>
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-2 gap-2 text-[9px] font-mono">
              <div className="p-2 rounded-xl bg-neutral-900 border border-neutral-800">
                <p className="text-neutral-400">Calories Burned</p>
                <p className="font-bold text-xs text-white">492 kcal</p>
                <span className="text-[8px] text-red-400">+12% tempo</span>
              </div>
              <div className="p-2 rounded-xl bg-neutral-900 border border-neutral-800">
                <p className="text-neutral-400">Average Pace</p>
                <p className="font-bold text-xs text-white">4'18" /km</p>
                <span className="text-[8px] text-emerald-400">Split on track</span>
              </div>
            </div>
          </div>

          <div>
            <div className="w-full py-2.5 rounded-xl bg-red-500 hover:bg-red-600 text-white font-bold text-xs text-center shadow-lg shadow-red-500/30 cursor-pointer transition-colors">
              Pause Workout
            </div>
            <ScreenHomeIndicator dark />
          </div>
        </div>
      ),
    },
    {
      id: "coffee-artisan",
      artboardNumber: "08",
      category: "Quick Commerce",
      appTitle: "Krafted Brew",
      screenType: "Order & Bean Roastery",
      accent: "#d97706",
      render: () => (
        <div className="relative h-full flex flex-col justify-between p-3.5 bg-zinc-950 text-white rounded-[22px] overflow-hidden border border-amber-900/40">
          <div>
            <ScreenStatusBar dark time="9:41" />

            {/* Roastery Tag */}
            <div className="mt-1 flex justify-between items-center text-[9px] text-amber-200/70 font-mono">
              <span className="flex items-center gap-1 font-bold text-amber-400">
                <Coffee className="size-3 text-amber-500" /> SINGLE ORIGIN
              </span>
              <span className="tracking-wider">ETHIOPIA YIRGA</span>
            </div>

            {/* Coffee Photo */}
            <div className="h-28 rounded-2xl overflow-hidden relative my-2 border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=400&q=80"
                alt="coffee"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
              <span className="absolute bottom-1.5 left-1.5 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md text-[8px] font-mono text-amber-300">
                WASHED HEIRLOOM • NITRO
              </span>
            </div>

            {/* Product Details */}
            <div className="space-y-1">
              <h5 className="text-sm font-bold text-white leading-tight">Floral Jasmine Nitro Cold Brew</h5>
              <p className="text-[10px] text-zinc-400">Bergamot, candied peach & sweet jasmine notes.</p>
            </div>

            {/* Tasting chips */}
            <div className="mt-1.5 flex items-center gap-1 text-[8px] font-mono text-amber-200/80">
              <span className="px-1.5 py-0.5 rounded bg-amber-500/15 border border-amber-500/30">16oz Draft</span>
              <span className="px-1.5 py-0.5 rounded bg-amber-500/15 border border-amber-500/30">Double Shot</span>
              <span className="px-1.5 py-0.5 rounded bg-amber-500/15 border border-amber-500/30">Oat Foam</span>
            </div>
          </div>

          <div>
            <div className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-black text-xs text-center shadow-md shadow-amber-500/20 cursor-pointer transition-colors">
              Add to Order • $6.50
            </div>
            <ScreenHomeIndicator dark />
          </div>
        </div>
      ),
    },
  ];

  // Duplicate screens 3 times for completely seamless infinite loop wrap
  const loopedScreens = [...screens, ...screens, ...screens];

  // 60FPS Hardware-accelerated continuous GPU transform sliding loop
  useEffect(() => {
    let animId: number;
    lastTimeRef.current = performance.now();

    const step = (now: number) => {
      const dt = Math.min((now - lastTimeRef.current) / 1000, 0.1);
      lastTimeRef.current = now;

      if (!isHovered && !isPausedManually && !isDownRef.current && trackRef.current) {
        // Slide at 55px per second smoothly across any display
        offsetRef.current += 55 * dt;

        // One full set width is 1/3 of the total 3x looped scrollWidth
        const singleSetWidth = trackRef.current.scrollWidth / 3;
        if (singleSetWidth > 0) {
          if (offsetRef.current >= singleSetWidth) {
            offsetRef.current -= singleSetWidth;
          } else if (offsetRef.current < 0) {
            offsetRef.current += singleSetWidth;
          }
          trackRef.current.style.transform = `translate3d(-${offsetRef.current}px, 0, 0)`;
        }
      }

      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [isHovered, isPausedManually]);

  const slideManual = useCallback((direction: "prev" | "next") => {
    const shift = direction === "next" ? 320 : -320;
    offsetRef.current += shift;

    if (trackRef.current) {
      const singleSetWidth = trackRef.current.scrollWidth / 3;
      if (singleSetWidth > 0) {
        if (offsetRef.current >= singleSetWidth) offsetRef.current -= singleSetWidth;
        if (offsetRef.current < 0) offsetRef.current += singleSetWidth;
      }

      trackRef.current.style.transition = "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)";
      trackRef.current.style.transform = `translate3d(-${offsetRef.current}px, 0, 0)`;
      setTimeout(() => {
        if (trackRef.current) trackRef.current.style.transition = "";
      }, 420);
    }
  }, []);

  // Mouse drag & touch gestures
  const handleMouseDown = (e: React.MouseEvent) => {
    isDownRef.current = true;
    startXRef.current = e.pageX;
    scrollStartRef.current = offsetRef.current;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDownRef.current) return;
    e.preventDefault();
    const walk = (e.pageX - startXRef.current) * 1.2;
    offsetRef.current = scrollStartRef.current - walk;

    if (trackRef.current) {
      const singleSetWidth = trackRef.current.scrollWidth / 3;
      if (singleSetWidth > 0) {
        if (offsetRef.current >= singleSetWidth) offsetRef.current -= singleSetWidth;
        if (offsetRef.current < 0) offsetRef.current += singleSetWidth;
      }
      trackRef.current.style.transform = `translate3d(-${offsetRef.current}px, 0, 0)`;
    }
  };

  const handleMouseUp = () => {
    isDownRef.current = false;
  };

  return (
    <section id="slider" className="w-full py-16 sm:py-24 overflow-hidden relative scroll-mt-20">
      
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="size-2 rounded-full bg-emerald-500 animate-ping"></span>
            <p className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
              Autonomous Output Showcase
            </p>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-foreground">
            Multi-Screen Studio Canvas
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1 max-w-lg">
            Glides continuously in real time. Use arrows or hover any artboard to inspect layouts and components.
          </p>
        </div>

        {/* Sliding Controls: Left / Right + Pause / Play */}
        <div className="flex items-center gap-2 self-end sm:self-auto">
          <button
            type="button"
            onClick={() => setIsPausedManually((prev) => !prev)}
            className="p-2.5 rounded-full border border-border/80 hover:bg-muted text-foreground transition-all cursor-pointer shadow-xs"
            title={isPausedManually ? "Resume continuous glide" : "Pause glide"}
            aria-label="Pause or resume sliding"
          >
            {isPausedManually ? <Play className="size-4 text-primary" /> : <Pause className="size-4" />}
          </button>
          <button
            type="button"
            onClick={() => slideManual("prev")}
            className="p-2.5 rounded-full border border-border/80 hover:bg-muted text-foreground transition-all cursor-pointer shadow-xs hover:scale-105 active:scale-95"
            aria-label="Slide backwards"
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            type="button"
            onClick={() => slideManual("next")}
            className="p-2.5 rounded-full border border-border/80 hover:bg-muted text-foreground transition-all cursor-pointer shadow-xs hover:scale-105 active:scale-95"
            aria-label="Slide forwards"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>

      {/* Slider Viewport */}
      <div
        className="w-full relative select-none"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          isDownRef.current = false;
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <div
          ref={trackRef}
          className="flex gap-6 w-max py-4 cursor-grab active:cursor-grabbing will-change-transform"
        >
          {loopedScreens.map((screen, idx) => (
            <div
              key={`${screen.id}-${idx}`}
              className="w-[240px] sm:w-[265px] shrink-0 group transition-transform duration-300 hover:-translate-y-2"
            >
              {/* Studio Canvas Artboard Container */}
              <div className="rounded-[28px] p-2.5 bg-card/90 dark:bg-zinc-900/90 border border-border/80 dark:border-white/10 shadow-[0_12px_36px_-15px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)] backdrop-blur-xl ring-1 ring-black/5 dark:ring-white/5 transition-all">
                
                {/* Artboard Top Navigation Bar */}
                <div className="flex items-center justify-between px-2 py-1.5 mb-2 border-b border-border/50 dark:border-white/5 text-[10px] text-muted-foreground font-mono">
                  <div className="flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full" style={{ backgroundColor: screen.accent }}></span>
                    <span className="font-semibold text-foreground truncate max-w-[110px]">{screen.appTitle}</span>
                  </div>
                  <span className="text-[9px] uppercase px-1.5 py-0.5 rounded bg-muted/60 text-muted-foreground">
                    Artboard #{screen.artboardNumber}
                  </span>
                </div>

                {/* Mobile Viewport Screen */}
                <div className="h-[430px] rounded-[22px] overflow-hidden shadow-inner">
                  {screen.render()}
                </div>

                {/* Artboard Bottom Meta Bar */}
                <div className="mt-2.5 px-2 flex items-center justify-between text-[10px] text-muted-foreground font-mono">
                  <span className="truncate">{screen.screenType}</span>
                  <span className="text-[9px] text-primary/80 font-bold uppercase">React & TW</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Status Ticker */}
      <div className="max-w-7xl mx-auto px-4 mt-6 flex items-center justify-between text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <Code2 className="size-3.5 text-primary" />
          <span>Every screen is rendered with native Tailwind classes and switchable design tokens</span>
        </div>
        <span className="font-mono text-[11px] hidden sm:inline">
          393 × 852 Viewports • 60 FPS Native Glide
        </span>
      </div>

    </section>
  );
};

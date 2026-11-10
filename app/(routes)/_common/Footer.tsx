"use client";

import React, { useState } from "react";
import Logo from "@/components/logo";
import Link from "next/link";
import {
  ArrowUp,
  Sparkles,
  CheckCircle2,
  X,
  Shield,
  FileText,
  Cookie,
  Mail,
  Check,
  Send,
  ExternalLink,
  Code2,
} from "lucide-react";

export const Footer = () => {
  const [activeModal, setActiveModal] = useState<
    "privacy" | "terms" | "cookies" | "changelog" | null
  >(null);
  const [emailInput, setEmailInput] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [cookieSettings, setCookieSettings] = useState({
    essential: true, // required
    analytics: true,
    functional: true,
  });
  const [savedCookies, setSavedCookies] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    hash: string
  ) => {
    if (typeof window !== "undefined" && window.location.pathname === "/") {
      e.preventDefault();
      const elem = document.querySelector(hash);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim() || !emailInput.includes("@")) return;
    setIsSubscribed(true);
    setTimeout(() => {
      setEmailInput("");
    }, 2000);
  };

  const handleSaveCookies = () => {
    setSavedCookies(true);
    setTimeout(() => {
      setSavedCookies(false);
      setActiveModal(null);
    }, 900);
  };

  return (
    <>
      <footer className="w-full border-t border-border/50 bg-background pt-14 pb-8 px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 pb-12 border-b border-border/40">
            {/* Brand & Newsletter (Span 2) */}
            <div className="lg:col-span-2 space-y-4">
              <Link href="/" className="inline-block">
                <Logo />
              </Link>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-sm">
                The autonomous AI mobile UI engine for builders. Compile complete
                multi-screen journeys, native Tailwind TSX, and switchable design
                tokens on an infinite canvas.
              </p>

              {/* Working GitHub & Social Links */}
              <div className="flex items-center gap-3 pt-1">
                <a
                  href="https://github.com/fareed-aslam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-8 rounded-xl border border-border/60 bg-muted/30 hover:bg-muted text-muted-foreground hover:text-foreground flex items-center justify-center transition-colors cursor-pointer group"
                  aria-label="Fareed Aslam's GitHub"
                  title="Fareed Aslam on GitHub"
                >
                  <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    />
                  </svg>
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-8 rounded-xl border border-border/60 bg-muted/30 hover:bg-muted text-muted-foreground hover:text-foreground flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="X / Twitter"
                  title="Follow Dziner on X"
                >
                  <svg className="size-3.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <button
                  type="button"
                  onClick={() => setActiveModal("changelog")}
                  className="text-[11px] font-mono text-muted-foreground hover:text-foreground px-2.5 py-1 rounded-md bg-muted/40 hover:bg-muted border border-border/50 transition-all cursor-pointer flex items-center gap-1.5"
                  title="Click to view Studio v2.4 Changelog"
                >
                  <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>v2.4 Studio</span>
                </button>
              </div>

              {/* Working Newsletter Subscription Form */}
              <div className="pt-2">
                <p className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground font-semibold mb-1.5">
                  Get Product Releases
                </p>
                {isSubscribed ? (
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs">
                    <CheckCircle2 className="size-4 shrink-0" />
                    <span>Subscribed! You will receive v2.5 release updates.</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex gap-2 max-w-sm">
                    <input
                      type="email"
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      placeholder="name@company.com"
                      required
                      className="flex-1 px-3 py-1.5 text-xs rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-muted-foreground/60"
                    />
                    <button
                      type="submit"
                      className="px-3 py-1.5 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xs transition-colors cursor-pointer flex items-center gap-1 shrink-0"
                    >
                      <Send className="size-3" />
                      <span>Join</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Product Links */}
            <div className="space-y-3">
              <p className="text-xs font-mono font-bold uppercase tracking-wider text-foreground">
                Product
              </p>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li>
                  <a
                    href="/#overview"
                    onClick={(e) => handleNavClick(e, "#overview")}
                    className="hover:text-foreground transition-colors cursor-pointer flex items-center gap-1"
                  >
                    <span>Overview & Canvas</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/#slider"
                    onClick={(e) => handleNavClick(e, "#slider")}
                    className="hover:text-foreground transition-colors cursor-pointer"
                  >
                    Live Showcase
                  </a>
                </li>
                <li>
                  <a
                    href="/#capabilities"
                    onClick={(e) => handleNavClick(e, "#capabilities")}
                    className="hover:text-foreground transition-colors cursor-pointer"
                  >
                    Capabilities Hub
                  </a>
                </li>
                <li>
                  <a
                    href="/#workflow"
                    onClick={(e) => handleNavClick(e, "#workflow")}
                    className="hover:text-foreground transition-colors cursor-pointer"
                  >
                    Process Workflow
                  </a>
                </li>
                <li>
                  <Link
                    href="/price"
                    className="hover:text-foreground transition-colors cursor-pointer"
                  >
                    Interactive Pricing
                  </Link>
                </li>
                <li>
                  <a
                    href="/#faq"
                    onClick={(e) => handleNavClick(e, "#faq")}
                    className="hover:text-foreground transition-colors cursor-pointer"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Technology & Frameworks */}
            <div className="space-y-3">
              <p className="text-xs font-mono font-bold uppercase tracking-wider text-foreground">
                Frameworks
              </p>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li>
                  <a
                    href="/#capabilities"
                    onClick={(e) => handleNavClick(e, "#capabilities")}
                    className="hover:text-foreground transition-colors cursor-pointer"
                  >
                    Tailwind CSS TSX
                  </a>
                </li>
                <li>
                  <a
                    href="/#capabilities"
                    onClick={(e) => handleNavClick(e, "#capabilities")}
                    className="hover:text-foreground transition-colors cursor-pointer"
                  >
                    React Native Export
                  </a>
                </li>
                <li>
                  <a
                    href="/#capabilities"
                    onClick={(e) => handleNavClick(e, "#capabilities")}
                    className="hover:text-foreground transition-colors cursor-pointer"
                  >
                    Dynamic CSS Tokens
                  </a>
                </li>
                <li>
                  <a
                    href="/#capabilities"
                    onClick={(e) => handleNavClick(e, "#capabilities")}
                    className="hover:text-foreground transition-colors cursor-pointer"
                  >
                    Retina PNG Camera
                  </a>
                </li>
                <li>
                  <Link
                    href="/api/auth/login?post_login_redirect_url=/"
                    className="hover:text-foreground transition-colors cursor-pointer"
                  >
                    Kinde Auth Session
                  </Link>
                </li>
              </ul>
            </div>

            {/* Community & Legal (All interactive!) */}
            <div className="space-y-3">
              <p className="text-xs font-mono font-bold uppercase tracking-wider text-foreground">
                Legal & Support
              </p>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li>
                  <a
                    href="mailto:support@dziner.ai"
                    className="hover:text-foreground transition-colors flex items-center gap-1.5"
                  >
                    <Mail className="size-3" />
                    <span>Contact Support</span>
                  </a>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setActiveModal("privacy")}
                    className="hover:text-foreground transition-colors cursor-pointer text-left flex items-center gap-1.5"
                  >
                    <Shield className="size-3" />
                    <span>Privacy Policy</span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setActiveModal("terms")}
                    className="hover:text-foreground transition-colors cursor-pointer text-left flex items-center gap-1.5"
                  >
                    <FileText className="size-3" />
                    <span>Terms of Service</span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setActiveModal("cookies")}
                    className="hover:text-foreground transition-colors cursor-pointer text-left flex items-center gap-1.5"
                  >
                    <Cookie className="size-3" />
                    <span>Cookie Preferences</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <p>© {new Date().getFullYear()} Dziner AI. All rights reserved.</p>
              <span>•</span>
              <a
                href="https://github.com/fareed-aslam"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground font-mono text-[11px] underline underline-offset-2 transition-colors"
              >
                GitHub: fareed-aslam
              </a>
            </div>

            <div className="flex items-center gap-4">
              <span className="hidden sm:inline font-mono text-[11px]">
                Engineered with precision for mobile creators
              </span>
              <button
                type="button"
                onClick={scrollToTop}
                className="p-2 rounded-full border border-border/80 hover:bg-muted text-foreground transition-colors flex items-center justify-center cursor-pointer shadow-xs hover:scale-105 active:scale-95"
                aria-label="Back to top"
                title="Back to top"
              >
                <ArrowUp className="size-3.5" />
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Interactive Modals */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in-0 duration-200">
          <div
            className="w-full max-w-lg rounded-2xl border border-border bg-card p-6 shadow-2xl relative max-h-[85vh] overflow-y-auto"
            role="dialog"
            aria-modal="true"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="size-4" />
            </button>

            {/* Modal: Changelog */}
            {activeModal === "changelog" && (
              <div className="space-y-4 text-foreground">
                <div className="flex items-center gap-2">
                  <Sparkles className="size-5 text-primary" />
                  <h3 className="text-lg font-black tracking-tight">
                    Dziner Studio • Release Notes
                  </h3>
                </div>

                <div className="space-y-4 text-xs text-muted-foreground">
                  <div className="p-3 rounded-xl bg-muted/40 border border-border/60 space-y-1.5">
                    <div className="flex items-center justify-between font-mono">
                      <span className="font-bold text-foreground">v2.4 Studio (Current)</span>
                      <span className="text-primary font-semibold">Active</span>
                    </div>
                    <ul className="space-y-1 list-disc list-inside text-muted-foreground">
                      <li>Synchronized Multi-Screen Mobile Canvas (3-Screen connected flow)</li>
                      <li>LightUGC-style scroll-morphing pill header with inverted curves</li>
                      <li>Dynamic Design Token system (Ocean, Sunset, Cyber, Emerald)</li>
                      <li>Unified Apple HIG status bars & 8-artboard infinite glide slider</li>
                      <li>Native Tailwind TSX code exporter with one-click clipboard</li>
                    </ul>
                  </div>

                  <div className="p-3 rounded-xl bg-muted/20 border border-border/40 space-y-1.5">
                    <div className="flex items-center justify-between font-mono">
                      <span className="font-bold text-foreground">v2.3 Engine</span>
                      <span className="text-muted-foreground">Previous</span>
                    </div>
                    <ul className="space-y-1 list-disc list-inside">
                      <li>Headless browser 2x retina screenshot pipeline</li>
                      <li>Kinde authentication integration for seamless user profiles</li>
                      <li>Figma-style zoom (50% - 150%) and hand pan controls</li>
                    </ul>
                  </div>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setActiveModal(null)}
                    className="px-4 py-2 rounded-xl bg-primary text-primary-foreground font-bold text-xs cursor-pointer hover:bg-primary/90 transition-colors"
                  >
                    Got it
                  </button>
                </div>
              </div>
            )}

            {/* Modal: Privacy Policy */}
            {activeModal === "privacy" && (
              <div className="space-y-4 text-foreground">
                <div className="flex items-center gap-2">
                  <Shield className="size-5 text-emerald-500" />
                  <h3 className="text-lg font-black tracking-tight">
                    Privacy Policy
                  </h3>
                </div>

                <div className="space-y-3 text-xs text-muted-foreground leading-relaxed">
                  <p>
                    At Dziner AI, we respect your privacy and are committed to protecting your personal data.
                  </p>

                  <div className="space-y-1">
                    <h4 className="font-bold text-foreground font-mono uppercase text-[10px]">
                      1. Information We Collect
                    </h4>
                    <p>
                      We only collect account information provided through Kinde authentication (name, email) and user-generated prompts to construct mobile UI prototypes.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h4 className="font-bold text-foreground font-mono uppercase text-[10px]">
                      2. How We Use Data
                    </h4>
                    <p>
                      Your prompts are processed strictly to generate layout code, tokens, and visual previews. We do not sell your personal data or private code to third parties.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h4 className="font-bold text-foreground font-mono uppercase text-[10px]">
                      3. Security & Encryption
                    </h4>
                    <p>
                      All network traffic is encrypted via TLS 1.3. Code exports and snapshots are delivered securely to your browser session.
                    </p>
                  </div>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setActiveModal(null)}
                    className="px-4 py-2 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-bold text-xs cursor-pointer transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}

            {/* Modal: Terms of Service */}
            {activeModal === "terms" && (
              <div className="space-y-4 text-foreground">
                <div className="flex items-center gap-2">
                  <FileText className="size-5 text-sky-500" />
                  <h3 className="text-lg font-black tracking-tight">
                    Terms of Service
                  </h3>
                </div>

                <div className="space-y-3 text-xs text-muted-foreground leading-relaxed">
                  <div className="space-y-1">
                    <h4 className="font-bold text-foreground font-mono uppercase text-[10px]">
                      1. IP Ownership
                    </h4>
                    <p>
                      All prototypes, Tailwind CSS classes, React TSX components, and exported screenshots generated on Dziner AI belong 100% to you. You may use them in commercial and personal projects.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h4 className="font-bold text-foreground font-mono uppercase text-[10px]">
                      2. Acceptable Use
                    </h4>
                    <p>
                      You agree not to use Dziner AI to create deceptive phishing interfaces, malware controllers, or unlawful materials.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h4 className="font-bold text-foreground font-mono uppercase text-[10px]">
                      3. Availability
                    </h4>
                    <p>
                      Dziner AI operates with high availability architecture. Maintenance windows are announced in advance via release tags.
                    </p>
                  </div>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setActiveModal(null)}
                    className="px-4 py-2 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-bold text-xs cursor-pointer transition-colors"
                  >
                    Accept & Close
                  </button>
                </div>
              </div>
            )}

            {/* Modal: Cookie Preferences */}
            {activeModal === "cookies" && (
              <div className="space-y-4 text-foreground">
                <div className="flex items-center gap-2">
                  <Cookie className="size-5 text-amber-500" />
                  <h3 className="text-lg font-black tracking-tight">
                    Cookie Preferences
                  </h3>
                </div>

                <p className="text-xs text-muted-foreground">
                  Customize which cookies Dziner AI can store on your device:
                </p>

                <div className="space-y-3 text-xs">
                  {/* Essential */}
                  <div className="p-3 rounded-xl bg-muted/40 border border-border/60 flex items-center justify-between">
                    <div>
                      <p className="font-bold text-foreground">Essential Cookies</p>
                      <p className="text-muted-foreground text-[11px]">
                        Required for session authentication & security tokens.
                      </p>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                      Required
                    </span>
                  </div>

                  {/* Analytics */}
                  <div className="p-3 rounded-xl bg-muted/40 border border-border/60 flex items-center justify-between">
                    <div>
                      <p className="font-bold text-foreground">Performance Analytics</p>
                      <p className="text-muted-foreground text-[11px]">
                        Measures canvas render latency to improve glide FPS.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        setCookieSettings((prev) => ({
                          ...prev,
                          analytics: !prev.analytics,
                        }))
                      }
                      className={`w-10 h-6 rounded-full transition-colors cursor-pointer p-0.5 flex items-center ${
                        cookieSettings.analytics ? "bg-primary justify-end" : "bg-muted-foreground/30 justify-start"
                      }`}
                    >
                      <span className="size-5 rounded-full bg-white shadow-xs" />
                    </button>
                  </div>

                  {/* Functional */}
                  <div className="p-3 rounded-xl bg-muted/40 border border-border/60 flex items-center justify-between">
                    <div>
                      <p className="font-bold text-foreground">Functional Memory</p>
                      <p className="text-muted-foreground text-[11px]">
                        Persists chosen theme palette & zoom level on reload.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        setCookieSettings((prev) => ({
                          ...prev,
                          functional: !prev.functional,
                        }))
                      }
                      className={`w-10 h-6 rounded-full transition-colors cursor-pointer p-0.5 flex items-center ${
                        cookieSettings.functional ? "bg-primary justify-end" : "bg-muted-foreground/30 justify-start"
                      }`}
                    >
                      <span className="size-5 rounded-full bg-white shadow-xs" />
                    </button>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-emerald-500 font-mono">
                    {savedCookies ? "✓ Preferences saved!" : ""}
                  </span>
                  <button
                    type="button"
                    onClick={handleSaveCookies}
                    className="px-4 py-2 rounded-xl bg-primary text-primary-foreground font-bold text-xs cursor-pointer hover:bg-primary/90 transition-colors"
                  >
                    Save Preferences
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
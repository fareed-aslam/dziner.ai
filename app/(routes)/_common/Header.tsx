"use client";

import React, { useState, useEffect } from "react";
import Logo from "@/components/logo";
import ThemeToggleButton from "@/components/theme-toggle-button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import {
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import {
  LogOutIcon,
  FolderOpen,
  Sparkles,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";

const Header = () => {
  const { user } = useKindeBrowserClient();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-50 flex justify-center pointer-events-none transition-all duration-300 px-3 sm:px-6">
      <nav
        aria-label="Main navigation"
        className={`pointer-events-auto relative flex items-center justify-between transition-all duration-500 ease-out ${
          scrolled
            ? "mt-3 w-full max-w-4xl bg-card/95 px-4 sm:px-6 py-2 backdrop-blur-xl rounded-full border border-border/80 shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-[0_12px_35px_rgb(0,0,0,0.4)]"
            : "mt-0 w-full max-w-5xl bg-card/90 px-4 sm:px-8 py-2.5 backdrop-blur-md backdrop-saturate-150 rounded-b-[20px] border-b border-x border-border/60 shadow-xs"
        }`}
      >
        {/* Left Inverted Wing Mask (LightUGC style - fades smoothly on scroll) */}
        <span
          aria-hidden="true"
          className={`absolute right-full top-0 h-[20px] w-[20px] bg-card/90 transition-opacity duration-300 pointer-events-none hidden md:block ${
            scrolled ? "opacity-0" : "opacity-100"
          }`}
          style={{
            maskImage:
              "radial-gradient(circle at bottom left, transparent 19.5px, black 20px)",
            WebkitMaskImage:
              "radial-gradient(circle at bottom left, transparent 19.5px, black 20px)",
          }}
        />

        {/* Right Inverted Wing Mask */}
        <span
          aria-hidden="true"
          className={`absolute left-full top-0 h-[20px] w-[20px] bg-card/90 transition-opacity duration-300 pointer-events-none hidden md:block ${
            scrolled ? "opacity-0" : "opacity-100"
          }`}
          style={{
            maskImage:
              "radial-gradient(circle at bottom right, transparent 19.5px, black 20px)",
            WebkitMaskImage:
              "radial-gradient(circle at bottom right, transparent 19.5px, black 20px)",
          }}
        />

        {/* Left: Brand Logo */}
        <div className="flex items-center shrink-0">
          <Link
            href="/"
            className="flex items-center gap-2 group transition-transform duration-200 hover:scale-[1.02]"
          >
            <Logo />
          </Link>
        </div>

        {/* Center: Navigation Links (Compact, cleanly spaced so nothing ever overflows) */}
        <div className="hidden md:flex items-center gap-1 text-xs sm:text-sm font-medium text-muted-foreground">
          <Link
            href="/#slider"
            className="px-3 py-1.5 rounded-full hover:text-foreground hover:bg-muted/50 transition-colors"
          >
            Showcase
          </Link>
          <Link
            href="/#capabilities"
            className="px-3 py-1.5 rounded-full hover:text-foreground hover:bg-muted/50 transition-colors"
          >
            Capabilities
          </Link>
          <Link
            href="/#workflow"
            className="px-3 py-1.5 rounded-full hover:text-foreground hover:bg-muted/50 transition-colors"
          >
            Workflow
          </Link>
          <Link
            href="/price"
            className="px-3 py-1.5 rounded-full hover:text-foreground hover:bg-muted/50 transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/#faq"
            className="px-3 py-1.5 rounded-full hover:text-foreground hover:bg-muted/50 transition-colors"
          >
            FAQ
          </Link>
          {user && (
            <Link
              href="/#projects"
              className="px-3 py-1.5 rounded-full text-primary font-semibold hover:bg-primary/10 transition-colors flex items-center gap-1.5"
            >
              <FolderOpen className="size-3.5" />
              <span>Projects</span>
            </Link>
          )}
        </div>

        {/* Right: Actions (Theme Toggle + Auth Button) */}
        <div className="flex items-center gap-2 shrink-0">
          <ThemeToggleButton />

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger className="focus:outline-none">
                <Avatar className="h-7 w-7 sm:h-8 sm:w-8 ring-2 ring-primary/40 hover:ring-primary transition-all cursor-pointer">
                  <AvatarImage src={user.picture || undefined} />
                  <AvatarFallback className="text-xs font-bold bg-primary/20 text-primary">
                    {user.given_name?.[0] || user.email?.[0] || "U"}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 mt-2">
                <DropdownMenuLabel>
                  <p className="text-xs font-semibold text-foreground">
                    {user.given_name ? `${user.given_name} ${user.family_name || ""}` : "My Account"}
                  </p>
                  <p className="text-[11px] text-muted-foreground truncate">{user.email}</p>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/#projects" className="cursor-pointer flex items-center gap-2 text-xs">
                    <FolderOpen className="size-3.5" />
                    <span>My Projects</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/price" className="cursor-pointer flex items-center gap-2 text-xs">
                    <Sparkles className="size-3.5 text-amber-500" />
                    <span>Subscription Plan</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <LogoutLink className="cursor-pointer flex items-center gap-2 text-xs text-destructive focus:text-destructive">
                    <LogOutIcon className="size-3.5" />
                    <span>Log Out</span>
                  </LogoutLink>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-1.5 sm:gap-2">
              <LoginLink
                postLoginRedirectURL="/"
                className="hidden sm:inline-flex px-2.5 py-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Sign In
              </LoginLink>
              <LoginLink
                postLoginRedirectURL="/"
                className="inline-flex h-8 items-center justify-center rounded-full px-3.5 text-xs font-semibold transition-all duration-200 active:scale-[0.97] bg-primary text-primary-foreground hover:bg-primary/90 shadow-xs cursor-pointer whitespace-nowrap"
              >
                Get Started
              </LoginLink>
            </div>
          )}

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>

        {/* Mobile Dropdown Panel */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 p-4 rounded-2xl bg-card border border-border shadow-xl flex flex-col gap-2 md:hidden">
            <Link
              href="/#slider"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs font-medium py-1.5 text-muted-foreground hover:text-foreground"
            >
              Showcase
            </Link>
            <Link
              href="/#capabilities"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs font-medium py-1.5 text-muted-foreground hover:text-foreground"
            >
              Capabilities
            </Link>
            <Link
              href="/#workflow"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs font-medium py-1.5 text-muted-foreground hover:text-foreground"
            >
              Workflow
            </Link>
            <Link
              href="/price"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs font-medium py-1.5 text-muted-foreground hover:text-foreground"
            >
              Pricing
            </Link>
            <Link
              href="/#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs font-medium py-1.5 text-muted-foreground hover:text-foreground"
            >
              FAQ
            </Link>
            {!user && (
              <LoginLink
                postLoginRedirectURL="/"
                className="w-full py-2 text-center rounded-xl bg-primary text-primary-foreground font-semibold text-xs mt-2"
              >
                Sign In to Dziner
              </LoginLink>
            )}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;

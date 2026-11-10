"use client";

import React from "react";
import Header from "../_common/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Sparkles, Zap } from "lucide-react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for exploring and generating initial mobile app designs.",
    price: "$0",
    period: "forever free",
    popular: false,
    features: [
      "Up to 3 active projects",
      "5 screen generations per project",
      "Standard design themes",
      "Export as PNG screenshots",
      "Community support",
    ],
    ctaText: "Get Started Free",
    ctaVariant: "outline" as const,
  },
  {
    name: "Pro Designer",
    description: "For founders and designers creating complete mobile applications.",
    price: "$19",
    period: "per month",
    popular: true,
    features: [
      "Unlimited projects",
      "Unlimited AI screen generations",
      "All premium themes & styles",
      "High-resolution PNG & HTML export",
      "AI design refactor & iterations",
      "Priority generation queue",
      "Direct email support",
    ],
    ctaText: "Upgrade to Pro",
    ctaVariant: "default" as const,
  },
  {
    name: "Team / Studio",
    description: "For teams and agencies shipping apps at scale.",
    price: "$49",
    period: "per month",
    popular: false,
    features: [
      "Everything in Pro Designer",
      "Shared team workspace & canvas",
      "Realtime multiplayer collaboration",
      "Custom brand styles & themes",
      "Dedicated GPU generation instances",
      "99.9% uptime SLA",
      "Dedicated account manager",
    ],
    ctaText: "Contact Sales",
    ctaVariant: "outline" as const,
  },
];

export default function PricingPage() {
  const { user } = useKindeBrowserClient();

  return (
    <div className="w-full min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-start px-4 py-16 sm:py-24">
        {/* Header Section */}
        <div className="max-w-3xl text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border bg-primary/10 text-primary text-xs font-semibold">
            <Sparkles className="size-3.5" />
            Simple, Transparent Pricing
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            Build your next mobile app <span className="text-primary">10x faster</span>
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto">
            Choose the plan that fits your workflow. Start for free and upgrade as your ideas grow into production apps.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative flex flex-col justify-between transition-all duration-200 ${
                plan.popular
                  ? "border-primary ring-2 ring-primary shadow-xl shadow-primary/10"
                  : "border-border shadow-sm hover:border-foreground/20"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold flex items-center gap-1 shadow-sm">
                  <Zap className="size-3 fill-current" />
                  Most Popular
                </div>
              )}

              <div>
                <CardHeader className="pt-6">
                  <CardTitle className="text-xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-sm mt-1">
                    {plan.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-sm text-muted-foreground">/{plan.period}</span>
                  </div>

                  <div className="space-y-3 pt-2 border-t border-border/60">
                    <p className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                      What&apos;s included
                    </p>
                    <ul className="space-y-2.5">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5 text-sm">
                          <Check className="size-4 text-primary shrink-0 mt-0.5" />
                          <span className="text-foreground/90">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </div>

              <CardFooter className="pt-4 pb-6">
                {user ? (
                  <Link href="/" className="w-full">
                    <Button variant={plan.ctaVariant} className="w-full">
                      {plan.ctaText}
                    </Button>
                  </Link>
                ) : (
                  <LoginLink className="w-full">
                    <Button variant={plan.ctaVariant} className="w-full">
                      {plan.ctaText}
                    </Button>
                  </LoginLink>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}


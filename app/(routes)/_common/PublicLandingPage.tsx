import React from "react";
import Header from "./Header";
import { SideProgressNav } from "./SideProgressNav";
import { PublicHero } from "./PublicHero";
import { ComparisonSection } from "./ComparisonSection";
import { InfiniteShowcaseSlider } from "./InfiniteShowcaseSlider";
import { InteractiveBentoGrid } from "./InteractiveBentoGrid";
import { WorkflowSection } from "./WorkflowSection";
import { FAQSection } from "./FAQSection";
import Footer from "./Footer";

export default function PublicLandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/20 selection:text-primary relative">
      <SideProgressNav />
      <Header />
      <main className="flex-1 flex flex-col">
        <PublicHero />
        <ComparisonSection />
        <InfiniteShowcaseSlider />
        <InteractiveBentoGrid />
        <WorkflowSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}

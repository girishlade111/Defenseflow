"use client";

import { Header } from "@/components/defenseflow/Header";
import { Hero } from "@/components/defenseflow/Hero";
import { StatsSection } from "@/components/defenseflow/StatsSection";
import { MainPagesGrid } from "@/components/defenseflow/MainPagesGrid";
import { UtilityPages } from "@/components/defenseflow/UtilityPages";
import { ExtraFeatures } from "@/components/defenseflow/ExtraFeatures";
import { CTASection } from "@/components/defenseflow/CTASection";
import { Footer } from "@/components/defenseflow/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black">
      <Header />
      <main className="flex-1">
        <Hero />
        <StatsSection />
        <MainPagesGrid />
        <UtilityPages />
        <ExtraFeatures />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

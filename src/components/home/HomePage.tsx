"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { StorytellingSection } from "@/components/home/StorytellingSection";
import { BentoGridSection } from "@/components/home/BentoGridSection";
import { TestimonialShowcase } from "@/components/home/TestimonialShowcase";
import { AdvancedFeaturesSection } from "@/components/home/AdvancedFeaturesSection";

export function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#050505]">
      <Navbar />
      
      <main className="flex-1">
        <HeroSection />
        <StorytellingSection />
        <BentoGridSection />
        <AdvancedFeaturesSection />
        <TestimonialShowcase />
      </main>

      <Footer />
    </div>
  );
}

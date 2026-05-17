"use client";

import React from 'react';
import TopBanner from '@/components/sections/TopBanner';
import Hero from '@/components/sections/Hero';
import TargetAudience from '@/components/sections/TargetAudience';
import PainPoints from '@/components/sections/PainPoints';
import Solution from '@/components/sections/Solution';
import Features from '@/components/sections/Features';
import About from '@/components/sections/About';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <TopBanner />
      <Hero />
      <TargetAudience />
      <PainPoints />
      <Solution />
      <Features />
      <About />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}

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
      {/* 
        Wykorzystujemy właściwość Flexbox 'order', aby zarządzać kolejnością sekcji:
        - Na desktopie (lg:) kolejność jest standardowa i logiczna.
        - Na telefonach przenosimy całą sekcję Features ("w tej liście między innymi") 
          nad sekcję PainPoints ("Sprawdź, czy też wpadasz w te pułapki...").
      */}
      <div className="order-[1] lg:order-[1] sticky top-0 z-[100] w-full"><TopBanner /></div>
      <div className="order-[2] lg:order-[2]"><Hero /></div>
      <div className="order-[3] lg:order-[3]"><TargetAudience /></div>
      <div className="order-[5] lg:order-[4]"><PainPoints /></div>
      <div className="order-[6] lg:order-[5]"><Solution /></div>
      <div className="order-[4] lg:order-[6]"><Features /></div>
      <div className="order-[7] lg:order-[7]"><About /></div>
      <div className="order-[8] lg:order-[8]"><Testimonials /></div>
      <div className="order-[9] lg:order-[9]"><CTA /></div>
      <div className="order-[10] lg:order-[10]"><Footer /></div>
    </main>
  );
}

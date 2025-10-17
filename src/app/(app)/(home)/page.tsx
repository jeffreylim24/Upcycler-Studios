"use client";

import { Hero } from "@/modules/home/ui/components/sections/Hero";
import { Featured } from "@/modules/home/ui/components/sections/Featured";
import { Philosophy } from "@/modules/home/ui/components/sections/Philosophy";
import { Newsletter } from "@/modules/home/ui/components/sections/Newsletter";
// TODO: Use GradualBlur

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-['Inter'] leading-6 overflow-x-hidden">
      <Hero />
      
      <div className="relative bg-[#111111]">
        <Featured />
      </div>
      
      <div className="relative bg-[#0f0f0f]">
        <Philosophy />
      </div>
      
      <Newsletter />
    </div>
  );
}
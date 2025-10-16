"use client";

import { Hero } from "@/components/sections/Hero";
import { Featured } from "@/components/sections/Featured";
import { Philosophy } from "@/components/sections/Philosophy";
import { Newsletter } from "@/components/sections/Newsletter";
import GradualBlur from "@/components/ui/GradualBlur";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-['Inter'] leading-6 overflow-x-hidden">
      <Hero />
      
      <div className="relative bg-[#111111]">
        <Featured />
        <GradualBlur
          target="parent"
          position="bottom"
          height="8rem"
          strength={4}
          divCount={6}
          curve="bezier"
          exponential={true}
          opacity={1}
        />
      </div>
      
      <div className="relative bg-[#0f0f0f]">
        <Philosophy />
        <GradualBlur
          target="parent"
          position="bottom"
          height="8rem"
          strength={4}
          divCount={6}
          curve="bezier"
          exponential={true}
          opacity={1}
        />
      </div>
      
      <Newsletter />
    </div>
  );
}
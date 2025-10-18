"use client";

import Link from "next/link";
import Spline from "@splinetool/react-spline";

export const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-black text-center">

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full max-w-[1400px] px-8">
        {/* Spline Logo - Constrained to match your export dimensions */}
        <div className="mb-4 w-[800px] h-[400px] flex items-center justify-center">
          <Spline
            scene="https://prod.spline.design/Xq3XWJpSGGYAeGiJ/scene.splinecode"
            className="w-full h-full"
            onLoad={() => console.log("✅ Spline loaded!")}
            onError={(error) => console.error("❌ Spline error:", error)}
          />
        </div>

        {/* Title */}
        <h1
          className="font-bold text-white mb-10 tracking-[-0.04em]"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
        >
          Upcycler Studios
        </h1>

        {/* Tagline */}
        <p className="text-sm text-white/90 mb-8 font-light tracking-[0.15em] uppercase">
          WHERE FASHION IS AN INFINITE LOOP.
        </p>

        {/* CTA Button */}
        <Link
          href="/all"
          className="inline-block bg-white text-[#0a0a0a] text-sm px-8 py-3 font-semibold tracking-[0.05em] uppercase rounded-[25px] transition-all duration-300 border-2 border-white hover:bg-transparent hover:text-white hover:-translate-y-1 shadow-lg"
        >
          SHOP NOW
        </Link>
      </div>
    </section>
  );
};
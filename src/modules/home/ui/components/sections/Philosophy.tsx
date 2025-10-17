import Link from "next/link";

export const Philosophy = () => {
  return (
    <section className="relative py-32 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/background-2.png)' }}>
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="philosophy-text">
            <h2 className="text-4xl lg:text-5xl font-semibold leading-tight mb-8 tracking-tight text-white">
              Sustainable Fashion.<br />
              Infinite Possibilities.
            </h2>
            <p className="text-lg text-white/80 mb-8 font-light leading-relaxed">
              At Upcycler Studios, we believe that fashion should be both beautiful and responsible. Every piece tells a story of transformation, creativity, and environmental consciousness.
            </p>
            <Link
              href="/about"
              className="text-white font-medium border-b border-white/30 hover:border-white transition-colors duration-300"
            >
              Learn More About Our Mission
            </Link>
          </div>
          <div className="philosophy-visual">
            <div className="stats grid gap-8">
              <div className="stat flex flex-col items-start">
                <span className="text-5xl font-bold text-white leading-none">50+</span>
                <span className="text-sm text-white/60 uppercase tracking-[0.05em] mt-2">Pieces Transformed</span>
              </div>
              <div className="stat flex flex-col items-start">
                <span className="text-5xl font-bold text-white leading-none">100%</span>
                <span className="text-sm text-white/60 uppercase tracking-[0.05em] mt-2">Sustainable</span>
              </div>
              <div className="stat flex flex-col items-start">
                <span className="text-5xl font-bold text-white leading-none">3</span>
                <span className="text-sm text-white/60 uppercase tracking-[0.05em] mt-2">Years Creating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
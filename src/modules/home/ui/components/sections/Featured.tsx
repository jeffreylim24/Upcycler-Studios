import Image from "next/image";

export const Featured = () => {
  return (
    <section className="py-32 bg-black" id="featured">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-semibold text-center mb-16 tracking-tight text-white">
          Curated Collections
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Reworked Nike Hoodies */}
          <div className="text-center">
            <div className="w-full h-80 mb-8 rounded border-2 overflow-hidden transition-transform duration-300 hover:-translate-y-1">
              <Image 
                src="/reworked_nike_navy.png" 
                alt="Reworked Nike Hoodies" 
                width={350} 
                height={320} 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-4 lowercase text-white">Reworked Nike Hoodies</h3>
            <p className="text-white/70 font-light">
              One-of-a-kind crewnecks crafted from authentic 1980s Nike sweaters. Each piece combines vintage fragments into something entirely new—no two are alike.
            </p>
          </div>

          {/* Reverse Flares */}
          <div className="text-center">
            <div className="w-full h-80 mb-8 rounded border-2 overflow-hidden transition-transform duration-300 hover:-translate-y-1">
              <Image 
                src="/reverse_flares.png" 
                alt="Reverse Flares" 
                width={350} 
                height={320} 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-4 lowercase text-white">Reverse Flares</h3>
            <p className="text-white/70 font-light">
              Reverse flared jeans crafted from premium materials for a unique silhouette.
            </p>
          </div>

          {/* Limited Editions */}
          <div className="text-center">
            <div className="w-full h-80 mb-8 rounded border-2 overflow-hidden transition-transform duration-300 hover:-translate-y-1">
              <Image 
                src="/limited_editions.png" 
                alt="Limited Editions" 
                width={350} 
                height={320} 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-4 lowercase text-white">Limited Editions</h3>
            <p className="text-white/70 font-light">
              Vintage Carhartt Bartlett jackets reimagined for a modern audience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main
      className="relative flex flex-col items-center min-h-screen px-4"
      style={{
        backgroundImage: "url('/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40 z-0" />
      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center mt-24 mb-16">
          <Image
            src="/logo-white.png"
            alt="Upcycler Studios Logo"
            width={100}
            height={100}
            className="mb-6"
          />
          <h1 className="text-5xl font-bold mb-4 text-white">Upcycler Studios</h1>
          <p className="text-lg text-gray-100 max-w-2xl mb-6">
            Fashion in an infinite loop. Discover sustainable, upcycled fashion and innovative eco-friendly designs for everyone.
          </p>
          <Button className="px-8 py-3 text-lg text-white rounded-full" variant="expand">
            Shop Now
          </Button>
        </section>

        {/* Value Proposition Section */}
        <section className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white/80 rounded-lg shadow-md p-8 flex flex-col items-center transform transition-transform duraion-300 hover:scale-105">
            <Image src="/eco-materials.jpg" alt="Eco Materials" width={64} height={64} className="mb-4 rounded-full" />
            <h2 className="text-xl font-semibold mb-2">Eco-Friendly Materials</h2>
            <p className="text-gray-700 text-center">All our products are made from recycled and sustainable materials.</p>
          </div>
          <div className="bg-white/80 rounded-lg shadow-md p-8 flex flex-col items-center transform transition-transform duraion-300 hover:scale-105">
            <Image src="/innovative-designs.jpg" alt="Innovative Designs" width={64} height={64} className="mb-4 rounded-full" />
            <h2 className="text-xl font-semibold mb-2">Innovative Designs</h2>
            <p className="text-gray-700 text-center">Unique upcycled fashion pieces designed for modern living.</p>
          </div>
          <div className="bg-white/80 rounded-lg shadow-md p-8 flex flex-col items-center transform transition-transform duraion-300 hover:scale-105">
            <Image src="/community-projects.jpg" alt="Community Projects" width={64} height={64} className="mb-4 rounded-full" />
            <h2 className="text-xl font-semibold mb-2">Community Projects</h2>
            <p className="text-gray-700 text-center">We collaborate with local communities for a sustainable impact.</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-gray-200 text-sm text-center mb-4">
          &copy; {new Date().getFullYear()} Upcycler Studios. All rights reserved.
        </footer>
      </div>
    </main>
  );
}

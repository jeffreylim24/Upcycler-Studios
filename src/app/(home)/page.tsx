import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-gray-50 px-4">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center mt-24 mb-16">
        <Image
          src="/Logo.png"
          alt="Upcycler Studios Logo"
          width={100}
          height={100}
          className="mb-6"
        />
        <h1 className="text-5xl font-bold mb-4 text-primary">Upcycler Studios</h1>
        <p className="text-lg text-gray-600 max-w-2xl mb-6">
          Fashion in an infinite loop. Discover sustainable, upcycled fashion and innovative eco-friendly designs for everyone.
        </p>
        <Button className="px-8 py-3 text-lg rounded-full" variant="default">
          Shop Now
        </Button>
      </section>

      {/* Value Proposition Section */}
      <section className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center">
          <Image src="/eco-materials.jpg" alt="Eco Materials" width={64} height={64} className="mb-4 rounded-full" />
          <h2 className="text-xl font-semibold mb-2">Eco-Friendly Materials</h2>
          <p className="text-gray-600 text-center">All our products are made from recycled and sustainable materials.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center">
          <Image src="/innovative-designs.jpg" alt="Innovative Designs" width={64} height={64} className="mb-4 rounded-full" />
          <h2 className="text-xl font-semibold mb-2">Innovative Designs</h2>
          <p className="text-gray-600 text-center">Unique upcycled fashion pieces designed for modern living.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center">
          <Image src="/community-projects.jpg" alt="Community Projects" width={64} height={64} className="mb-4 rounded-full" />
          <h2 className="text-xl font-semibold mb-2">Community Projects</h2>
          <p className="text-gray-600 text-center">We collaborate with local communities for a sustainable impact.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-gray-500 text-sm text-center mb-4">
        &copy; {new Date().getFullYear()} Upcycler Studios. All rights reserved.
      </footer>
    </main>
  );
}
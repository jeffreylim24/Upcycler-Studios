import Link from "next/link";
import { Leaf, Droplets, Recycle, Heart, Globe, TrendingUp } from "lucide-react";

const impactStats = [
  {
    icon: <Recycle className="w-8 h-8" />,
    number: "500,000+",
    label: "Garments Saved",
    description: "Pieces rescued from landfills and given new life"
  },
  {
    icon: <Droplets className="w-8 h-8" />,
    number: "2.5M",
    label: "Gallons of Water Saved",
    description: "By choosing upcycled over new clothing production"
  },
  {
    icon: <Leaf className="w-8 h-8" />,
    number: "750 Tons",
    label: "CO2 Emissions Prevented",
    description: "Equivalent to planting 34,000 trees"
  },
  {
    icon: <Globe className="w-8 h-8" />,
    number: "50 Countries",
    label: "Global Community",
    description: "Creators making a difference worldwide"
  }
];

const sustainabilityPillars = [
  {
    icon: <Recycle className="w-12 h-12" />,
    title: "Circular Fashion",
    description: "We keep clothing in use longer by transforming pre-loved items into unique, desirable pieces. Every upcycled garment extends the lifecycle of textiles that would otherwise end up in landfills.",
    impact: "95% reduction in textile waste per item"
  },
  {
    icon: <Droplets className="w-12 h-12" />,
    title: "Water Conservation",
    description: "Traditional clothing production uses enormous amounts of water. By upcycling existing garments, we eliminate the need for water-intensive manufacturing processes.",
    impact: "2,700 gallons saved per garment vs. new production"
  },
  {
    icon: <Heart className="w-12 h-12" />,
    title: "Ethical Community",
    description: "We support independent creators and provide fair compensation for their skills. Our platform empowers individuals to build sustainable businesses while making a positive impact.",
    impact: "85% revenue share with our creators"
  },
  {
    icon: <TrendingUp className="w-12 h-12" />,
    title: "Conscious Consumption",
    description: "We promote mindful shopping by offering unique, high-quality pieces that encourage consumers to buy less but choose better. Quality over quantity.",
    impact: "Average item lifespan: 10+ years"
  }
];

const fashionFacts = [
  "Fashion is the 2nd most polluting industry in the world",
  "20% of global wastewater comes from textile dyeing",
  "85% of textiles end up in landfills each year",
  "It takes 2,700 liters of water to make one cotton t-shirt",
  "Fashion produces 10% of global carbon emissions",
  "By 2030, fashion waste is expected to increase by 60%"
];

const Page = () => {
  return (
    <div className="relative min-h-screen">
      {/* Fixed background */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10"
        style={{ backgroundImage: 'url("/background.jpg")' }}
      />
      
      {/* Scrollable content */}
      <div className="relative z-10 min-h-screen">
        {/* Hero section */}
        <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
            Our Impact
          </h1>
          <p className="text-xl md:text-2xl text-white drop-shadow-lg max-w-4xl mb-8">
            Fashion doesn&apos;t have to cost the Earth. Together, we&apos;re building a circular economy where creativity meets sustainability, one upcycled piece at a time.
          </p>
          <Link 
            href="/how-it-works"
            className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors shadow-lg"
          >
            Join Our Mission
          </Link>
        </div>

        {/* Impact stats */}
        <div className="bg-white/95 backdrop-blur-sm py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
              Making a Real Difference
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Every purchase and every upcycled item created on our platform contributes to a more sustainable future
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {impactStats.map((stat, index) => (
                <div key={index} className="text-center bg-white rounded-lg shadow-lg p-6 border-t-4 border-green-500">
                  <div className="bg-green-100 p-4 rounded-full text-green-600 mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-gray-700 mb-2">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fashion industry facts */}
        <div className="bg-gray-800/90 backdrop-blur-sm py-16 px-4 text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-6">
              The Fashion Industry Challenge
            </h2>
            <p className="text-xl text-center mb-12 opacity-90">
              The problem is real, but so is our solution
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {fashionFacts.map((fact, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                  <div className="text-red-400 text-4xl font-bold mb-2">!</div>
                  <p className="text-lg">{fact}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-2xl font-semibold text-green-400">
                That&apos;s why we exist. That&apos;s why your choice matters.
              </p>
            </div>
          </div>
        </div>

        {/* Sustainability pillars */}
        <div className="bg-white/95 backdrop-blur-sm py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
              How We&apos;re Changing Fashion
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {sustainabilityPillars.map((pillar, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-green-100 p-4 rounded-full text-green-600 mr-6">
                      {pillar.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {pillar.description}
                  </p>
                  <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                    <p className="text-green-700 font-semibold">
                      💚 {pillar.impact}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Future goals */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 py-16 px-4 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Our 2030 Goals
            </h2>
            <p className="text-xl mb-12 opacity-90">
              We&apos;re just getting started. Here&apos;s where we&apos;re headed:
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-4xl font-bold mb-2">5M</div>
                <div className="text-lg">Garments Saved</div>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-4xl font-bold mb-2">100K</div>
                <div className="text-lg">Active Creators</div>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-4xl font-bold mb-2">Zero</div>
                <div className="text-lg">Carbon Footprint</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/signup"
                className="bg-white text-gray-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Be Part of the Solution
              </Link>
              <Link 
                href="/all"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-800 transition-colors"
              >
                Shop Sustainably
              </Link>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="bg-white/95 backdrop-blur-sm py-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              Every Choice Counts
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              When you choose upcycled fashion, you&apos;re not just buying clothes—you&apos;re voting for a future where creativity, sustainability, and style go hand in hand. Join thousands of conscious consumers and creators making fashion circular.
            </p>
            <blockquote className="text-2xl italic text-gray-600 border-l-4 border-green-500 pl-6 mb-8">
              &quot;We don&apos;t inherit the Earth from our ancestors; we borrow it from our children.&quot;
            </blockquote>
            <Link 
              href="/about"
              className="text-green-600 font-semibold text-lg hover:underline"
            >
              Learn more about our story →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
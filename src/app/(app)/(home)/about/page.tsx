import Image from "next/image";

export function AboutPage() {
  return (
    <div className="pt-20 min-h-screen bg-black">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12">
          <p className="text-zinc-500 uppercase tracking-widest text-sm mb-4">Hear from our Founder</p>
          <h1 className="text-white mb-4 text-4xl md:text-5xl font-bold">Discarded materials, unique fashion.</h1>
          <div className="h-px bg-zinc-800 mb-12"></div>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-video mb-16 overflow-hidden bg-zinc-900">
            <Image
                src="/upcycler_studios_founder.jpg"
                alt="Upcycler Studios Founder"
                fill
                className="object-cover"
                priority
            />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-white mb-6 text-2xl font-semibold">How It Started</h2>
            <p className="text-zinc-400 mb-4">
              I needed an upcycled Nike crewneck for myself. When you deconstruct four crewnecks to create one new piece, you inevitably have leftover materials. Rather than waste them, I had additional pieces with similar designs made and started selling them on Carousell.
            </p>
            <p className="text-zinc-400">
              Fast forward three years, and I now run a physical store at Peninsula Shopping Centre.
            </p>
          </div>
          <div>
            <h2 className="text-white mb-6 text-2xl font-semibold">The Moment</h2>
            <p className="text-zinc-400 mb-4">
              When I first started designing and selling upcycled clothing, I felt that Singaporeans often had a stigma towards secondhand clothes. I didn't see upcycled clothes in that light—instead I saw them as one-of-a-kind garments that people can connect with.
            </p>
            <p className="text-zinc-400">
              I remember meeting an older collector on Carousell. After examining the crewnecks and stitching up close, she praised the designs, and we spent thirty minutes discussing the future of upcycled garments—how they serve as a positive force in the community. That conversation was the moment that gave me the confidence to commit fully to this path.
            </p>
          </div>
        </div>

        {/* Impact Stats */}
        <div className="border-t border-b border-zinc-800 py-12 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl text-white mb-2">3 Years</div>
              <p className="text-zinc-500 uppercase tracking-widest text-xs">In Business</p>
            </div>
            <div>
              <div className="text-4xl text-white mb-2">Physical Store</div>
              <p className="text-zinc-500 uppercase tracking-widest text-xs">Peninsula Shopping Centre</p>
            </div>
            <div>
              <div className="text-4xl text-white mb-2">100%</div>
              <p className="text-zinc-500 uppercase tracking-widest text-xs">Upcycled</p>
            </div>
          </div>
        </div>

        {/* Design Philosophy */}
        <div className="mb-20">
          <h2 className="text-white mb-12 text-center text-3xl font-semibold">Design Philosophy</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="aspect-[3/4] bg-zinc-900 mb-6 overflow-hidden"></div>
              <h3 className="text-white mb-2 text-xl">Bold & Flashy</h3>
              <p className="text-zinc-500 uppercase tracking-wider text-xs mb-4">Creative Direction</p>
              <p className="text-zinc-400 text-sm">
                My process starts with moodboarding and sketching without a fixed timeline. I test ideas with mentors and communities—from high fashion to the thrift scene—and refine based on feedback. I'm a person that gravitates more to flashy, attention-grabbing designs. I want to challenge people to style my pieces, and to own them in their own unique way.
              </p>
            </div>

            <div>
              <div className="aspect-[3/4] bg-zinc-900 mb-6 overflow-hidden"></div>
              <h3 className="text-white mb-2 text-xl">Waste Nothing</h3>
              <p className="text-zinc-500 uppercase tracking-wider text-xs mb-4">Process</p>
              <p className="text-zinc-400 text-sm">
                Cost is the biggest hurdle. Upcycled design is labor-intensive and expensive. To stay competitive with fast fashion, I design pieces that utilise offcuts and minimise waste. It's about balancing creativity with practicality so that upcycling can scale affordably. One of the designs I'm most proud of are our reverse flares.
              </p>
            </div>
          </div>
        </div>

        {/* Our Process */}
        <div className="border-t border-zinc-800 pt-16 mb-20">
          <h2 className="text-white mb-12 text-center text-3xl font-semibold">The Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-zinc-800 p-8">
              <div className="text-4xl mb-4 text-white">01</div>
              <h3 className="text-white mb-3">Source & Deconstruct</h3>
              <p className="text-zinc-500 text-sm">
                We source vintage pieces and carefully deconstruct them. When creating one piece, we often deconstruct four garments, ensuring every scrap of material is utilised rather than wasted.
              </p>
            </div>
            <div className="border border-zinc-800 p-8">
              <div className="text-4xl mb-4 text-white">02</div>
              <h3 className="text-white mb-3">Design & Craft</h3>
              <p className="text-zinc-500 text-sm">
                Through moodboarding and community feedback, we develop bold, attention-grabbing designs that challenge wearers to style them uniquely. Each piece is crafted to be truly one-of-a-kind.
              </p>
            </div>
            <div className="border border-zinc-800 p-8">
              <div className="text-4xl mb-4 text-white">03</div>
              <h3 className="text-white mb-3">Build Connections</h3>
              <p className="text-zinc-500 text-sm">
                Our pieces are built to last. Early buyers return years later, sharing how well their garments have held up. That long-term connection and product durability fuels our passion for this work.
              </p>
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="border-t border-zinc-800 pt-16 mb-20">
          <h2 className="text-white mb-8 text-3xl font-semibold">What's Next</h2>
          <div className="bg-zinc-900 p-8 rounded-lg">
            <p className="text-zinc-400 mb-4 text-lg">
              Singapore's sustainable fashion landscape has transformed exponentially over the past five years. Upcycled fashion used to be dismissed or stigmatised. Today, it's gaining real respect.
            </p>
            <p className="text-zinc-400 mb-4 text-lg">
              I hope to build a future in the fashion industry where upcycled clothing can compete directly with fast fashion as a genuine, sustainable alternative in terms of both affordability and style.
            </p>
            <p className="text-white text-2xl font-bold">
              Fashion should be an infinite loop.
            </p>
          </div>
        </div>

        {/* Signature Pieces */}
        <div className="border-t border-zinc-800 pt-16">
          <h2 className="text-white mb-8 text-3xl font-semibold">Signature Pieces</h2>
          <div className="aspect-video mb-8 overflow-hidden bg-zinc-900"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-zinc-800 p-6">
              <p className="text-white uppercase tracking-widest text-xs mb-2 font-semibold">Nike Crewnecks</p>
              <p className="text-zinc-500 text-sm">Where it all began—deconstructing vintage Nike pieces to create bold, unique designs</p>
            </div>
            <div className="border border-zinc-800 p-6">
              <p className="text-white uppercase tracking-widest text-xs mb-2 font-semibold">Reverse Flares</p>
              <p className="text-zinc-500 text-sm">One of our proudest designs—challenging conventional silhouettes</p>
            </div>
            <div className="border border-zinc-800 p-6">
              <p className="text-white uppercase tracking-widest text-xs mb-2 font-semibold">Curated Vintage</p>
              <p className="text-zinc-500 text-sm">Carefully selected vintage pieces that tell their own stories</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
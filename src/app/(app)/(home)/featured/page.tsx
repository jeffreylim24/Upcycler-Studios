"use client";
import { useState } from "react";
import Image from "next/image";

const featuredImages = [
    { src: "/one_piece_tee.jpg", alt: "Vintage One Piece Tee (M)" },
    { src: "/nike_air_tee.jpg", alt: "Vintage Grey Nike Air Tee (L-XL)" },
    { src: "/omaya_tee.jpg", alt: "Adidas Omaya Jersey (M)" },
    { src: "/deus_tee.jpg", alt: "Deus Ex Machina tee (XS-S)" },
];

const VISIBLE_COUNT = 3;
const ITEM_WIDTH = 240; // px (image + gap)

const Page = () => {
    const [startIdx, setStartIdx] = useState(0);
    const total = featuredImages.length;

    const scrollLeft = () => {
        setStartIdx((prev) => {
            const next = prev - VISIBLE_COUNT;
            return next < 0 ? Math.max(0, total - VISIBLE_COUNT) : next;
        });
    };
    const scrollRight = () => {
        setStartIdx((prev) => {
            const next = prev + VISIBLE_COUNT;
            return next >= total ? 0 : next;
        });
    };

    // Calculate translateX for smooth sliding
    const translateX = -(startIdx * ITEM_WIDTH);

    return (
        <main
            className="relative flex flex-col items-center min-h-screen px-4"
            style={{
                backgroundImage: "url('/background.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed", // This creates the window effect
            }}
        >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/40 z-0" />
            {/* Scrollable content container */}
            <div className="relative z-10 min-h-screen">
                <div className="flex flex-col items-center justify-center min-h-screen px-4">
                    <h1 className="text-4xl font-bold mb-6 mt-16 text-white">Featured Collection</h1>
                    <p className="text-lg text-center max-w-2xl mb-8 text-white">
                        Explore our Summer/Spring collection! Scroll to view all featured pieces.
                    </p>
                    
                    <div className="w-full max-w-5xl flex items-center">
                        <button
                            onClick={scrollLeft}
                            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 mr-2"
                            aria-label="Scroll left"
                        >
                            <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M15 19l-7-7 7-7" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        
                        <div
                            className="relative overflow-hidden flex-1"
                            style={{ WebkitOverflowScrolling: 'touch' }}
                        >
                            <div
                                className="flex gap-8 px-4 py-2 transition-transform duration-500 ease-in-out"
                                style={{
                                    transform: `translateX(${translateX}px)`,
                                    minWidth: `${VISIBLE_COUNT * ITEM_WIDTH}px`,
                                }}
                            >
                                {featuredImages.map((img) => (
                                    <div key={img.src} className="flex-shrink-0 transition-transform duration-300 hover:scale-105 hover:shadow-2xl" style={{ width: 200 }}>
                                        <Image
                                            src={img.src}
                                            alt={img.alt}
                                            width={200}
                                            height={270}
                                            className="rounded-lg shadow-lg object-cover"
                                        />
                                        <p className="mt-2 text-center text-white font-medium text-xs drop-shadow-lg">{img.alt}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <button
                            onClick={scrollRight}
                            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 ml-2"
                            aria-label="Scroll right"
                        >
                            <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M9 5l7 7-7 7" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                    
                    <button className="mt-8 px-6 py-2 bg-white text-gray-800 rounded-lg font-semibold hover:bg-gray-200 hover:scale-105 transition">
                        View All
                    </button>
                </div>
                
                {/* Add some extra content to demonstrate scrolling effect */}
                <div className="bg-white/90 backdrop-blur-sm p-8 mx-4 rounded-lg mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Upcycled Fashion?</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Every piece in our featured collection represents hours of careful restoration and creative vision. 
                        By choosing upcycled fashion, you&apos;re not just getting unique, high-quality clothing—you&apos;re 
                        making a positive impact on the environment and supporting sustainable fashion practices.
                    </p>
                </div>
            </div>
        </main>
    );
}

export default Page;
"use client";
import { useState } from "react";
import Image from "next/image";

const featuredImages = [
    { src: "/one_piece_tee.jpg", alt: "One Piece Tee" },
    { src: "/nike_air_tee.jpg", alt: "Nike Air Tee" },
    { src: "/omaya_tee.jpg", alt: "Omaya Tee" },
    { src: "/deus_tee.jpg", alt: "Deus Tee" },
    
];

const Page = () => {
    const [current, setCurrent] = useState(0);
    const total = featuredImages.length;

    const prevImage = () => setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
    const nextImage = () => setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));

    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
            style={{ backgroundImage: 'url("/background.jpg")' }}
        >
            <h1 className="text-4xl font-bold mb-6 mt-16 text-white">Featured Collection</h1>
            <p className="text-lg text-center max-w-2xl mb-8 text-white">
                Explore our Summer/Spring collection! Swipe to view all featured pieces.
            </p>
            <div className="flex items-center w-full max-w-2xl">
                <button onClick={prevImage} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 mr-4">
                    <span className="sr-only">Previous</span>
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
                </button>
                <div className="flex-1 flex justify-center">
                    <Image
                        src={featuredImages[current].src}
                        alt={featuredImages[current].alt}
                        width={400}
                        height={500}
                        className="rounded-lg shadow-lg object-cover"
                    />
                </div>
                <button onClick={nextImage} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 ml-4">
                    <span className="sr-only">Next</span>
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
                </button>
            </div>
            <div className="flex gap-2 mt-4">
                {featuredImages.map((img, idx) => (
                    <button
                        key={img.src}
                        onClick={() => setCurrent(idx)}
                        className={`w-3 h-3 rounded-full ${idx === current ? 'bg-green-700' : 'bg-gray-300'}`}
                        aria-label={`Go to image ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
export default Page;
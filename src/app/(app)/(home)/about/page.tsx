import Image from "next/image";


const Page = () => {
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
            {/* Mission Block */}
            <div className="relative z-10 w-full py-16 flex flex-col items-center shadow-md">
                <div className="max-w-4xl w-full px-4">
                    <h1 className="text-4xl font-bold mb-2 text-white text-center">About Us</h1>
                    <h2 className="text-xl font-semibold text-white mb-4 text-center italic">Where fashion is an infinite loop</h2>
                    <p className="text-md text-center text-white">
                        Through creative upcycling and sustainable design, we transform discarded textiles into unique, stylish pieces that tell a story and inspire change.
                    </p>
                </div>
            </div>
            {/* Founder Block */}
            <div 
                className="relative z-10 w-full bg-white py-16 flex flex-col items-center border-t border-gray-200 shadow-md">
                <div className="max-w-4xl w-full px-4 flex flex-col items-center">
                    <div className="flex flex-col md:flex-row gap-12 justify-center items-stretch w-full h-full">
                        {/* Founder 1 */}
                        <div className="flex flex-col items-center justify-center flex-1 min-w-[220px] h-full">
                            <Image 
                                src="/founder.jpg"
                                alt="Co-Founder of Upcycler Studios"
                                width={200}
                                height={200}
                                className="rounded-full shadow-lg mb-4 object-cover"
                            />
                            <h2 className="text-2xl font-semibold mb-2">Jay Kwok</h2>
                            <p className="text-center max-w-xs text-gray-700">
                                Jay Kwok Zheng Feng, our founder, is passionate about sustainability and creative reuse in the realm of fashion.
                            </p>
                        </div>
                        {/* Founder 2 */}
                        <div className="flex flex-col items-center justify-center flex-1 min-w-[220px] h-full">
                            <Image 
                                src="/founder.jpg"
                                alt="Co-Founder of Upcycler Studios"
                                width={200}
                                height={200}
                                className="rounded-full shadow-lg mb-4 object-cover"
                            />
                            <h2 className="text-2xl font-semibold mb-2">Co-founder</h2>
                            <p className="text-center max-w-xs text-gray-700">
                                Javier, co-founder, brings a creative vision and a drive for innovation, helping Upcycler Studios push the boundaries of sustainable fashion.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Additional Block */}
            <div 
                className="flex flex-col min-h-screen w-full bg-cover bg-center py-0 justify-center items-center"
                style={{ backgroundImage: 'url("/background2.png")' }}
            >
                <div className="relative z-10 max-w-4xl w-full px-4 flex flex-col items-center justify-center text-center">
                    <h2 className="text-2xl font-bold mb-4 text-white">Our Journey</h2>
                    <p className="max-w-2xl text-white">
                        Placeholder for more information about Upcycler Studios, such as our story, milestones, bestsellers etc. 
                    </p>
                </div>
            </div>
        </main>
    );
}

export default Page;
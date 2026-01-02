"use client";
import Spline from '@splinetool/react-spline';

const Page = () => {
    return (
        <main className='relative min-h-screen bg-black'>
            {/*Hero section with 3D jacket model*/}
            <section className='relative overflow-hidden bg-black'>
                <div className='mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2'>
                    {/* Left: 3D Jacket Model */}
                    <div className="relative h-[360px] w-full md:h-[520px]">
                        {/* Spline 3D Model */}
                        <div 
                            className="relative z-10 w-full h-full"
                            style={{ transform: 'perspective(1000px) rotateY(-8deg)' }}
                        >
                            <Spline 
                                scene="https://prod.spline.design/4s9lxoMe-7NBU1RG/scene.splinecode"
                                style={{width: '100%', height: '100%', pointerEvents:'none'}} 
                                onLoad={() => console.log('Spline loaded')}
                                onError={(error) => console.error('Spline error:', error)}
                            />
                        </div>
                    </div>
                    {/* Right: Copy + CTA */}
                    <div className="relative">
                        <p className="text-sm text-zinc-500">Featured</p>
                        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                            Upcycled Nike Hoodie
                        </h2>
                        <p className="mt-4 max-w-prose text-zinc-400">
                            A bold statement piece—premium craftsmanship, sustainable design, built for those who stand out.
                        </p>

                        <div className="mt-8 flex items-center gap-4">
                            <button className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black hover:bg-zinc-200 transition">
                                Shop now
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Page;
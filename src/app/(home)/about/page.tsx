import Image from "next/image";


const Page = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-2">About Us</h1>
            <h2 className="text-xl font-semibold text-green-700 mb-4">Where fashion is an infinite loop</h2>
        
            <p className="text-md text-center max-w-2xl text-gray-600">
                Through creative upcycling and sustainable design, we transform discarded textiles into unique, stylish pieces that tell a story and inspire change.
            </p>
            <div className="flex flex-col items-center mt-10">
                <Image 
                    src="/founder.jpg"
                    alt="Founder of Upcycler Studios"
                    width={200}
                    height={200}
                    className="rounded-full shadow-lg mb-4 object-cover"
                />
                <h2 className="text-2xl font-semibold mb-2">Jay Kwok</h2>
                <p className="text-center max-w-md text-gray-700">
                    Jay Kwok Zheng Feng, our founder, is passionate about sustainability and creative reuse in the realm of fashion.
                </p>
            </div>
        </div>
    );
}
export default Page;
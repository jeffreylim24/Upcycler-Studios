import Image from 'next/image';

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <h2 className="text-2xl font-semibold mb-2">Where fashion is an infinite loop!</h2>
      <p className="text-lg text-center max-w-2xl mb-8">
        Through creative upcycling, we transform discarded materials into unique fashion pieces, promoting sustainability and reducing waste. Our mission is to inspire a circular economy in the fashion industry.
      </p>
      <Image
        src="/Founder.jpg"
        alt="Founder"
        width={250}
        height={250}
        className="rounded-full mb-4 object-cover"
      />
      <div className="text-center max-w-xl">
        <h2 className="text-2xl font-semibold mb-2">Meet Our Founder</h2>
        <p>
          Mr Jay Kwok Zheng Feng is the visionary behind Upcycler Studios. With a passion for sustainable fashion and years of experience in the industry, John is dedicated to making a positive impact on the world through innovative upcycling solutions.
        </p>
      </div>
    </div>
  );
}

export default Page;
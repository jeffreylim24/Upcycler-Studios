const featuredItems = [
  {
    title: "Eco-Friendly Materials",
    description: "Discover our latest products made from 100% recycled materials.",
    image: "/eco-materials.jpg", // Place your image in the public folder or use a placeholder
  },
  {
    title: "Innovative Designs",
    description: "Explore unique upcycled fashion pieces designed for modern living.",
    image: "/innovative-designs.jpg",
  },
  {
    title: "Community Projects",
    description: "See how we collaborate with local communities for sustainable impact.",
    image: "/community-projects.jpg",
  },
];

const Page = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 px-4 py-12">
      <h1 className="text-4xl font-bold mb-2 text-primary">Featured</h1>
      <p className="text-lg text-center mb-8 max-w-xl text-gray-600">
        Check out our most exciting projects, products, and initiatives!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {featuredItems.map((item, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <img
              src={item.image}
              alt={item.title}
              className="w-32 h-32 object-cover rounded-full mb-4 border"
            />
            <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
            <p className="text-center text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
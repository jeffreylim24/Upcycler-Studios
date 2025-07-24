const menProducts = [
  {
    title: "Recycled Denim Jacket",
    description: "A stylish jacket made from upcycled denim, perfect for any season.",
    image: "/men-denim-jacket.jpg", // Place your image in the public folder
  },
  {
    title: "Organic Cotton Tee",
    description: "Soft, breathable, and sustainable—our best-selling men's t-shirt.",
    image: "/men-cotton-tee.jpg",
  },
  {
    title: "Eco Sneakers",
    description: "Step out in comfort and style with sneakers made from recycled materials.",
    image: "/men-eco-sneakers.jpg",
  },
];

const Page = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 px-4 py-12">
      <h1 className="text-4xl font-bold mb-2 text-primary">Men's Collection</h1>
      <p className="text-lg text-center mb-8 max-w-xl text-gray-600">
        Explore our sustainable and stylish men's fashion, crafted with care for the planet.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {menProducts.map((item, idx) => (
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
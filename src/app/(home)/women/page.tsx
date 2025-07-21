const womenProducts = [
  {
    title: "Upcycled Denim Dress",
    description: "A chic dress crafted from repurposed denim, blending style and sustainability.",
    image: "/women-denim-dress.jpg", // Place your image in the public folder
  },
  {
    title: "Organic Cotton Blouse",
    description: "Elegant and eco-friendly, this blouse is perfect for any occasion.",
    image: "/women-cotton-blouse.jpg",
  },
  {
    title: "Recycled Tote Bag",
    description: "Carry your essentials in style with our tote made from recycled fabrics.",
    image: "/women-tote-bag.jpg",
  },
];

const Page = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 px-4 py-12">
      <h1 className="text-4xl font-bold mb-2 text-primary">Women's Collection</h1>
      <p className="text-lg text-center mb-8 max-w-xl text-gray-600">
        Discover our sustainable and fashionable women's collection, designed for conscious living.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {womenProducts.map((item, idx) => (
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
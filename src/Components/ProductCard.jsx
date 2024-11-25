import React from 'react';

const ProductCard = () => {
  const products = [
    { id: 1, title: "Product 1", price: "₹999", img: "https://assets.ajio.com/medias/sys_master/root/20231021/NRMe/6532ff3bafa4cf41f556b9fd/-473Wx593H-466731836-green-MODEL.jpg" },
    { id: 2, title: "Product 2", price: "₹999", img: "https://via.placeholder.com/150" },
    { id: 3, title: "Product 3", price: "₹999", img: "https://via.placeholder.com/150" },
    { id: 4, title: "Product 4", price: "₹999", img: "https://via.placeholder.com/150" },
    { id: 5, title: "Product 5", price: "₹999", img: "https://via.placeholder.com/150" },
    { id: 6, title: "Product 6", price: "₹999", img: "https://via.placeholder.com/150" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-16">
      {products.map((product) => (
        <div
          key={product.id}
          className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden"
        >
          <img
            className="w-full h-48 object-cover"
            src={product.img}
            alt={product.title}
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>
            <p className="mt-2 text-sm text-gray-600">
              A short description of the product goes here. Highlight its key features.
            </p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-xl font-bold text-gray-800">{product.price}</span>
              <button className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-600">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;

import React, { useState, useContext } from "react";
import { CartContext } from "../Pages/CartContext";
import Swal from "sweetalert2"; 

const ProductDetails = () => {
  const [selectedImage, setSelectedImage] = useState(
    "https://images.meesho.com/images/products/155189667/dy8ue_512.webp"
  );

  const { addToCart } = useContext(CartContext);

  const productImages = [
    "https://www.bullionknot.com/cdn/shop/files/01_optimized_500_b266e87b-cd57-48de-aa25-08d06b14e586.jpg?v=1722601593&width=900",
    "https://images.meesho.com/images/products/155189667/dy8ue_512.webp",
    "https://rukminim2.flixcart.com/image/550/650/l407mvk0/dress/k/z/j/m-52aa-forntas-original-imagfyyzpzbkp6vs.jpeg?q=90&crop=false",
    "https://www.jiomart.com/images/product/original/rvyz0qrdhf/daily-colours-georgette-western-round-neck-half-sleaves-western-dress-for-woman-multicolor4-_-small-_-product-images-rvyz0qrdhf-1-202402241828.jpg?im=Resize=(500,630)",
  ];

  const product = {
    id: 1,
    name: "Gucci Glitter Ruched Wrap Bodycon Dress",
    price: 973,
    image: selectedImage,
  };

  const handleAddToCart = () => {
    addToCart(product);

    Swal.fire({
      title: "Success!",
      text: `${product.name} has been added to your cart.`,
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-8 bg-gray-100">
      <div className="flex flex-wrap my-36 gap-4 justify-center lg:flex-col">
        {productImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Product Thumbnail ${index + 1}`}
            className={`w-20 h-20 object-cover cursor-pointer border-2 ${selectedImage === img ? "border-blue-500" : "border-gray-300"}`}
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>

      <div className="flex-1 max-w-full ">
        <img
          src={selectedImage}
          alt="Selected Product"
          className="w-full h-3/4 object-cover rounded-lg shadow-md"
        />
      </div>

      <div className="flex-1  h-full space-y-6 mt-6 lg:mt-0">
        <h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>
        <div className="text-yellow-500">
          ⭐⭐⭐⭐⭐ <span className="text-gray-500">(177 Reviews)</span>
        </div>
        <p className="text-2xl font-semibold text-gray-800">
          ₹{product.price}{" "}
          <span className="text-gray-500 line-through text-lg">₹1119</span>
        </p>

        <div>
          <h3 className="text-sm font-medium text-gray-700">Size</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {["S", "M", "L", "XL", "XXL"].map((size) => (
              <button
                key={size}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm hover:bg-blue-100"
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <button
            onClick={handleAddToCart}
            className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

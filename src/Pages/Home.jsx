// import React from "react";
import React, { useContext } from "react";
import { CartContext } from '../Pages/CartContext'; 
import Swal from "sweetalert2";


const HomePage = () => {
  const { addToCart } = useContext(CartContext); 

  const products = [
    {
      id: 1,
      name: "Product Phone",
      price: 20,
      image: "https://img.freepik.com/premium-photo/online-fashion-shopping-collage_23-2150535851.jpg?w=740",
    },
    {
      id: 2,
      name: "Product Laptop",
      price: 30,
      image: "https://img.freepik.com/premium-photo/creative-online-shopping-concept_670147-38478.jpg?w=996",
    },
    {
      id: 3,
      name: "Product phone1",
      price: 25,
      image: "https://img.freepik.com/premium-photo/shopping-online-by-smartphone-application_220701-22.jpg?w=996",
    },
    {
      id: 4,
      name: "Product shop",
      price: 40,
      image: "https://img.freepik.com/premium-vector/woman-review-selling-her-product-through-live-streaming-social-commerce-platform-illustration_210682-974.jpg?w=826",
    },
    ,
    {
      id: 5,
      name: "Product computer",
      price: 25,
      image: "https://img.freepik.com/free-vector/online-shopping-smartphone-business-team-call-customer-online-shopping-seo-analytics-team-digital-service-marketplace-247-service-metaphor-marketing-strategies-sales-promotion-activities_1150-58764.jpg?t=st=1732501822~exp=1732505422~hmac=aca95f84fb9551bac0051221088068a9d45153d2981cce12848411ce5b63d9ea&w=996",
    },
    {
      id: 6,
      name: "Product shopw3",
      price: 40,
      image: "https://img.freepik.com/free-vector/niche-service-marketplace-concept-illustration_114360-7403.jpg?t=st=1732501861~exp=1732505461~hmac=3b518fb58b72645af5a3b91ebfc8c3d862c59b632c57fe34ec7bc39d624e0cd6&w=740",
    },
    ,
    {
      id: 7,
      name: "Product laptop4",
      price: 25,
      image: "https://img.freepik.com/free-photo/clothes-laptop-bed-arrangement-high-angle_23-2149726124.jpg?t=st=1732501519~exp=1732505119~hmac=821f340b4d6badd548d5c512215821525d02a8231b6cde82bedf0ca41d420ba8&w=996",
    },
    {
      id: 8,
      name: "Product laptop5",
      price: 40,
      image: "https://img.freepik.com/free-photo/clothes-laptop-bed-arrangement-high-angle_23-2149726124.jpg?t=st=1732501519~exp=1732505119~hmac=821f340b4d6badd548d5c512215821525d02a8231b6cde82bedf0ca41d420ba8&w=996",
    },{
      id: 9,
      name: "Product o",
      price: 40,
      image: "https://img.freepik.com/premium-photo/online-shopping-concept-3d-rendering_380580-252.jpg?w=1060",
    },
    ,
    {
      id: 10,
      name: "Product j",
      price: 25,
      image: "https://img.freepik.com/free-photo/woman-working-from-home-coronavirus-covid-19-quarantine-remote-office-concept_155003-12402.jpg?t=st=1732501938~exp=1732505538~hmac=85d4b22e3c81dd15008f49a53cdfaa5dd86e67ee5cab613fb1481de915483de1&w=996",
    },
    {
      id: 11,
      name: "Product l",
      price: 40,
      image: "https://img.freepik.com/premium-photo/stock-exchange-investment-hand-press-digital-tablet-trading-graph-workplace-evaluating-market-value_103643-59.jpg?w=996",
    },{
      id: 12,
      name: "Product n",
      price: 40,
      image: "https://img.freepik.com/free-photo/woman-working-from-home-coronavirus-covid-19-quarantine-remote-office-concept_155003-12402.jpg?t=st=1732501938~exp=1732505538~hmac=85d4b22e3c81dd15008f49a53cdfaa5dd86e67ee5cab613fb1481de915483de1&w=996",
    },
   
  ];
  const handleAddToCart = (product) => {
    addToCart(product); 

    
    Swal.fire({
      title: "Added to Cart!",
      text: `${product.name} has been added to your cart.`,
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  return (
    <div className="max-w-8xl mx-auto p-6">
      <h2 className="text-4xl font-bold text-center mb-4">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg shadow hover:shadow-md h-96 p-9"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-44 object-cover mb-9 rounded"
            />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">${product.price}</p>
            <button
              onClick={() => handleAddToCart(product)} 
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

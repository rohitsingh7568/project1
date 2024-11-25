import React, { useContext } from "react";
import { CartContext } from "../Pages/CartContext";
import { useNavigate } from "react-router-dom"; 

const ShoppingCart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
  const navigate = useNavigate(); 

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleIncrease = (item) => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const handleDecrease = (item) => {
    updateQuantity(item.id, item.quantity - 1);
  };

  const handleBuyNow = () => {
    navigate("/checkout"); 
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b">
                <th className="p-2">Product</th>
                <th className="p-2">Price</th>
                <th className="p-2">Quantity</th>
                <th className="p-2">Subtotal</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="p-2">{item.name}</td>
                  <td className="p-2">₹{item.price}</td>
                  <td className="p-2 flex items-center gap-2">
                    <button
                      onClick={() => handleDecrease(item)}
                      className="px-2 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500"
                    >
                      -
                    </button>
                    {item.quantity}
                    <button
                      onClick={() => handleIncrease(item)}
                      className="px-2 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500"
                    >
                      +
                    </button>
                  </td>
                  <td className="p-2">₹{(item.price * item.quantity).toFixed(2)}</td>
                  <td className="p-2 space-x-2">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4 text-right">
            <p className="text-xl font-semibold">Total: ₹{totalPrice.toFixed(2)}</p>
          </div>
          <div className="mt-6 text-right">
            <button
              onClick={handleBuyNow}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Buy Now
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;

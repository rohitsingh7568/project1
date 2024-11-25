import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./Pages/CartContext"; 
import { OrderProvider } from "./Pages/OrderContext"; // Import OrderProvider
import "./index.css";
import Navbar from "./Pages/Navabr";
import Login from "./Pages/Login";
import HomePage from "./Pages/Home";
import ShoppingCart from "./Components/ShoppingCard";
import MyOrders from "./Components/OrderManagement";
import ProductDetails from "./Components/ProductDetails";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider> 
      <OrderProvider> 
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />

            <Route
              path="/home"
              element={
                <>
                  <Navbar />
                  <HomePage />
                </>
              }
            />
            <Route
              path="/cart"
              element={
                <>
                  <Navbar />
                  <ShoppingCart />
                </>
              }
            />
            <Route
              path="/orders"
              element={
                <>
                  <Navbar />
                  <MyOrders />
                </>
              }
            />
            <Route
              path="/ProductDetails"
              element={
                <>
                  <Navbar />
                  <ProductDetails />
                </>
              }
            />
            <Route
              path="/ShoppingCart"
              element={
                <>
                  <Navbar />
                  <ShoppingCart />
                </>
              }
            />
          </Routes>
        </Router>
      </OrderProvider>
    </CartProvider>
  </React.StrictMode>
);

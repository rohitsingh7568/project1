import React, { useState } from "react";
import { FaPowerOff, FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/"); 
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-gray-800 text-white  px-4 py-6">
      <div className="max-w-8xl mx-auto flex justify-around items-center">

        <div className="text-lg  font-bold">Shekhawat@</div>

        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        <ul
          className={`lg:flex gap-6 absolute lg:static top-16 left-0 w-full bg-black lg:bg-transparent  lg:w-auto lg:gap-6 lg:items-center lg:transition-none transition-all ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <li className="p-4 lg:p-0">
            <Link
              to="/home"
              className="hover:text-gray-300 transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="p-4 lg:p-0">
            <Link
              to="/orders"
              className="hover:text-gray-300 transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              My Orders
            </Link>
          </li>
          <li className="p-4 lg:p-0">
            <Link
              to="/ProductDetails"
              className="hover:text-gray-300 transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Product List
            </Link>
          </li>
          <li className="p-4 lg:p-0">
            <Link
              to="/ShoppingCart"
              className="hover:text-gray-300 transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Shopping Cart
            </Link>
          </li>
        </ul>

        {/* Logout Button */}
        <div className="flex items-center gap-4">
          <button
            className="btn btn-outline-dark rounded-1 lg:ml-4"
            type="button"
            onClick={handleLogout}
          >
            <FaPowerOff />
          </button>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;


import React, { useState } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { ImHeart } from "react-icons/im";
import { FaShoppingCart, FaBox } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import UpdateProfileImage from "../../pages/UpdateProfileImage";

const Navbar = ({ user, setUser, cart = [], wishlist = [] }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-black w-full shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* 🔥 Logo */}
        <div className="flex items-center">
          <img
            src="https://www.pinclipart.com/picdir/big/174-1744436_bbq-logo-clipart.png"
            alt="Logo"
            className="w-14 h-14 object-contain"
          />
        </div>

        {/* 🖥 Desktop Navigation */}
        <ul className="hidden lg:flex space-x-8 text-orange-400 font-semibold text-sm">
          {navLinks.map((item, index) => (
            <li key={index} className="relative group uppercase tracking-wide">
              <Link
                to={item.path}
                className="group-hover:text-orange-300 transition duration-300"
              >
                {item.name}
              </Link>
              <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-6px] h-[2px] w-0 group-hover:w-full bg-orange-500 transition-all duration-300 rounded-full"></div>
            </li>
          ))}
        </ul>

        {/* 🔒 User Section */}
        <div className="hidden lg:flex items-center space-x-6 text-white">
          {user ? (
            <>
              {/* ❤️ Wishlist */}
              <Link to="/wishlist" className="relative">
                <ImHeart className="text-2xl hover:text-pink-400 transition" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full shadow">
                    {wishlist.length}
                  </span>
                )}
              </Link>

              {/* 🛒 Cart */}
              <Link to="/cart" className="relative">
                <FaShoppingCart className="text-2xl hover:text-yellow-300 transition" />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full shadow">
                    {cart.length}
                  </span>
                )}
              </Link>

              {/* 📦 Orders */}
              <Link to="/orders">
                <FaBox className="text-2xl hover:text-green-300 transition" />
              </Link>

              {/* 👤 Profile */}
              <div className="relative group">
                <img
                  src={
                    user.profileImage ||
                    "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png"
                  }
                  alt="profile"
                  className="w-12 h-12 rounded-full cursor-pointer"
                  onClick={() => navigate("/edit-profile")}
                />
                {/* <div className="absolute top-10 left-0 hidden group-hover:block bg-black p-2 z-50">
                  <UpdateProfileImage user={user} setUser={setUser} />
                </div> */}
              </div>
            </>
          ) : (
            <>
              <div
                className="flex items-center space-x-2 cursor-pointer hover:text-orange-300"
                onClick={() => navigate("/login")}
              >
                <i className="fas fa-user-lock text-lg"></i>
                <span className="text-sm">Sign In</span>
              </div>
              <button
                onClick={() => navigate("/signup")}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full shadow-md hover:shadow-green-400 transition duration-300 font-semibold text-sm"
              >
                Sign Up
              </button>
            </>
          )}
        </div>

        {/* 📱 Mobile Toggle */}
        <div
          className="lg:hidden text-orange-400 text-3xl cursor-pointer"
          onClick={toggleDrawer}
        >
          <IoReorderThreeOutline />
        </div>
      </div>

      {/* 📱 Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-black px-6 pb-4 text-orange-400 space-y-4 animate-slide-down">
          {navLinks.map((item, index) => (
            <div
              key={index}
              className="uppercase font-semibold border-b border-orange-700 py-2"
            >
              <Link to={item.path} onClick={() => setIsOpen(false)}>
                {item.name}
              </Link>
            </div>
          ))}

          {user && (
            <>
              <div
                className="uppercase font-semibold border-b border-orange-700 py-2 flex items-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                <ImHeart />
                <Link to="/wishlist">Wishlist</Link>
                {wishlist.length > 0 && (
                  <span className="ml-1 bg-red-500 text-white px-2 rounded-full text-xs">
                    {wishlist.length}
                  </span>
                )}
              </div>

              <div
                className="uppercase font-semibold border-b border-orange-700 py-2 flex items-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                <FaShoppingCart />
                <Link to="/cart">Cart</Link>
                {cart.length > 0 && (
                  <span className="ml-1 bg-red-500 text-white px-2 rounded-full text-xs">
                    {cart.length}
                  </span>
                )}
              </div>

              <div
                className="uppercase font-semibold border-b border-orange-700 py-2 flex items-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                <FaBox />
                <Link to="/orders">Orders</Link>
              </div>
            </>
          )}

          <div className="flex flex-col space-y-2">
            {user ? (
              <div className="flex items-center gap-2 mt-4">
                <img
                  src={
                    user.profileImage ||
                    "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png"
                  }
                  alt="profile"
                  className="w-[3rem] h-[3rem] rounded-full cursor-pointer"
                  onClick={() => navigate("/edit-profile")}
                />
                {/* <span className="text-sm text-white">{user.email}</span> */}
              </div>
            ) : (
              <>
                <span
                  onClick={() => {
                    navigate("/login");
                    setIsOpen(false);
                  }}
                  className="hover:text-orange-300 cursor-pointer"
                >
                  Sign In
                </span>
                <button
                  onClick={() => {
                    navigate("/signup");
                    setIsOpen(false);
                  }}
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full shadow-md hover:shadow-green-400 transition duration-300 font-semibold text-sm"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
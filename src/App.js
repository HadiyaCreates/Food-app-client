
import "./App.css";
import Navbar from "./Components/Header/Navbar";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import EditProfile from "./pages/EditProfile";
import Menu from "./Components/Menu/Menu";
import Wishlist from "./Components/wishlist/Whishlist";
import ScrollToTop from "./Components/ScrollToTop";
import CartPage from "./pages/CartPage";
import Contact from "./Components/Contact/Contact";
import Coupon from "./Components/Offer/Coupon";
import Payment from "./Components/Payment/Payment";
import Orders from "./Components/Order/Orders";

function App() {
  const [user, setUser] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [discount, setDiscount] = useState(0);

  // Load user on app start
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Load cart and wishlist from localStorage when user changes
  useEffect(() => {
    if (user?.email) {
      const userWishlist = localStorage.getItem(`wishlist-${user.email}`);
      const userCart = localStorage.getItem(`cart-${user.email}`);

      setWishlist(userWishlist ? JSON.parse(userWishlist) : []);
      setCart(userCart ? JSON.parse(userCart) : []);
    } else {
      setWishlist([]);
      setCart([]);
    }
  }, [user]);

  // Save wishlist to user-specific localStorage
  useEffect(() => {
    if (user?.email) {
      localStorage.setItem(`wishlist-${user.email}`, JSON.stringify(wishlist));
    }
  }, [wishlist, user]);

  // Save cart to user-specific localStorage
  useEffect(() => {
    if (user?.email) {
      localStorage.setItem(`cart-${user.email}`, JSON.stringify(cart));
    }
  }, [cart, user]);

  return (
    <div>
      <ScrollToTop />
      <Navbar user={user} setUser={setUser} cart={cart} wishlist={wishlist} />

      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup setUser={setUser} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/contact" element={<Contact setUser={setUser} />} />
        <Route path="/edit-profile" element={<EditProfile user={user} setUser={setUser} />} />

        <Route
          path="/wishlist"
          element={
            <Wishlist
              wishlist={wishlist}
              setWishlist={setWishlist}
              cart={cart}
              setCart={setCart}
            />
          }
        />

        {["/pizza", "/pasta", "/desserts", "/drinks", "/salad", "/menu"].map((path) => (
          <Route
            key={path}
            path={path}
            element={
              <Menu
                wishlist={wishlist}
                setWishlist={setWishlist}
                cart={cart}
                setCart={setCart}
              />
            }
          />
        ))}

        <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
        <Route path="/coupons" element={<Coupon cart={cart} setDiscount={setDiscount} />} />
        <Route path="/payment" element={<Payment user={user} cart={cart} setCart={setCart} />} />
        <Route path="/orders" element={<Orders user={user}/>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
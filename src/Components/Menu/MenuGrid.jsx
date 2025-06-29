
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import FoodCard from './FoodCard';

// List of categories shown in UI tabs
const categories = ["All", "Pizza", "Pasta", "Dessert", "Drinks", "Salad"];

// Map route names to category names used in your DB
const categoryMap = {
  pizza: "Pizza",
  pasta: "Pasta",
  desserts: "Dessert", // 🔁 route: /desserts → category: Dessert
  drinks: "Drinks",
  salad: "Salad",
  menu: "All",
  "": "All"
};

const MenuGrid = ({ wishlist, setWishlist, cart, setCart  }) => {
  const location = useLocation();
  const path = location.pathname.split('/')[1]; // e.g., "pizza", "desserts"
  const initialCategory = categoryMap[path] || "All";

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [foodItems, setFoodItems] = useState([]);

  // Update selected category whenever path changes
  useEffect(() => {
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

  // Fetch food items from API
  useEffect(() => {
    axios.get('http://localhost:8000/api/foods')
      .then(res => setFoodItems(res.data))
      .catch(err => console.error(err));
  }, []);

  // Filter food based on selected category
  const filteredItems = selectedCategory === "All"
    ? foodItems
    : foodItems.filter(item => item.category === selectedCategory);

  return (
    <div className="bg-[#1f1f1f] min-h-screen p-6">
      <h1 className="text-white text-2xl font-bold mb-4">Taste You Like</h1>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap gap-3 mb-6">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-1 rounded-full font-semibold 
              ${selectedCategory === cat ? 'bg-yellow-500 text-black' : 'bg-gray-800 text-white'}
              hover:bg-yellow-600 transition`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Food Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <FoodCard
            key={item._id}
            {...item}
            isWishlisted={wishlist.some(w => w._id === item._id)}
            toggleWishlist={() => {
              const exists = wishlist.some(w => w._id === item._id);
              if (exists) {
                setWishlist(wishlist.filter(w => w._id !== item._id));
              } else {
                setWishlist([...wishlist, item]);
              }
            }}
             cart={cart}
             setCart={setCart}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuGrid;



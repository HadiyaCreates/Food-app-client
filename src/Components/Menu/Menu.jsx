// import React from 'react'
// import MenuGrid from './MenuGrid'
// const Menu = ({ wishlist, setWishlist }) => {
//   return <MenuGrid wishlist={wishlist} setWishlist={setWishlist} />;
// };

// export default Menu
// ✅ updated Menu.jsx
import React from 'react';
import MenuGrid from './MenuGrid';

const Menu = ({ wishlist, setWishlist, cart, setCart }) => {
  return (
    <MenuGrid
      wishlist={wishlist}
      setWishlist={setWishlist}
      cart={cart}
      setCart={setCart}
    />
  );
};

export default Menu;

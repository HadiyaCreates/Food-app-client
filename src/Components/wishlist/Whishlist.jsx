import React from 'react';
import FoodCard from '../Menu/FoodCard';

// const Wishlist = ({ wishlist, setWishlist }) => {
//   return (
//     <div className="bg-[#1f1f1f] min-h-screen p-6">
//       {/* <h2 className="text-white text-2xl font-bold mb-4">Your Wishlist</h2> */}

//       {wishlist.length === 0 ? (
//    <div className="flex justify-center">
//   <p className="text-gray-400">No items in wishlist yet.</p>
// </div>
//       ) : (
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//           {wishlist.map(item => (
//          <FoodCard
//   key={item._id}
//   {...item}
//   isWishlisted={true}
//   toggleWishlist={() => {
//     setWishlist(wishlist.filter(w => w._id !== item._id));
//   }}
// />

//           ))}
//         </div>
//       )}
//     </div>
//   );
// };
const Wishlist = ({ wishlist, setWishlist, cart, setCart, user }) => {
  return (
    <div className="bg-[#1f1f1f] min-h-screen p-6">
      {wishlist.length === 0 ? (
        <div className="flex justify-center">
          <p className="text-gray-400">No items in wishlist yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {wishlist.map(item => (
            <FoodCard
              key={item._id}
              {...item}
              cart={cart}
              setCart={setCart}
              isWishlisted={true}
                user={user}     
              toggleWishlist={() =>
                setWishlist(wishlist.filter(w => w._id !== item._id))
              }
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;

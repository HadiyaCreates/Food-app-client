// import React from 'react'

// const Icons = () => {
//   return (
//     <div>
//       {/* Feature section */}
// <div className="bg-black py-10 text-white mt-12">
//   <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6 text-center">
    
//     <div className="flex flex-col items-center">
//       <img src="https://img.icons8.com/ios-filled/50/vegetarian-food.png" className="w-12 h-12 mb-3" alt="fresh food" />
//       <h3 className="text-lg font-bold text-yellow-400">Fresh Ingredients</h3>
//       <p className="text-sm text-gray-300 mt-1">We prepare meals with farm-fresh produce.</p>
//     </div>

//     <div className="flex flex-col items-center">
//       <img src="https://img.icons8.com/ios-filled/50/delivery.png" className="w-12 h-12 mb-3" alt="fast delivery" />
//       <h3 className="text-lg font-bold text-yellow-400">Fast Delivery</h3>
//       <p className="text-sm text-gray-300 mt-1">Hot & delicious food delivered quickly.</p>
//     </div>

//     <div className="flex flex-col items-center">
//       <img src="https://img.icons8.com/ios-filled/50/restaurant-menu.png" className="w-12 h-12 mb-3" alt="verified chefs" />
//       <h3 className="text-lg font-bold text-yellow-400">Verified Chefs</h3>
//       <p className="text-sm text-gray-300 mt-1">Trusted chefs preparing with care.</p>
//     </div>

//     <div className="flex flex-col items-center">
//       <img src="https://img.icons8.com/ios-filled/50/take-away-food.png" className="w-12 h-12 mb-3" alt="support" />
//       <h3 className="text-lg font-bold text-yellow-400">24/7 Support</h3>
//       <p className="text-sm text-gray-300 mt-1">We’re here anytime you need us.</p>
//     </div>

//   </div>
// </div>

//     </div>
//   )
// }

// export default Icons
import React from "react";

const Icons = () => {
  return (
    <div className="bg-black py-14">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-center gap-10 px-6">

        {/* 1. Fresh Ingredients */}
        <div>
          <img
            src="https://img.icons8.com/ios-filled/50/FFA500/vegetarian-food.png"
            alt="fresh"
            className="mx-auto mb-4"
          />
          <h3 className="text-white font-semibold text-sm tracking-wide uppercase">
            Fresh Ingredients
          </h3>
          <p className="text-gray-400 text-xs mt-1">
            Only natural and quality produce used.
          </p>
        </div>

        {/* 2. Fast Delivery */}
        <div>
          <img
            src="https://img.icons8.com/ios-filled/50/FFA500/delivery.png"
            alt="delivery"
            className="mx-auto mb-4"
          />
          <h3 className="text-white font-semibold text-sm tracking-wide uppercase">
            Fast Delivery
          </h3>
          <p className="text-gray-400 text-xs mt-1">
            Hot meals delivered right to your door.
          </p>
        </div>

        {/* 3. Verified Chefs */}
        <div>
          <img
            src="https://img.icons8.com/ios-filled/50/FFA500/restaurant-menu.png"
            alt="chefs"
            className="mx-auto mb-4"
          />
          <h3 className="text-white font-semibold text-sm tracking-wide uppercase">
            Verified Chefs
          </h3>
          <p className="text-gray-400 text-xs mt-1">
            Experienced chefs you can trust.
          </p>
        </div>

        {/* 4. 24/7 Support */}
        <div>
          <img
            src="https://img.icons8.com/ios-filled/50/FFA500/take-away-food.png"
            alt="support"
            className="mx-auto mb-4"
          />
          <h3 className="text-white font-semibold text-sm tracking-wide uppercase">
            24/7 Support
          </h3>
          <p className="text-gray-400 text-xs mt-1">
            We're always here when you need us.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Icons;

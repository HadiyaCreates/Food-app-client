// import React, { useState } from "react";
// import confettiBg from "../assets"; // ✅ Make sure this is inside src/assets

// const CouponPopup = ({ onClose, coupon }) => {
//   return (
//     <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex justify-center items-center">
//       {/* Confetti Image Background */}
//       <div
//         className="absolute inset-0 bg-center bg-cover opacity-30"
//         style={{ backgroundImage: `url(${confettiBg})` }}
//       ></div>

//       {/* Coupon Card */}
//       <div className="relative bg-pink-500 rounded-xl w-80 h-[420px] shadow-2xl flex flex-col items-center justify-center text-white z-10">
//         {/* Close button */}
//         <button
//           className="absolute top-3 right-3 text-white text-xl font-bold"
//           onClick={onClose}
//         >
//           ✕
//         </button>

//         {/* Main Content */}
//         <h2 className="text-4xl font-extrabold mb-2">🎉 {coupon.percent}% OFF</h2>
//         <p className="text-sm font-semibold mb-2">COUPON APPLIED</p>
//         <div className="bg-yellow-300 text-black px-4 py-1 rounded-full font-bold text-sm mb-6">
//           {coupon.code}
//         </div>
//         <p className="text-xs text-center px-4">
//           Discount will be applied on checkout!
//           <br />
//           Valid above ₹{coupon.minAmount}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default CouponPopup;

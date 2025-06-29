
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Coupon = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const total = location.state?.total || 0;

  const [selectedCoupon, setSelectedCoupon] = useState(null);
  const [appliedCoupon, setAppliedCoupon] = useState(null);

const playSound = () => {
  const audio = new Audio("/coupon.mp3");
  audio.play();
};

  const coupons = [
    {
      percent: 50,
      code: "BIGSAVE50",
      minAmount: 750,
      gradient: "from-pink-400 to-orange-400",
    },
    {
      percent: 20,
      code: "FIRST20",
      minAmount: 500,
      gradient: "from-purple-400 to-blue-400",
    },
  ];

  // Load applied coupon from localStorage
  useEffect(() => {
    const code = localStorage.getItem("appliedCouponCode");
    const percent = parseInt(localStorage.getItem("discount")) || 0;
    if (code && percent) {
      const found = coupons.find((c) => c.code === code);
      if (found) setAppliedCoupon(found);
    }
  }, []);

// const handleApply = () => {
//   playSound(); // Play sound immediately

//   const discount = Math.floor((selectedCoupon.percent / 100) * total);
//   localStorage.setItem("discount", discount);
//   localStorage.setItem("appliedCouponCode", selectedCoupon.code);
//   setAppliedCoupon(selectedCoupon);
//   setSelectedCoupon(null);

//   // Wait 200ms before navigating, so sound starts
//   setTimeout(() => {
//     navigate("/cart", {
//       state: {
//         discount,
//         couponCode: selectedCoupon.code,
//       },
//     });
//   }, 200);
// };
const handleApply = () => {
  // playSound(); // ✅ 1. Play the sound

  // ✅ 2. Trigger confetti
  import("canvas-confetti").then((confetti) => {
    confetti.default({
      spread: 120,
      particleCount: 100,
      origin: { y: 0.6 },
      startVelocity: 30,
      colors: ["#facc15", "#fff176", "#ffe082"], // Yellow festive theme
    });
  });

  // ✅ 3. Apply the logic
  const discount = Math.floor((selectedCoupon.percent / 100) * total);
  localStorage.setItem("discount", discount);
  localStorage.setItem("appliedCouponCode", selectedCoupon.code);
  setAppliedCoupon(selectedCoupon);
  setSelectedCoupon(null);

  // ✅ 4. Navigate back after slight delay
  setTimeout(() => {
    navigate("/cart", {
      state: {
        discount,
        couponCode: selectedCoupon.code,
      },
    });
  }, 200);
};

  const handleRemove = () => {
    localStorage.removeItem("discount");
    localStorage.removeItem("appliedCouponCode");
    setAppliedCoupon(null);
    setSelectedCoupon(null);
    // playSound();
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10 relative">
      <h2 className="text-3xl font-bold text-center mb-10">Available Coupons</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {coupons.map((coupon) => {
          const isActive = total >= coupon.minAmount;
          const isApplied = appliedCoupon?.code === coupon.code;
          const isDisabled = !!appliedCoupon && !isApplied;

          return (
            <div
              key={coupon.code}
              onClick={() => {
                if (!isActive || isDisabled) return;
                setSelectedCoupon(coupon);
              }}
              className={`rounded-xl p-6 relative transition border shadow-lg 
                bg-gradient-to-r ${coupon.gradient} 
                ${isActive && !isDisabled ? "cursor-pointer" : "opacity-60 saturate-0 cursor-not-allowed"}`}
            >
              <div className="text-black space-y-1">
                <h3 className="text-3xl font-extrabold">{coupon.percent}% OFF</h3>
                <p className="text-sm font-semibold">Use code: {coupon.code}</p>
                <p className="text-xs italic">
                  {isActive
                    ? isDisabled
                      ? "Remove applied coupon first"
                      : "Tap to view"
                    : `Valid on orders above ₹${coupon.minAmount}`}
                </p>
              </div>

              {isApplied && (
                <div className="absolute top-2 right-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
                  Applied
                </div>
              )}

              {!isActive && (
                <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-black/30 pointer-events-none text-white text-xs font-bold">
                  Locked
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Coupon Modal */}
      {selectedCoupon && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4">
          <div
            className={`relative w-80 rounded-3xl p-6 text-white shadow-2xl
              bg-gradient-to-r ${selectedCoupon.gradient} flex flex-col items-center`}
          >
            <button
              onClick={() => setSelectedCoupon(null)}
              className="absolute top-2 right-3 text-xl font-bold bg-black/30 hover:bg-black/50 rounded-full w-8 h-8 flex items-center justify-center"
            >
              ✕
            </button>

            <h3 className="text-4xl font-extrabold mt-4">
              🎉 {selectedCoupon.percent}% OFF
            </h3>
            <p className="mt-3 text-sm font-semibold">Use code:</p>
            <div className="mt-1 bg-white text-black px-4 py-1 rounded-full font-bold text-sm">
              {selectedCoupon.code}
            </div>
            <p className="mt-4 text-xs text-center">Discount will be applied on checkout!</p>

            {appliedCoupon?.code === selectedCoupon.code ? (
              <button
                onClick={handleRemove}
                className="mt-6 bg-white text-black hover:bg-red-500 hover:text-white px-6 py-2 rounded-full text-sm font-semibold transition"
              >
                Remove Coupon
              </button>
            ) : (
              <button
                onClick={handleApply}
                className="mt-6 bg-black hover:bg-white hover:text-black text-white px-6 py-2 rounded-full text-sm font-semibold transition"
              >
                Apply Coupon
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Coupon;

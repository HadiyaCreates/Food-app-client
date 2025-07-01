
import React, { useEffect, useState } from "react";
import { ImBin } from "react-icons/im";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CartPage = ({ cart, setCart }) => {
  const [discount, setDiscount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const saved = localStorage.getItem("discount");
    if (saved) setDiscount(parseInt(saved));
  }, []);

  const total = cart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);
  const finalTotal = total - discount;

  const playSound = () => {
    const audio = new Audio("/coupon.mp3");
 audio.play();
  };

  const handleRemoveItem = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setCart(cart.filter((item) => item._id !== id));
        Swal.fire({
          title: "Deleted!",
          text: "Item has been removed from your cart.",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    });
  };

  const handleApplyCoupon = () => {
    navigate("/coupons", { state: { total } });
    //  playSound();
  };

  // const handleRemoveCoupon = () => {
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You want to remove the applied coupon?",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, remove it!",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       localStorage.removeItem("discount");
  //       setDiscount(0);
  //       playSound();
  //       Swal.fire("Removed!", "Coupon has been removed.", "success");
  //     }
  //   });
  // };
const handleRemoveCoupon = () => {
  Swal.fire({
    title: "Remove Coupon?",
    text: "Are you sure you want to remove the applied coupon?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#facc15", // Yellow
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, remove it!",
    background: "#111", // 🔥 Black background
    color: "#fff",      // 🧊 White text
    customClass: {
      popup: "rounded-xl border border-yellow-500",
      title: "text-yellow-400 font-bold",
      confirmButton: "bg-yellow-500 text-black hover:bg-yellow-400",
      cancelButton: "bg-red-600 text-white hover:bg-red-700",
    },
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.removeItem("discount");
      setDiscount(0);
      playSound();
      Swal.fire({
        title: "Removed!",
        text: "Coupon has been removed.",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
        background: "#111",
        color: "#fff",
        customClass: {
          popup: "rounded-xl border border-yellow-500",
          title: "text-yellow-400 font-bold",
        },
      });
    }
  });
};

  return (
    <div className="relative min-h-screen overflow-hidden text-white bg-black">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/bac.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 bg-black bg-opacity-70 min-h-screen py-12 px-4 sm:px-8">
        {cart.length === 0 ? (
          <div className="flex justify-center items-center flex-col mt-10">
            <img
              src="https://cdn-icons-png.flaticon.com/512/16961/16961608.png"
              className="w-52 h-52 object-contain"
              alt="empty"
            />
            <p className="text-gray-400 italic text-xl mt-4">No items available in your cart</p>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Cart Items */}
            {cart.map((item) => (
              <div
                key={item._id}
                className="rounded-lg p-4"
                style={{
                  backgroundColor: "rgb(88, 88, 88)",
                  boxShadow: "0 4px 20px rgba(255, 255, 255, 0.1)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex sm:flex-row flex-col items-center sm:items-start sm:gap-4 gap-2">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-md border border-white/10"
                    />
                    <div className="text-center sm:text-left">
                      <h3 className="text-xl font-semibold">{item.name}</h3>
                      <p className="text-yellow-400 font-medium">₹{item.price}</p>
                    </div>
                  </div>

                  <div className="flex flex-row items-center gap-4 justify-end">
                    <div className="flex items-center border border-gray-500 rounded px-2 py-1 bg-black text-white shadow-sm">
                      <button
                        className="text-lg px-2 hover:text-yellow-500"
                        onClick={() => {
                          const updated = cart.map((i) =>
                            i._id === item._id
                              ? { ...i, quantity: Math.max((i.quantity || 1) - 1, 1) }
                              : i
                          );
                          setCart(updated);
                        }}
                      >
                        -
                      </button>
                      <span className="mx-2">{item.quantity || 1}</span>
                      <button
                        className="text-lg px-2 hover:text-yellow-500"
                        onClick={() => {
                          const updated = cart.map((i) =>
                            i._id === item._id
                              ? { ...i, quantity: (i.quantity || 1) + 1 }
                              : i
                          );
                          setCart(updated);
                        }}
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => handleRemoveItem(item._id)}
                      className="text-gray-300 hover:text-red-500 transition text-lg"
                      title="Remove"
                    >
                      <ImBin />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Coupon + Total */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-10 gap-4">
              {/* Coupon Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={handleApplyCoupon}
                  className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition"
                >
                  Apply Coupon
                </button>

                {discount > 0 && (
                  <button
                    onClick={handleRemoveCoupon}
                    className="bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600 transition"
                  >
                    Remove Coupon
                  </button>
                )}
              </div>

              {/* Total */}
              <div className="text-white space-y-1 text-right">
                <p>Cart Total: ₹{total}</p>
                <p>Discount: - ₹{discount}</p>
                <hr className="border-gray-600 my-1" />
                <p className="text-lg font-bold text-yellow-400">
                  Subtotal: ₹{finalTotal}
                </p>
              </div>
            </div>

            {/* Checkout */}
            {/* <div className="text-center mt-6">
              <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-2 font-bold rounded-full">
                Proceed to Checkout
              </button>
            </div> */}
<div className="flex justify-center mt-6">
  <button
    onClick={() => navigate("/payment", { state: { finalTotal } })}
    className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-2 font-bold rounded-full"
  >
    Proceed to Checkout
  </button>
</div>

          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
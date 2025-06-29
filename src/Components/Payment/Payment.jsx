
// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
// import axios from "axios";
// const Payment = ({ setCart }) => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const finalAmount = location.state?.finalTotal || 0;

//   const [name, setName] = useState("");
//   const [account, setAccount] = useState("");

//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("user"));
//     if (user?.name) setName(user.name);
//   }, []);

 
  

// // const handlePayment = async () => {
// //   if (!account) {
// //     Swal.fire({
// //       title: "Missing Info",
// //       text: "Please enter Account/UPI ID",
// //       icon: "warning",
// //       background: "#111",
// //       color: "#fff",
// //       confirmButtonColor: "#facc15",
// //     });
// //     return;
// //   }

// //   const user = JSON.parse(localStorage.getItem("user"));
// //   const cart = JSON.parse(localStorage.getItem("cart")) || [];
// //   const discount = parseInt(localStorage.getItem("discount")) || 0;
// //   const total = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
// //   const finalTotal = total - discount;

// //   // ❌ Invalid amount check
// //   if (finalTotal <= 0) {
// //     Swal.fire({
// //       title: "Invalid Amount",
// //       text: "Total amount must be greater than ₹0",
// //       icon: "error",
// //       background: "#111",
// //       color: "#fff",
// //       confirmButtonColor: "#facc15",
// //     });
// //     return;
// //   }

// //   // 🟡 Payment Processing
// //   Swal.fire({
// //     title: "Processing Payment...",
// //     timer: 2000,
// //     timerProgressBar: true,
// //     background: "#111",
// //     color: "#fff",
// //     didOpen: () => {
// //       Swal.showLoading();
// //     },
// //   }).then(async () => {
// //     try {
// //       await axios.post("http://localhost:8000/order/create", {
// //         userId: user._id,
// //         userName: user.name,
// //         items: cart,
// //         total: finalTotal,
// //         paymentMethod: "UPI/Account",
// //       });

// //       Swal.fire({
// //         title: "Payment Successful",
// //         text: "Thank you for your order!",
// //         icon: "success",
// //         background: "#111",
// //         color: "#fff",
// //         confirmButtonColor: "#facc15",
// //       });

// //       localStorage.removeItem("cart");
// //       localStorage.removeItem("discount");
// //       setCart([]);
// //       navigate("/orders");
// //     } catch (error) {
// //       Swal.fire({
// //         title: "Order Error",
// //         text: "Could not save order!",
// //         icon: "error",
// //         background: "#111",
// //         color: "#fff",
// //         confirmButtonColor: "#facc15",
// //       });
// //     }
// //   });
// // };
// const handlePayment = async () => {
//   if (!account) {
//     Swal.fire({
//       title: "Missing Info",
//       text: "Please enter Account/UPI ID",
//       icon: "warning",
//       background: "#111",
//       color: "#fff",
//       confirmButtonColor: "#facc15",
//     });
//     return;
//   }

//   const user = JSON.parse(localStorage.getItem("user"));
//   const cart = JSON.parse(localStorage.getItem("cart")) || [];
//   const discount = parseInt(localStorage.getItem("discount")) || 0;
//   const total = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
//   const finalTotal = total - discount;

//   if (finalTotal <= 0) {
//     Swal.fire({
//       title: "Invalid Amount",
//       text: "Total amount must be greater than ₹0",
//       icon: "error",
//       background: "#111",
//       color: "#fff",
//       confirmButtonColor: "#facc15",
//     });
//     return;
//   }

//   Swal.fire({
//     title: "Processing Payment...",
//     timer: 2000,
//     timerProgressBar: true,
//     background: "#111",
//     color: "#fff",
//     didOpen: () => {
//       Swal.showLoading();
//     },
//   }).then(async () => {
//     try {
//       await axios.post("http://localhost:8000/order/create", {
//         userId: user._id,
//         userName: user.name,
//         items: cart,
//         total: finalTotal,
//         paymentMethod: "UPI/Account",
//       });

//       // 🔊 Play success sound (put `success.mp3` in public folder)
//       const audio = new Audio("/success.mp3");
//       audio.play();

//       Swal.fire({
//         title: "Payment Successful",
//         text: "Thank you for your order!",
//         icon: "success",
//         background: "#111",
//         color: "#fff",
//         confirmButtonColor: "#facc15",
//       });

//       localStorage.removeItem("cart");
//       localStorage.removeItem("discount");
//       setCart([]);
//       navigate("/orders");
//     } catch (error) {
//       Swal.fire({
//         title: "Order Error",
//         text: "Could not save order!",
//         icon: "error",
//         background: "#111",
//         color: "#fff",
//         confirmButtonColor: "#facc15",
//       });
//     }
//   });
// };


// return (
//     <div className="min-h-screen bg-black text-white flex justify-center items-center px-4 py-10">
//       <div className="bg-gray-900 p-8 rounded-lg w-full max-w-md shadow-xl border border-gray-700">
//         <h2 className="text-2xl font-bold mb-6 text-yellow-400 text-center">
//           Payment Details
//         </h2>

//         <div className="space-y-4">
//           <div>
//             <label className="text-sm text-gray-300">Name</label>
//             <input
//               type="text"
//               value={name}
//               disabled
//               className="w-full mt-1 px-3 py-2 bg-black border border-gray-700 rounded text-white"
//             />
//           </div>

//           <div>
//             <label className="text-sm text-gray-300">Final Amount</label>
//             <input
//               type="text"
//               value={`₹${finalAmount}`}
//               disabled
//               className="w-full mt-1 px-3 py-2 bg-black border border-gray-700 rounded text-white"
//             />
//           </div>

//           <div>
//             <label className="text-sm text-gray-300">Account / UPI ID</label>
//             <input
//               type="text"
//               value={account}
//               onChange={(e) => setAccount(e.target.value)}
//               placeholder="Enter UPI ID or Account Number"
//               className="w-full mt-1 px-3 py-2 bg-black border border-gray-700 rounded text-white"
//             />
//           </div>

//           <button
//             onClick={handlePayment}
//             className="w-full bg-yellow-400 text-black py-2 font-semibold rounded mt-6 hover:bg-yellow-300 transition"
//           >
//             Pay Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Payment;
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import ScratchCardPopup from "../Scratch/ScratchCardPopup";

const Payment = ({ setCart }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const finalAmount = location.state?.finalTotal || 0;

  const [name, setName] = useState("");
  const [account, setAccount] = useState("");
  const [showScratch, setShowScratch] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.name) setName(user.name);
  }, []);

  const handlePayment = async () => {
    if (!account) {
      Swal.fire({
        title: "Missing Info",
        text: "Please enter Account/UPI ID",
        icon: "warning",
        background: "#111",
        color: "#fff",
        confirmButtonColor: "#facc15",
      });
      return;
    }

    const user = JSON.parse(localStorage.getItem("user"));
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const discount = parseInt(localStorage.getItem("discount")) || 0;
    const total = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
    const finalTotal = total - discount;

    if (finalTotal <= 0) {
      Swal.fire({
        title: "Invalid Amount",
        text: "Total amount must be greater than ₹0",
        icon: "error",
        background: "#111",
        color: "#fff",
        confirmButtonColor: "#facc15",
      });
      return;
    }

    Swal.fire({
      title: "Processing Payment...",
      timer: 2000,
      timerProgressBar: true,
      background: "#111",
      color: "#fff",
      didOpen: () => {
        Swal.showLoading();
      },
    }).then(async () => {
      try {
        await axios.post("http://localhost:8000/order/create", {
          userId: user._id,
          userName: user.name,
          items: cart,
          total: finalTotal,
          paymentMethod: "UPI/Account",
        });

        // 🔊 Play success sound
        const audio = new Audio("/success.mp3");
        audio.play();

        // 🧹 Clear cart and show scratch card
        localStorage.removeItem("cart");
        localStorage.removeItem("discount");
        setCart([]);

        setShowScratch(true); // 🎉 show scratch card popup
      } catch (error) {
        Swal.fire({
          title: "Order Error",
          text: "Could not save order!",
          icon: "error",
          background: "#111",
          color: "#fff",
          confirmButtonColor: "#facc15",
        });
      }
    });
  };

  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-center px-4 py-10">
      <div className="bg-gray-900 p-8 rounded-lg w-full max-w-md shadow-xl border border-gray-700">
        <h2 className="text-2xl font-bold mb-6 text-yellow-400 text-center">
          Payment Details
        </h2>

        <div className="space-y-4">
          <div>
            <label className="text-sm text-gray-300">Name</label>
            <input
              type="text"
              value={name}
              disabled
              className="w-full mt-1 px-3 py-2 bg-black border border-gray-700 rounded text-white"
            />
          </div>

          <div>
            <label className="text-sm text-gray-300">Final Amount</label>
            <input
              type="text"
              value={`₹${finalAmount}`}
              disabled
              className="w-full mt-1 px-3 py-2 bg-black border border-gray-700 rounded text-white"
            />
          </div>

          <div>
            <label className="text-sm text-gray-300">Account / UPI ID</label>
            <input
              type="text"
              value={account}
              onChange={(e) => setAccount(e.target.value)}
              placeholder="Enter UPI ID or Account Number"
              className="w-full mt-1 px-3 py-2 bg-black border border-gray-700 rounded text-white"
            />
          </div>

          <button
            onClick={handlePayment}
            className="w-full bg-yellow-400 text-black py-2 font-semibold rounded mt-6 hover:bg-yellow-300 transition"
          >
            Pay Now
          </button>
        </div>
      </div>

      {/* 🎁 Scratch Card */}
      {showScratch && (
        <ScratchCardPopup onClose={() => navigate("/orders")} />
      )}
    </div>
  );
};

export default Payment;

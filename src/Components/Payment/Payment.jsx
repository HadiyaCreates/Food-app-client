
// // // // // import React, { useEffect, useState } from "react";
// // // // // import { useLocation, useNavigate } from "react-router-dom";
// // // // // import Swal from "sweetalert2";
// // // // // import axios from "axios";
// // // // // import ScratchCardPopup from "../Scratch/ScratchCardPopup";

// // // // // const Payment = ({ user, setCart }) => {
// // // // //   const location = useLocation();
// // // // //   const navigate = useNavigate();
// // // // //   const finalAmountFromLocation = location.state?.finalTotal || 0;

// // // // //   const [name, setName] = useState("");
// // // // //   const [account, setAccount] = useState("");
// // // // //   const [showScratch, setShowScratch] = useState(false);

// // // // //   // 🔁 Set name from user or fallback
// // // // //   useEffect(() => {
// // // // //     const localUser = JSON.parse(localStorage.getItem("user"));
// // // // //     const currentUser = user || localUser;
// // // // //     if (currentUser?.name) {
// // // // //       setName(currentUser.name);
// // // // //     } else if (currentUser?.email) {
// // // // //       setName(currentUser.email.split("@")[0]); // fallback to email name
// // // // //     }
// // // // //   }, [user]);

// // // // //   const handlePayment = async () => {
// // // // //     const localUser = JSON.parse(localStorage.getItem("user"));
// // // // //     const currentUser = user || localUser;

// // // // //     console.log("Current user at payment:", currentUser); // 🐞 Debug

// // // // //     // 🚫 Block if user is missing
// // // // //     if (!currentUser || !currentUser._id || (!currentUser.name && !currentUser.email)) {
// // // // //       Swal.fire({
// // // // //         title: "User Error",
// // // // //         text: "User information is missing. Please login again.",
// // // // //         icon: "error",
// // // // //         background: "#111",
// // // // //         color: "#fff",
// // // // //         confirmButtonColor: "#facc15",
// // // // //       });
// // // // //       return;
// // // // //     }

// // // // //     if (!account) {
// // // // //       Swal.fire({
// // // // //         title: "Missing Info",
// // // // //         text: "Please enter Account/UPI ID",
// // // // //         icon: "warning",
// // // // //         background: "#111",
// // // // //         color: "#fff",
// // // // //         confirmButtonColor: "#facc15",
// // // // //       });
// // // // //       return;
// // // // //     }

// // // // //     const cart = JSON.parse(localStorage.getItem("cart")) || [];
// // // // //     const discount = parseInt(localStorage.getItem("discount")) || 0;
// // // // //     const total = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
// // // // //     const finalTotal = total - discount;

// // // // //     if (finalTotal <= 0) {
// // // // //       Swal.fire({
// // // // //         title: "Invalid Amount",
// // // // //         text: "Total amount must be greater than ₹0",
// // // // //         icon: "error",
// // // // //         background: "#111",
// // // // //         color: "#fff",
// // // // //         confirmButtonColor: "#facc15",
// // // // //       });
// // // // //       return;
// // // // //     }

// // // // //     Swal.fire({
// // // // //       title: "Processing Payment...",
// // // // //       timer: 2000,
// // // // //       timerProgressBar: true,
// // // // //       background: "#111",
// // // // //       color: "#fff",
// // // // //       didOpen: () => {
// // // // //         Swal.showLoading();
// // // // //       },
// // // // //     }).then(async () => {
// // // // //       try {
// // // // //         await axios.post("https://food-app-server-6nod.onrender.com/order/create", {
// // // // //           userId: currentUser._id,
// // // // //           userName: currentUser.name || currentUser.email?.split("@")[0],
// // // // //           items: cart,
// // // // //           total: finalTotal,
// // // // //           paymentMethod: "UPI/Account",
// // // // //         });

// // // // //         // 🔊 Success sound
// // // // //         const audio = new Audio("/success.mp3");
// // // // //         audio.play();

// // // // //         // 🧹 Clear cart
// // // // //         localStorage.removeItem("cart");
// // // // //         localStorage.removeItem("discount");
// // // // //         setCart([]);

// // // // //         setShowScratch(true); // 🎉 Show scratch card
// // // // //       } catch (error) {
// // // // //         console.error("Order error:", error);
// // // // //         Swal.fire({
// // // // //           title: "Order Error",
// // // // //           text: "Could not save order!",
// // // // //           icon: "error",
// // // // //           background: "#111",
// // // // //           color: "#fff",
// // // // //           confirmButtonColor: "#facc15",
// // // // //         });
// // // // //       }
// // // // //     });
// // // // //   };

// // // // //   return (
// // // // //     <div className="min-h-screen bg-black text-white flex justify-center items-center px-4 py-10">
// // // // //       <div className="bg-gray-900 p-8 rounded-lg w-full max-w-md shadow-xl border border-gray-700">
// // // // //         <h2 className="text-2xl font-bold mb-6 text-yellow-400 text-center">
// // // // //           Payment Details
// // // // //         </h2>

// // // // //         <div className="space-y-4">
// // // // //           <div>
// // // // //             <label className="text-sm text-gray-300">Name</label>
// // // // //             <input
// // // // //               type="text"
// // // // //               value={name}
// // // // //               disabled
// // // // //               className="w-full mt-1 px-3 py-2 bg-black border border-gray-700 rounded text-white"
// // // // //             />
// // // // //           </div>

// // // // //           <div>
// // // // //             <label className="text-sm text-gray-300">Final Amount</label>
// // // // //             <input
// // // // //               type="text"
// // // // //               value={`₹${finalAmountFromLocation}`}
// // // // //               disabled
// // // // //               className="w-full mt-1 px-3 py-2 bg-black border border-gray-700 rounded text-white"
// // // // //             />
// // // // //           </div>

// // // // //           <div>
// // // // //             <label className="text-sm text-gray-300">Account / UPI ID</label>
// // // // //             <input
// // // // //               type="text"
// // // // //               value={account}
// // // // //               onChange={(e) => setAccount(e.target.value)}
// // // // //               placeholder="Enter UPI ID or Account Number"
// // // // //               className="w-full mt-1 px-3 py-2 bg-black border border-gray-700 rounded text-white"
// // // // //             />
// // // // //           </div>

// // // // //           <button
// // // // //             onClick={handlePayment}
// // // // //             className="w-full bg-yellow-400 text-black py-2 font-semibold rounded mt-6 hover:bg-yellow-300 transition"
// // // // //           >
// // // // //             Pay Now
// // // // //           </button>
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* 🎁 Scratch Card */}
// // // // //       {showScratch && <ScratchCardPopup onClose={() => navigate("/orders")} />}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Payment;
// // // // // import React, { useEffect, useState } from "react";
// // // // // import { useLocation, useNavigate } from "react-router-dom";
// // // // // import Swal from "sweetalert2";
// // // // // import axios from "axios";
// // // // // import ScratchCardPopup from "../Scratch/ScratchCardPopup";

// // // // // const Payment = ({ user: propUser, setCart }) => {
// // // // //   const location = useLocation();
// // // // //   const navigate = useNavigate();
// // // // //   const finalAmountFromLocation = location.state?.finalTotal || 0;

// // // // //   const [name, setName] = useState("");
// // // // //   const [account, setAccount] = useState("");
// // // // //   const [showScratch, setShowScratch] = useState(false);
// // // // //   const [currentUser, setCurrentUser] = useState(propUser || null);

// // // // //   // ✅ Ensure user is loaded from localStorage if not passed via props
// // // // //   useEffect(() => {
// // // // //     const storedUser = localStorage.getItem("user");
// // // // //     if (storedUser) {
// // // // //       const parsedUser = JSON.parse(storedUser);
// // // // //       setCurrentUser(parsedUser);
// // // // //       setName(parsedUser.name || parsedUser.email?.split("@")[0]);
// // // // //     }
// // // // //   }, []);

// // // // //   useEffect(() => {
// // // // //     if (propUser) {
// // // // //       setCurrentUser(propUser);
// // // // //       setName(propUser.name || propUser.email?.split("@")[0]);
// // // // //     }
// // // // //   }, [propUser]);

// // // // //   const handlePayment = async () => {
// // // // //     if (!currentUser || !currentUser._id) {
// // // // //       Swal.fire({
// // // // //         title: "User not logged in",
// // // // //         text: "Please log in to proceed with payment.",
// // // // //         icon: "error",
// // // // //         background: "#111",
// // // // //         color: "#fff",
// // // // //         confirmButtonColor: "#facc15",
// // // // //       });
// // // // //       return;
// // // // //     }

// // // // //     if (!account) {
// // // // //       Swal.fire({
// // // // //         title: "Missing Info",
// // // // //         text: "Please enter Account/UPI ID",
// // // // //         icon: "warning",
// // // // //         background: "#111",
// // // // //         color: "#fff",
// // // // //         confirmButtonColor: "#facc15",
// // // // //       });
// // // // //       return;
// // // // //     }

// // // // //     const cart = JSON.parse(localStorage.getItem("cart")) || [];
// // // // //     const discount = parseInt(localStorage.getItem("discount")) || 0;
// // // // //     const total = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
// // // // //     const finalTotal = total - discount;

// // // // //     if (finalTotal <= 0) {
// // // // //       Swal.fire({
// // // // //         title: "Invalid Amount",
// // // // //         text: "Total amount must be greater than ₹0",
// // // // //         icon: "error",
// // // // //         background: "#111",
// // // // //         color: "#fff",
// // // // //         confirmButtonColor: "#facc15",
// // // // //       });
// // // // //       return;
// // // // //     }

// // // // //     Swal.fire({
// // // // //       title: "Processing Payment...",
// // // // //       timer: 2000,
// // // // //       timerProgressBar: true,
// // // // //       background: "#111",
// // // // //       color: "#fff",
// // // // //       didOpen: () => {
// // // // //         Swal.showLoading();
// // // // //       },
// // // // //     }).then(async () => {
// // // // //       try {
// // // // //         await axios.post("https://food-app-server-6nod.onrender.com/order/create", {
// // // // //           userId: currentUser._id,
// // // // //           userName: currentUser.name || currentUser.email?.split("@")[0],
// // // // //           items: cart,
// // // // //           total: finalTotal,
// // // // //           paymentMethod: "UPI/Account",
// // // // //         });

// // // // //         const audio = new Audio("/success.mp3");
// // // // //         audio.play();

// // // // //         localStorage.removeItem("cart");
// // // // //         localStorage.removeItem("discount");
// // // // //         setCart([]);

// // // // //         setShowScratch(true); // 🎉 Show scratch card
// // // // //       } catch (error) {
// // // // //         console.error("Order error:", error);
// // // // //         Swal.fire({
// // // // //           title: "Order Error",
// // // // //           text: "Could not save order!",
// // // // //           icon: "error",
// // // // //           background: "#111",
// // // // //           color: "#fff",
// // // // //           confirmButtonColor: "#facc15",
// // // // //         });
// // // // //       }
// // // // //     });
// // // // //   };

// // // // //   return (
// // // // //     <div className="min-h-screen bg-black text-white flex justify-center items-center px-4 py-10">
// // // // //       <div className="bg-gray-900 p-8 rounded-lg w-full max-w-md shadow-xl border border-gray-700">
// // // // //         <h2 className="text-2xl font-bold mb-6 text-yellow-400 text-center">
// // // // //           Payment Details
// // // // //         </h2>

// // // // //         <div className="space-y-4">
// // // // //           <div>
// // // // //             <label className="text-sm text-gray-300">Name</label>
// // // // //             <input
// // // // //               type="text"
// // // // //               value={name}
// // // // //               disabled
// // // // //               className="w-full mt-1 px-3 py-2 bg-black border border-gray-700 rounded text-white"
// // // // //             />
// // // // //           </div>

// // // // //           <div>
// // // // //             <label className="text-sm text-gray-300">Final Amount</label>
// // // // //             <input
// // // // //               type="text"
// // // // //               value={`₹${finalAmountFromLocation}`}
// // // // //               disabled
// // // // //               className="w-full mt-1 px-3 py-2 bg-black border border-gray-700 rounded text-white"
// // // // //             />
// // // // //           </div>

// // // // //           <div>
// // // // //             <label className="text-sm text-gray-300">Account / UPI ID</label>
// // // // //             <input
// // // // //               type="text"
// // // // //               value={account}
// // // // //               onChange={(e) => setAccount(e.target.value)}
// // // // //               placeholder="Enter UPI ID or Account Number"
// // // // //               className="w-full mt-1 px-3 py-2 bg-black border border-gray-700 rounded text-white"
// // // // //             />
// // // // //           </div>

// // // // //           <button
// // // // //             onClick={handlePayment}
// // // // //             className="w-full bg-yellow-400 text-black py-2 font-semibold rounded mt-6 hover:bg-yellow-300 transition"
// // // // //           >
// // // // //             Pay Now
// // // // //           </button>
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* 🎁 Scratch Card */}
// // // // //       {showScratch && <ScratchCardPopup onClose={() => navigate("/orders")} />}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Payment;
// // // // import React, { useEffect, useState } from "react";
// // // // import { useLocation, useNavigate } from "react-router-dom";
// // // // import Swal from "sweetalert2";
// // // // import axios from "axios";
// // // // import ScratchCardPopup from "../Scratch/ScratchCardPopup";

// // // // const Payment = ({ user: propUser, setCart }) => {
// // // //   const location = useLocation();
// // // //   const navigate = useNavigate();
// // // //   const finalAmountFromLocation = location.state?.finalTotal || 0;

// // // //   const [name, setName] = useState("");
// // // //   const [account, setAccount] = useState("");
// // // //   const [showScratch, setShowScratch] = useState(false);
// // // //   const [currentUser, setCurrentUser] = useState(null);

// // // //   // ✅ Sync user from props or localStorage
// // // //   useEffect(() => {
// // // //     const storedUser = localStorage.getItem("user");
// // // //     const localUser = storedUser ? JSON.parse(storedUser) : null;

// // // //     const effectiveUser = propUser || localUser;
// // // //     setCurrentUser(effectiveUser);

// // // //     if (effectiveUser) {
// // // //       setName(effectiveUser.name || effectiveUser.email?.split("@")[0]);
// // // //     }
// // // //   }, [propUser]);

// // // //   const handlePayment = async () => {
// // // //     if (!currentUser || !currentUser._id) {
// // // //       Swal.fire({
// // // //         title: "User not logged in",
// // // //         text: "Please log in to proceed with payment.",
// // // //         icon: "error",
// // // //         background: "#111",
// // // //         color: "#fff",
// // // //         confirmButtonColor: "#facc15",
// // // //       });
// // // //       return;
// // // //     }

// // // //     if (!account) {
// // // //       Swal.fire({
// // // //         title: "Missing Info",
// // // //         text: "Please enter Account/UPI ID",
// // // //         icon: "warning",
// // // //         background: "#111",
// // // //         color: "#fff",
// // // //         confirmButtonColor: "#facc15",
// // // //       });
// // // //       return;
// // // //     }

// // // //     const cart = JSON.parse(localStorage.getItem(`cart-${currentUser.email}`)) || [];
// // // //     const discount = parseInt(localStorage.getItem("discount")) || 0;
// // // //     const total = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
// // // //     const finalTotal = total - discount;

// // // //     if (finalTotal <= 0) {
// // // //       Swal.fire({
// // // //         title: "Invalid Amount",
// // // //         text: "Total amount must be greater than ₹0",
// // // //         icon: "error",
// // // //         background: "#111",
// // // //         color: "#fff",
// // // //         confirmButtonColor: "#facc15",
// // // //       });
// // // //       return;
// // // //     }

// // // //     Swal.fire({
// // // //       title: "Processing Payment...",
// // // //       timer: 2000,
// // // //       timerProgressBar: true,
// // // //       background: "#111",
// // // //       color: "#fff",
// // // //       didOpen: () => {
// // // //         Swal.showLoading();
// // // //       },
// // // //     }).then(async () => {
// // // //       try {
// // // //         await axios.post("https://food-app-server-6nod.onrender.com/order/create", {
// // // //           userId: currentUser._id,
// // // //           userName: currentUser.name || currentUser.email?.split("@")[0],
// // // //           items: cart,
// // // //           total: finalTotal,
// // // //           paymentMethod: "UPI/Account",
// // // //         });

// // // //         const audio = new Audio("/success.mp3");
// // // //         audio.play();

// // // //         localStorage.removeItem(`cart-${currentUser.email}`);
// // // //         localStorage.removeItem("discount");
// // // //         setCart([]);

// // // //         setShowScratch(true); // 🎉 Show scratch card
// // // //       } catch (error) {
// // // //         console.error("Order error:", error);
// // // //         Swal.fire({
// // // //           title: "Order Error",
// // // //           text: "Could not save order!",
// // // //           icon: "error",
// // // //           background: "#111",
// // // //           color: "#fff",
// // // //           confirmButtonColor: "#facc15",
// // // //         });
// // // //       }
// // // //     });
// // // //   };

// // // //   return (
// // // //     <div className="min-h-screen bg-black text-white flex justify-center items-center px-4 py-10">
// // // //       <div className="bg-gray-900 p-8 rounded-lg w-full max-w-md shadow-xl border border-gray-700">
// // // //         <h2 className="text-2xl font-bold mb-6 text-yellow-400 text-center">
// // // //           Payment Details
// // // //         </h2>

// // // //         <div className="space-y-4">
// // // //           <div>
// // // //             <label className="text-sm text-gray-300">Name</label>
// // // //             <input
// // // //               type="text"
// // // //               value={name}
// // // //               disabled
// // // //               className="w-full mt-1 px-3 py-2 bg-black border border-gray-700 rounded text-white"
// // // //             />
// // // //           </div>

// // // //           <div>
// // // //             <label className="text-sm text-gray-300">Final Amount</label>
// // // //             <input
// // // //               type="text"
// // // //               value={`₹${finalAmountFromLocation}`}
// // // //               disabled
// // // //               className="w-full mt-1 px-3 py-2 bg-black border border-gray-700 rounded text-white"
// // // //             />
// // // //           </div>

// // // //           <div>
// // // //             <label className="text-sm text-gray-300">Account / UPI ID</label>
// // // //             <input
// // // //               type="text"
// // // //               value={account}
// // // //               onChange={(e) => setAccount(e.target.value)}
// // // //               placeholder="Enter UPI ID or Account Number"
// // // //               className="w-full mt-1 px-3 py-2 bg-black border border-gray-700 rounded text-white"
// // // //             />
// // // //           </div>

// // // //           <button
// // // //             onClick={handlePayment}
// // // //             className="w-full bg-yellow-400 text-black py-2 font-semibold rounded mt-6 hover:bg-yellow-300 transition"
// // // //           >
// // // //             Pay Now
// // // //           </button>
// // // //         </div>
// // // //       </div>

// // // //       {/* 🎁 Scratch Card */}
// // // //       {showScratch && <ScratchCardPopup onClose={() => navigate("/orders")} />}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Payment;
// // // import React, { useEffect, useState } from "react";
// // // import { useLocation, useNavigate } from "react-router-dom";
// // // import Swal from "sweetalert2";
// // // import axios from "axios";
// // // import ScratchCardPopup from "../Scratch/ScratchCardPopup";

// // // const Payment = ({ user: propUser, setCart }) => {
// // //   const location = useLocation();
// // //   const navigate = useNavigate();
// // //   const finalAmountFromLocation = location.state?.finalTotal || 0;

// // //   const [name, setName] = useState("");
// // //   const [account, setAccount] = useState("");
// // //   const [showScratch, setShowScratch] = useState(false);
// // //   const [currentUser, setCurrentUser] = useState(null);

// // //   // ✅ Ensure user is always synced from props or localStorage
// // //   useEffect(() => {
// // //     const localUser = JSON.parse(localStorage.getItem("user"));
// // //     const effectiveUser = propUser || localUser;
// // //     setCurrentUser(effectiveUser);

// // //     if (effectiveUser) {
// // //       setName(effectiveUser.name || effectiveUser.email?.split("@")[0]);
// // //     }
// // //   }, [propUser]);

// // //   const handlePayment = async () => {
// // //     if (!currentUser || !currentUser._id) {
// // //       Swal.fire({
// // //         title: "User not logged in",
// // //         text: "Please log in to proceed with payment.",
// // //         icon: "error",
// // //         background: "#111",
// // //         color: "#fff",
// // //         confirmButtonColor: "#facc15",
// // //       });
// // //       return;
// // //     }

// // //     if (!account) {
// // //       Swal.fire({
// // //         title: "Missing Info",
// // //         text: "Please enter Account/UPI ID",
// // //         icon: "warning",
// // //         background: "#111",
// // //         color: "#fff",
// // //         confirmButtonColor: "#facc15",
// // //       });
// // //       return;
// // //     }

// // //     // const cart = JSON.parse(localStorage.getItem(`cart-${currentUser.email}`)) || [];
// // //     const cart =
// // //   JSON.parse(localStorage.getItem(`cart-${currentUser.email}`)) ||
// // //   JSON.parse(localStorage.getItem("cart")) || [];

// // //     const discount = parseInt(localStorage.getItem("discount")) || 0;
// // //     const total = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
// // //     const finalTotal = total - discount;

// // //     if (finalTotal <= 0) {
// // //       Swal.fire({
// // //         title: "Invalid Amount",
// // //         text: "Total amount must be greater than ₹0",
// // //         icon: "error",
// // //         background: "#111",
// // //         color: "#fff",
// // //         confirmButtonColor: "#facc15",
// // //       });
// // //       return;
// // //     }

// // //     Swal.fire({
// // //       title: "Processing Payment...",
// // //       timer: 2000,
// // //       timerProgressBar: true,
// // //       background: "#111",
// // //       color: "#fff",
// // //       didOpen: () => {
// // //         Swal.showLoading();
// // //       },
// // //     }).then(async () => {
// // //       try {
// // //         await axios.post("https://food-app-server-6nod.onrender.com/order/create", {
// // //           userId: currentUser._id,
// // //           userName: currentUser.name || currentUser.email?.split("@")[0],
// // //           items: cart,
// // //           total: finalTotal,
// // //           paymentMethod: "UPI/Account",
// // //         });

// // //         const audio = new Audio("/success.mp3");
// // //         audio.play();

// // //         localStorage.removeItem(`cart-${currentUser.email}`);
// // //         localStorage.removeItem("discount");
// // //         setCart([]);
// // //         setShowScratch(true); // 🎉 Show scratch card
// // //       } catch (error) {
// // //         console.error("Order error:", error);
// // //         Swal.fire({
// // //           title: "Order Error",
// // //           text: "Could not save order!",
// // //           icon: "error",
// // //           background: "#111",
// // //           color: "#fff",
// // //           confirmButtonColor: "#facc15",
// // //         });
// // //       }
// // //     });
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-black text-white flex justify-center items-center px-4 py-10">
// // //       <div className="bg-gray-900 p-8 rounded-lg w-full max-w-md shadow-xl border border-gray-700">
// // //         <h2 className="text-2xl font-bold mb-6 text-yellow-400 text-center">
// // //           Payment Details
// // //         </h2>

// // //         <div className="space-y-4">
// // //           <div>
// // //             <label className="text-sm text-gray-300">Name</label>
// // //             <input
// // //               type="text"
// // //               value={name}
// // //               disabled
// // //               className="w-full mt-1 px-3 py-2 bg-black border border-gray-700 rounded text-white"
// // //             />
// // //           </div>

// // //           <div>
// // //             <label className="text-sm text-gray-300">Final Amount</label>
// // //             <input
// // //               type="text"
// // //               value={`₹${finalAmountFromLocation}`}
// // //               disabled
// // //               className="w-full mt-1 px-3 py-2 bg-black border border-gray-700 rounded text-white"
// // //             />
// // //           </div>

// // //           <div>
// // //             <label className="text-sm text-gray-300">Account / UPI ID</label>
// // //             <input
// // //               type="text"
// // //               value={account}
// // //               onChange={(e) => setAccount(e.target.value)}
// // //               placeholder="Enter UPI ID or Account Number"
// // //               className="w-full mt-1 px-3 py-2 bg-black border border-gray-700 rounded text-white"
// // //             />
// // //           </div>

// // //           <button
// // //             onClick={handlePayment}
// // //             className="w-full bg-yellow-400 text-black py-2 font-semibold rounded mt-6 hover:bg-yellow-300 transition"
// // //           >
// // //             Pay Now
// // //           </button>
// // //         </div>
// // //       </div>

// // //       {/* 🎁 Scratch Card */}
// // //       {showScratch && <ScratchCardPopup onClose={() => navigate("/orders")} />}
// // //     </div>
// // //   );
// // // };

// // // export default Payment;
// // import React, { useEffect, useState } from "react";
// // import { useLocation, useNavigate } from "react-router-dom";
// // import Swal from "sweetalert2";
// // import axios from "axios";
// // import ScratchCardPopup from "../Scratch/ScratchCardPopup";

// // const Payment = ({ user: propUser, setCart }) => {
// //   const location = useLocation();
// //   const navigate = useNavigate();
// //   const finalAmountFromLocation = location.state?.finalTotal || 0;

// //   const [name, setName] = useState("");
// //   const [account, setAccount] = useState("");
// //   const [showScratch, setShowScratch] = useState(false);
// //   const [currentUser, setCurrentUser] = useState(null);

// //   // ✅ Fix: Load user either from props or localStorage
// //   // useEffect(() => {
// //   //   const storedUser = localStorage.getItem("user");
// //   //   const localUser = storedUser ? JSON.parse(storedUser) : null;

// //   //   const effectiveUser = propUser || localUser;

// //   //   if (effectiveUser) {
// //   //     setCurrentUser(effectiveUser);
// //   //     setName(effectiveUser.name || effectiveUser.email?.split("@")[0]);
// //   //   }
// //   // }, []);
// //   useEffect(() => {
// //   const storedUser = localStorage.getItem("user");
// //   const localUser = storedUser ? JSON.parse(storedUser) : null;
// //   const effectiveUser = propUser || localUser;
// //   if (effectiveUser) {
// //     setCurrentUser(effectiveUser);
// //     setName(effectiveUser.name || effectiveUser.email?.split("@")[0]);
// //   }
// // }, [propUser]);

// //   const handlePayment = async () => {
// //     if (!currentUser || !currentUser._id) {
// //       Swal.fire({
// //         title: "User not logged in",
// //         text: "Please log in to proceed with payment.",
// //         icon: "error",
// //         background: "#111",
// //         color: "#fff",
// //         confirmButtonColor: "#facc15",
// //       });
// //       return;
// //     }

// //     if (!account) {
// //       Swal.fire({
// //         title: "Missing Info",
// //         text: "Please enter Account/UPI ID",
// //         icon: "warning",
// //         background: "#111",
// //         color: "#fff",
// //         confirmButtonColor: "#facc15",
// //       });
// //       return;
// //     }

// //     // ✅ FIXED: Read cart using correct key (cart-userEmail)
// //     const cart = JSON.parse(localStorage.getItem(`cart-${currentUser.email}`)) || [];
// //     const discount = parseInt(localStorage.getItem("discount")) || 0;
// //     const total = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
// //     const finalTotal = total - discount;

// //     if (finalTotal <= 0) {
// //       Swal.fire({
// //         title: "Invalid Amount",
// //         text: "Total amount must be greater than ₹0",
// //         icon: "error",
// //         background: "#111",
// //         color: "#fff",
// //         confirmButtonColor: "#facc15",
// //       });
// //       return;
// //     }

// //     Swal.fire({
// //       title: "Processing Payment...",
// //       timer: 2000,
// //       timerProgressBar: true,
// //       background: "#111",
// //       color: "#fff",
// //       didOpen: () => {
// //         Swal.showLoading();
// //       },
// //     }).then(async () => {
// //       try {
// //         await axios.post("https://food-app-server-6nod.onrender.com/order/create", {
// //           userId: currentUser._id,
// //           userName: currentUser.name || currentUser.email?.split("@")[0],
// //           items: cart,
// //           total: finalTotal,
// //           paymentMethod: "UPI/Account",
// //         });

// //         const audio = new Audio("/success.mp3");
// //         audio.play();

// //         // ✅ Clear localStorage for the correct user
// //         localStorage.removeItem(`cart-${currentUser.email}`);
// //         localStorage.removeItem("discount");
// //         setCart([]);

// //         setShowScratch(true);
// //       } catch (error) {
// //         console.error("Order error:", error);
// //         Swal.fire({
// //           title: "Order Error",
// //           text: "Could not save order!",
// //           icon: "error",
// //           background: "#111",
// //           color: "#fff",
// //           confirmButtonColor: "#facc15",
// //         });
// //       }
// //     });
// //   };

// //   return (
// //     <div className="min-h-screen bg-black text-white flex justify-center items-center px-4 py-10">
// //       <div className="bg-gray-900 p-8 rounded-lg w-full max-w-md shadow-xl border border-gray-700">
// //         <h2 className="text-2xl font-bold mb-6 text-yellow-400 text-center">
// //           Payment Details
// //         </h2>

// //         <div className="space-y-4">
// //           <div>
// //             <label className="text-sm text-gray-300">Name</label>
// //             <input
// //               type="text"
// //               value={name}
// //               disabled
// //               className="w-full mt-1 px-3 py-2 bg-black border border-gray-700 rounded text-white"
// //             />
// //           </div>

// //           <div>
// //             <label className="text-sm text-gray-300">Final Amount</label>
// //             <input
// //               type="text"
// //               value={`₹${finalAmountFromLocation}`}
// //               disabled
// //               className="w-full mt-1 px-3 py-2 bg-black border border-gray-700 rounded text-white"
// //             />
// //           </div>

// //           <div>
// //             <label className="text-sm text-gray-300">Account / UPI ID</label>
// //             <input
// //               type="text"
// //               value={account}
// //               onChange={(e) => setAccount(e.target.value)}
// //               placeholder="Enter UPI ID or Account Number"
// //               className="w-full mt-1 px-3 py-2 bg-black border border-gray-700 rounded text-white"
// //             />
// //           </div>

// //           <button
// //             onClick={handlePayment}
// //             className="w-full bg-yellow-400 text-black py-2 font-semibold rounded mt-6 hover:bg-yellow-300 transition"
// //           >
// //             Pay Now
// //           </button>
// //         </div>
// //       </div>

// //       {showScratch && <ScratchCardPopup onClose={() => navigate("/orders")} />}
// //     </div>
// //   );
// // };

// // export default Payment;


// // ✅ Payment.jsx
// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
// import axios from "axios";

// const Payment = ({ user, setCart }) => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const finalAmountFromLocation = location.state?.finalTotal || 0;

//   const [account, setAccount] = useState("");
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     if (user && user.email) {
//       const cartData = localStorage.getItem(`cart-${user.email}`);
//       setCartItems(cartData ? JSON.parse(cartData) : []);
//     }
//   }, [user]);

//   const handlePayment = async () => {
//     if (!user || !user._id) {
//       Swal.fire({
//         title: "User not logged in",
//         text: "Please log in to proceed.",
//         icon: "error",
//         background: "#111",
//         color: "#fff",
//       });
//       return;
//     }

//     if (!account) {
//       Swal.fire({
//         title: "Missing Account Info",
//         text: "Please enter your UPI or Account ID",
//         icon: "warning",
//         background: "#111",
//         color: "#fff",
//       });
//       return;
//     }

//     const discount = parseInt(localStorage.getItem("discount")) || 0;
//     const total = cartItems.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
//     const finalTotal = total - discount;

//     if (finalTotal <= 0) {
//       Swal.fire({
//         title: "Invalid Total",
//         text: "Total must be more than ₹0",
//         icon: "error",
//         background: "#111",
//         color: "#fff",
//       });
//       return;
//     }

//     try {
//       await axios.post("https://food-app-server-6nod.onrender.com/order/create", {
//         userId: user._id,
//         userName: user.name || user.email,
//         items: cartItems,
//         total: finalTotal,
//         paymentMethod: "UPI/Account",
//       });

//       localStorage.removeItem(`cart-${user.email}`);
//       localStorage.removeItem("discount");
//       setCart([]);

//       Swal.fire({
//         title: "Success!",
//         text: "Order placed successfully!",
//         icon: "success",
//         background: "#111",
//         color: "#fff",
//       });

//       navigate("/orders");
//     } catch (error) {
//       console.error(error);
//       Swal.fire({
//         title: "Error",
//         text: "Failed to place order",
//         icon: "error",
//         background: "#111",
//         color: "#fff",
//       });
//     }
//   };

//   return (
//     <div className="min-h-screen bg-black flex justify-center items-center px-4">
//       <div className="bg-gray-900 p-6 rounded-lg w-full max-w-md">
//         <h2 className="text-yellow-400 text-2xl mb-4 text-center">Payment</h2>

//         <input
//           type="text"
//           value={account}
//           onChange={(e) => setAccount(e.target.value)}
//           placeholder="Enter UPI or Account ID"
//           className="w-full mb-4 p-2 rounded bg-black text-white border border-gray-600"
//         />

//         <input
//           type="text"
//           disabled
//           value={`₹${finalAmountFromLocation}`}
//           className="w-full mb-4 p-2 rounded bg-black text-white border border-gray-600"
//         />

//         <button
//           onClick={handlePayment}
//           className="w-full bg-yellow-400 text-black font-bold py-2 rounded hover:bg-yellow-300"
//         >
//           Pay Now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Payment;

// ✅ Payment.jsx (final fixed version)
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import ScratchCardPopup from "../Scratch/ScratchCardPopup";

const Payment = ({ user: propUser, setCart }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const finalAmountFromLocation = location.state?.finalTotal || 0;

  const [name, setName] = useState("");
  const [account, setAccount] = useState("");
  const [showScratch, setShowScratch] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem("user"));
    const effectiveUser = propUser || localUser;
    setCurrentUser(effectiveUser);

    if (effectiveUser) {
      setName(effectiveUser.name || effectiveUser.email?.split("@")[0]);
    }
  }, [propUser]);

  const handlePayment = async () => {
    if (!currentUser || !currentUser._id) {
      Swal.fire({
        title: "User not logged in",
        text: "Please log in to proceed with payment.",
        icon: "error",
        background: "#111",
        color: "#fff",
        confirmButtonColor: "#facc15",
      });
      return;
    }

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

    const cart = JSON.parse(localStorage.getItem(`cart-${currentUser.email}`)) || [];
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
      didOpen: () => Swal.showLoading(),
    }).then(async () => {
      try {
        await axios.post("https://food-app-server-6nod.onrender.com/order/create", {
          userId: currentUser._id,
          userName: currentUser.name || currentUser.email?.split("@")[0],
          items: cart,
          total: finalTotal,
          paymentMethod: "UPI/Account",
        });

        const audio = new Audio("/success.mp3");
        audio.play();

        localStorage.removeItem(`cart-${currentUser.email}`);
        localStorage.removeItem("discount");
        setCart([]);

        setShowScratch(true);
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
        <h2 className="text-2xl font-bold mb-6 text-yellow-400 text-center">Payment Details</h2>

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
              value={`₹${finalAmountFromLocation}`}
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

      {showScratch && <ScratchCardPopup onClose={() => navigate("/orders")} />}
    </div>
  );
};

export default Payment;

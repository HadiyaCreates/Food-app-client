
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Orders = () => {
//   const [orders, setOrders] = useState([]);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const stored = localStorage.getItem("user");
//     if (stored) {
//       const u = JSON.parse(stored);
//       setUser(u);
//       fetchOrders(u._id);
//     }
//   }, []);

//   const fetchOrders = async (userId) => {
//     try {
//       const res = await axios.get(`http://localhost:8000/order/${userId}`);
//       setOrders(res.data);
//     } catch (error) {
//       console.error("Error fetching orders", error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-black text-white p-6">
//       <h2 className="text-3xl font-bold text-yellow-400 mb-6">Your Orders</h2>

//       {orders.length === 0 ? (
//         <div className="flex flex-col items-center mt-20">
//           <img
//             src="https://cdni.iconscout.com/illustration/premium/thumb/man-receiving-canceled-orders-back-4438793-3718471.png"
//             alt="No Orders"
//             className="w-64"
//           />
//           <p className="text-gray-400 mt-4 italic">You haven't placed any orders yet.</p>
//         </div>
//       ) : (
//         <div className="space-y-4 max-w-3xl mx-auto">
//           {orders.map((order) => (
//             <div
//               key={order._id}
//               className="bg-gray-800 rounded-lg p-4 border border-gray-700 shadow-md"
//             >
//               <p className="text-yellow-300 font-semibold mb-2">
//                 Order ID: <span className="text-white">{order._id}</span>
//               </p>
//               <p className="mb-1">Name: {order.userName}</p>
//               <p className="mb-1">Payment Method: {order.paymentMethod}</p>
//               <p className="mb-2 text-green-400">Total Paid: ₹{order.total}</p>
//               <div className="text-sm text-gray-300">
//                 <p className="mb-1">Items Ordered:</p>
//                 <ul className="list-disc ml-6">
//                   {order.items.map((item, index) => (
//                     <li key={index}>
//                       {item.name} × {item.quantity || 1} - ₹{item.price}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Orders;
// src/pages/Orders.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      const u = JSON.parse(stored);
      setUser(u);
      fetchOrders(u._id);
    }
  }, []);

  const fetchOrders = async (userId) => {
    try {
      const res = await axios.get(`http://localhost:8000/order/${userId}`);
      setOrders(res.data);
    } catch (error) {
      console.error("Error fetching orders", error);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-10 px-4">
      <h2 className="text-3xl font-bold text-yellow-400 text-center mb-8">
        Your Orders
      </h2>

      {orders.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-16">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/man-receiving-canceled-orders-back-4438793-3718471.png"
            alt="No Orders"
            className="w-72 h-auto object-contain"
          />
          <p className="text-gray-400 mt-6 text-lg italic">
            You haven't placed any orders yet.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 max-w-5xl mx-auto">
          {orders.map((order, idx) => (
            <div
              key={idx}
              className="bg-[#1e1e1e] border border-gray-700 rounded-lg shadow-md p-5"
            >
              <div className="flex flex-col md:flex-row md:justify-between mb-4">
                <div>
                  <p className="text-sm text-gray-400">Name:</p>
                  <p className="font-semibold text-lg text-white">{order.userName}</p>
                </div>
                <div className="text-right mt-3 md:mt-0">
                  <p className="text-sm text-gray-400">Payment Method:</p>
                  <p className="text-yellow-400 font-medium">{order.paymentMethod}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {order.items.map((item, index) => (
                  <div
                    key={index}
                    className="bg-black bg-opacity-40 border border-gray-700 p-3 rounded flex items-center gap-4"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded border border-white/10"
                    />
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-gray-400">
                        Qty: {item.quantity || 1}
                      </p>
                      <p className="text-sm text-yellow-400">
                        ₹{item.price * (item.quantity || 1)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 border-t border-gray-700 pt-4 text-right">
                <p className="text-lg text-white font-bold">
                  Total Paid: <span className="text-yellow-400">₹{order.total}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;

// src/pages/OrdersPage.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const OrdersPage = ({ user }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user?._id) {
      axios.get(`http://localhost:8000/order/${user._id}`)
        .then((res) => setOrders(res.data))
        .catch((err) => console.error(err));
    }
  }, [user]);

  if (!orders.length) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/man-receiving-canceled-orders-back-4438793-3718471.png"
          alt="No orders"
          className="w-60 mb-4"
        />
        <p className="text-gray-300 text-lg">No orders yet</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h2 className="text-3xl font-bold mb-6">Your Orders</h2>
      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order._id} className="bg-gray-800 p-4 rounded-lg shadow">
            <p className="text-yellow-300 font-bold mb-1">Order #{order._id.slice(-6)}</p>
            <p className="text-sm mb-2">Total: ₹{order.total}</p>
            <p className="text-xs text-gray-400 mb-2">
              Date: {new Date(order.createdAt).toLocaleString()}
            </p>
            <div className="flex flex-wrap gap-4">
              {order.items.map((item, i) => (
                <div key={i} className="flex gap-2 items-center">
                  <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
                  <div>
                    <p className="text-sm font-semibold">{item.name}</p>
                    <p className="text-xs text-gray-400">Qty: {item.quantity || 1}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrdersPage;

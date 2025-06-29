
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebookF, FaApple } from "react-icons/fa";
import Swal from "sweetalert2";

const Signup = ({ setUser }) => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const res = await axios.post("http://localhost:8000/api/auth/signup", form);

  //     // Set user state after signup
  //     setUser({ name: form.name, email: form.email });

  //     Swal.fire({
  //       title: "Signup Successful!",
  //       icon: "success",
  //       text: "Welcome to the food family!",
  //       showConfirmButton: false,
  //       timer: 1500,
  //     });

  //     setTimeout(() => navigate("/"), 1600);
  //   } catch (err) {
  //     Swal.fire({
  //       icon: "error",
  //       title: "Oops...",
  //       text: err.response?.data?.message || "Something went wrong!",
  //       footer: '<a href="#">Why do I have this issue?</a>',
  //     });
  //   }
  // };
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post("https://food-app-server-6nod.onrender.com/api/auth/signup", form);
    setUser({ name: form.name, email: form.email });

    Swal.fire({
      title: "Signup Successful!",
      text: "Welcome to the food family!",
      icon: "success",
      background: "#1f1f1f",
      color: "#fff",
      iconColor: "#facc15",
      showConfirmButton: false,
      timer: 1500,
      customClass: {
        popup: "rounded-lg shadow-lg",
        title: "text-yellow-400 text-lg font-semibold",
        content: "text-white",
      },
    });

    setTimeout(() => navigate("/"), 1600);
  } catch (err) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: err.response?.data?.message || "Something went wrong!",
      background: "#1f1f1f",
      color: "#fff",
      iconColor: "#f87171",
      footer: '<a href="#" style="color: #facc15;">Why do I have this issue?</a>',
      customClass: {
        popup: "rounded-lg shadow-lg",
        title: "text-red-400 text-lg font-semibold",
        content: "text-white",
      },
    });
  }
};

  return (
    <div className="min-h-screen bg-[#fef7f1] flex flex-col items-center">
      {/* Header Shape + Title */}
      <div className="relative w-full h-52 bg-orange-500 rounded-b-[50%] flex justify-center items-end pb-6">
        <h1 className="text-white text-3xl font-bold">Signup</h1>
      </div>

      {/* Form Card */}
      <div className="bg-black text-white mt-[-40px] w-[90%] max-w-md p-8 rounded-3xl shadow-lg z-10 mt-[10px]">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div>
            <label className="text-sm">Email</label>
            <input
              type="email"
              placeholder="Enter your email address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full p-2 mt-1 bg-transparent border-b border-gray-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="text-sm">Name</label>
            <input
              type="text"
              placeholder="Enter your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full p-2 mt-1 bg-transparent border-b border-gray-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="text-sm">Password</label>
            <input
              type="password"
              placeholder="Enter your Password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full p-2 mt-1 bg-transparent border-b border-gray-500 focus:outline-none"
            />
          </div>

          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-full transition">
            Signup
          </button>
        </form>

        {/* Divider */}
        {/* <div className="flex items-center justify-center my-6 gap-2 text-gray-400 text-sm">
          <hr className="flex-1 border-gray-600" />
          or continue with
          <hr className="flex-1 border-gray-600" />
        </div> */}

        {/* Social Icons */}
        {/* <div className="flex justify-center gap-6 text-xl">
          <FaGoogle className="text-white cursor-pointer hover:text-orange-400" />
          <FaFacebookF className="text-white cursor-pointer hover:text-orange-400" />
          <FaApple className="text-white cursor-pointer hover:text-orange-400" />
        </div> */}
      </div>
    </div>
  );
}

export default Signup;
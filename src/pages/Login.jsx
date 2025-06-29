import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaGoogle, FaFacebookF, FaApple } from "react-icons/fa";

const Login = ({setUser}) => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const res = await axios.post("http://localhost:8000/api/auth/login", form);

  //     // Save user data to localStorage
  //     localStorage.setItem("user", JSON.stringify(res.data.user));
  //      setUser(res.data.user); 
  //     // Success alert
  //     Swal.fire({
  //       title: "Login Successful!",
  //       icon: "success",
  //       text: "Welcome back!",
  //       showConfirmButton: false,
  //       timer: 1500,
  //     });

  //     // Redirect to home after short delay
  //     setTimeout(() => navigate("/"), 1600);
  //   } catch (err) {
  //     Swal.fire({
  //       icon: "error",
  //       title: "Oops...",
  //       text: err.response?.data?.message || "Login failed!",
  //       footer: '<a href="#">Why did this happen?</a>',
  //     });
  //   }
  // };
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post("http://localhost:8000/api/auth/login", form);

    localStorage.setItem("user", JSON.stringify(res.data.user));
    setUser(res.data.user);

    // 🎉 Success Alert (dark themed)
    Swal.fire({
      title: "Login Successful!",
      text: "Welcome back!",
      icon: "success",
      background: "#1f1f1f", // dark background
      color: "#fff", // white text
      iconColor: "#facc15", // yellow icon
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
    // ❌ Error Alert (dark themed)
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: err.response?.data?.message || "Login failed!",
      background: "#1f1f1f",
      color: "#fff",
      iconColor: "#f87171", // red icon
      footer: '<a href="#" style="color: #facc15;">Why did this happen?</a>',
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
      {/* Header */}
      <div className="relative w-full h-52 bg-orange-500 rounded-b-[50%] flex justify-center items-end pb-6">
        <h1 className="text-white text-3xl font-bold">Login</h1>
      </div>

      {/* Form Card */}
      <div className="bg-black mt-[10px] text-white mt-[-40px] w-[90%] max-w-md p-8 rounded-3xl shadow-lg z-10">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div>
            <label className="text-sm">Email</label>
            <input
              type="email"
              placeholder="Enter your email address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full p-2 mt-1 bg-transparent border-b border-gray-500 focus:outline-none"
              required
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
              required
            />
          </div>

          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-full transition">
            Login
          </button>
        </form>

        {/* Divider
        <div className="flex items-center justify-center my-6 gap-2 text-gray-400 text-sm">
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
};

export default Login;

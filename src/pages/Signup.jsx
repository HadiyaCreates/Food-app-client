// Signup.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
// import GoogleLoginButton from "../Components/GoogleLoginButton";
const Signup = ({ setUser }) => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("🟠 Submitting signup form with:", form);

    try {
      const res = await axios.post(
        "https://food-app-server-6nod.onrender.com/api/auth/signup",
        form
      );

      console.log("✅ Signup response:", res.data);
      const user = res.data.user;

      // Save and update user
      localStorage.setItem("user", JSON.stringify(user));
      console.log("📦 User saved to localStorage:", user);
      setUser(user);

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

      setTimeout(() => {
        console.log("➡️ Redirecting to home...");
        navigate("/");
      }, 1600);
    } catch (err) {
      console.error("❌ Signup failed:", err);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err.response?.data?.message || "Signup failed!",
        background: "#1f1f1f",
        color: "#fff",
        iconColor: "#f87171",
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
      <div className="relative w-full h-52 bg-orange-500 rounded-b-[50%] flex justify-center items-end pb-6">
        <h1 className="text-white text-3xl font-bold">Signup</h1>
      </div>

      <div className="bg-black mt-[10px] text-white mt-[-40px] w-[90%] max-w-md p-8 rounded-3xl shadow-lg z-10">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div>
            <label className="text-sm">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full p-2 mt-1 bg-transparent border-b border-gray-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="text-sm">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full p-2 mt-1 bg-transparent border-b border-gray-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="text-sm">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full p-2 mt-1 bg-transparent border-b border-gray-500 focus:outline-none"
              required
            />
          </div>
          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-full transition">
            Signup
          </button>
        </form>
        {/* <form onSubmit={handleSubmit} className="flex flex-col gap-6">
  <div>
    <label className="text-sm">Email</label>
    <input
      type="email"
      placeholder="Enter your email"
      value={form.email}
      onChange={(e) => setForm({ ...form, email: e.target.value })}
      className="w-full p-2 mt-1 bg-transparent border-b border-gray-500 focus:outline-none"
      required
    />
  </div>
  <div>
    <label className="text-sm">Name</label>
    <input
      type="text"
      placeholder="Enter your name"
      value={form.name}
      onChange={(e) => setForm({ ...form, name: e.target.value })}
      className="w-full p-2 mt-1 bg-transparent border-b border-gray-500 focus:outline-none"
      required
    />
  </div>
  <div>
    <label className="text-sm">Password</label>
    <input
      type="password"
      placeholder="Enter your password"
      value={form.password}
      onChange={(e) => setForm({ ...form, password: e.target.value })}
      className="w-full p-2 mt-1 bg-transparent border-b border-gray-500 focus:outline-none"
      required
    />
  </div>

  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-full transition">
    Signup
  </button>
</form> */}

{/* OR divider */}
{/* <div className="text-center my-4 text-gray-400">OR</div> */}

{/* <GoogleLoginButton setUser={setUser} /> */}

      </div>
    </div>
  );
};

export default Signup;

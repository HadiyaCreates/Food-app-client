
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const EditProfile = ({ user, setUser }) => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: user?.name || "",
    email: user?.email || "",
    password: "",
    profileImage:
      user?.profileImage ||
      "https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png",
  });

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);


// const handleLogout = () => {
//   Swal.fire({
//     title: "Are you sure?",
//     text: "You will be logged out from your account!",
//     icon: "warning",
//     showCancelButton: true,
//     confirmButtonColor: "#f97316", // Tailwind orange-500
//     cancelButtonColor: "#d33",
//     confirmButtonText: "Yes, logout!",
//   }).then((result) => {
//     if (result.isConfirmed) {
//       // Clear user session
//       setUser(null);
//       localStorage.removeItem("user");

//       Swal.fire({
//         title: "Logged out!",
//         text: "You have been successfully logged out.",
//         icon: "success",
//       });

//       navigate("/");
//     }
//   });
// };
const handleLogout = () => {
  Swal.fire({
    title: "Are you sure?",
    text: "You will be logged out from your account!",
    icon: "warning",
    background: "#1f1f1f",         // dark background
    color: "#fff",                 // white text
    iconColor: "#facc15",          // yellow icon
    showCancelButton: true,
    confirmButtonColor: "#f97316", // orange confirm button
    cancelButtonColor: "#ef4444",  // red cancel button
    confirmButtonText: "Yes, logout!",
    customClass: {
      popup: "rounded-lg shadow-lg",
      title: "text-yellow-400 text-lg font-semibold",
      content: "text-white",
    },
  }).then((result) => {
    if (result.isConfirmed) {
      // Clear session
      setUser(null);
      localStorage.removeItem("user");

      Swal.fire({
        title: "Logged out!",
        text: "You have been successfully logged out.",
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
    }
  });
};


  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "foodapp_unsigned");

    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dbqtpevjc/image/upload",
        formData
      );
      setForm({ ...form, profileImage: res.data.secure_url });
    } catch (err) {
      console.error("Image upload failed:", err);
      Swal.fire("Error", "Failed to upload image.", "error");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put("https://food-app-server-6nod.onrender.com/api/auth/update", form);
      setUser(res.data); // update user globally
      Swal.fire("Success", "Profile updated successfully!", "success");
      navigate("/");
    } catch (err) {
      Swal.fire("Oops", err.response?.data?.message || "Update failed", "error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-6 rounded-2xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-yellow-400 text-center mb-4">
          Edit Profile
        </h2>

        {/* Profile Image */}
        <div className="relative w-24 h-24 mx-auto mb-4">
          <img
            src={form.profileImage}
            alt="Profile"
            className="w-full h-full object-cover rounded-full border-4 border-yellow-400"
          />
          <label
            htmlFor="profileImage"
            className="absolute bottom-0 right-0 bg-yellow-400 rounded-full p-1 cursor-pointer hover:bg-yellow-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.232 5.232l3.536 3.536M9 11l6 6M16.243 3.757a6 6 0 018.486 8.486L13 24H6v-7L16.243 3.757z"
              />
            </svg>
            <input
              type="file"
              id="profileImage"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>
        </div>

        {/* Name */}
        <input
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Full Name"
          className="w-full p-2 rounded bg-gray-800 mb-3 text-white border border-yellow-500"
        />

        {/* Email */}
        <input
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="Email"
          className="w-full p-2 rounded bg-gray-800 mb-3 text-white border border-yellow-500"
        />

        {/* Password */}
        <input
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          placeholder="Password"
          className="w-full p-2 rounded bg-gray-800 mb-4 text-white border border-yellow-500"
        />

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-black py-2 rounded-full font-semibold"
        >
          Update Profile
        </button>
        <button
  type="button"
  onClick={handleLogout}
  className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-full font-semibold mt-3"
>
  Logout
</button>

      </form>
    </div>
  );
};

export default EditProfile;

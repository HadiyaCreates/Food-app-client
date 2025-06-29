import React, { useState } from "react";
import Swal from "sweetalert2";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const res = await fetch("http://localhost:8000/api/contact", {
    const res = await fetch("https://food-app-server-6nod.onrender.com/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      Swal.fire({
        title: "Message Sent!",
        text: "We'll get back to you shortly.",
        icon: "success",
        background: "#111",
        color: "#fff",
        confirmButtonColor: "#facc15", // yellow
      });

      setFormData({
        name: "",
        phone: "",
        email: "",
        city: "",
        message: "",
      });
    } else {
      Swal.fire({
        title: "Error!",
        text: "Failed to send message.",
        icon: "error",
        background: "#111",
        color: "#fff",
        confirmButtonColor: "#f87171", // red
      });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-12">
      <div className="max-w-6xl w-full bg-gray-900 rounded-xl shadow-2xl flex flex-col md:flex-row overflow-hidden">
        <div className="md:w-1/2">
          <img
            src="https://i.pinimg.com/736x/ab/e6/57/abe65721a6d06545c99230151aab0177.jpg"
            alt="Contact"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="md:w-1/2 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-yellow-400 mb-6">
            Get in Touch
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                placeholder="Name"
                required
                className="bg-black border border-gray-600 p-3 rounded w-full"
              />
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                type="tel"
                placeholder="Phone"
                required
                className="bg-black border border-gray-600 p-3 rounded w-full"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="Email"
                required
                className="bg-black border border-gray-600 p-3 rounded w-full"
              />
              <input
                name="city"
                value={formData.city}
                onChange={handleChange}
                type="text"
                placeholder="City"
                required
                className="bg-black border border-gray-600 p-3 rounded w-full"
              />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows="5"
              required
              className="bg-black border border-gray-600 p-3 rounded w-full"
            ></textarea>
            <button
              type="submit"
              className="bg-yellow-500 text-black font-bold py-3 px-6 rounded hover:bg-yellow-400 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;


import React from "react";

const Experience = () => {
  return (
    <div className="bg-black text-white px-8 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Image */}
        <div>
          <img
            src="https://img.freepik.com/free-photo/waiter-holding-plate-fine-dining-restaurant_53876-101755.jpg"
            alt="Chef Serving Dish"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Right Text Content */}
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold leading-snug">
            Experience the Irresistible <br />
            Allure of Our Delectable <br />
            Dining Offerings
          </h1>
          <p className="text-gray-300">
            From savory starters to indulgent mains and decadent desserts, every dish 
            on our menu promises a symphony of flavors that will transport you to 
            gastronomic paradise.
          </p>

          <div>
            <p className="text-sm font-semibold mb-1">CONTACT US</p>
            <p className="text-white mb-4">+1 (555) 123-4567</p>

            <p className="text-sm font-semibold mb-1">GET IN TOUCH</p>
            <p className="text-blue-400 underline">restaurant@example.com</p>
          </div>

          <button className="mt-4 bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-orange-500 hover:text-white transition duration-300">
            Make a Reservation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Experience;

import React from "react";

const Behind = () => {
  return (
    <div
      className="w-full h-[450px] h-screen bg-cover bg-center relative flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://t3.ftcdn.net/jpg/05/61/97/32/360_F_561973220_Ce0yPOlwrY9Yhda7dvDmMPjpLgrl1qM0.jpg')", // use your grill/fire image here
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <p className="text-sm italic mb-2 text-orange-300">Welcome to our delicious corner</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">BEHIND THE DISHES</h1>
        <p className="max-w-xl mx-auto text-gray-200 mb-6">
          Discover the passion, fire, and flavor that fuel our kitchens. Dive into stories behind your favorite meals.
        </p>
        {/* <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full transition duration-300">
          Learn More
        </button> */}
      </div>
    </div>
  );
};

export default Behind;

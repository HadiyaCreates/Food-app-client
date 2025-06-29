import React from "react";

const HeroContact = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen flex items-center justify-center h-[461px]"
      style={{
        backgroundImage:
          "url('https://drscdn.500px.org/photo/15475443/q%3D80_m%3D1500/v2?sig=c022ae6cf7741cfd9310e1b2e2423b6422a3a877dc728d28eea6a089eac65001')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Text Content */}
      <div className="relative z-10 text-white text-center px-4">
        <h1 className="text-3xl sm:text-2xl md:text-3xl font-serif font-semibold leading-tight">
          Where flavor sizzles and style serves
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-200 max-w-xl mx-auto">
          Experience the art of fire-grilled perfection, where every dish ignites your taste buds.
        </p>
      </div>
    </div>
  );
};

export default HeroContact;

import React from "react";

const Hero = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen flex items-center justify-center h-[465px]"
      style={{
        backgroundImage:
          "url('https://png.pngtree.com/background/20230516/original/pngtree-female-chef-preparing-small-desserts-on-a-tray-picture-image_2599531.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Text Content */}
      <div className="relative z-10 text-white text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold leading-tight">
          Best Food For <br /> Your Taste
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-200 max-w-xl mx-auto">
          Discover gourmet dishes crafted by top chefs using the freshest ingredients.
          Elevate your dining experience with flavors that leave a lasting impression.
        </p>
      </div>
    </div>
  );
};

export default Hero;

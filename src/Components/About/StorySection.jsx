
import React from "react";

const StorySection = () => {
  return (
    <div className="bg-[#0d0d0d] text-white py-16 px-6 md:px-20 flex flex-col lg:flex-row items-center justify-center gap-40 overflow-hidden">
      {/* Left side: Two stacked images */}
      <div className="w-full lg:w-1/2 relative flex justify-center items-center">
        {/* Background Image */}
        <img
          src="https://www.myzeo.com/wp-content/uploads/2022/09/holiday-wine-pairing-guide-5091703-ee2cf1d556b34851a4054925ffe06cfb-scaled.jpg"
          alt="background"
          className="w-[300px] md:w-[350px] rounded-lg opacity-70 shadow-lg"
        />
        {/* Foreground Image */}
        <img
          src="https://png.pngtree.com/thumb_back/fh260/background/20230425/pngtree-one-of-the-french-toast-dishes-topped-with-berries-image_2555944.jpg"
          alt="steak plate"
          className="absolute w-[220px] md:w-[260px] rounded-lg shadow-2xl -right-6 top-10"
        />
      </div>

      {/* Right side: Text */}
      <div className="w-full lg:w-1/2 max-w-xl">
        <p className="text-orange-500 uppercase tracking-widest mb-2">Our Story</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">The Story</h2>
        <p className="text-gray-300 mb-6">
        We created this platform to redefine how you experience food. By partnering with skilled chefs in your city, we offer dishes that are fresh, thoughtfully made, and rooted in authenticity. Whether you’re ordering for yourself or hosting a gathering, each plate delivers flavor, finesse, and a story worth sharing.
        </p>


      
      </div>
    </div>
  );
};

export default StorySection;

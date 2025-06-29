import React from "react";

const Next = () => {
  return (
    <div className="bg-[#1a1a1a] text-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center md:items-start justify-center gap-40">
      {/* Left: Text */}
      <div className="max-w-md space-y-6">
        <h2 className="text-orange-500 text-2xl font-semibold">ABOUT US</h2>
        <p className="text-gray-300 text-sm leading-relaxed">
          Our food app is built to bring you the warmth of home-cooked meals with the ease of modern convenience. 
          We connect you with passionate chefs who use fresh, high-quality ingredients to prepare every dish with love. 
          Whether it's a quick lunch, a family dinner, or a special event, we deliver more than just food—we deliver experience, authenticity, and comfort in every bite.
        </p>
      </div>

      {/* Right: Image */}
<div className="max-w-xs">
  <video
    src="/bannger.mp4"
    autoPlay
    loop
    muted
    playsInline
    className="w-[350px] h-[300px] rounded shadow-md"
  />
</div>


    </div>
  );
};


export default Next;

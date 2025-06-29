
// import React from "react";

// const Banner = () => {
//   return (
//     <div className="relative bg-black text-white w-full h-screen flex items-center justify-between px-10 overflow-hidden ">
//       {/* Optional: Smoke background */}
//       <div
//         className="absolute inset-0 bg-cover bg-center opacity-20 z-0"
//         // style={{ backgroundImage: `url(${smokeBg})` }}
//       />

//       {/* Left Content */}
//       <div className="z-10 max-w-[50%]">
//         <h1 className="text-5xl font-extrabold leading-tight mb-6">
//           YOUR FLAVOUR JOURNEY  <br /> STARTS HERE
//         </h1>
//         <p className="text-gray-300 text-lg mb-8">
//          Every dish is a masterpiece, every flavor a story. From sizzling snacks to hearty meals, we bring joy to your taste buds, one bite at a time.
//         </p>
//         <div className="flex space-x-4">
//           <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg">
//             Order Now
//           </button>
//           {/* <button className="text-orange-500 font-semibold border-b-2 border-orange-500 hover:text-orange-600">
//             View Menu
//           </button> */}
//         </div>
//       </div>

//       {/* Right Burger Image with full-corner shadow blend */}
//       <div className="relative z-10 max-w-[90%]">
//         <div className="relative w-full h-full">
//           {/* Burger Image */}
//           <img
//             src="https://thumbs.dreamstime.com/b/hot-bbq-burger-cooked-grilled-fire-fragrant-smoke-created-generative-ai-270707347.jpg"
//             alt="Burger"
//             className="w-full h-auto object-contain relative z-10"
//           />
          
//           {/* Vignette Shadow Overlay */}
//           <div className="absolute inset-0 z-20 pointer-events-none bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.6)_70%,_rgba(0,0,0,0.95)_100%)]"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;
import React from "react";

const Banner = () => {
  return (
    <div className="relative bg-black text-white w-full h-screen flex flex-col lg:flex-row items-center justify-between px-6 lg:px-10 overflow-hidden">
      {/* Optional: Smoke background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 z-0 sm:mt-[30px] lg:mt-0"
        // style={{ backgroundImage: `url(${smokeBg})` }}
      />

      {/* Left Content */}
<div className="z-10 w-full lg:max-w-[50%] text-center lg:text-left mt-[100px] lg:mt-[-100px]">

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
          YOUR FLAVOUR JOURNEY <br /> STARTS HERE
        </h1>
        <p className="text-gray-300 text-base sm:text-lg mb-8 px-2 sm:px-0">
          Every dish is a masterpiece, every flavor a story. From sizzling snacks to hearty meals, we bring joy to your taste buds, one bite at a time.
        </p>
        <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg">
            Order Now
          </button>
        </div>
      </div>

      {/* Right Burger Image with full-corner shadow blend */}
      <div className="relative z-10 w-full flex justify-center lg:justify-end sm:mb-200px lg:mb-0">
        <div className="relative w-full max-w-[400px] sm:max-w-[480px] md:max-w-[550px] lg:max-w-[90%] h-full mb-[100px] ">
          {/* Burger Image */}
          <img
            src="https://thumbs.dreamstime.com/b/hot-bbq-burger-cooked-grilled-fire-fragrant-smoke-created-generative-ai-270707347.jpg"
            alt="Burger"
            className="w-full h-auto object-contain relative z-10"
          />

          {/* Vignette Shadow Overlay */}
          <div className="absolute inset-0 z-20 pointer-events-none bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.6)_70%,_rgba(0,0,0,0.95)_100%)]"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

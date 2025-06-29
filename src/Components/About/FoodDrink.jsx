
import React from "react";

const FoodDrink = () => {
  return (
    <div className="bg-[#0d0d0d] text-white py-16 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
        
        {/* FOOD SECTION */}
        <div className="text-center max-w-xs space-y-4">
          <p className="text-yellow-600 text-sm">Our Selection</p>
          <h2 className="text-2xl font-semibold tracking-wide">FOOD</h2>
          <p className="text-sm text-gray-300">
            Explore curated dishes crafted by passionate chefs using the freshest local ingredients. 
            From everyday meals to gourmet specials, every bite tells a story of flavor and care.
          </p>
          <p className="text-sm text-gray-300">
            Order your favorites or discover something new — your next delicious experience is just a click away.
          </p>
        </div>

        {/* CENTER VIDEO */}
        <div className="w-full max-w-xs flex justify-center">
          <video
            src="/mid.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-[220px] h-auto rounded shadow-md"
          />
        </div>

        {/* DRINK SECTION */}
        <div className="text-center max-w-xs space-y-4">
          <p className="text-yellow-600 text-sm">Our Choice</p>
          <h2 className="text-2xl font-semibold tracking-wide">DRINK</h2>
          <p className="text-sm text-gray-300">
            Quench your thirst with our exclusive range of refreshing beverages. 
            From handcrafted mocktails to healthy smoothies, each drink is prepared with precision and style.
          </p>
          <p className="text-sm text-gray-300">
            Whether it’s to cool down or lift your mood, we’ve got the perfect pour waiting for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FoodDrink;

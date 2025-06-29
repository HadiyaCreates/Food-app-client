import React from "react";

const TownFood = () => {
  return (
    <div className="bg-black text-white px-10 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Image Section */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          <img
            src="https://wallpapers.com/images/hd/vegetable-chow-mein-noodles-0tooen8pwf8hki5b.jpg"
            alt="Ramen Bowl"
            className="row-span-2 object-cover w-[300px] h-[500px] rounded-lg"
          />
          <img
            src="https://i.ytimg.com/vi/6L_VxW7TBoM/maxresdefault.jpg"
            alt="Dumplings"
            className="object-cover w-[200px] h-[250px] rounded-lg"
          />
          <img
            src="https://img.freepik.com/premium-photo/indian-variant-called-paneer-sizzler-uses-cottage-cheese-generative-ai_722401-34844.jpg?w=2000"
            alt="Grilled Shrimp"
            className="object-cover w-[220px] h-[230px] rounded-lg"
          />
        </div>

        {/* Text Content */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold leading-snug">
            The Best <br /> Restaurant Food <br /> in Town
          </h1>
          <p className="text-gray-300">
            Discover handpicked meals from verified chefs and top-rated kitchens near you. 
            Whether it's comfort food or gourmet delights, we bring the best flavors right to your doorstep. 
            Crafted with love, delivered with care , and always fresh.
          </p>
       
        </div>
      </div>
    </div>
    
  );
};

export default TownFood;

import React from "react";

const chefs = [
  {
    name: "MICHAEL GORDON",
    role: "Assistant chef",
    image:
      "https://i.pinimg.com/736x/1f/6e/70/1f6e70808fe70a24ed66959c7c03bfbe.jpg",
  },
  {
    name: "JAMES WALKER",
    role: "Chef",
    image:
      "https://i.pinimg.com/736x/80/1b/8a/801b8a2f6d130fd70af3582ca95ae88b.jpg",
  },
  {
    name: "THOMAS SMITH",
    role: "Assistant chef",
    image:
      "https://i.pinimg.com/736x/c9/40/f8/c940f828d79f47532989f5cf2a34d3d1.jpg",
  },
];

const OurChefs = () => {
  return (
    <div className="bg-[#0d0d0d] text-white py-20 px-6 md:px-20 text-center">
      {/* Title */}
      <h2 className="text-lg tracking-widest text-yellow-600 mb-2">— OUR CHEFS —</h2>

      {/* Chef Cards */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-start">
        {chefs.map((chef, index) => (
          <div key={index} className="flex flex-col items-center space-y-4">
            <img
              src={chef.image}
              alt={chef.name}
              className="w-[220px] h-[300px] object-cover rounded-md shadow-md"
            />
            <h3 className="text-sm text-yellow-200 font-semibold tracking-wide">
              {chef.name}
            </h3>
            <p className="text-sm text-gray-400 uppercase">{chef.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurChefs;

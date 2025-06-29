
import React from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    name: "Desserts",
    image:
      "https://img.freepik.com/premium-photo/desserts-plate-with-strawberry-top_865967-34742.jpg",
    route: "/desserts",
  },
  {
    name: "Drinks",
    image: "https://tse4.mm.bing.net/th?id=OIP.H2R1SsMBDYDmpI9dNTmhNAHaFj&pid=Api&P=0&h=180",
    route: "/drinks",
  },
  {
    name: "Pasta",
    image: "https://cdn.pixabay.com/photo/2022/09/24/07/31/pasta-7475756_640.jpg",
    route: "/pasta",
  },
  {
    name: "Pizza",
    image: "https://tse3.mm.bing.net/th?id=OIP.T03aJagv5g4JwoG0Di4gFwHaEb&pid=Api&P=0&h=180",
    route: "/pizza",
  },
  {
    name: "Salads",
    image: "https://tse3.mm.bing.net/th?id=OIP.3rwaCNEFwi0I8myqnoh3MgHaFh&pid=Api&P=0&h=180",
    route: "/salad",
  },
];

const Category = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-black py-12 px-4">
      <div className="text-center mb-10">
        {/* <p className="text-yellow-500 text-sm font-semibold uppercase">
          Top Foods
        </p> */}
        <h2 className="text-white text-4xl font-bold mt-2 mb-1">
          Our Categories
        </h2>
        {/* <div className="w-20 h-1 bg-yellow-500 mx-auto rounded"></div> */}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 justify-items-center">
        {categories.map((cat) => (
          <div
            key={cat.name}
            onClick={() => navigate(cat.route)}
            className="cursor-pointer text-center transition-transform hover:scale-105"
          >
            <div className="w-28 h-28 bg-white rounded-full shadow-[0_0_20px_4px_rgb(175_147_134_/_0.5)] flex items-center justify-center overflow-hidden">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <p className="text-white mt-3 text-lg font-semibold">
              {cat.name}
            </p>
            {/* <p className="text-gray-400 text-sm">X Restaurants Products</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;

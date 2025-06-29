import React from "react";

const Footer = () => {
  return (
    <footer
      className="text-gray-200"
      style={{
        backgroundImage:
          "url('https://png.pngtree.com/background/20230522/original/pngtree-black-background-with-a-white-smoke-going-in-a-stream-picture-image_2684892.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-black bg-opacity-80">
        <div className="container mx-auto px-5 py-20 flex md:items-start md:flex-row flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-white text-2xl font-bold"><img src="/logo.png" alt="" style={{width:'100px', height:'65px'}}/></h1>
            <p className="mt-4 text-sm text-gray-300">
              Serving joy in every bite. Discover top home chefs and flavorful dishes made just for you.
            </p>
          </div>

          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-semibold text-orange-400 text-sm mb-3">
                Explore
              </h2>
              <nav className="list-none space-y-2">
                <li><a className="hover:text-white">Home</a></li>
                <li><a className="hover:text-white">Menu</a></li>
                <li><a className="hover:text-white">Top Chefs</a></li>
                <li><a className="hover:text-white">Order Now</a></li>
              </nav>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-semibold text-orange-400 text-sm mb-3">
                Get Help
              </h2>
              <nav className="list-none space-y-2">
                <li><a className="hover:text-white">Support</a></li>
                <li><a className="hover:text-white">Contact Us</a></li>
                <li><a className="hover:text-white">FAQs</a></li>
                <li><a className="hover:text-white">Live Chat</a></li>
              </nav>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-semibold text-orange-400 text-sm mb-3">
                Quick Links
              </h2>
              <nav className="list-none space-y-2">
                <li><a className="hover:text-white">Privacy Policy</a></li>
                <li><a className="hover:text-white">Terms & Conditions</a></li>
                <li><a className="hover:text-white">Chef Signup</a></li>
                <li><a className="hover:text-white">Become a Partner</a></li>
              </nav>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-semibold text-orange-400 text-sm mb-3">
                Contact
              </h2>
              <p className="text-gray-300 text-sm mb-4">
                Email: hello@foodkart.com <br />
                Phone: +91 82372 90912
              </p>
        
            </div>
          </div>
        </div>

        <div className="bg-black bg-opacity-70">
          <div className="container mx-auto py-4 px-5 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 text-center sm:text-left">
              © 2025 FoodKart — All rights reserved.
            </p>
            <span className="inline-flex mt-2 sm:mt-0 text-sm">
              Made with passion by Hadiya
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

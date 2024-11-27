import React from "react";

// Black Header Component
const BlackHeader = () => (
  <div className="bg-black text-white text-sm py-2 flex justify-between px-6">
    <span>FREE SHIPPING ON ALL ORDERS OVER CA$50</span>
    <div className="flex items-center">
      <img
        src="https://upload.wikimedia.org/wikipedia/en/c/cf/Flag_of_Canada.svg"
        alt="Canadian Flag"
        className="w-6 h-4 mr-2"
      />
      <select
        className="bg-black text-white border-none text-sm"
        defaultValue="CAD"
      >
        <option value="CAD">CAD</option>
        <option value="USD">USD</option>
      </select>
    </div>
  </div>
);

// Navigation Bar Component
const Navbar = () => (
  <div className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
    {/* Logo */}
    <img src="./images/logo.png" alt="Company Logo" className="h-8" />

    {/* Navigation Links */}
    <div className="flex space-x-6 text-gray-700">
      <a href="#home" className="hover:text-black">
        Home
      </a>
      <a href="#shop" className="hover:text-black">
        Shop
      </a>
      <a href="#new-arrival" className="hover:text-black">
        New Arrival
      </a>
      <a href="#sale" className="hover:text-black">
        Sale
      </a>
    </div>

    {/* Icons */}
    <div className="flex space-x-4">
      <a href="#search" className="hover:text-black">
        🔍
      </a>
      <a href="#profile" className="hover:text-black">
        👤
      </a>
      <a href="#wishlist" className="hover:text-black">
        ❤️
      </a>
      <a href="#cart" className="hover:text-black">
        🛍️
      </a>
    </div>
  </div>
);

// Main Banner Component
const MainBanner = () => (
  <div className="relative">
    <img
      src="./images/main.png"
      alt="Winter Collection"
      className="w-full h-[60vh] object-cover"
    />
    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
      <h1 className="text-4xl font-bold">WINTER COLLECTION 2024</h1>
      <p className="mt-2 text-lg">Get up to 50% Off New Arrivals</p>
      <button className="mt-4 bg-pink-500 text-white py-2 px-6 rounded-lg hover:bg-pink-600">
        SHOP NOW
      </button>
    </div>
  </div>
);

// Best Seller Component
const BestSeller = () => (
  <div className="py-8 px-6">
    <h2 className="text-2xl font-bold mb-4">Best Seller</h2>
    <div className="grid grid-cols-5 gap-4">
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className="border rounded-lg p-4 shadow-md hover:shadow-lg"
        >
          <img
            src={`https://via.placeholder.com/150?text=Product+${index + 1}`}
            alt={`Product ${index + 1}`}
            className="mb-2 w-full h-32 object-cover"
          />
          <h3 className="font-medium">Product {index + 1}</h3>
          <p className="text-sm text-gray-500">CA$50.00</p>
          <button className="mt-2 w-full bg-black text-white py-1 rounded-lg">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  </div>
);

// Homepage Component
const Homepage = () => (
  <div>
    <BlackHeader />
    <Navbar />
    <MainBanner />
    <BestSeller />
  </div>
);

export default Homepage;


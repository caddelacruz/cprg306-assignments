"use client";

import { useState } from "react";
import Item from './item';

export default function ItemList({items}) {
    // Initialize state variable sortBy with default value "name"
    const [sortBy, setSortBy] = useState("name");
    
    // Sort the items based on sortBy state variable
    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === "name") {
            return a.name.localeCompare(b.name);
        } else if (sortBy === "category") {
            return a.category.localeCompare(b.category);
        }
        return 0; 
    });

    return (
        <div>
          {/* Sort Buttons */}
          <div className="mb-4 mt-10">
            <span className="text-xl text-white mr-2">Sort By:</span>
    
            {/* Sort by Name Button */}
            <button
              onClick={() => setSortBy("name")}
              className={`mr-2 px-8 py-2 font-bold rounded ${
                sortBy === "name"
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 text-white"
                  : "bg-gradient-to-r from-purple-500 to-pink-500"
              }`}
            >
              Name
            </button>
    
            {/* Sort by Category Button */}
            <button
              onClick={() => setSortBy("category")}
              className={`mr-2 px-6 py-2 font-bold rounded ${
                sortBy === "category"
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 text-white"
                  : "bg-gradient-to-r from-purple-500 to-pink-500"
              }`}
            >
              Category
            </button>
          </div>
    
          {/* Render Sorted Items */}
          {sortedItems.map((item) => (
            <div key={item.id} className="mb-2">
              <Item
                name={item.name}
                quantity={item.quantity}
                category={item.category}
              />
            </div>
          ))}
        </div>
      );
    }
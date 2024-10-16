"use client";

import { useState } from "react";
import Item from './item';
import itemsData from './items.json';

export default function ItemList() {
    // Initialize state variable sortBy with default value "name"
    const [sortBy, setSortBy] = useState("name");
    
    // Sort the items based on sortBy state variable
    const sortedItems = [...itemsData].sort((a, b) => {
        if (sortBy === "name") {
            return a.name.localeCompare(b.name);
        } else if (sortBy === "category") {
            return a.category.localeCompare(b.category);
        }
        return 0; // Default case (not needed but good for safety)
    });

    // Optional: Group items by category
    const groupedItems = sortedItems.reduce((acc, item) => {
        (acc[item.category] = acc[item.category] || []).push(item);
        return acc;
    }, {});

    // Get sorted categories
    const sortedCategories = Object.keys(groupedItems).sort(); // Sort the category keys alphabetically

    return (
        <div>
            {/* Sort buttons */}
            <div className="mb-4">
                <span className="text-white mr-2">Sort By:</span> {/* Sort By label */}
                <button
                    onClick={() => setSortBy("name")}
                    className={`mr-2 px-8 py-2 font-bold rounded ${sortBy === "name" ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 text-white" : "bg-gradient-to-r from-purple-500 to-pink-500"}`}
                >
                    Name
                </button>
                <button
                    onClick={() => setSortBy("category")}
                    className={`mr-2 px-6 py-2 font-bold rounded ${sortBy === "category" ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 text-white" : "bg-gradient-to-r from-purple-500 to-pink-500"}`}
                >
                    Category
                </button>
                <button
                    onClick={() => setSortBy("group")}
                    className={`mr-2 px-6 py-2 font-bold rounded ${sortBy === "group" ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 text-white" : "bg-gradient-to-r from-purple-500 to-pink-500"}`}
                >
                    Grouped <p>Category</p>
                </button>
            </div>

            {/* Render sorted items or grouped items */}
            {sortBy === "group"
                ? sortedCategories.map(category => (
                    <div key={category} className="mb-4">
                        <h2 className="text-2xl font-bold text-white capitalize">{category}</h2>
                        {groupedItems[category].map(item => (
                            <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
                        ))}
                    </div>
                ))
                : sortedItems.map(item => (
                    <div key={item.id} className="mb-2">
                        <Item name={item.name} quantity={item.quantity} category={item.category} />
                    </div>
                ))}
        </div>
    );
}



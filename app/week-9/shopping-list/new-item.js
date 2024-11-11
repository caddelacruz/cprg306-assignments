"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) { // Accept onAddItem as a prop
    const [quantity, setQuantity] = useState(1);   // Initializing count to 
    const [name, setName] = useState(""); // name field initially set to empty
    const [category, setCategory] = useState("produce");   // category field initially set to "Produce"

    // Increment by 1 not exceeding 20
    const increment = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1);  // Set increment to 1
        }
    };

    // Decrement by 1 not going below 1
    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1); // Set decrement to 1
        }
    };

    // To prevent a form from doing its default action
    const handleSubmit = (event) => {  
        event.preventDefault();  

        const id = Math.floor(Math.random() * 1000000);

        // Creating an object with the current values
        const item = {
            id,
            name,
            quantity,
            category,
        };

        onAddItem(item); // Call the onAddItem function passed as a prop
        // Reset the state variables to their initial values
        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col h-56 w-96 mx-3 mt-5 p-4">
            {/* Name Field */}
            <input 
                type="text" 
                placeholder="Item name" 
                value={name} 
                onChange={(event) => setName(event.target.value)} 
                required
                className="h-16 w-full p-2 rounded-xl mb-4"
            />

            {/* Container for Quantity Controls and Category Field */}
            <div className="flex items-center w-full mb-4">
                {/* Gradient Box for Quantity, Decrement, and Increment */}
                <div className="bg-gradient-to-r from-purple-900 to-slate-800 flex justify-center items-center h-14 w-56 mx-auto rounded-xl">
                    <p className="text-white text-2xl mr-12">{quantity}</p>
                    <button 
                        type="button"
                        onClick={decrement}
                        className={`text-white text-2xl font-bold h-10 w-12 rounded-xl mr-2 ${quantity === 1 ? "bg-gray-500" : "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500"}`}
                        disabled={quantity === 1}
                    >
                        -
                    </button>
                    
                    <button 
                        type="button"
                        onClick={increment}
                        className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 text-white text-2xl font-bold h-10 w-12 rounded-xl"
                    >
                        +
                    </button>
                </div>
                
                {/* Category Field */}
                <select 
                    value={category} 
                    onChange={(event) => setCategory(event.target.value)} 
                    className="h-16 w-36 p-2 rounded-xl ml-4"
                >
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen">Frozen Foods</option>
                    <option value="canned">Canned Goods</option>
                    <option value="dry">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>
                </select>
            </div>
            
            {/* Submit Button */}
            <button 
                type="submit" 
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-2xl font-bold h-16 w-full rounded-xl"
            >
                +
            </button>
        </form>
    );
}
"use client"

import { useState }  from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);   // Initializing count to 
    const [activeButton, setActiveButton] = useState(null);  // To track which button is active

    // Increment by 1 not exceeding to 20
    const increment = () => {
        if (quantity < 20) {
        setQuantity(quantity +1);  // Set increment to 1
        }
        
    };

    // Decrement by 1 not going below 1
    const decrement = () => {
        if (quantity > 1) {
        setQuantity(quantity -1); // Set decrement to 1
        }
    };

    return (
        <div className= "bg-gradient-to-r from-purple-900 to-slate-800 flex justify-center items-center h-20 w-64 mx-auto mt-10">
            <p className="text-white mr-20 text-3xl">{quantity}</p>
            
            <button onClick={decrement}
            className={`text-white 
            items-center 
            text-2xl 
            font-bold 
            h-10 w-12 
            rounded-xl 
            mr-2 
            ${quantity === 1 ? // The color is gray if the quantity is 1
            "bg-gray-500" : "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500"}`}
            disabled={quantity === 1}>
            -
            </button>
            
            <button onClick={increment} 
            className="bg-gradient-to-r from-purple-500 to-pink-500
            hover:from-pink-500 hover:to-yellow-500
            active-border-blue-300
            text-white 
            items-center
            text-2xl     
            font-bold 
            h-10 w-12 
            rounded-xl"> 
            + 
            </button>
            
        </div>
        
        );
    }


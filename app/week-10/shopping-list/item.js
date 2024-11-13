import React from 'react';

export default function Item({ name, quantity, category, onSelect }) {
    return (
        <div
            className="bg-gradient-to-r from-purple-900 to-slate-800 text-white p-2 w-96 mb-4 font-bold ml-6 cursor-pointer"
            onClick={onSelect} // Call onSelect when the item is clicked
        >
            <h3 className="text-lg font-bold">{name}</h3>
            <p className="text-white font-normal">Buy {quantity} in {category}</p>
        </div>
    );
}
import React from 'react';

export default function Item({ name, quantity, category }) {
    return (
        <div className="mb-2">
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-white">Buy {quantity} in {category}</p>
        </div>
    );
}

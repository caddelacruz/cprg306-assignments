"use client";

import { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list'; 
import itemsData from './items.json';
import MealIdeas from './meal-ideas'; 

export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState('');

    const handleAddItem = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]); // Add new item to the current list
    };

    const handleItemSelect = (item) => {
        const cleanedName = item.name.split(',')[0].trim().replace(/[\u{1F600}-\u{1F64F}]/gu, ''); // Remove emojis and keep only the item name
        setSelectedItemName(cleanedName); // Set the selected item name
    };

    return (
        <main className="bg-black min-h-screen p-4 flex">
            {/* Left side: New Item and Item List */}
            <div className="flex flex-col w-1/2 pr-2">
                <header>
                    <h1 className="text-4xl text-white font-bold mb-6">Shopping List</h1>
                    <NewItem onAddItem={handleAddItem} />
                </header>
                <ItemList items={items} onItemSelect={handleItemSelect} />
            </div>
            {/* Right side: Meal Ideas */}
            <div className="w-1/2 pl-2">
                {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
            </div>
        </main>
    );
}



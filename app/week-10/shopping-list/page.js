"use client";

import { useState, useEffect } from 'react';
import NewItem from './new-item';
import ItemList from './item-list'; 
import MealIdeas from './meal-ideas'; 
import { getItems, addItem } from "../_services/shopping-list-service";
import { auth, onAuthStateChanged } from '../_utils/firebase';


export default function Page() {
    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState('');
    const [userId, setUserId] = useState(null); 
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserId(user.uid); 
                // Load items for the user
                loadItems(user.uid);
            } else {
                setUserId(null); 
                setItems([]); // Clear items if not logged in
            }
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const loadItems = async (userId) => {
        const items = await getItems(userId);
        setItems(items);
    };

    const handleAddItem = async (newItem) => {
        // Generate a temporary ID or use a timestamp as a unique identifier
        const tempId = Date.now().toString();
    
        // Optimistically update the state
        setItems((prevItems) => [...prevItems, { ...newItem, id: tempId }]);
    
        try {
            // Add the item to Firestore
            const newItemId = await addItem(userId, newItem);
    
            // Once Firestore confirms, replace the temporary ID with the real ID
            setItems((prevItems) =>
                prevItems.map((item) =>
                    item.id === tempId ? { ...item, id: newItemId } : item
                )
            );
        } catch (error) {
            console.error("Error adding item:", error);
            // Optionally, you can remove the item if there was an error adding it
            setItems((prevItems) => prevItems.filter((item) => item.id !== tempId));
        }
    };
    

    const handleItemSelect = (item) => {
        const cleanedName = item.name.split(',')[0].trim().replace(/[\u{1F600}-\u{1F64F}]/gu, ''); // Remove emojis and keep only the item name
        setSelectedItemName(cleanedName);
    };

    // Conditionally render based on loading state
    if (loading) {
        return <div>Loading...</div>;
    }
    
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



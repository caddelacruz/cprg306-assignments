"use client";

import {useState} from 'react';
import NewItem from './new-item';
import ItemList from './item-list'; 
import itemsData from './items.json'

export default function Page() {

    const[items, setItems] = useState(itemsData);

    const handleAddItem = (newItem) => {
        setItems ([...itemsData, newItem]);
    };
    
    return (
      <main className="bg-black min-h-screen p-4"> // To make the main background black
        <header>
          <h1 className="text-4xl text-white font-bold mb-6">Shopping List</h1>
          {/* Render NewItem and pass the handler as a prop */}
            <NewItem onAddItem={handleAddItem} />
          </header>
          {/* Render ItemList and pass the items state as a prop */}
            <ItemList items={items} />
        </main>
      );
    }
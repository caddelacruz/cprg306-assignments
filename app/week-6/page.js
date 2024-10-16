import React from 'react';
import ItemList from './item-list'; 

export default function Page() {
    return (
        <main className="bg-black min-h-screen p-4"> // To make the main background black
            <header>
                <h1 className="text-4xl text-white font-bold mb-6">Shopping List</h1>
            </header>
            <ItemList />
        </main>
    );
}
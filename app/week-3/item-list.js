import React from 'react';
import Item from './item';

export default function ItemList() {  //Functional component
    
    // Define the item objects
    const item1 = {
        name: "milk, 4 L 🥛",
        quantity: 1,
        category: "dairy",
        };

    const item2 = {
     name: "bread 🍞",
     quantity: 2,
        category: "bakery",
        };

    const item3 = {
        name: "eggs, dozen 🥚",
        quantity: 2,
        category: "dairy",
        };

    const item4 = {
        name: "bananas 🍌",
        quantity: 6,
        category: "produce",
        };

    const item5 = {
        name: "broccoli 🥦",
        quantity: 3,
        category: "produce",
        };

    const item6 = {
        name: "chicken breasts, 1 kg 🍗",
        quantity: 1,
        category: "meat",
        };

    const item7 = {
        name: "pasta sauce 🍝",
        quantity: 3,
        category: "canned goods",
        };

    const item8 = {
        name: "spaghetti, 454 g 🍝",
        quantity: 2,
        category: "dry goods",
        };

    const item9 = {
        name: "toilet paper, 12 pack 🧻",
        quantity: 1,
        category: "household",
        };

    const item10 = {
        name: "paper towels, 6 pack",
        quantity: 1,
        category: "household",
        };

    const item11 = {
        name: "dish soap 🍽️",
        quantity: 1,
        category: "household",
        };

    const item12 = {
        name: "hand soap 🧼",
        quantity: 4,
        category: "household",
        };
    
    return (
        <main>
            <section className="bg-indigo-950 text-white p-2 w-96 mb-4 font-bold">
                <h3 className = "text-2xl">{item1.name}</h3>
                <p className= "font-xl">Buy {item1.quantity} in {item1.category}</p>
            </section>
            <section className="bg-indigo-950 text-white p-2 w-96 mb-4 font-bold">
              <h3 className="text-2xl">{item2.name}</h3>
                <p>Buy {item2.quantity} in {item2.category}</p>
            </section>
            <section className="bg-indigo-950 text-white p-2 w-96 mb-4 font-bold">
                <h3 className="text-2xl">{item3.name}</h3>
                <p>Buy {item3.quantity} in {item3.category}</p>
            </section>
            <section className="bg-indigo-950 text-white p-2 w-96 mb-4 font-bold">
                <h3 className="text-2xl">{item4.name}</h3>
                <p>Buy {item4.quantity} in {item4.category}</p>
            </section>
            <section className="bg-indigo-950 text-white p-2 w-96 mb-4 font-bold">
               <h3 className="text-2xl">{item5.name}</h3>
               <p>Buy {item5.quantity} in {item5.category}</p>
            </section>
            <section className="bg-indigo-950 text-white p-2 w-96 mb-4 font-bold">
                <h3 className="text-2xl">{item6.name}</h3>
                <p>Buy {item6.quantity} in {item6.category}</p>
                </section>
            <section className="bg-indigo-950 text-white p-2 w-96 mb-4 font-bold">
                <h3 className="text-2xl">{item7.name}</h3>
                <p>Buy {item7.quantity} in {item7.category}</p>
            </section>
            <section className="bg-indigo-950 text-white p-2 w-96 mb-4 font-bold">
                <h3 className="text-2xl">{item8.name}</h3>
                <p>Buy {item8.quantity} in {item8.category}</p>
            </section>
            <section className="bg-indigo-950 text-white p-2 w-96 mb-4 font-bold">
                <h3 className="text-2xl">{item9.name}</h3>
                <p>Buy {item9.quantity} in {item9.category}</p>
            </section>
            <section className="bg-indigo-950 text-white p-2 w-96 mb-4 font-bold">
                <h3 className="text-2xl">{item10.name}</h3>
                <p>Buy {item10.quantity} in {item10.category}</p>
            </section>
            <section className="bg-indigo-950 text-white p-2 w-96 mb-4 font-bold">
                <h3 className="text-2xl">{item11.name}</h3>
                <p>Buy {item11.quantity} in {item11.category}</p>
            </section>
            <section className="bg-indigo-950 text-white p-2 w-96 mb-4 font-bold">
                <h3 className="text-2xl">{item12.name}</h3>
                <p>Buy {item12.quantity} in {item12.category}</p>
            </section>
        </main>
        );
    }


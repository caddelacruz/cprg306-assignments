"use client";

import React, { useState, useEffect } from 'react';

const MealIdeas = ({ ingredient }) => {
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(false); 
    const [error, setError] = useState(null);
    const [selectedMealId, setSelectedMealId] = useState(null); // State to track selected meal ID
    const [mealDetails, setMealDetails] = useState({}); // State to hold meal details

    const fetchMealIdeas = async (ingredient) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            return data.meals || [];
        } catch (err) {
            setError(err.message);
            console.error('Error fetching meal ideas:', err);
            return [];
        } finally {
            setLoading(false);
        }
    };

    const fetchMealDetails = async (mealId) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            return data.meals[0]; // Return the first meal from the response
        } catch (err) {
            setError(err.message);
            console.error('Error fetching meal details:', err);
            return null;
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const loadMealIdeas = async () => {
            if (ingredient) {
                const fetchedMeals = await fetchMealIdeas(ingredient);
                setMeals(fetchedMeals);
            } else {
                setMeals([]); // Clear meals if no ingredient
            }
        };
        loadMealIdeas();
    }, [ingredient]);

    const handleMealClick = async (mealId) => {
        if (selectedMealId === mealId) {
           setSelectedMealId(null);
            setMealDetails({});
        } else {
            const meal = await fetchMealDetails(mealId);
            setMealDetails(meal);
            setSelectedMealId(mealId);
        }
    };

    return (
        <div className="ml-0">
        {ingredient && <h2 className="text-white text-3xl font-bold">Meal Ideas</h2>}
{!loading && ingredient && meals.length > 0 && (
    <div className="text-white text-xl">Here are some meal ideas using {ingredient}:</div>  
)}
{error && <p className="text-red-500">Error: {error}</p>}

        {meals.length > 0 ? (
            <ul>
                {meals.map((meal) => (
                    <li key={meal.idMeal} className="mb-2">
                        <div 
                            className={`bg-gradient-to-r from-purple-900 to-slate-800  hover:from-pink-500 hover:to-yellow-500 max-w-md rounded-none cursor-pointer ${selectedMealId === meal.idMeal ? 'py-4' : 'h-14'}`}
                            onClick={() => handleMealClick(meal.idMeal)}
                        >
                            <h3 className="ml-3 text-white text-xl">{meal.strMeal}</h3>
                            {/* Ingredients section */}
                            {selectedMealId === meal.idMeal && mealDetails && (
                                <div className="mt-2 ml-3">
                                    <h4 className="ml-5 text-white">Ingredients needed:</h4>
                                    <ul className="ml-12 text-white">
                                        {Object.keys(mealDetails)
                                            .filter(key => key.includes('strIngredient') && mealDetails[key])
                                            .map((key, index) => (
                                                <li key={index}>
                                                    {mealDetails[key]} ({mealDetails[`strMeasure${index + 1}`]})
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        ) : (
            !loading && !error && (
                <p className="text-white">No meal ideas found for {ingredient}.</p>
            )
        )}
      </div>
      
  );
  
};

export default MealIdeas;




'use client';

import React, { useState } from "react";
import FoodCard from "@/components/customer/FoodCard";
import { BuildingStorefrontIcon, TagIcon } from "@heroicons/react/24/outline";

interface Food {
    id: number;
    name: string;
    image: string;
    category: string;
    price: number;
    restaurant: string;
}

const dummyFoods: Food[] = [
    {
        id: 1,
        name: "Jollof Rice",
        image: "/images/meat.jpg",
           
        category: "Nigerian",
        price: 8,
        restaurant: "Mama Africa",
    },
    {
        id: 2,
        name: "Fried Plantain (Dodo)",
        image: "/images/dodo2.jpg",
        category: "Nigerian",
        price: 5,
        restaurant: "Mama Africa",
    },
    {
        id: 3,
        name: "Pounded Yam & Egusi Soup",
        image: "/images/pando2.jpg",
        category: "Nigerian",
        price: 12,
        restaurant: "Lekki Bites",
    },
    {
        id: 4,
        name: "Suya (Spicy Meat Skewers)",
        image: "/images/suya.jpg",
        category: "Nigerian",
        price: 10,
        restaurant: "Suya Spot",
    },
    {
        id: 5,
        name: "Shawarma Wrap",
        image:
            "https://cdn.pixabay.com/photo/2022/03/11/10/06/wrap-7061741_1280.jpg",
        category: "Fast Food",
        price: 12,
        restaurant: "Mario's Kitchen",
    },
    {
        id: 6,
        name: "Chicken Biryani",
        image:
            "https://cdn.pixabay.com/photo/2021/01/06/10/11/shawarma-5893935_640.jpg",
        category: "Indian",
        price: 10,
        restaurant: "Spice Hub",
    },
    {
        id: 7,
        name: "Beef Burger",
        image:
            "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_1280.jpg",
        category: "Fast Food",
        price: 14,
        restaurant: "Burger House",
    },
    {
        id: 8,
        name: "Sushi Roll",
        image:
            "https://cdn.pixabay.com/photo/2021/01/06/10/11/shawarma-5893935_640.jpg",
        category: "Japanese",
        price: 15,
        restaurant: "Tokyo Dine",
    },
];

export default function FoodsPage() {
    const [selectedRestaurant, setSelectedRestaurant] = useState<string>("");
    const [selectedCategory, setSelectedCategory] = useState<string>("");

    const restaurants = Array.from(new Set(dummyFoods.map((f) => f.restaurant)));
    const categories = Array.from(new Set(dummyFoods.map((f) => f.category)));

    const filteredFoods = dummyFoods.filter(
        (food) =>
            (selectedRestaurant ? food.restaurant === selectedRestaurant : true) &&
            (selectedCategory ? food.category === selectedCategory : true)
    );

    return (
        <div className="p-6 bg-gradient-to-b from-orange-50 via-white to-yellow-50 min-h-screen">
            {/* Restaurants Filter */}
            <div className="mb-6">
                <h3 className="flex items-center gap-2 text-lg font-semibold mb-3 text-gray-700">
                    <BuildingStorefrontIcon className="h-5 w-5" />
                    Restaurants
                </h3>
                <div className="flex flex-wrap gap-3">
                    <button
                        onClick={() => setSelectedRestaurant("")}
                        className={`px-4 py-2 rounded-full border ${selectedRestaurant === ""
                            ? "bg-blue-500 text-white border-blue-500"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                    >
                        All
                    </button>
                    {restaurants.map((rest) => (
                        <button
                            key={rest}
                            onClick={() => setSelectedRestaurant(rest)}
                            className={`px-4 py-2 rounded-full border ${selectedRestaurant === rest
                                ? "bg-blue-500 text-white border-blue-500"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                        >
                            {rest}
                        </button>
                    ))}
                </div>
            </div>

            {/* Categories Filter */}
            <div className="mb-6">
                <h3 className="flex items-center gap-2 text-lg font-semibold mb-3 text-gray-700">
                    <TagIcon className="h-5 w-5" />
                    Categories
                </h3>
                <div className="flex flex-wrap gap-3">
                    <button
                        onClick={() => setSelectedCategory("")}
                        className={`px-4 py-2 rounded-full border ${selectedCategory === ""
                            ? "bg-blue-500 text-white border-blue-500"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                    >
                        All
                    </button>
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-4 py-2 rounded-full border ${selectedCategory === cat
                                ? "bg-blue-500 text-white border-blue-500"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Food List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredFoods.map((food) => (
                    <FoodCard key={food.id} food={food} />
                ))}
            </div>
        </div>
    );
}

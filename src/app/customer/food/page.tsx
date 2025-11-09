"use client";

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
        price: 1500,
        restaurant: "Mama Africa",
    },
    {
        id: 2,
        name: "Fried Plantain (Dodo)",
        image: "/images/dodo2.jpg",
        category: "Nigerian",
        price: 1000,
        restaurant: "Mama Africa",
    },
    {
        id: 3,
        name: "Pounded Yam & Egusi Soup",
        image: "/images/pando2.jpg",
        category: "Nigerian",
        price: 1800,
        restaurant: "Lekki Bites",
    },
    {
        id: 4,
        name: "Suya (Spicy Meat Skewers)",
        image: "/images/suya.jpg",
        category: "Nigerian",
        price: 1000,
        restaurant: "Suya Spot",
    },
    {
        id: 5,
        name: "Waina Masa",
        image: "/images/masa2.jpg",
        category: "Fast Food",
        price: 100,
        restaurant: "Mario's Kitchen",
    },
    {
        id: 6,
        name: "Gurasa",
        image: "/images/gurasa1.jpg",
        category: "Indian",
        price: 250,
        restaurant: "Spice Hub",
    },
    {
        id: 7,
        name: "Awara",
        image: "/images/awara1.jpg",
        category: "Fast Food",
        price: 500,
        restaurant: "Awara House",
    },
    {
        id: 8,
        name: "Bread",
        image: "/images/bread.jpg",
        category: "Japanese",
        price: 1000,
        restaurant: "Tokyo Dine",
    },
    {
        id: 9,
        name: "Moi Moi (Bean Cake)",
        image: "/images/moi.webp",
        category: "Nigerian",
        price: 1000,
        restaurant: "Mama Africa",
    },
    {
        id: 10,
        name: "Akara (Bean Balls)",
        image: "/images/akara.jpg",
        category: "Nigerian",
        price: 500,
        restaurant: "Street Bites",
    },
    {
        id: 11,
        name: "Efo Riro (Vegetable Stew)",
        image: "/images/vege.jpg",
        category: "Nigerian",
        price: 1500,
        restaurant: "Lekki Bites",
    },
    {
        id: 12,
        name: "Grilled Chicken",
        image: "/images/grilled.jpg",
        category: "Fast Food",
        price: 2000,
        restaurant: "Mario's Kitchen",
    },
    {
        id: 13,
        name: "Puff Puff",
        image: "/images/puff.webp",
        category: "Fast Food",
        price: 500,
        restaurant: "Pizza Hub",
    },
    {
        id: 14,
        name: "Spring Rolls",
        image: "/images/spring.jpg",
        category: "Chinese",
        price: 500,
        restaurant: "Golden Dragon",
    },
    {
        id: 15,
        name: "Chips & Egg",
        image: "/images/chips.jpg",
        category: "Nigerian",
        price: 1000,
        restaurant: "Mama Africa",
    },
    {
        id: 16,
        name: "Spaghetti",
        image: "/images/spaghetti.jpg",
        category: "Italian",
        price: 1000,
        restaurant: "Roma Dine",
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

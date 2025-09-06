"use client";

import React, { useState } from "react";
import { ShoppingCartIcon, StarIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface FoodItem {
    id: number;
    name: string;
    image: string;
    description: string;
    price: number;
    rating: number;
    category: string;
    nutrition: {
        calories: number;
        protein: string;
        carbs: string;
        fat: string;
    };
}

const sampleFood: FoodItem = {
    id: 1,
    name: "Shawarma Margherita",
    image: "https://cdn.pixabay.com/photo/2022/03/11/10/06/wrap-7061741_1280.jpg",
    description:
        "Delicious Shawarma wrapped in soft bread with fresh vegetables, cheese, and savory sauces. Perfect for lunch or dinner.",
    price: 12,
    rating: 4.5,
    category: "Fast Food",
    nutrition: {
        calories: 450,
        protein: "20g",
        carbs: "50g",
        fat: "18g",
    },
};

const relatedFoods: FoodItem[] = [
    {
        id: 2,
        name: "Chicken Biryani",
        image: "https://cdn.pixabay.com/photo/2021/01/06/10/11/shawarma-5893935_640.jpg",
        description: "Flavorful chicken biryani with aromatic spices and tender meat.",
        price: 10,
        rating: 4.2,
        category: "Rice Dish",
        nutrition: { calories: 500, protein: "25g", carbs: "60g", fat: "15g" },
    },
    {
        id: 3,
        name: "Veggie Pizza",
        image: "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg",
        description: "Fresh vegetable pizza with melted cheese and tomato sauce.",
        price: 15,
        rating: 4.7,
        category: "Pizza",
        nutrition: { calories: 350, protein: "12g", carbs: "45g", fat: "10g" },
    },
];

export default function FoodDetails() {
    const [quantity, setQuantity] = useState(1);

    const increaseQty = () => setQuantity((prev) => prev + 1);
    const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

    const handleAddToCart = () => {
        alert(`Added ${quantity} x ${sampleFood.name} to cart`);
    };

    return (
        <div className="p-4 sm:p-6 max-w-6xl mx-auto">
            {/* Back to Food List */}
            <div className="mb-4">
                <Link
                    href="/customer/foods"
                    className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition"
                >
                    <ArrowLeftIcon className="h-5 w-5 mr-2" />
                    Back to Foods
                </Link>
            </div>

            {/* Food Details Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                <div className="md:flex">
                    {/* Food Image */}
                    <div className="md:w-1/2">
                        <img
                            src={sampleFood.image}
                            alt={sampleFood.name}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Food Details */}
                    <div className="md:w-1/2 p-6 flex flex-col justify-between">
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800">{sampleFood.name}</h2>
                            <p className="text-gray-500 mt-1 text-sm">{sampleFood.category}</p>

                            {/* Rating */}
                            <div className="flex items-center mt-2">
                                {[...Array(5)].map((_, idx) => (
                                    <StarIcon
                                        key={idx}
                                        className={`h-5 w-5 ${idx < Math.floor(sampleFood.rating)
                                                ? "text-yellow-400"
                                                : "text-gray-300"
                                            }`}
                                    />
                                ))}
                                <span className="ml-2 text-gray-600 text-sm">{sampleFood.rating.toFixed(1)}</span>
                            </div>

                            <p className="text-gray-700 mt-4">{sampleFood.description}</p>

                            <p className="text-xl font-semibold text-gray-800 mt-4">
                                ${sampleFood.price.toFixed(2)}
                            </p>

                            {/* Nutrition Info */}
                            <div className="mt-4">
                                <h3 className="text-gray-700 font-semibold mb-2">Nutrition</h3>
                                <table className="text-gray-700 w-full">
                                    <tbody>
                                        <tr>
                                            <td>Calories:</td>
                                            <td>{sampleFood.nutrition.calories}</td>
                                        </tr>
                                        <tr>
                                            <td>Protein:</td>
                                            <td>{sampleFood.nutrition.protein}</td>
                                        </tr>
                                        <tr>
                                            <td>Carbs:</td>
                                            <td>{sampleFood.nutrition.carbs}</td>
                                        </tr>
                                        <tr>
                                            <td>Fat:</td>
                                            <td>{sampleFood.nutrition.fat}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Quantity Selector & Add to Cart */}
                        <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={decreaseQty}
                                    className="p-2 bg-gray-200 rounded-md hover:bg-gray-300 transition"
                                >
                                    -
                                </button>
                                <span className="text-gray-800 font-medium px-2">{quantity}</span>
                                <button
                                    onClick={increaseQty}
                                    className="p-2 bg-gray-200 rounded-md hover:bg-gray-300 transition"
                                >
                                    +
                                </button>
                            </div>

                            <button
                                onClick={handleAddToCart}
                                className="inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
                            >
                                <ShoppingCartIcon className="h-5 w-5 mr-2" />
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Reviews Section */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Customer Reviews</h3>
                <div className="space-y-4">
                    <div className="border p-4 rounded-md">
                        <div className="flex items-center justify-between mb-2">
                            <span className="font-medium text-gray-800">John Doe</span>
                            <div className="flex">
                                {[...Array(5)].map((_, idx) => (
                                    <StarIcon
                                        key={idx}
                                        className={`h-5 w-5 ${idx < 5 ? "text-yellow-400" : "text-gray-300"
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                        <p className="text-gray-600 text-sm">Delicious! Loved the flavors and freshness.</p>
                    </div>

                    <div className="border p-4 rounded-md">
                        <div className="flex items-center justify-between mb-2">
                            <span className="font-medium text-gray-800">Jane Smith</span>
                            <div className="flex">
                                {[...Array(5)].map((_, idx) => (
                                    <StarIcon
                                        key={idx}
                                        className={`h-5 w-5 ${idx < 4 ? "text-yellow-400" : "text-gray-300"
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                        <p className="text-gray-600 text-sm">Very tasty, will order again!</p>
                    </div>
                </div>
            </div>

            {/* Related Foods Section */}
            <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Related Foods</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {relatedFoods.map((food) => (
                        <div key={food.id} className="border rounded-md overflow-hidden">
                            <img src={food.image} alt={food.name} className="h-32 w-full object-cover" />
                            <div className="p-4 flex flex-col justify-between">
                                <div>
                                    <h4 className="font-semibold text-gray-800">{food.name}</h4>
                                    <p className="text-gray-600 text-sm">${food.price.toFixed(2)}</p>
                                    <div className="flex mt-1">
                                        {[...Array(5)].map((_, idx) => (
                                            <StarIcon
                                                key={idx}
                                                className={`h-4 w-4 ${idx < Math.floor(food.rating) ? "text-yellow-400" : "text-gray-300"
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <button
                                    onClick={() => alert(`Added 1 x ${food.name} to cart`)}
                                    className="mt-2 px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

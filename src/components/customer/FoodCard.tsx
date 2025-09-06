import Link from "next/link";
import React from "react";

interface FoodCardProps {
    food: {
        id: number;
        name: string;
        image: string;
        category: string;
        price: number;
        restaurant: string;
    };
}

export default function FoodCard({ food }: FoodCardProps) {
    return (
        <div className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition">
            <img
                src={food.image}
                alt={food.name}
                className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="mt-2 text-lg font-bold">{food.name}</h3>
            <p className="text-sm text-gray-600">{food.category}</p>
            <p className="text-sm text-gray-500">{food.restaurant}</p>
            <p className="mt-1 font-semibold text-green-600">${food.price}</p>
            <div className="flex justify-between">
                <button className="px-3 py-2 bg-blue-800 text-white rounded">+ Cart</button>
                <Link href={"/customer/food/bhfvjhv"} className="px-3 py-2 bg-green-800 text-white rounded"> View</Link>
            </div>
        </div>
    );
}

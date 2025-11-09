"use client";

import { useCart } from "@/context/CartContext";
import { toast } from "react-hot-toast";
import Link from "next/link";

interface Food {
    id: number;
    name: string;
    image: string;
    category: string;
    price: number;
    restaurant: string;
}

export default function FoodCard({ food }: { food: Food }) {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart({
            id: food.id,
            name: food.name,
            image: food.image,
            price: food.price,
            quantity: 1,
        });
        toast.success(`${food.name} added to cart!`);
    };

    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition">
            <img
                src={food.image}
                alt={food.name}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h3 className="text-lg font-semibold">{food.name}</h3>
                <p className="text-sm text-gray-500">{food.category}</p>
                <p className="mt-2 text-gray-800 font-bold">₦{food.price}</p>
                <div className="mt-4 flex justify-between items-center">
                    {/* ✅ Add to Cart Button */}
                    <button
                        onClick={handleAddToCart}
                        className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition"
                    >
                        + Cart
                    </button>

                    {/* ✅ View Button */}
                    <Link
                        href={`/customer/food/${food.id}`}
                        className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg transition"
                    >
                        View
                    </Link>
                </div>
            </div>
        </div>
    );
}

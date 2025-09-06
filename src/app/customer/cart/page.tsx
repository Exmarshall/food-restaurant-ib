"use client";

import { useState } from "react";
import {
    ShoppingCartIcon,
    MinusIcon,
    PlusIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

interface CartItem {
    id: number;
    name: string;
    image: string;
    price: number;
    quantity: number;
}

const initialCart: CartItem[] = [
    {
        id: 1,
        name: "Shawarma Margherita",
        image:
            "https://cdn.pixabay.com/photo/2022/03/11/10/06/wrap-7061741_1280.jpg",
        price: 12,
        quantity: 1,
    },
    {
        id: 2,
        name: "Chicken Biryani",
        image:
            "https://cdn.pixabay.com/photo/2021/01/06/10/11/shawarma-5893935_640.jpg",
        price: 10,
        quantity: 2,
    },
];

export default function Cart() {
    const [cart, setCart] = useState<CartItem[]>(initialCart);

    const increaseQty = (id: number) => {
        setCart((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decreaseQty = (id: number) => {
        setCart((prev) =>
            prev.map((item) =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    const removeItem = (id: number) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };

    const clearCart = () => setCart([]);

    const grandTotal = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (
        <div className="p-4 sm:p-6 rounded-lg shadow-md">
            {/* Heading */}
            <div className="flex items-center justify-center gap-2 mb-6">
                <ShoppingCartIcon className="h-6 w-6 text-gray-700" />
                <h2 className="text-2xl font-semibold text-gray-800">Cart</h2>
            </div>

            {/* Desktop table */}
            <div className="hidden md:block overflow-x-auto">
                <table className="min-w-full border p-2 bg-gray-200 rounded-md border-collapse">
                    <thead>
                        <tr className="bg-gray-400 text-white">
                            <th className="p-3 text-left">Image</th>
                            <th className="p-3 text-left">Food Name</th>
                            <th className="p-3 text-left">Price</th>
                            <th className="p-3 text-center">Quantity</th>
                            <th className="p-3 text-right">Total</th>
                            <th className="p-3 text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item) => (
                            <tr key={item.id} className="border-t">
                                <td className="p-3">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="h-16 w-16 rounded object-cover"
                                    />
                                </td>
                                <td className="p-3 text-gray-800">{item.name}</td>
                                <td className="p-3 text-gray-800">${item.price.toFixed(2)}</td>
                                <td className="p-3 text-center">
                                    <div className="flex items-center justify-center gap-2">
                                        <button
                                            onClick={() => decreaseQty(item.id)}
                                            className="p-1 rounded-full bg-gray-300 hover:bg-gray-400"
                                        >
                                            <MinusIcon className="h-4 w-4 text-gray-700" />
                                        </button>
                                        <span className="text-gray-800">{item.quantity}</span>
                                        <button
                                            onClick={() => increaseQty(item.id)}
                                            className="p-1 rounded-full bg-gray-300 hover:bg-gray-400"
                                        >
                                            <PlusIcon className="h-4 w-4 text-gray-700" />
                                        </button>
                                    </div>
                                </td>
                                <td className="p-3 text-right text-gray-800">
                                    ${(item.price * item.quantity).toFixed(2)}
                                </td>
                                <td className="p-3 text-right">
                                    <button
                                        onClick={() => removeItem(item.id)}
                                        className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                                    >
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile cards */}
            <div className="md:hidden space-y-4">
                {cart.map((item) => (
                    <div
                        key={item.id}
                        className="flex items-center gap-4 bg-gray-200 p-3 rounded-md"
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            className="h-16 w-16 rounded object-cover"
                        />
                        <div className="flex-1">
                            <h3 className="font-semibold text-gray-800">{item.name}</h3>
                            <p className="text-gray-600">${item.price.toFixed(2)}</p>
                            <div className="flex items-center gap-2 mt-2">
                                <button
                                    onClick={() => decreaseQty(item.id)}
                                    className="p-1 rounded-full bg-gray-300 hover:bg-gray-400"
                                >
                                    <MinusIcon className="h-4 w-4 text-gray-700" />
                                </button>
                                <span className="text-gray-800">{item.quantity}</span>
                                <button
                                    onClick={() => increaseQty(item.id)}
                                    className="p-1 rounded-full bg-gray-300 hover:bg-gray-400"
                                >
                                    <PlusIcon className="h-4 w-4 text-gray-700" />
                                </button>
                                <button
                                    onClick={() => removeItem(item.id)}
                                    className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                        <p className="font-semibold text-gray-800">
                            ${(item.price * item.quantity).toFixed(2)}
                        </p>
                    </div>
                ))}
            </div>

            {/* Actions */}
            <div className="mt-6">
                {/* Grand total for mobile (top right) */}
                <div className="flex md:hidden justify-end mb-4">
                    <div className="bg-gray-100 p-3 rounded-md shadow text-right">
                        <h3 className="text-lg font-semibold text-gray-800">
                            Grand Total: ${grandTotal.toFixed(2)}
                        </h3>
                    </div>
                </div>

                {/* Buttons & layout */}
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    {/* Mobile layout */}
                    <div className="flex w-full justify-between md:hidden">
                        <button
                            onClick={clearCart}
                            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                        >
                            Clear Cart
                        </button>
                        <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
                            Checkout
                        </button>
                    </div>

                    {/* Desktop layout */}
                    <div className="hidden md:flex w-full items-center justify-between">
                        <button
                            onClick={clearCart}
                            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                        >
                            Clear Cart
                        </button>

                        <div className="bg-gray-100 px-6 py-2 rounded-md shadow text-center">
                            <h3 className="text-lg font-semibold text-gray-800">
                                Grand Total: ${grandTotal.toFixed(2)}
                            </h3>
                        </div>

                        <Link href={"/customer/checkout"} className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
                            Checkout
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

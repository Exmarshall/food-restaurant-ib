"use client";

import { useState } from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
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

export default function Checkout() {
    const [cart] = useState<CartItem[]>(initialCart);

    const grandTotal = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (
        <div className="p-4 sm:p-6 max-w-6xl mx-auto">
            {/* Back to Cart Button */}
            <div className="mb-6">
                <Link
                    href="/customer/cart"
                    className="inline-flex items-center px-4 py-2 bg-gray-300 text-gray-800 font-medium rounded-md hover:bg-gray-400 transition"
                >
                    <ArrowLeftIcon className="h-5 w-5 mr-2" />
                    Back to Cart
                </Link>
            </div>

            {/* Heading */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Checkout</h2>

            {/* Cart Items */}
            <div className="overflow-x-auto mb-8">
                <table className="min-w-full border rounded-md border-collapse bg-gray-100">
                    <thead>
                        <tr className="bg-gray-400 text-white">
                            <th className="p-3 text-left">Food</th>
                            <th className="p-3 text-left">Price</th>
                            <th className="p-3 text-center">Quantity</th>
                            <th className="p-3 text-right">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item) => (
                            <tr key={item.id} className="border-t">
                                <td className="p-3 flex items-center gap-3">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="h-12 w-12 rounded object-cover"
                                    />
                                    <span className="text-gray-800 font-medium">{item.name}</span>
                                </td>
                                <td className="p-3 text-gray-800">${item.price.toFixed(2)}</td>
                                <td className="p-3 text-center text-gray-800">{item.quantity}</td>
                                <td className="p-3 text-right text-gray-800">
                                    ${(item.price * item.quantity).toFixed(2)}
                                </td>
                            </tr>
                        ))}
                        <tr className="bg-gray-200">
                            <td colSpan={3} className="p-3 text-right font-semibold text-gray-800">
                                Grand Total:
                            </td>
                            <td className="p-3 text-right font-semibold text-gray-800">
                                ${grandTotal.toFixed(2)}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Delivery Information Form */}
            <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Delivery Information
                </h3>
                <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col w-full">
                        <label htmlFor="fullName" className="text-gray-700 font-medium mb-1">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            placeholder="Marshall"
                            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    <div className="flex flex-col w-full">
                        <label htmlFor="phone" className="text-gray-700 font-medium mb-1">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            placeholder="+234 801 234 5678"
                            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    <div className="flex flex-col sm:col-span-2 w-full">
                        <label htmlFor="address" className="text-gray-700 font-medium mb-1">
                            Delivery Address
                        </label>
                        <input
                            type="text"
                            id="address"
                            placeholder="123 Street, City"
                            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    <div className="flex flex-col w-full">
                        <label htmlFor="postcode" className="text-gray-700 font-medium mb-1">
                            Post Code
                        </label>
                        <input
                            type="text"
                            id="postcode"
                            placeholder="100001"
                            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    <div className="flex flex-col w-full">
                        <label htmlFor="state" className="text-gray-700 font-medium mb-1">
                            State
                        </label>
                        <select
                            id="state"
                            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                            defaultValue=""
                        >
                            <option value="" disabled>
                                Select a state
                            </option>
                            <option value="Kano">Kano</option>
                            <option value="Jigawa">Jigawa</option>
                            <option value="Jos">Jos</option>
                            <option value="Kaduna">Kaduna</option>
                        </select>
                    </div>
                </form>

                {/* Submit Button */}
                <div className="mt-6 text-right">
                    <button
                        type="submit"
                        className="w-full sm:w-auto px-6 py-2 bg-green-500 text-white rounded-md font-semibold hover:bg-green-600 transition"
                    >
                        Place Order
                    </button>
                </div>
            </div>
        </div>
    );
}

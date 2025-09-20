"use client";

import { Edit, Trash2 } from "lucide-react";

export default function Category() {
    const categories = ["Beverages", "Fast Food", "Desserts", "Traditional Meals"];

    return (
        <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
            <div className="w-full max-w-lg bg-white p-6 rounded-2xl shadow-md">
                {/* Form */}
                <h2 className="text-xl font-semibold mb-4 text-gray-700 text-center">
                    Add New Category
                </h2>
                <form className="flex gap-2 mb-6">
                    <input
                        type="text"
                        placeholder="Enter category name"
                        className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                    <button
                        type="submit"
                        className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors"
                    >
                        Submit
                    </button>
                </form>

                {/* Category List */}
                <h3 className="text-lg font-medium mb-3 text-gray-600">Categories</h3>
                <ul className="space-y-2">
                    {categories.map((cat, index) => (
                        <li
                            key={index}
                            className="flex items-center justify-between px-4 py-2 bg-gray-100 rounded-lg text-gray-700 
                                       hover:bg-gray-200 transition-colors"
                        >
                            <span>{cat}</span>
                            <div className="flex gap-2">
                                <button className="p-2 text-blue-500 hover:bg-blue-100 rounded-lg transition">
                                    <Edit size={18} />
                                </button>
                                <button className="p-2 text-red-500 hover:bg-red-100 rounded-lg transition">
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

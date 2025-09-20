"use client";

import { useState } from "react";
import { PlusCircle, X, Trash2 } from "lucide-react";

export default function Food() {
    const [showForm, setShowForm] = useState(false);
    const [foods, setFoods] = useState<any[]>([]);
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        price: "",
        category: "",
        image: null as string | null,
    });

    // Handle input change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle image upload preview
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setFormData({ ...formData, image: imageUrl });
        }
    };

    // Handle submit
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.price || !formData.category) return;

        setFoods([...foods, formData]);
        setFormData({
            name: "",
            description: "",
            price: "",
            category: "",
            image: null,
        });
        setShowForm(false);
    };

    // Handle delete
    const handleDelete = (index: number) => {
        setFoods(foods.filter((_, i) => i !== index));
    };

    return (
        <div className="min-h-screen flex flex-col items-center p-4 md:p-6">
            {/* Toggle Button */}
            <button
                onClick={() => setShowForm(!showForm)}
                className="mb-6 flex items-center gap-2 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
            >
                {showForm ? <X size={20} /> : <PlusCircle size={20} />}
                {showForm ? "Close Form" : "Add Food"}
            </button>

            {/* Add Food Form */}
            {showForm && (
                <div className="w-full max-w-2xl bg-white p-6 rounded-2xl shadow-md mb-10">
                    <h2 className="text-xl font-semibold mb-4 text-gray-700">
                        Add New Food
                    </h2>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Food Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                        <textarea
                            name="description"
                            placeholder="Description"
                            value={formData.description}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                            rows={3}
                        />
                        <input
                            type="number"
                            name="price"
                            placeholder="Price"
                            value={formData.price}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                        >
                            <option value="">Select Category</option>
                            <option value="Fast Food">Fast Food</option>
                            <option value="Beverages">Beverages</option>
                            <option value="Desserts">Desserts</option>
                            <option value="Traditional Meals">Traditional Meals</option>
                        </select>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="w-full border rounded-lg p-2 cursor-pointer"
                        />
                        <button
                            type="submit"
                            className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
                        >
                            Add Food
                        </button>
                    </form>
                </div>
            )}

            {/* Food Cards */}
            <div className="w-full max-w-4xl grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {foods.map((food, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-md overflow-hidden"
                    >
                        {food.image && (
                            <img
                                src={food.image}
                                alt={food.name}
                                className="w-full h-48 object-cover"
                            />
                        )}
                        <div className="p-4">
                            <h3 className="text-lg font-bold text-gray-800">{food.name}</h3>
                            <p className="text-gray-600 text-sm mb-2">{food.description}</p>
                            <p className="text-gray-800 font-semibold mb-1">
                                ₦{food.price}
                            </p>
                            <p className="text-gray-500 text-sm mb-3">
                                Category: {food.category}
                            </p>
                            <button
                                onClick={() => handleDelete(index)}
                                className="flex items-center gap-2 text-red-500 hover:text-red-700 transition"
                            >
                                <Trash2 size={18} /> Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { User, Mail, MessageCircle, Coffee, Leaf } from "lucide-react";

export default function Customer() {
    const router = useRouter();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="bg-gray-50">

            {/* Section 1: Image Left, Text Right */}
            <section className="flex flex-col md:flex-row items-center px-6 md:px-20 py-12 md:py-20">
                <div className="relative w-full md:w-1/2 h-64 md:h-[400px]">
                    <Image
                        src="/images/all.jpg"
                        alt="Delicious meals"
                        fill
                        className="object-cover rounded-lg shadow-lg"
                        priority
                    />
                </div>
                <div className="md:w-1/2 mt-6 md:mt-0 md:ml-10 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 flex items-center gap-2">
                        <Coffee className="text-indigo-600" /> Welcome to <span className="text-indigo-600">Foodie</span>
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Savor freshly prepared meals crafted with passion and care.
                        At <span className="font-semibold">Roush Foods</span>, we prioritize quality ingredients,
                        authentic flavors, and a delightful dining experience.
                    </p>
                    <button
                        onClick={() => router.push("/customer/food")}
                        className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition transform hover:-translate-y-1 flex items-center gap-2"
                    >
                        Explore Available Dishes
                    </button>
                </div>
            </section>

            {/* Section 2: Text Left, Image Right */}
            <section className="flex flex-col md:flex-row-reverse items-center px-6 md:px-20 py-12 md:py-20 bg-white">
                <div className="relative w-full md:w-1/2 h-64 md:h-[400px]">
                    <Image
                        src="/images/all2.jpg"
                        alt="Variety of meals"
                        fill
                        className="object-cover rounded-lg shadow-lg"
                        priority
                    />
                </div>
                <div className="md:w-1/2 mt-6 md:mt-0 md:mr-10 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 flex items-center gap-2">
                        <Leaf className="text-green-500" /> Fresh Ingredients & Authentic Taste
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Every dish is made with carefully selected ingredients to ensure the freshest
                        flavors. Explore our menu that balances traditional favorites and contemporary dishes.
                    </p>
                </div>
            </section>

            {/* Section 3: Form with Image Left */}
            <section className="flex flex-col md:flex-row items-center px-6 md:px-20 py-12 md:py-20">
                <div className="relative w-full md:w-1/2 h-64 md:h-[400px]">
                    <Image
                        src="/images/meat.jpg"
                        alt="Delicious meals"
                        fill
                        className="object-cover rounded-lg shadow-lg"
                        priority
                    />
                </div>
                <div className="md:w-1/2 mt-6 md:mt-0 md:ml-10">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                            <MessageCircle className="text-indigo-600" /> Send us a Message or Suggestion
                        </h2>
                        {submitted && (
                            <p className="text-green-600 mb-4">Thank you! Your message has been received.</p>
                        )}
                        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                            <div className="relative">
                                <User className="absolute left-3 top-3 text-gray-400" />
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="pl-10 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition w-full"
                                    required
                                />
                            </div>
                            <div className="relative">
                                <Mail className="absolute left-3 top-3 text-gray-400" />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="pl-10 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition w-full"
                                    required
                                />
                            </div>
                            <div className="relative">
                                <MessageCircle className="absolute left-3 top-3 text-gray-400" />
                                <textarea
                                    name="message"
                                    placeholder="Your Message / Review / Suggestion"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="pl-10 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition w-full"
                                    rows={4}
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition transform hover:-translate-y-1 flex items-center gap-2"
                            >
                                <Mail /> Submit
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}

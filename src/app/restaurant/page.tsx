"use client";

import Image from "next/image";
import { UtensilsCrossed, Phone, MapPin, Clock } from "lucide-react";

export default function RestaurantLanding() {
    return (
        <div className="p-6">
            {/* Hero Section */}
            <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 bg-white shadow rounded-2xl p-6">
                {/* Left Image */}
                <div className="relative h-[300px] md:h-[450px] w-full">
                    <Image
                        src="/restaurant.jpg" // put in public folder
                        alt="Restaurant"
                        fill
                        className="rounded-2xl object-cover shadow-md"
                    />
                </div>

                {/* Right Content */}
                <div className="space-y-6">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                        Taste the <span className="text-red-600">Difference</span>
                    </h1>
                    <p className="text-gray-600">
                        Discover fresh flavors, crafted with passion. From sizzling grills
                        to tasty sides, our meals bring you a world of deliciousness right
                        to your table.
                    </p>
                    <button className="px-6 py-3 bg-red-600 text-white font-semibold rounded-xl shadow hover:bg-red-700 transition">
                        Explore Menu
                    </button>

                    {/* Info Icons */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                        <div className="flex items-center gap-3">
                            <UtensilsCrossed className="text-red-600 w-6 h-6" />
                            <span className="text-gray-700 font-medium">Delicious Meals</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Phone className="text-red-600 w-6 h-6" />
                            <span className="text-gray-700 font-medium">+234 801 234 5678</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <MapPin className="text-red-600 w-6 h-6" />
                            <span className="text-gray-700 font-medium">Dutse, Nigeria</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Clock className="text-red-600 w-6 h-6" />
                            <span className="text-gray-700 font-medium">Mon–Sat: 8am - 10pm</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

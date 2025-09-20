"use client";

import { Mail, Phone, MapPin, Store } from "lucide-react";

export default function RestaurantProfilePage() {
    return (
        <div className="p-6 flex flex-col items-center">
            {/* Profile Card */}
            <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-2xl space-y-6">
                {/* Logo / Image */}
                <div className="flex flex-col items-center space-y-3">
                    <img
                        src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800&q=80"
                        alt="Restaurant Logo"
                        className="w-24 h-24 rounded-full object-cover border-4 border-orange-500"
                    />
                    <h1 className="text-2xl font-bold text-gray-800">
                        Mama Put Restaurant
                    </h1>
                    <p className="text-gray-500 text-sm">Since 2015</p>
                </div>

                {/* Contact Info */}
                <div className="space-y-3">
                    <p className="flex items-center gap-2 text-gray-700">
                        <Mail size={18} className="text-orange-500" />
                        <span>mamaput@example.com</span>
                    </p>
                    <p className="flex items-center gap-2 text-gray-700">
                        <Phone size={18} className="text-orange-500" />
                        <span>+234 801 234 5678</span>
                    </p>
                    <p className="flex items-center gap-2 text-gray-700">
                        <MapPin size={18} className="text-orange-500" />
                        <span>No. 24 Aminu Kano Crescent, Abuja</span>
                    </p>
                    <p className="flex items-center gap-2 text-gray-700">
                        <Store size={18} className="text-orange-500" />
                        <span>Category: African Dishes</span>
                    </p>
                </div>

                {/* Editable Form */}
                <div className="space-y-4">
                    <h2 className="text-lg font-semibold text-gray-800">
                        Update Profile
                    </h2>
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Restaurant Name"
                            defaultValue="Mama Put Restaurant"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            defaultValue="mamaput@example.com"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400"
                        />
                        <input
                            type="tel"
                            placeholder="Phone"
                            defaultValue="+234 801 234 5678"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400"
                        />
                        <textarea
                            placeholder="Address"
                            defaultValue="No. 24 Aminu Kano Crescent, Abuja"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400"
                            rows={3}
                        />
                        <button
                            type="submit"
                            className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
                        >
                            Save Changes
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

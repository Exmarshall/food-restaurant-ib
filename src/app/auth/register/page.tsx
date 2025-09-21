"use client";

import { useState } from "react";
import {
    User,
    Mail,
    Lock,
    Phone,
    MapPin,
    Store,
    Truck,
    Clock,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa"; 
import Link from "next/link";

export default function RegisterPage() {
    const [role, setRole] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
            <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Create an Account
                </h2>

                <form className="space-y-5">
                    {/* Name */}
                    <div className="relative">
                        <User className="absolute left-3 top-3 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div className="relative">
                        <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                        <input
                            type="email"
                            placeholder="Enter your Gmail"
                            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div className="relative">
                        <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            className="w-full pl-10 pr-10 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-3 text-gray-500"
                        >
                            {showPassword ? "🙈" : "👁️"}
                        </button>
                    </div>

                    {/* Mobile Number */}
                    <div className="relative">
                        <Phone className="absolute left-3 top-3 text-gray-400" size={20} />
                        <input
                            type="tel"
                            placeholder="Mobile Number"
                            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Address */}
                    <div className="relative">
                        <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Address"
                            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Role Selection */}
                    <div>
                        <label className="block mb-1 font-medium text-gray-700">
                            Select Role
                        </label>
                        <select
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
                            required
                        >
                            <option value="">-- Select Role --</option>
                            <option value="customer">Customer</option>
                            <option value="restaurant">Restaurant</option>
                            <option value="rider">Rider</option>
                        </select>
                    </div>

                    {/* Conditional Fields */}
                    {role === "restaurant" && (
                        <div className="space-y-4 mt-4">
                            <h3 className="font-semibold text-gray-800">
                                Restaurant Details
                            </h3>

                            {/* Restaurant Name */}
                            <div className="relative">
                                <Store className="absolute left-3 top-3 text-gray-400" size={20} />
                                <input
                                    type="text"
                                    placeholder="Restaurant Name"
                                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
                                    required
                                />
                            </div>

                            {/* Restaurant Contact */}
                            <div className="relative">
                                <Phone className="absolute left-3 top-3 text-gray-400" size={20} />
                                <input
                                    type="tel"
                                    placeholder="Restaurant Contact"
                                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
                                    required
                                />
                            </div>

                            {/* Restaurant Address */}
                            <div className="relative">
                                <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
                                <input
                                    type="text"
                                    placeholder="Restaurant Address"
                                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
                                    required
                                />
                            </div>

                            {/* Opening Hours */}
                            <div className="relative">
                                <Clock className="absolute left-3 top-3 text-gray-400" size={20} />
                                <input
                                    type="text"
                                    placeholder="Opening Hours (e.g. 9AM - 9PM)"
                                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
                                    required
                                />
                            </div>

                            {/* WhatsApp Number */}
                            <div className="relative">
                                <FaWhatsapp className="absolute left-3 top-3 text-green-500" size={22} />
                                <input
                                    type="tel"
                                    placeholder="WhatsApp Number"
                                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
                                    required
                                />
                            </div>
                        </div>
                    )}

                    {role === "rider" && (
                        <div className="space-y-4 mt-4">
                            <h3 className="font-semibold text-gray-800">Rider Details</h3>

                            {/* Vehicle Type */}
                            <div>
                                <label className="block mb-1 font-medium text-gray-700">
                                    Vehicle Type
                                </label>
                                <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none">
                                    <option value="">-- Select Vehicle --</option>
                                    <option value="motorcycle">🏍️ Motorcycle</option>
                                    <option value="car">🚗 Car</option>
                                    <option value="bicycle">🚲 Bicycle</option>
                                    <option value="keke">🛺 Keke-Napep</option>
                                </select>
                            </div>

                            {/* Vehicle Number */}
                            <div className="relative">
                                <Truck className="absolute left-3 top-3 text-gray-400" size={20} />
                                <input
                                    type="text"
                                    placeholder="Vehicle Number"
                                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
                                    required
                                />
                            </div>

                            {/* Rider License */}
                            <div className="relative">
                                <User className="absolute left-3 top-3 text-gray-400" size={20} />
                                <input
                                    type="text"
                                    placeholder="Driver's License Number"
                                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
                                />
                            </div>
                        </div>
                    )}

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full bg-orange-500 text-white py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors"
                    >
                        Register
                    </button>

                    {/* Already have account */}
                    <p className="text-center text-gray-600 mt-4">
                        Already have an account?{" "}
                        <Link
                            href="/login"
                            className="text-orange-500 font-medium hover:underline"
                        >
                            Login
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

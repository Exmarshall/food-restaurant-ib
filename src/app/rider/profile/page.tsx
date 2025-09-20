"use client";

import { useState } from "react";
import {
    User,
    Phone,
    Mail,
    Bike,
    Car,
    Move,
    Bus,
} from "lucide-react";

export default function RiderProfilePage() {
    const [profile, setProfile] = useState({
        name: "",
        phone: "",
        email: "",
        vehicleType: "",
        vehicleNumber: "",
        availability: "", // availability added
    });

    // Predefined vehicle numbers
    const vehicleNumbers: Record<string, string> = {
        Car: "CAR-123-XY",
        Motorcycle: "MOTO-456-ZY",
        Bicycle: "BIC-789-WX",
        "Keke-Napep": "KEKE-321-QP",
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;

        if (name === "vehicleType") {
            setProfile({
                ...profile,
                vehicleType: value,
                vehicleNumber: vehicleNumbers[value],
            });
        } else {
            setProfile({ ...profile, [name]: value });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Profile updated:\n${JSON.stringify(profile, null, 2)}`);
    };

    return (
        <div className="p-6 max-w-3xl mx-auto">
            {/* Page Title */}
            <div className="flex items-center gap-2 mb-6">
                <User className="text-orange-500" size={26} />
                <h1 className="text-2xl font-bold text-gray-800">Rider Profile</h1>
            </div>

            {/* Profile Card */}
            <div className="bg-white shadow-lg rounded-2xl p-6 space-y-6">
                {/* Profile Form */}
                <form className="space-y-4" onSubmit={handleSubmit}>
                    {/* Name */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={profile.name}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            className="w-full px-4 py-2 border rounded-lg placeholder-gray-400 
                                       focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Phone Number
                        </label>
                        <div className="flex items-center gap-2">
                            <Phone className="text-gray-500" size={18} />
                            <input
                                type="text"
                                name="phone"
                                value={profile.phone}
                                onChange={handleChange}
                                placeholder="Enter your phone number"
                                className="flex-1 px-4 py-2 border rounded-lg placeholder-gray-400 
                                           focus:outline-none focus:ring-2 focus:ring-orange-400"
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Email
                        </label>
                        <div className="flex items-center gap-2">
                            <Mail className="text-gray-500" size={18} />
                            <input
                                type="email"
                                name="email"
                                value={profile.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-2 border rounded-lg placeholder-gray-400 
                                           focus:outline-none focus:ring-2 focus:ring-orange-400"
                            />
                        </div>
                    </div>

                    {/* Vehicle Type (Dropdown) */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Vehicle Type
                        </label>
                        <div className="flex items-center gap-2">
                            {/* Dynamic icon preview */}
                            {profile.vehicleType === "Car" && (
                                <Car className="text-gray-500" size={18} />
                            )}
                            {profile.vehicleType === "Motorcycle" && (
                                <Bike className="text-gray-500" size={18} />
                            )}
                            {profile.vehicleType === "Bicycle" && (
                                <Move className="text-gray-500" size={18} />
                            )}
                            {profile.vehicleType === "Keke-Napep" && (
                                <Bus className="text-gray-500" size={18} />
                            )}

                            <select
                                name="vehicleType"
                                value={profile.vehicleType}
                                onChange={handleChange}
                                className="flex-1 px-4 py-2 border rounded-lg placeholder-gray-400 
                                           focus:outline-none focus:ring-2 focus:ring-orange-400"
                            >
                                <option value="" disabled>
                                    Select vehicle type
                                </option>
                                <option value="Car">Car</option>
                                <option value="Motorcycle">Motorcycle</option>
                                <option value="Bicycle">Bicycle</option>
                                <option value="Keke-Napep">Keke-Napep</option>
                            </select>
                        </div>
                    </div>

                    {/* Vehicle Number */}
                    {profile.vehicleNumber && (
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">
                                Vehicle Number
                            </label>
                            <input
                                type="text"
                                name="vehicleNumber"
                                value={profile.vehicleNumber}
                                readOnly
                                className="w-full px-4 py-2 border bg-gray-100 rounded-lg focus:outline-none"
                            />
                        </div>
                    )}

                    {/* Availability Dropdown */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Availability
                        </label>
                        <select
                            name="availability"
                            value={profile.availability}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none 
                                       focus:ring-2 focus:ring-orange-400"
                        >
                            <option value="" disabled>
                                Select availability
                            </option>
                            <option value="Available">Available</option>
                            <option value="Unavailable">Unavailable</option>
                        </select>
                    </div>

                    {/* Save Button */}
                    <button
                        type="submit"
                        className="w-full bg-orange-500 text-white py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors"
                    >
                        Update Profile
                    </button>
                </form>
            </div>
        </div>
    );
}

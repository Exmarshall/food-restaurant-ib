"use client";

import Image from "next/image";
import { Bike, Phone, MapPin, Clock, ShieldCheck } from "lucide-react";

export default function RidersLanding() {
    return (
        <div className="p-6">
            {/* Hero Section */}
            <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 bg-white shadow rounded-2xl p-6">
                {/* Left Image */}
                <div className="relative h-[300px] md:h-[450px] w-full">
                    <Image
                        src="/delivery.jpg" // add an image in public folder e.g., public/rider.jpg
                        alt="Delivery Rider"
                        fill
                        className="rounded-2xl object-cover shadow-md"
                    />
                </div>

                {/* Right Content */}
                <div className="space-y-6">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                        Fast & <span className="text-red-600">Reliable</span> Delivery
                    </h1>
                    <p className="text-gray-600">
                        Our riders are dedicated to bringing your meals hot and fresh,
                        right to your doorstep. Track your order, stay updated, and enjoy
                        hassle-free delivery every time.
                    </p>
                    <button className="px-6 py-3 bg-red-600 text-white font-semibold rounded-xl shadow hover:bg-red-700 transition">
                        Become a Rider
                    </button>

                    {/* Rider Features */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                        <div className="flex items-center gap-3">
                            <Bike className="text-red-600 w-6 h-6" />
                            <span className="text-gray-700 font-medium">Quick Delivery</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Phone className="text-red-600 w-6 h-6" />
                            <span className="text-gray-700 font-medium">24/7 Support</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <MapPin className="text-red-600 w-6 h-6" />
                            <span className="text-gray-700 font-medium">Nationwide Coverage</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Clock className="text-red-600 w-6 h-6" />
                            <span className="text-gray-700 font-medium">On-Time Guarantee</span>
                        </div>
                        <div className="flex items-center gap-3 sm:col-span-2">
                            <ShieldCheck className="text-red-600 w-6 h-6" />
                            <span className="text-gray-700 font-medium">Safe & Trusted Riders</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

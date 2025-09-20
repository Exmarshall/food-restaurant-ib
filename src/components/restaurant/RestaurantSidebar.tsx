"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bike, ClipboardList, User, Menu, X, CreditCard } from "lucide-react";

export default function RiderSidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const navItems = [
        { href: "/rider/orders", label: "Orders", icon: ClipboardList },
        { href: "/rider/deliveries", label: "Deliveries", icon: Bike },
        { href: "/rider/payments", label: "Payments", icon: CreditCard },
        { href: "/rider/profile", label: "Profile", icon: User },
    ];

    return (
        <>
            {/* 🔹 Mobile Top Bar */}
            <div className="flex items-center justify-between p-4 bg-white shadow-md md:hidden">
                <h1 className="text-lg font-bold">Rider Panel</h1>
                <button onClick={() => setIsOpen(true)}>
                    <Menu size={28} />
                </button>
            </div>

            {/* 🔹 Sidebar */}
            <div
                className={`fixed md:static top-0 left-0 h-full w-64 bg-white shadow-xl z-50 transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b">
                    <h1 className="text-xl font-bold">Rider Panel</h1>
                    <button className="md:hidden" onClick={() => setIsOpen(false)}>
                        <X size={24} />
                    </button>
                </div>

                {/* Navigation */}
                <nav className="flex flex-col gap-2 p-4">
                    {navItems.map(({ href, label, icon: Icon }) => (
                        <Link
                            key={href}
                            href={href}
                            onClick={() => setIsOpen(false)}
                            className={`flex items-center gap-3 px-4 py-2 rounded-2xl transition-all text-base font-medium
                ${pathname === href
                                    ? "bg-orange-500 text-white shadow-md"
                                    : "text-gray-600 hover:bg-gray-100"
                                }`}
                        >
                            <Icon size={20} />
                            {label}
                        </Link>
                    ))}
                </nav>
            </div>

            {/* 🔹 Overlay (Mobile Only) */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/40 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
}

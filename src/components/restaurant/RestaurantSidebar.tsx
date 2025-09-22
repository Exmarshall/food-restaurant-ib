"use client";

import Link from "next/link";
import { Utensils, Grid, ShoppingCart, User } from "lucide-react";

export default function RestaurantSidebar() {
    const navItems = [
        { href: "/restaurant/food", label: "Food", icon: Utensils },
        { href: "/restaurant/category", label: "Category", icon: Grid },
        { href: "/restaurant/order", label: "Order", icon: ShoppingCart },
        { href: "/restaurant/profile", label: "Profile", icon: User },
    ];

    return (
        <div className="bg-white shadow-xl flex flex-col md:h-screen md:w-64 p-4 w-full">
            <h1 className="text-2xl font-bold mb-6 text-center">Restaurant Panel</h1>
            <nav className="flex md:flex-col flex-row gap-2 md:gap-3 justify-around md:justify-start">
                {navItems.map(({ href, label, icon: Icon }) => (
                    <Link
                        key={href}
                        href={href}
                        className="flex items-center gap-2 px-4 py-2 rounded-2xl transition-all text-sm md:text-base font-medium text-gray-600 hover:bg-gray-100"
                    >
                        <Icon size={20} />
                        <span className="hidden sm:inline">{label}</span>
                    </Link>
                ))}
            </nav>
        </div>
    );
}

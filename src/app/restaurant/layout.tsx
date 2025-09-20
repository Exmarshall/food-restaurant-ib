// app/restaurant/layout.tsx
"use client";

import RestaurantSidebar from "@/components/restaurant/RestaurantSidebar";

export default function RestaurantLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
            {/* Sidebar - always visible */}
            <div className="w-full md:w-64 shadow-md bg-white">
                <RestaurantSidebar />
            </div>

            {/* Page Content */}
            <main className="flex-1 p-4 ">{children}</main>
        </div>
    );
} 
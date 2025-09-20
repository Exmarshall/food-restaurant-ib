// app/restaurant/layout.tsx
"use client";

import RiderSidebar from "@/components/rider/RiderSidebar";

export default function RiderLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
            {/* Sidebar - always visible */}
            <div className="w-full md:w-64 shadow-md bg-white">
             <RiderSidebar/>
            </div>

            {/* Page Content */}
            <main className="flex-1 p-4 ">{children}</main>
        </div>
    );
} 
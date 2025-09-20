"use client";

import {
    CheckCircle,
    XCircle,
    Clock,
    Package,
    MapPin,
    ShoppingBag,
    Hash,
    Calendar,
} from "lucide-react";
import Link from "next/link";


type Order = {
    id:string,
    date:string,
    status:string,
    total:number,
    address:string,
    items:string[]
}

export default function RiderOrdersPage() {
    const orders:Order[] = [
        {
            id: "ORD-001",
            date: "2025-09-19",
            status: "Pending",
            total: 12999,
            address: "123 Main Street, Lagos",
            items: ["Jollof Rice", "Fried Chicken", "Coke"],
        },
        {
            id: "ORD-002",
            date: "2025-09-18",
            status: "Delivered",
            total: 8999,
            address: "45 Unity Avenue, Abuja",
            items: ["Pizza", "Pepsi"],
        },
        {
            id: "ORD-003",
            date: "2025-09-17",
            status: "Cancelled",
            total: 4999,
            address: "12 Airport Road, Kano",
            items: ["Burger", "Sprite"],
        },
    ];

    const getStatusStyles = (status: string) => {
        switch (status) {
            case "Delivered":
                return {
                    icon: <CheckCircle className="text-green-500" size={18} />,
                    style: "bg-green-100 text-green-700",
                };
            case "Cancelled":
                return {
                    icon: <XCircle className="text-red-500" size={18} />,
                    style: "bg-red-100 text-red-700",
                };
            default:
                return {
                    icon: <Clock className="text-yellow-500" size={18} />,
                    style: "bg-yellow-100 text-yellow-700",
                };
        }
    };

    return (
        <div className="p-6">
            {/* Page Title */}
            <div className="flex items-center gap-2 mb-6">
                <Package className="text-orange-500" size={26} />
                <h1 className="text-2xl font-bold text-gray-800">Rider Orders</h1>
            </div>

            {/* Orders Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {orders.map((order) => {
                    const { icon, style } = getStatusStyles(order.status);

                    return (
                        <div
                            key={order.id}
                            className="bg-white shadow-lg rounded-2xl p-5 flex flex-col gap-4 
                                       hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
                        >
                            {/* Order Header */}
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                    <Calendar size={16} /> {order.date}
                                </div>
                                <div
                                    className={`flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-lg ${style}`}
                                >
                                    {icon}
                                    {order.status}
                                </div>
                            </div>

                            {/* Order Details */}
                            <div className="space-y-2">
                                <p className="flex items-center gap-2 font-semibold text-gray-800">
                                    <Hash size={16} className="text-gray-500" />
                                    Order ID: {order.id}
                                </p>
                                <p className="flex items-center gap-2 text-gray-700">
                                    <ShoppingBag size={16} className="text-gray-500" />
                                    Total: <span className="font-medium">₦{order.total.toLocaleString()}</span>
                                </p>
                            </div>

                            {/* Delivery Address */}
                            <div className="flex items-start gap-2 text-sm text-gray-700">
                                <MapPin size={16} className="text-gray-500 mt-1" />
                                <span>
                                    <span className="font-medium">Delivery Address:</span> {order.address}
                                </span>
                            </div>

                            {/* Items */}
                            <div>
                                <p className="font-medium text-gray-800 mb-1">Items:</p>
                                <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                                    {order.items.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Attend Button (hardcoded link) */}
                            <Link
                                href="/rider/orders/details"
                                className="mt-2 w-full bg-orange-500 text-white py-2 rounded-lg font-medium 
                                           hover:bg-orange-600 hover:shadow-md hover:scale-[1.02] 
                                           transition-all duration-300 text-center"
                            >
                                Attend Order
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

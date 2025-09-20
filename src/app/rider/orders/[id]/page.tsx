"use client";

import { useState } from "react";
import {
    CheckCircle,
    XCircle,
    Clock,
    MapPin,
    ShoppingBag,
    Hash,
    Calendar,
    Package,
} from "lucide-react";

export default function RiderOrderDetailsPage() {
    // Mock order (hardcoded for now)
    const [order, setOrder] = useState({
        id: "ORD-001",
        date: "2025-09-19",
        status: "Pending",
        total: 12999,
        address: "123 Yalwawa, Dutse",
        customer: "John Doe",
        items: ["Jollof Rice", "Fried Chicken", "Coke"],
    });

    const [deliveryTime, setDeliveryTime] = useState("");
    const [showTime, setShowTime] = useState(false);

    // Update status
    const handleAction = (action: "Accepted" | "Rejected") => {
        setOrder({ ...order, status: action });
        setShowTime(true);
    };

    return (
        <div className="p-6 max-w-3xl mx-auto">
            {/* Title */}
            <div className="flex items-center gap-2 mb-6">
                <Package className="text-orange-500" size={26} />
                <h1 className="text-2xl font-bold text-gray-800">
                    Order Details (Rider)
                </h1>
            </div>

            {/* Card */}
            <div className="bg-white shadow-lg rounded-2xl p-6 space-y-6">
                {/* Header */}
                <div className="flex justify-between items-center">
                    <p className="flex items-center gap-2 text-gray-700 font-medium">
                        <Hash size={18} className="text-gray-500" />
                        Order ID: {order.id}
                    </p>
                    <div className="flex items-center gap-1 px-3 py-1 rounded-lg text-sm 
                                    bg-yellow-100 text-yellow-700">
                        <Clock size={16} />
                        {order.status}
                    </div>
                </div>

                {/* Order Info */}
                <div className="space-y-3 text-gray-700">
                    <p className="flex items-center gap-2">
                        <Calendar size={18} className="text-gray-500" />
                        Date: <span className="font-medium">{order.date}</span>
                    </p>
                    <p className="flex items-center gap-2">
                        <ShoppingBag size={18} className="text-gray-500" />
                        Total:{" "}
                        <span className="font-medium">
                            ₦{order.total.toLocaleString()}
                        </span>
                    </p>
                    <p className="flex items-center gap-2">
                        <MapPin size={18} className="text-gray-500" />
                        Address: <span className="font-medium">{order.address}</span>
                    </p>
                    <p className="flex items-center gap-2">
                        Customer: <span className="font-medium">{order.customer}</span>
                    </p>
                </div>

                {/* Items */}
                <div>
                    <p className="font-semibold text-gray-800 mb-2">Items Ordered:</p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {order.items.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Delivery Time Update */}
                <div className="space-y-2">
                    <label className="block text-gray-700 font-medium">
                        Update Delivery Time
                    </label>
                    <input
                        type="time"
                        value={deliveryTime}
                        onChange={(e) => setDeliveryTime(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                    <button
                        onClick={() => handleAction("Accepted")}
                        className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors"
                    >
                        <CheckCircle size={18} /> Accept
                    </button>
                    <button
                        onClick={() => handleAction("Rejected")}
                        className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition-colors"
                    >
                        <XCircle size={18} /> Reject
                    </button>
                </div>

                {/* Show updated delivery info only after action */}
                {showTime && (
                    <div className="p-4 bg-gray-50 rounded-lg text-sm text-gray-700">
                        <p>
                            Status:{" "}
                            <span className="font-medium text-orange-600">
                                {order.status}
                            </span>
                        </p>
                        {deliveryTime && (
                            <p>
                                Delivery Time:{" "}
                                <span className="font-medium">{deliveryTime}</span>
                            </p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

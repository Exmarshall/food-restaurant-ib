"use client";

import Link from "next/link";
import { ClockIcon, CheckCircleIcon, TruckIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import React from "react";

interface OrderItem {
    id: number;
    name: string;
    image: string;
    price: number;
    quantity: number;
}

interface Order {
    orderId: string;
    date: string;
    payment: string;
    status: "Pending" | "Delivered" | "Accepted";
    items: OrderItem[];
    address: string;
    postCode: string;
    state: string;
    phone: string;
    fullName: string;
    estimatedDelivery?: string;
}

// Sample order data (can be replaced with real API data)
const order: Order = {
    orderId: "gdvhcdbhbfh5e",
    date: "27 May 2025",
    payment: "COD",
    status: "Pending",
    fullName: "Marshall",
    phone: "+234 801 234 5678",
    address: "123 Street, City",
    postCode: "100001",
    state: "Kano",
    estimatedDelivery: "30 May 2025",
    items: [
        {
            id: 1,
            name: "Shawarma Margherita",
            image: "https://cdn.pixabay.com/photo/2022/03/11/10/06/wrap-7061741_1280.jpg",
            price: 12,
            quantity: 1,
        },
        {
            id: 2,
            name: "Chicken Biryani",
            image: "https://cdn.pixabay.com/photo/2021/01/06/10/11/shawarma-5893935_640.jpg",
            price: 10,
            quantity: 2,
        },
    ],
};

const getStatusStyles = (status: Order["status"]) => {
    switch (status) {
        case "Pending":
            return {
                color: "text-yellow-600",
                bg: "bg-yellow-100",
                icon: <ClockIcon className="h-5 w-5 inline-block mr-1" />,
            };
        case "Delivered":
            return {
                color: "text-green-600",
                bg: "bg-green-100",
                icon: <CheckCircleIcon className="h-5 w-5 inline-block mr-1" />,
            };
        case "Accepted":
            return {
                color: "text-blue-600",
                bg: "bg-blue-100",
                icon: <TruckIcon className="h-5 w-5 inline-block mr-1" />,
            };
        default:
            return { color: "text-gray-600", bg: "bg-gray-100", icon: null };
    }
};

export default function OrderDetails() {
    const grandTotal = order.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const status = getStatusStyles(order.status);

    return (
        <div className="p-4 sm:p-6 max-w-6xl mx-auto">
            {/* Back Button */}
            <div className="mb-6">
                <Link
                    href="/customer/order"
                    className="inline-flex items-center px-4 py-2 bg-gray-300 text-gray-800 font-medium rounded-md hover:bg-gray-400 transition"
                >
                    <ArrowLeftIcon className="h-5 w-5 mr-2" />
                    Back to Orders
                </Link>
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Order Details</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <p><span className="font-semibold">Order ID:</span> {order.orderId}</p>
                        <p><span className="font-semibold">Date:</span> {order.date}</p>
                        <p><span className="font-semibold">Payment Method:</span> {order.payment}</p>
                        <p>
                            <span className="font-semibold">Status:</span>{" "}
                            <span className={`${status.bg} ${status.color} px-2 py-1 rounded-full inline-flex items-center`}>
                                {status.icon} {order.status}
                            </span>
                        </p>
                        {order.estimatedDelivery && (
                            <p><span className="font-semibold">Estimated Delivery:</span> {order.estimatedDelivery}</p>
                        )}
                    </div>
                    <div>
                        <p><span className="font-semibold">Full Name:</span> {order.fullName}</p>
                        <p><span className="font-semibold">Phone:</span> {order.phone}</p>
                        <p><span className="font-semibold">Address:</span> {order.address}, {order.state}, {order.postCode}</p>
                    </div>
                </div>
            </div>

            {/* Order Items */}
            <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Items</h3>

                {/* Desktop Table */}
                <div className="hidden md:block overflow-x-auto">
                    <table className="min-w-full border rounded-md border-collapse bg-gray-50 divide-y divide-gray-200">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-3 text-left text-gray-700 font-medium">Food</th>
                                <th className="px-4 py-3 text-left text-gray-700 font-medium">Price</th>
                                <th className="px-4 py-3 text-center text-gray-700 font-medium">Quantity</th>
                                <th className="px-4 py-3 text-right text-gray-700 font-medium">Total</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {order.items.map(item => (
                                <tr key={item.id} className="hover:bg-gray-50 transition">
                                    <td className="px-4 py-3 flex items-center gap-3">
                                        <img src={item.image} alt={item.name} className="h-12 w-12 rounded object-cover" />
                                        <span className="text-gray-800 font-medium">{item.name}</span>
                                    </td>
                                    <td className="px-4 py-3 text-gray-800">${item.price.toFixed(2)}</td>
                                    <td className="px-4 py-3 text-center text-gray-800">{item.quantity}</td>
                                    <td className="px-4 py-3 text-right text-gray-800">${(item.price * item.quantity).toFixed(2)}</td>
                                </tr>
                            ))}
                            <tr className="bg-gray-200">
                                <td colSpan={3} className="px-4 py-3 text-right font-semibold text-gray-800">Grand Total:</td>
                                <td className="px-4 py-3 text-right font-semibold text-gray-800">${grandTotal.toFixed(2)}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Mobile Cards */}
                <div className="md:hidden space-y-4">
                    {order.items.map(item => (
                        <div key={item.id} className="bg-gray-50 p-4 rounded-lg shadow-sm flex flex-col sm:flex-row items-center gap-4">
                            <img src={item.image} alt={item.name} className="h-16 w-16 rounded object-cover" />
                            <div className="flex-1">
                                <p className="font-medium text-gray-800">{item.name}</p>
                                <p className="text-gray-600">Price: ${item.price.toFixed(2)}</p>
                                <p className="text-gray-600">Quantity: {item.quantity}</p>
                                <p className="font-semibold text-gray-800">Total: ${(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                        </div>
                    ))}
                    <div className="bg-gray-200 p-4 rounded-lg text-right font-semibold text-gray-800">
                        Grand Total: ${grandTotal.toFixed(2)}
                    </div>
                </div>
            </div>
        </div>
    );
}

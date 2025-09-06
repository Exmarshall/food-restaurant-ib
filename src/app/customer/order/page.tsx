"use client";

import Link from "next/link";
import React from "react";
import {
    ClockIcon,
    CheckCircleIcon,
    TruckIcon,
} from "@heroicons/react/24/outline";

interface Order {
    date: string;
    orderId: string;
    total: number;
    payment: string;
    status: "Pending" | "Delivered" | "Accepted";
    detailsLink: string;
}

const orders: Order[] = [
    {
        date: "27 May 2025",
        orderId: "gdvhcdbhbfh5e",
        total: 233,
        payment: "COD",
        status: "Pending",
        detailsLink: "/customer/order/hfbvhbfh",
    },
    {
        date: "26 May 2025",
        orderId: "asdxz1234",
        total: 500,
        payment: "Card",
        status: "Delivered",
        detailsLink: "/customer/order/asdxz1234",
    },
    {
        date: "25 May 2025",
        orderId: "qwe5678rty",
        total: 120,
        payment: "COD",
        status: "Accepted",
        detailsLink: "/customer/order/qwe5678rty",
    },
];

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
            return {
                color: "text-gray-600",
                bg: "bg-gray-100",
                icon: null,
            };
    }
};

export default function OrderCustomer() {
    return (
        <div className="p-4 sm:p-6 max-w-6xl mx-auto bg-gray-50 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                My Orders
            </h2>

            <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200 rounded-lg bg-white divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-3 text-left text-gray-700 font-medium">
                                Date & Time
                            </th>
                            <th className="px-4 py-3 text-left text-gray-700 font-medium">
                                Order ID
                            </th>
                            <th className="px-4 py-3 text-left text-gray-700 font-medium">
                                Total Amount
                            </th>
                            <th className="px-4 py-3 text-left text-gray-700 font-medium">
                                Payment Method
                            </th>
                            <th className="px-4 py-3 text-left text-gray-700 font-medium">
                                Status
                            </th>
                            <th className="px-4 py-3 text-left text-gray-700 font-medium">
                                Order Details
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {orders.map((order, idx) => {
                            const status = getStatusStyles(order.status);
                            return (
                                <tr key={idx} className="hover:bg-gray-50 transition">
                                    <td className="px-4 py-3 text-gray-800">{order.date}</td>
                                    <td className="px-4 py-3 text-gray-800 font-mono">{order.orderId}</td>
                                    <td className="px-4 py-3 text-gray-800">${order.total.toFixed(2)}</td>
                                    <td className="px-4 py-3 text-gray-800">{order.payment}</td>
                                    <td className={`px-4 py-2 ${status.bg} rounded-full inline-block ${status.color} font-semibold`}>
                                        {status.icon} {order.status}
                                    </td>
                                    <td className="px-4 py-3">
                                        <Link
                                            href={order.detailsLink}
                                            className="text-green-600 font-medium hover:underline"
                                        >
                                            View
                                        </Link>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

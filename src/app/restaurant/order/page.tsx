"use client";

import { CheckCircle, Clock, XCircle, CreditCard, Banknote, Wallet } from "lucide-react";
import Link from "next/link";

export default function Orders() {
    // Sample order data
    const orders = [
        {
            id: "ORD-001",
            customer: "John Doe",
            date: "2025-09-19",
            total: 12999,
            status: "Pending",
            payment: "Card",
        },
        {
            id: "ORD-002",
            customer: "Jane Smith",
            date: "2025-09-18",
            total: 49500,
            status: "Completed",
            payment: "Transfer",
        },
        {
            id: "ORD-003",
            customer: "Ali Musa",
            date: "2025-09-17",
            total: 15750,
            status: "Cancelled",
            payment: "Cash",
        },
    ];

    // Helper to render status badge
    const renderStatus = (status: string) => {
        switch (status) {
            case "Pending":
                return (
                    <span className="flex items-center gap-1 text-yellow-600 bg-yellow-100 px-3 py-1 rounded-full text-sm font-medium">
                        <Clock size={16} /> Pending
                    </span>
                );
            case "Completed":
                return (
                    <span className="flex items-center gap-1 text-green-600 bg-green-100 px-3 py-1 rounded-full text-sm font-medium">
                        <CheckCircle size={16} /> Completed
                    </span>
                );
            case "Cancelled":
                return (
                    <span className="flex items-center gap-1 text-red-600 bg-red-100 px-3 py-1 rounded-full text-sm font-medium">
                        <XCircle size={16} /> Cancelled
                    </span>
                );
            default:
                return (
                    <span className="text-gray-600 bg-gray-100 px-3 py-1 rounded-full text-sm font-medium">
                        {status}
                    </span>
                );
        }
    };

    // Helper to render payment badge
    const renderPayment = (method: string) => {
        switch (method) {
            case "Card":
                return (
                    <span className="flex items-center gap-1 text-blue-600 bg-blue-100 px-3 py-1 rounded-full text-sm font-medium">
                        <CreditCard size={16} /> Card
                    </span>
                );
            case "Transfer":
                return (
                    <span className="flex items-center gap-1 text-purple-600 bg-purple-100 px-3 py-1 rounded-full text-sm font-medium">
                        <Banknote size={16} /> Transfer
                    </span>
                );
            case "Cash":
                return (
                    <span className="flex items-center gap-1 text-gray-700 bg-gray-200 px-3 py-1 rounded-full text-sm font-medium">
                        <Wallet size={16} /> Cash
                    </span>
                );
            default:
                return (
                    <span className="text-gray-600 bg-gray-100 px-3 py-1 rounded-full text-sm font-medium">
                        {method}
                    </span>
                );
        }
    };

    // Format currency in Naira
    const formatNaira = (amount: number) =>
        new Intl.NumberFormat("en-NG", {
            style: "currency",
            currency: "NGN",
        }).format(amount);

    return (
        <div className="min-h-screen flex flex-col items-center p-4 md:p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Orders</h2>

            <div className="w-full max-w-4xl space-y-4">
                {orders.map((order) => (
                    <div
                        key={order.id}
                        className="bg-white shadow-md rounded-2xl p-4 flex flex-col md:flex-row md:items-center md:justify-between"
                    >
                        {/* Order Details */}
                        <div className="mb-3 md:mb-0">
                            <h3 className="text-lg font-semibold text-gray-800">
                                Order ID: {order.id}
                            </h3>
                            <p className="text-sm text-gray-600">
                                Customer: {order.customer}
                            </p>
                            <p className="text-sm text-gray-600">Date: {order.date}</p>
                            <p className="text-sm font-medium text-gray-800">
                                Total: {formatNaira(order.total)}
                            </p>
                        </div>

                        {/* Status + Payment + Attend */}
                        <div className="flex flex-col md:flex-row md:items-center gap-3">
                            {renderStatus(order.status)}
                            {renderPayment(order.payment)}
                            <Link href={'/restaurant/order/hurfhbg'} className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition">
                                Attend
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

"use client";

import { Truck, CheckCircle, XCircle, Clock } from "lucide-react";

const deliveries = [
    { id: 1, recipient: "Aliyu Abdussalam Inuwa", address: "No 23, Ahmadu Bello Way, Dutse", date: "2025-09-21", status: "delivered" },
    { id: 2, recipient: "Maryam Bello", address: "45, Independence Rd, Abuja", date: "2025-09-22", status: "pending" },
    { id: 3, recipient: "John Doe", address: "12, Garki Street, Lagos", date: "2025-09-23", status: "canceled" },
    { id: 4, recipient: "Alkassim Usman", address: "56, Zaria Rd, Kaduna", date: "2025-09-24", status: "pending" },
    { id: 5, recipient: "Ibrahim Garba", address: "78, Maitama Ave, Abuja", date: "2025-09-25", status: "delivered" },
    { id: 6, recipient: "Aminu Hassan", address: "90, Ahmadu Bello Way, Kano", date: "2025-09-26", status: "pending" },
];

export default function DeliveriesPage() {
    const sortedDeliveries = deliveries.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );

    const isUpcoming = (dateStr: string) => {
        const today = new Date();
        const deliveryDate = new Date(dateStr);
        const diffTime = deliveryDate.getTime() - today.getTime();
        const diffDays = diffTime / (1000 * 60 * 60 * 24);
        return diffDays >= 0 && diffDays <= 2;
    };

    return (
        <div className="p-6 max-w-5xl mx-auto">
            {/* Page Header */}
            <div className="flex items-center gap-3 mb-6">
                <Truck className="text-orange-500" size={28} />
                <h1 className="text-2xl font-bold text-gray-800">Your Deliveries</h1>
            </div>

            {/* Deliveries List */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {sortedDeliveries.map((delivery) => (
                    <div
                        key={delivery.id}
                        className={`bg-white shadow-lg rounded-2xl p-5 flex flex-col gap-3
              transform transition-transform duration-200
              hover:scale-105 hover:shadow-xl active:scale-95
              ${isUpcoming(delivery.date) ? "border-2 border-orange-400" : ""}`}
                    >
                        {/* Status Icon */}
                        <div className="flex items-center justify-between">
                            <h2 className="font-semibold text-gray-800">{delivery.recipient}</h2>
                            {delivery.status === "delivered" && <CheckCircle className="text-green-500" size={22} />}
                            {delivery.status === "pending" && <Clock className="text-yellow-500" size={22} />}
                            {delivery.status === "canceled" && <XCircle className="text-red-500" size={22} />}
                        </div>

                        {/* Address */}
                        <p className="text-gray-600 text-sm">{delivery.address}</p>

                        {/* Date */}
                        <p className="text-gray-500 text-xs">Delivery Date: {delivery.date}</p>

                        {/* Status Badge */}
                        <span
                            className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium ${delivery.status === "delivered"
                                    ? "bg-green-100 text-green-800"
                                    : delivery.status === "pending"
                                        ? "bg-yellow-100 text-yellow-800"
                                        : "bg-red-100 text-red-800"
                                }`}
                        >
                            {delivery.status.toUpperCase()}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

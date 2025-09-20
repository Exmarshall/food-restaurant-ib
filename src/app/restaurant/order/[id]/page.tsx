"use client";

import { useParams } from "next/navigation";
import { Phone, MapPin, Car, Bike } from "lucide-react";

const formatNaira = (amount: number) =>
    new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
    }).format(amount);

export default function OrderDetailsPage() {
    const { id } = useParams();

    // Simulated Data (fetch this later from API)
    const order = {
        id,
        customer: "John Doe",
        date: "2025-09-19",
        total: 12999,
        status: "Pending",
        payment: "Card",
        items: [
            {
                id: 1,
                name: "Jollof Rice",
                description: "Delicious Nigerian Jollof rice served with chicken.",
                price: 2500,
                image:
                    "https://cdn.pixabay.com/photo/2022/03/11/10/06/wrap-7061741_1280.jpg",
            },
            {
                id: 2,
                name: "Shawarma",
                description: "Tasty chicken shawarma with veggies and mayo.",
                price: 1500,
                image:
                    "https://cdn.pixabay.com/photo/2022/03/11/10/06/wrap-7061741_1280.jpg",
            },
        ],
    };

    const riders = [
        {
            id: "RDR-001",
            name: "Abdul Rahman",
            contact: "08012345678",
            address: "No. 12 Kano Road, Dutse",
            vehicleType: "Bike",
            vehicleNumber: "KANO-2345",
        },
        {
            id: "RDR-002",
            name: "Chinedu Okafor",
            contact: "08087654321",
            address: "Sabon Gari, Kano",
            vehicleType: "Car",
            vehicleNumber: "ABJ-9988",
        },
    ];

    return (
        <div className="p-6 space-y-10">
            {/* Order Details */}
            <section>
                <h1 className="text-2xl font-bold mb-6">Order Details</h1>
                <div className="bg-white shadow-md rounded-xl p-5 space-y-2">
                    <p><span className="font-medium">Order ID:</span> {order.id}</p>
                    <p><span className="font-medium">Customer:</span> {order.customer}</p>
                    <p><span className="font-medium">Date:</span> {order.date}</p>
                    <p><span className="font-medium">Payment:</span> {order.payment}</p>
                    <p><span className="font-medium">Total:</span> {formatNaira(order.total)}</p>
                    <p><span className="font-medium">Status:</span> {order.status}</p>
                </div>
            </section>

            {/* Items List */}
            <section>
                <h2 className="text-xl font-bold mb-4">Items</h2>
                <div className="grid gap-6 md:grid-cols-2">
                    {order.items.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-xl shadow-md overflow-hidden"
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-32 object-cover"
                            />
                            <div className="p-4 space-y-2">
                                <h3 className="text-lg font-semibold">{item.name}</h3>
                                <p className="text-sm text-gray-600">{item.description}</p>
                                <p className="text-orange-600 font-bold">
                                    {formatNaira(item.price)}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Riders */}
            <section>
                <h2 className="text-xl font-bold mb-4">Available Riders</h2>
                <div className="grid gap-6 md:grid-cols-2">
                    {riders.map((rider) => (
                        <div
                            key={rider.id}
                            className="bg-white rounded-xl shadow-md p-5 space-y-3"
                        >
                            <h3 className="text-lg font-semibold">{rider.name}</h3>
                            <p className="flex items-center gap-2 text-sm text-gray-600">
                                <Phone size={16} className="text-green-500" /> {rider.contact}
                            </p>
                            <p className="flex items-center gap-2 text-sm text-gray-600">
                                <MapPin size={16} className="text-red-500" /> {rider.address}
                            </p>
                            <p className="flex items-center gap-2 text-sm text-gray-600">
                                {rider.vehicleType === "Bike" ? (
                                    <Bike size={16} className="text-blue-500" />
                                ) : (
                                    <Car size={16} className="text-purple-500" />
                                )}
                                {rider.vehicleType} –{" "}
                                <span className="font-medium">{rider.vehicleNumber}</span>
                            </p>
                            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition">
                                Assign Rider
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

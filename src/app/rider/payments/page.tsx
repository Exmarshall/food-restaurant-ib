"use client";

import { useState, useEffect } from "react";
import {
    CreditCard,
    Banknote,
    Truck,
    Building,
    Wallet,
} from "lucide-react";

export default function PaymentPage() {
    const [method, setMethod] = useState("");
    const [bank, setBank] = useState("");
    const [accountNumber, setAccountNumber] = useState("");

    const banks = ["Opay", "Moniepoint", "UBA"];

    // Function to generate random 11-digit account number
    const generateAccountNumber = () => {
        return Math.floor(10000000000 + Math.random() * 90000000000).toString();
    };

    // Load saved state from localStorage when component mounts
    useEffect(() => {
        const savedMethod = localStorage.getItem("paymentMethod") || "";
        const savedBank = localStorage.getItem("paymentBank") || "";
        const savedAccount = localStorage.getItem("paymentAccountNumber") || "";

        setMethod(savedMethod);
        setBank(savedBank);
        setAccountNumber(savedAccount);
    }, []);

    // Save state to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("paymentMethod", method);
        localStorage.setItem("paymentBank", bank);
        localStorage.setItem("paymentAccountNumber", accountNumber);
    }, [method, bank, accountNumber]);

    const handleBankChange = (selectedBank: string) => {
        setBank(selectedBank);
        const newAccountNumber = generateAccountNumber();
        setAccountNumber(newAccountNumber);
    };

    return (
        <div className="p-6 max-w-3xl mx-auto">
            {/* Page Title */}
            <div className="flex items-center gap-2 mb-6">
                <CreditCard className="text-orange-500" size={26} />
                <h1 className="text-2xl font-bold text-gray-800">Choose Payment Method</h1>
            </div>

            {/* Payment Methods */}
            <div className="bg-white shadow-lg rounded-2xl p-6 space-y-6">
                {/* Method Selection */}
                <div className="space-y-3">
                    <label className="block text-gray-700 font-medium">
                        Select Payment Method
                    </label>
                    <select
                        value={method}
                        onChange={(e) => {
                            setMethod(e.target.value);
                            setBank("");
                            setAccountNumber("");
                        }}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                    >
                        <option value="" disabled>
                            Choose a method
                        </option>
                        <option value="delivery">Payment on Delivery</option>
                        <option value="transfer">Bank Transfer</option>
                        <option value="cash">Cash</option>
                        <option value="card">Card Payment</option>
                    </select>
                </div>

                {/* Payment on Delivery */}
                {method === "delivery" && (
                    <div className="flex items-center gap-2 p-4 border rounded-lg bg-gray-50">
                        <Truck className="text-orange-500" size={22} />
                        <p className="text-gray-700">You will pay when your order is delivered.</p>
                    </div>
                )}

                {/* Cash */}
                {method === "cash" && (
                    <div className="flex items-center gap-2 p-4 border rounded-lg bg-gray-50">
                        <Banknote className="text-green-500" size={22} />
                        <p className="text-gray-700">Pay directly in cash at the time of delivery.</p>
                    </div>
                )}

                {/* Bank Transfer */}
                {method === "transfer" && (
                    <div className="space-y-4">
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">
                                Choose Bank
                            </label>
                            <select
                                value={bank}
                                onChange={(e) => handleBankChange(e.target.value)}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                            >
                                <option value="" disabled>
                                    Select a bank
                                </option>
                                {banks.map((b) => (
                                    <option key={b} value={b}>
                                        {b}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {bank && (
                            <div className="p-4 border rounded-lg bg-gray-50 flex items-start gap-3">
                                <Building className="text-blue-500 mt-1" size={22} />
                                <div>
                                    <p className="font-medium text-gray-800">{bank} Bank</p>
                                    <p className="text-gray-600">
                                        <span className="font-semibold">Account Number:</span> {accountNumber}
                                    </p>
                                    <p className="text-gray-600">
                                        <span className="font-semibold">Account Name:</span> Aliyu Abdussalam Inuwa
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {/* Card Payment */}
                {method === "card" && (
                    <div className="space-y-4">
                        <div>
                            <label className="block text-gray-700 font-medium">Card Number</label>
                            <input
                                type="text"
                                placeholder="1234 5678 9012 3456"
                                maxLength={19}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium">Cardholder Name</label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-gray-700 font-medium">Expiry Date</label>
                                <input
                                    type="text"
                                    placeholder="MM/YY"
                                    maxLength={5}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium">CVV</label>
                                <input
                                    type="password"
                                    placeholder="123"
                                    maxLength={3}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                                />
                            </div>
                        </div>
                    </div>
                )}

                {/* Confirm Payment Button */}
                {method && (
                    <button
                        className="w-full bg-orange-500 text-white py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
                    >
                        <Wallet size={20} /> Confirm Payment
                    </button>
                )}
            </div>
        </div>
    );
}

'use client';

import {
    UserCircleIcon,
    EnvelopeIcon,
    MapPinIcon,
    PhoneIcon,
    CalendarIcon,
} from "@heroicons/react/24/outline";

export default function ProfilePage() {
    // Dummy data for now
    const dummyCustomer = {
        name: "Ibrahim Garba",
        email: "ibrahim@example.com",
        location: "Kano, Nigeria",
        phone: "+234 7031466516",
        dateJoined: "01 January 2025",
    };

    return (
        <div className="min-h-screen bg-gray-50 p-4 sm:p-6 flex justify-center">
            <div className="max-w-xl w-full bg-white shadow-lg rounded-xl p-6 sm:p-8 mt-6">
                {/* Profile Header */}
                <div className="flex flex-col items-center mb-6">
                    <UserCircleIcon className="h-16 w-16 text-gray-400" />
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-3">
                        {dummyCustomer.name}
                    </h1>
                    <p className="text-gray-500 text-sm sm:text-base mt-1">
                        Customer Profile
                    </p>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 my-4"></div>

                {/* Profile Details */}
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <EnvelopeIcon className="h-5 w-5 text-gray-500" />
                        <span className="text-gray-700">{dummyCustomer.email}</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <MapPinIcon className="h-5 w-5 text-gray-500" />
                        <span className="text-gray-700">{dummyCustomer.location}</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <PhoneIcon className="h-5 w-5 text-gray-500" />
                        <span className="text-gray-700">{dummyCustomer.phone}</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <CalendarIcon className="h-5 w-5 text-gray-500" />
                        <span className="text-gray-700">Joined: {dummyCustomer.dateJoined}</span>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 my-6"></div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button className="flex-1 px-6 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition">
                        Edit Profile
                    </button>
                    <button className="flex-1 px-6 py-2 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition">
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
}

'use client';

import { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import {
    EnvelopeIcon,
    PhoneIcon,
    CalendarIcon,
    MapPinIcon,
} from "@heroicons/react/24/outline";

export default function ProfilePage() {
    const supabase = createClientComponentClient();

    const [profile, setProfile] = useState<{
        full_name: string | null;
        email: string | null;
        phone_number: string | null;
        image_url: string | null;
        created_at: string | null;
        address: string | null;
        role: string | null;
    }>({
        full_name: null,
        email: null,
        phone_number: null,
        image_url: null,
        created_at: null,
        address: null,
        role: null,
    });

    useEffect(() => {
        const fetchProfile = async () => {
            const {
                data: { user },
            } = await supabase.auth.getUser();

            if (!user) return;

            const { data: profileData, error } = await supabase
                .from("profiles")
                .select("full_name, email, phone_number, image_url, created_at, address, role")
                .eq("id", user.id)
                .single();

            if (error) {
                console.error("Error fetching profile:", error.message);
            } else {
                setProfile(profileData);
            }
        };

        fetchProfile();
    }, [supabase]);

    const getInitials = (name: string | null) => {
        if (!name) return "";
        const parts = name.split(" ");
        return parts.map(p => p[0].toUpperCase()).join("").slice(0, 2);
    };

    const formatDate = (dateString: string | null) => {
        if (!dateString) return "";
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" });
    };

    return (
        <div className="min-h-screen bg-gray-50 flex justify-center p-4 sm:p-6">
            <div className="max-w-xl w-full bg-white shadow-lg rounded-xl p-6 sm:p-8">
                {/* Profile Header */}
                <div className="flex flex-col items-center mb-6">
                    {profile.image_url ? (
                        <img
                            src={profile.image_url}
                            alt="Profile"
                            className="h-20 w-20 rounded-full object-cover shadow-md"
                        />
                    ) : (
                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-orange-500 text-white font-bold text-2xl shadow-md">
                            {getInitials(profile.full_name)}
                        </div>
                    )}
                    <h1 className="text-2xl font-bold text-gray-800 mt-3">
                        {profile.full_name || "No Name"}
                    </h1>
                    {profile.role && (
                        <p className="text-gray-500 text-sm mt-1 capitalize">{profile.role}</p>
                    )}
                </div>

                {/* Profile Details */}
                <div className="space-y-4">
                    {profile.email && (
                        <div className="flex items-center gap-3">
                            <EnvelopeIcon className="h-5 w-5 text-gray-500" />
                            <span className="text-gray-700">{profile.email}</span>
                        </div>
                    )}
                    {profile.phone_number && (
                        <div className="flex items-center gap-3">
                            <PhoneIcon className="h-5 w-5 text-gray-500" />
                            <span className="text-gray-700">{profile.phone_number}</span>
                        </div>
                    )}
                    {profile.address && (
                        <div className="flex items-center gap-3">
                            <MapPinIcon className="h-5 w-5 text-gray-500" />
                            <span className="text-gray-700">{profile.address}</span>
                        </div>
                    )}
                    {profile.created_at && (
                        <div className="flex items-center gap-3">
                            <CalendarIcon className="h-5 w-5 text-gray-500" />
                            <span className="text-gray-700">
                                Joined: {formatDate(profile.created_at)}
                            </span>
                        </div>
                    )}
                </div>

                {/* Actions */}
                <div className="border-t border-gray-200 my-6"></div>
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

'use client';

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Customer() {
    const router = useRouter();

    useEffect(() => {
        router.replace('/customer/food'); // Redirect to /customer/food
    }, [router]);

    // Optional: you can show a loading message while redirecting
    return (
        <div className="flex justify-center items-center h-screen">
            <p className="text-gray-700 text-lg">Please Wait...</p>
        </div>
    );
}

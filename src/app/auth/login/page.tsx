"use client";

import { useState } from "react";
import { Lock, Mail, LogIn, Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { supabase } from "@/lib/supabaseClient";

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            toast.error("❌ Invalid email or password");
        } else {
            toast.success("✅ Logged in successfully!");

            // Redirect all authenticated users to /food page
            router.push("/customer/food");
        }

        setLoading(false);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
                    Login to Your Account
                </h1>

                <form onSubmit={handleLogin} className="space-y-5">
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Email Address
                        </label>
                        <div className="flex items-center border rounded-lg px-3">
                            <Mail className="text-gray-400" size={20} />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@example.com"
                                className="w-full px-2 py-2 focus:outline-none"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Password
                        </label>
                        <div className="flex items-center border rounded-lg px-3">
                            <Lock className="text-gray-400" size={20} />
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                className="w-full px-2 py-2 focus:outline-none"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="text-gray-400 hover:text-gray-600 focus:outline-none ml-2"
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-orange-500 text-white py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
                    >
                        <LogIn size={20} /> {loading ? "Logging in..." : "Login"}
                    </button>
                </form>

                <p className="text-sm text-gray-600 mt-4 text-center">
                    Don’t have an account?{" "}
                    <a
                        href="/auth/register"
                        className="text-orange-500 font-medium hover:underline"
                    >
                        Sign Up
                    </a>
                </p>
            </div>
            <ToastContainer autoClose={3000} hideProgressBar />
        </div>
    );
}

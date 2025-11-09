"use client";

import { useState } from "react";
import {
    User,
    Mail,
    Lock,
    Phone,
    MapPin,
    Store,
    Truck,
    Clock,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

export default function RegisterPage() {
    const supabase = createClientComponentClient();
    const router = useRouter();

    const [role, setRole] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [previewImage, setPreviewImage] = useState<string | null>(null);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        mobile: "",
        address: "",
        restaurantName: "",
        restaurantContact: "",
        restaurantAddress: "",
        openingHours: "",
        whatsapp: "",
        vehicleType: "",
        vehicleNumber: "",
        licenseNumber: "",
        imageFile: null as File | null,
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setFormData((prev) => ({ ...prev, imageFile: file }));
            setPreviewImage(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // 1. Signup user
        const { data: user, error: signUpError } = await supabase.auth.signUp({
            email: formData.email,
            password: formData.password,
        });

        if (signUpError) {
            setLoading(false);
            return toast.error(signUpError.message);
        }

        // 2. Upload profile image
        let uploadedImageUrl: string | null = null;
        if (formData.imageFile) {
            const file = formData.imageFile;
            const filePath = `public/${file.name}`;
            const { error: uploadError } = await supabase.storage
                .from("avatars")
                .upload(filePath, file, { upsert: true });

            if (uploadError) {
                console.error("Image upload error:", uploadError.message);
                toast.error("Failed to upload image");
            } else {
                const { data } = supabase.storage
                    .from("avatars")
                    .getPublicUrl(filePath);
                uploadedImageUrl = data.publicUrl;
            }
        }

        // 3. Insert profile in profiles table
        const { error: profileError } = await supabase
            .from("profiles")
            .insert({
                id: user.user.id,
                full_name: formData.name,
                email: formData.email,
                phone_number: formData.mobile,
                role: role,
                address: formData.address,
                restaurant_name: formData.restaurantName || null,
                restaurant_contact: formData.restaurantContact || null,
                restaurant_address: formData.restaurantAddress || null,
                opening_hours: formData.openingHours || null,
                whatsapp: formData.whatsapp || null,
                vehicle_type: formData.vehicleType || null,
                vehicle_number: formData.vehicleNumber || null,
                license_number: formData.licenseNumber || null,
                image_url: uploadedImageUrl || null,
            });

        setLoading(false);

        if (profileError) {
            console.error(profileError);
            return toast.error("Profile creation failed");
        }

        toast.success("Account created successfully!");
        router.push("/auth/login"); // redirect to home
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
            <Toaster position="top-right" />
            <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Create an Account
                </h2>

                {/* Profile Image */}
                <div className="flex justify-center mb-6">
                    <label className="relative cursor-pointer">
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="hidden"
                        />
                        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-orange-400 flex items-center justify-center">
                            {previewImage ? (
                                <img
                                    src={previewImage}
                                    alt="Profile Preview"
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <User className="text-gray-400 w-12 h-12" />
                            )}
                        </div>
                    </label>
                </div>

                <form className="space-y-5" onSubmit={handleSubmit}>
                    {/* Name */}
                    <div className="relative">
                        <User className="absolute left-3 top-3 text-gray-400" size={20} />
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Full Name"
                            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div className="relative">
                        <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your Gmail"
                            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div className="relative">
                        <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Password"
                            className="w-full pl-10 pr-10 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-3 text-gray-500"
                        >
                            {showPassword ? "🙈" : "👁️"}
                        </button>
                    </div>

                    {/* Mobile */}
                    <div className="relative">
                        <Phone className="absolute left-3 top-3 text-gray-400" size={20} />
                        <input
                            type="tel"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            placeholder="Mobile Number"
                            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Address */}
                    <div className="relative">
                        <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="Address"
                            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Role */}
                    <div>
                        <label className="block mb-1 font-medium text-gray-700">
                            Select Role
                        </label>
                        <select
                            name="role"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
                            required
                        >
                            <option value="">-- Select Role --</option>
                            <option value="customer">Customer</option>
                            <option value="restaurant">Restaurant</option>
                            <option value="rider">Rider</option>
                        </select>
                    </div>

                    {/* Conditional Fields */}
                    {role === "restaurant" && (
                        <div className="space-y-4 mt-4">
                            <h3 className="font-semibold text-gray-800">
                                Restaurant Details
                            </h3>

                            <div className="relative">
                                <Store className="absolute left-3 top-3 text-gray-400" size={20} />
                                <input
                                    type="text"
                                    name="restaurantName"
                                    value={formData.restaurantName}
                                    onChange={handleChange}
                                    placeholder="Restaurant Name"
                                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
                                    required
                                />
                            </div>

                            <div className="relative">
                                <Phone className="absolute left-3 top-3 text-gray-400" size={20} />
                                <input
                                    type="tel"
                                    name="restaurantContact"
                                    value={formData.restaurantContact}
                                    onChange={handleChange}
                                    placeholder="Restaurant Contact"
                                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
                                    required
                                />
                            </div>

                            <div className="relative">
                                <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
                                <input
                                    type="text"
                                    name="restaurantAddress"
                                    value={formData.restaurantAddress}
                                    onChange={handleChange}
                                    placeholder="Restaurant Address"
                                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
                                    required
                                />
                            </div>

                            <div className="relative">
                                <Clock className="absolute left-3 top-3 text-gray-400" size={20} />
                                <input
                                    type="text"
                                    name="openingHours"
                                    value={formData.openingHours}
                                    onChange={handleChange}
                                    placeholder="Opening Hours (e.g. 9AM - 9PM)"
                                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
                                    required
                                />
                            </div>

                            <div className="relative">
                                <FaWhatsapp className="absolute left-3 top-3 text-green-500" size={22} />
                                <input
                                    type="tel"
                                    name="whatsapp"
                                    value={formData.whatsapp}
                                    onChange={handleChange}
                                    placeholder="WhatsApp Number"
                                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
                                    required
                                />
                            </div>
                        </div>
                    )}

                    {role === "rider" && (
                        <div className="space-y-4 mt-4">
                            <h3 className="font-semibold text-gray-800">Rider Details</h3>

                            <div>
                                <label className="block mb-1 font-medium text-gray-700">
                                    Vehicle Type
                                </label>
                                <select
                                    name="vehicleType"
                                    value={formData.vehicleType}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
                                >
                                    <option value="">-- Select Vehicle --</option>
                                    <option value="motorcycle">🏍️ Motorcycle</option>
                                    <option value="car">🚗 Car</option>
                                    <option value="bicycle">🚲 Bicycle</option>
                                    <option value="keke">🛺 Keke-Napep</option>
                                </select>
                            </div>

                            <div className="relative">
                                <Truck className="absolute left-3 top-3 text-gray-400" size={20} />
                                <input
                                    type="text"
                                    name="vehicleNumber"
                                    value={formData.vehicleNumber}
                                    onChange={handleChange}
                                    placeholder="Vehicle Number"
                                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
                                    required
                                />
                            </div>

                            <div className="relative">
                                <User className="absolute left-3 top-3 text-gray-400" size={20} />
                                <input
                                    type="text"
                                    name="licenseNumber"
                                    value={formData.licenseNumber}
                                    onChange={handleChange}
                                    placeholder="Driver's License Number"
                                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
                                />
                            </div>
                        </div>
                    )}

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full ${loading ? "bg-orange-300" : "bg-orange-500"
                            } text-white py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors flex justify-center items-center`}
                    >
                        {loading ? (
                            <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-5 h-5"></span>
                        ) : (
                            "Register"
                        )}
                    </button>

                    {/* Already have account */}
                    <p className="text-center text-gray-600 mt-4">
                        Already have an account?{" "}
                        <Link
                            href="/auth/login"
                            className="text-orange-500 font-medium hover:underline"
                        >
                            Login
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

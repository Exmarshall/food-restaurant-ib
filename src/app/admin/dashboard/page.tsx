"use client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
    UsersIcon,
    ClipboardDocumentListIcon,
    ChartBarIcon,
    Cog6ToothIcon,
    ArchiveBoxIcon,
    HomeIcon,
    TrashIcon,
    LockClosedIcon,
    CheckCircleIcon,
    ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";





// Dummy Users
const users = [
    { id: 1, name: "Roush Restaurant", role: "Restaurant", status: "Active" },
    { id: 2, name: "Aminu Hassan", role: "Rider", status: "Active" },
    { id: 3, name: "Ibrahim Garba", role: "Customer", status: "Restricted" },
];

// Dummy Orders
const orders = [
    { id: 1, customer: "Aliyu Musa", item: "Awara", status: "Delivered" },
    { id: 2, customer: "Mary John", item: "Wainan Masa", status: "Pending" },
    { id: 3, customer: "Fatima Bello", item: "Gurasa", status: "Delivered" },
    { id: 4, customer: "Usman Sani", item: "Bread", status: "Cancelled" },
    { id: 5, customer: "Aisha Ali", item: "Rice and Beans", status: "Pending" },
];

// Inventory with food items
const inventory = [
    { id: 1, item: "Awara", quantity: 50 },
    { id: 2, item: "Gurasa", quantity: 30 },
    { id: 3, item: "Wainan Masa", quantity: 45 },
    { id: 4, item: "Rice and Beans", quantity: 100 },
    { id: 5, item: "Fish", quantity: 60 },
    { id: 6, item: "Bread", quantity: 80 },
    { id: 7, item: "Akara (Kosai)", quantity: 120 },
];

// Dummy Report Data
const reportData = [
    { name: "Jan", sales: 400 },
    { name: "Feb", sales: 300 },
    { name: "Mar", sales: 500 },
    { name: "Apr", sales: 250 },
    { name: "May", sales: 600 },
    { name: "Jun", sales: 450 },
];

export default function AdminDashboard() {
    const [active, setActive] = useState("Dashboard");
    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem("adminAuth");
 
        // ✅ Show toast
        toast.success("Successfully logged out!");

        // Small delay so the toast shows before redirect
        setTimeout(() => {
            router.push("/admin/login");
        }, 800);
    };


    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div className="w-64 bg-gray-800 text-white flex flex-col">
                <div className="p-4 text-2xl font-bold border-b border-gray-700">
                   Welcome Admin 
                </div>
                <nav className="flex-1 p-4 space-y-2">
                    {[
                        { name: "Dashboard", icon: HomeIcon },
                        { name: "Users", icon: UsersIcon },
                        { name: "Orders", icon: ClipboardDocumentListIcon },
                        { name: "Inventory", icon: ArchiveBoxIcon },
                        { name: "Reports", icon: ChartBarIcon },
                        { name: "Settings", icon: Cog6ToothIcon },
                    ].map((item) => (
                        <button
                            key={item.name}
                            onClick={() => setActive(item.name)}
                            className={`flex items-center w-full px-3 py-2 rounded-md text-sm font-medium ${active === item.name
                                    ? "bg-gray-700 text-white"
                                    : "text-gray-300 hover:bg-gray-600 hover:text-white"
                                }`}
                        >
                            <item.icon className="h-5 w-5 mr-2" />
                            {item.name}
                        </button>
                    ))}
                </nav>

                {/* Logout */}
                <div className="p-4 border-t border-gray-700">
                    <Button
                        onClick={handleLogout}
                        className="w-full flex items-center justify-center bg-red-600 hover:bg-red-700 text-white"
                    >
                        <ArrowRightOnRectangleIcon className="h-5 w-5 mr-2" />
                        Logout
                    </Button>


                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6 overflow-y-auto">
                {/* Dashboard */}
                {active === "Dashboard" && (
                    <div>
                        <h1 className="text-2xl font-bold mb-6">Overview</h1>

                        {/* KPIs */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                            <Card>
                                <CardHeader><CardTitle>Total Users</CardTitle></CardHeader>
                                <CardContent className="text-2xl font-bold">120</CardContent>
                            </Card>
                            <Card>
                                <CardHeader><CardTitle>Restaurants</CardTitle></CardHeader>
                                <CardContent className="text-2xl font-bold">15</CardContent>
                            </Card>
                            <Card>
                                <CardHeader><CardTitle>Riders</CardTitle></CardHeader>
                                <CardContent className="text-2xl font-bold">30</CardContent>
                            </Card>
                            <Card>
                                <CardHeader><CardTitle>Customers</CardTitle></CardHeader>
                                <CardContent className="text-2xl font-bold">75</CardContent>
                            </Card>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                            <Card>
                                <CardHeader><CardTitle>Revenue</CardTitle></CardHeader>
                                <CardContent className="text-2xl font-bold">₦500,000</CardContent>
                            </Card>
                            <Card>
                                <CardHeader><CardTitle>Pending Orders</CardTitle></CardHeader>
                                <CardContent className="text-2xl font-bold">10</CardContent>
                            </Card>
                            <Card>
                                <CardHeader><CardTitle>Delivered Orders</CardTitle></CardHeader>
                                <CardContent className="text-2xl font-bold">200</CardContent>
                            </Card>
                            <Card>
                                <CardHeader><CardTitle>Cancelled Orders</CardTitle></CardHeader>
                                <CardContent className="text-2xl font-bold">5</CardContent>
                            </Card>
                        </div>

                        {/* Charts */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                            <Card>
                                <CardHeader><CardTitle>Monthly Sales</CardTitle></CardHeader>
                                <CardContent>
                                    <ResponsiveContainer width="100%" height={300}>
                                        <BarChart data={reportData}>
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <Tooltip />
                                            <Bar dataKey="sales" fill="#2563eb" />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader><CardTitle>Order Status</CardTitle></CardHeader>
                                <CardContent>
                                    <ResponsiveContainer width="100%" height={300}>
                                        <BarChart
                                            data={[
                                                { name: "Pending", value: 10 },
                                                { name: "Delivered", value: 200 },
                                                { name: "Cancelled", value: 5 },
                                            ]}
                                        >
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <Tooltip />
                                            <Bar dataKey="value" fill="#10b981" />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Recent Orders + Latest Users */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <Card>
                                <CardHeader><CardTitle>Recent Orders</CardTitle></CardHeader>
                                <CardContent>
                                    <table className="w-full">
                                        <thead>
                                            <tr className="bg-gray-100">
                                                <th className="p-2 text-left">Customer</th>
                                                <th className="p-2 text-left">Item</th>
                                                <th className="p-2 text-left">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {orders.slice(0, 5).map((o) => (
                                                <tr key={o.id} className="border-b">
                                                    <td className="p-2">{o.customer}</td>
                                                    <td className="p-2">{o.item}</td>
                                                    <td className="p-2">{o.status}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader><CardTitle>Latest Users</CardTitle></CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        {users.slice(0, 5).map((u) => (
                                            <li
                                                key={u.id}
                                                className="flex justify-between border-b pb-2"
                                            >
                                                <span>{u.name}</span>
                                                <span className="text-sm text-gray-500">{u.role}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                )}

                {/* Users */}
                {active === "Users" && (
                    <div>
                        <h1 className="text-2xl font-bold mb-6">Manage Users</h1>
                        <table className="w-full bg-white rounded-md shadow-md">
                            <thead>
                                <tr className="bg-gray-200 text-left">
                                    <th className="p-2">Name</th>
                                    <th className="p-2">Role</th>
                                    <th className="p-2">Status</th>
                                    <th className="p-2">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((u) => (
                                    <tr key={u.id} className="border-b">
                                        <td className="p-2">{u.name}</td>
                                        <td className="p-2">{u.role}</td>
                                        <td className="p-2">{u.status}</td>
                                        <td className="p-2 space-x-2">
                                            <Button variant="destructive" size="sm">
                                                <TrashIcon className="h-4 w-4 mr-1" /> Delete
                                            </Button>
                                            <Button variant="secondary" size="sm">
                                                <LockClosedIcon className="h-4 w-4 mr-1" /> Restrict
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {/* Orders */}
                {active === "Orders" && (
                    <div>
                        <h1 className="text-2xl font-bold mb-6">Manage Orders</h1>
                        <table className="w-full bg-white rounded-md shadow-md">
                            <thead>
                                <tr className="bg-gray-200 text-left">
                                    <th className="p-2">Customer</th>
                                    <th className="p-2">Item</th>
                                    <th className="p-2">Status</th>
                                    <th className="p-2">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((o) => (
                                    <tr key={o.id} className="border-b">
                                        <td className="p-2">{o.customer}</td>
                                        <td className="p-2">{o.item}</td>
                                        <td className="p-2">{o.status}</td>
                                        <td className="p-2">
                                            <Button
                                                size="sm"
                                                className="bg-green-600 hover:bg-green-700 text-white"
                                            >
                                                <CheckCircleIcon className="h-4 w-4 mr-1" /> Mark as
                                                Delivered
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {/* Inventory */}
                {/* Inventory */}
                {active === "Inventory" && (
                    <div>
                        <h1 className="text-2xl font-bold mb-6">Inventory Management</h1>

                        {/* Summary */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                            <Card>
                                <CardHeader><CardTitle>Total Items</CardTitle></CardHeader>
                                <CardContent className="text-2xl font-bold">{inventory.length}</CardContent>
                            </Card>
                            <Card>
                                <CardHeader><CardTitle>Low Stock</CardTitle></CardHeader>
                                <CardContent className="text-2xl font-bold text-red-600">
                                    {inventory.filter((i) => i.quantity < 20).length}
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader><CardTitle>Total Stock</CardTitle></CardHeader>
                                <CardContent className="text-2xl font-bold">
                                    {inventory.reduce((acc, i) => acc + i.quantity, 0)}
                                </CardContent>
                            </Card>
                        </div>

                        {/* Add New Item */}
                        <form
                            className="bg-white p-4 mb-6 rounded-md shadow-md grid grid-cols-1 md:grid-cols-4 gap-4"
                            onSubmit={(e) => {
                                e.preventDefault();
                                alert("New item added!"); // you can swap with toast
                            }}
                        >
                            <input type="text" placeholder="Item name" className="border p-2 rounded-md" required />
                            <input type="number" placeholder="Quantity" className="border p-2 rounded-md" required />
                            <input type="number" placeholder="Price (₦)" className="border p-2 rounded-md" required />
                            <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
                                Add Item
                            </Button>
                        </form>

                        {/* Inventory Table */}
                        <table className="w-full bg-white rounded-md shadow-md mb-6">
                            <thead>
                                <tr className="bg-gray-200 text-left">
                                    <th className="p-2">Item</th>
                                    <th className="p-2">Quantity</th>
                                    <th className="p-2">Price (₦)</th>
                                    <th className="p-2">Status</th>
                                    <th className="p-2">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {inventory.map((i) => (
                                    <tr key={i.id} className={`border-b ${i.quantity < 20 ? "bg-red-50" : ""}`}>
                                        <td className="p-2">{i.item}</td>
                                        <td className="p-2">{i.quantity}</td>
                                        <td className="p-2">₦{i.price || 200}</td>
                                        <td className="p-2">
                                            {i.quantity < 20 ? (
                                                <span className="text-red-600 font-medium">Low Stock</span>
                                            ) : (
                                                <span className="text-green-600 font-medium">In Stock</span>
                                            )}
                                        </td>
                                        <td className="p-2 space-x-2">
                                            <Button size="sm" className="bg-yellow-500 hover:bg-yellow-600 text-white">
                                                Edit
                                            </Button>
                                            <Button size="sm" variant="destructive">
                                                Delete
                                            </Button>
                                            <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                                                Restock
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {/* Inventory Chart */}
                        <Card>
                            <CardHeader><CardTitle>Stock Levels</CardTitle></CardHeader>
                            <CardContent>
                                <ResponsiveContainer width="100%" height={300}>
                                    <BarChart data={inventory}>
                                        <XAxis dataKey="item" />
                                        <YAxis />
                                        <Tooltip />
                                        <Bar dataKey="quantity" fill="#f59e0b" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </CardContent>
                        </Card>
                    </div>
                )}

                {/* Reports */}
                {active === "Reports" && (
                    <div>
                        <h1 className="text-2xl font-bold mb-6">Reports</h1>
                        <Card>
                            <CardHeader>
                                <CardTitle>Monthly Sales</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ResponsiveContainer width="100%" height={300}>
                                    <BarChart data={reportData}>
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Bar dataKey="sales" fill="#2563eb" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </CardContent>
                        </Card>
                    </div>
                )}

                {/* Settings */}
                {active === "Settings" && (
                    <div>
                        <h1 className="text-2xl font-bold mb-6">Admin Settings</h1>
                        <form className="bg-white p-6 rounded-md shadow-md space-y-4">
                            <div>
                                <label className="block mb-1 text-sm font-medium">Admin Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter name"
                                    className="w-full border p-2 rounded-md"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 text-sm font-medium">Email</label>
                                <input
                                    type="email"
                                    placeholder="Enter email"
                                    className="w-full border p-2 rounded-md"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 text-sm font-medium">Password</label>
                                <input
                                    type="password"
                                    placeholder="Enter new password"
                                    className="w-full border p-2 rounded-md"
                                />
                            </div>
                            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                                Save Changes
                            </Button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}

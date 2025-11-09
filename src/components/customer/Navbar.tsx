'use client';

import {
    Disclosure,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
} from '@headlessui/react';
import { Bars3Icon, ShoppingCartIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useCart } from '@/context/CartContext';

const navigation = [
    { name: 'Dashboard', href: '/customer' },
    { name: 'Food', href: '/customer/food' },
    { name: 'Order', href: '/customer/order' },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

export default function NavbarCustomer() {
    const supabase = createClientComponentClient();
    const pathname = usePathname();
    const router = useRouter();
    const { cart } = useCart(); // Cart state from context
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    const [profile, setProfile] = useState<{ image_url: string | null; full_name: string | null }>({
        image_url: null,
        full_name: null,
    });

    useEffect(() => {
        const fetchProfile = async () => {
            const {
                data: { user },
            } = await supabase.auth.getUser();

            if (!user) return;

            const { data: profileData, error } = await supabase
                .from('profiles')
                .select('full_name, image_url')
                .eq('id', user.id)
                .single();

            if (error) {
                console.error('Error fetching profile:', error.message);
            } else {
                setProfile(profileData);
            }
        };

        fetchProfile();
    }, [supabase]);

    // Get initials from name
    const getInitials = (name: string | null) => {
        if (!name) return '';
        const names = name.split(' ');
        return names.map((n) => n[0].toUpperCase()).join('').slice(0, 2);
    };

    // Sign out
    const handleSignOut = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.error('Error signing out:', error.message);
        } else {
            router.push('/auth/login');
        }
    };

    return (
        <Disclosure as="nav" className="sticky top-0 z-50 bg-gray-800">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            {/* Mobile menu button */}
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-none">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>

                            {/* Logo + Navigation */}
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex shrink-0 items-center">
                                    <img src="/images/logo.png" alt="Roush" className="h-10 w-auto" />
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => {
                                            const isActive = pathname === item.href;
                                            return (
                                                <Link
                                                    key={item.name}
                                                    href={item.href}
                                                    className={classNames(
                                                        isActive
                                                            ? 'bg-gray-950/50 text-white'
                                                            : 'text-gray-300 hover:bg-white/5 hover:text-white',
                                                        'rounded-md px-3 py-2 text-sm font-medium'
                                                    )}
                                                >
                                                    {item.name}
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>

                            {/* Right side: Cart + Profile */}
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                {/* Cart Icon */}
                                <Link
                                    href="/customer/cart"
                                    className="relative p-1 text-gray-400 hover:text-white"
                                >
                                    <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                                    {cartCount > 0 && (
                                        <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold text-white">
                                            {cartCount}
                                        </span>
                                    )}
                                </Link>

                                {/* Profile dropdown */}
                                <Menu as="div" className="relative ml-3">
                                    <MenuButton className="flex rounded-full focus:outline-none">
                                        {profile.image_url ? (
                                            <img
                                                src={profile.image_url}
                                                alt="Profile"
                                                className="h-8 w-8 rounded-full object-cover"
                                            />
                                        ) : (
                                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white font-bold">
                                                {getInitials(profile.full_name)}
                                            </div>
                                        )}
                                    </MenuButton>
                                    <MenuItems className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-gray-800 py-1">
                                        <MenuItem>
                                            <Link
                                                href="/customer/profile"
                                                className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/5"
                                            >
                                                Your profile
                                            </Link>
                                        </MenuItem>
                                        <MenuItem>
                                            <Link
                                                href="#"
                                                className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/5"
                                            >
                                                Settings
                                            </Link>
                                        </MenuItem>
                                        <MenuItem>
                                            <button
                                                onClick={handleSignOut}
                                                className="w-full text-left block px-4 py-2 text-sm text-gray-300 hover:bg-white/5"
                                            >
                                                Sign out
                                            </button>
                                        </MenuItem>
                                    </MenuItems>
                                </Menu>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pt-2 pb-3">
                            {navigation.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className={classNames(
                                            isActive
                                                ? 'bg-gray-950/50 text-white'
                                                : 'text-gray-300 hover:bg-white/5 hover:text-white',
                                            'block rounded-md px-3 py-2 text-base font-medium'
                                        )}
                                    >
                                        {item.name}
                                    </Disclosure.Button>
                                );
                            })}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}

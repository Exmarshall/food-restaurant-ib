'use client';

import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon, ShoppingCartIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
    { name: 'Dashboard', href: '/customer' },
    { name: 'Food', href: '/customer/food' },
    { name: 'Order', href: '/customer/order' },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

export default function NavbarCustomer() {
    const pathname = usePathname(); // get current path

    return (
        <Disclosure
            as="nav"
            className="sticky top-0 z-50 bg-gray-800 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10"
        >
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    {/* Mobile Menu Button */}
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
                            <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-open:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-open:block" />
                        </DisclosureButton>
                    </div>

                    {/* Logo + Links */}
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex shrink-0 items-center">
                            <img
                                src="/logo.jpg"
                                alt="Roush"
                                className="h-10 w-auto rounded-md object-contain shadow-md"
                            />
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

                    {/* Right Side: Cart + Profile */}
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <Link
                            href={"/customer/cart"}
                            className="relative rounded-full p-1 text-gray-400 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
                        >
                            <ShoppingCartIcon aria-hidden="true" className="h-6 w-6" />
                        </Link>

                        {/* Profile dropdown */}
                        <Menu as="div" className="relative ml-3">
                            <MenuButton className="relative flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                                <img
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                                    alt="Profile"
                                    className="h-8 w-8 rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10"
                                />
                            </MenuButton>
                            <MenuItems
                                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-800 py-1 outline -outline-offset-1 outline-white/10 transition"
                            >
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
                                    <Link
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/5"
                                    >
                                        Sign out
                                    </Link>
                                </MenuItem>
                            </MenuItems>
                        </Menu>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3">
                    {navigation.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <DisclosureButton
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
                            </DisclosureButton>
                        );
                    })}
                </div>
            </DisclosurePanel>
        </Disclosure>
    );
}

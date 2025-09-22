'use client';

import Image from 'next/image';
import { ArrowRightIcon, UserIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gray-50 flex flex-col overflow-hidden">

      {/* Sticky Navbar */}
      <header className="sticky top-0 z-50 w-full bg-gray-50 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          {/* Logo + Brand */}
          <Link href="/">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.jpg"
                alt="FOODIE Logo"
                width={50}
                height={50}
                className="rounded-md object-contain"
              />
              <h1 className="text-2xl md:text-3xl font-bold text-orange-500">FOODIE</h1>
            </div>
          </Link>

          {/* Restaurant Info */}
          <div className="flex items-center gap-6 text-gray-700 font-medium">
            <div className="flex flex-col text-right">
              <span className="text-gray-900">📞 +234 801 234 5678</span>
              <span className="text-sm text-gray-500">Mon-Sun: 8am - 10pm</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6 md:px-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Welcome to <span className="text-orange-500">FOODIE</span> 🍴
        </h1>
        <p className="text-gray-700 text-lg md:text-xl mb-4 max-w-2xl">
          FOODIE is Northern Nigeria’s premier online food vendor, delivering authentic Nigerian cuisine with unmatched quality.
          Fresh ingredients, professional service, and a seamless online ordering experience guarantee every meal delights your senses.
        </p>
        <p className="text-gray-600 text-md mb-8 max-w-2xl">
          From Jollof Rice and Suya to contemporary culinary creations, our menu is designed to satisfy every taste. Join thousands of happy customers who trust FOODIE for exceptional meals delivered to their doorsteps.
        </p>

        {/* CTA Buttons: Login & Signup */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/auth/login"
            className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-medium rounded-lg shadow-md hover:bg-orange-600 transition"
          >
            Login
            <UserIcon className="h-5 w-5 ml-2" />
          </Link>

          <Link
            href="/auth/register"
            className="inline-flex items-center justify-center px-6 py-3 bg-white text-orange-500 font-medium rounded-lg shadow-md hover:bg-orange-50 transition"
          >
            Signup
            <ArrowRightIcon className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </main>

      {/* Decorative Background Images */}
      <div className="absolute top-0 right-0 w-1/3 opacity-20 -z-10">
        <Image
          src="/images/hero-top.png"
          alt="Delicious Food"
          width={400}
          height={400}
          className="object-contain"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-1/2 opacity-30 -z-10">
        <Image
          src="/images/hero-bottom.png"
          alt="Tasty Food"
          width={500}
          height={500}
          className="object-contain"
        />
      </div>
    </div>
  );
}

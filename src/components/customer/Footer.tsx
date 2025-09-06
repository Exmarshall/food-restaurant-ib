import React from "react";
import {
  HomeIcon,
  UserIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import {
  FaceSmileIcon,
  ChatBubbleLeftIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white px-10 pt-12 pb-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div>
          <h1 className="text-2xl font-bold">Foodie</h1>
          <p className="text-gray-400 mt-3 text-sm leading-relaxed">
            Your favorite food delivered fast at your door.
            <br />
            Explore delicious meals and quick service with Foodie.
          </p>
        </div>

        {/* Middle Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Navigation</h2>
          <ul className="space-y-3 text-gray-300">
            <li>
              <a
                href="/customer/food"
                className="flex items-center gap-2 hover:text-yellow-400"
              >
                <HomeIcon className="h-5 w-5" /> Food
              </a>
            </li>
            <li>
              <a
                href="/customer/profile"
                className="flex items-center gap-2 hover:text-yellow-400"
              >
                <UserIcon className="h-5 w-5" /> Profile
              </a>
            </li>
            <li>
              <a
                href="/customer/order"
                className="flex items-center gap-2 hover:text-yellow-400"
              >
                <ShoppingBagIcon className="h-5 w-5" /> Order
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4 text-gray-300">
            <FaceSmileIcon className="h-6 w-6 cursor-pointer hover:text-yellow-400" />
            <ChatBubbleLeftIcon className="h-6 w-6 cursor-pointer hover:text-yellow-400" />
            <HeartIcon className="h-6 w-6 cursor-pointer hover:text-yellow-400" />
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Foodie. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

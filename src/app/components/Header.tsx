"use client";

import { FaUserCircle, FaShoppingCart } from "react-icons/fa";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* LEFT: Title + Nav links */}
        <div className="flex items-center gap-8">
          <div className="text-xl font-bold">JewelryShop</div>

          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <Link href="#" className="hover:text-gray-300">
              Earrings
            </Link>
            <Link href="#" className="hover:text-gray-300">
              Bracelets
            </Link>
            <Link href="#" className="hover:text-gray-300">
              Sets
            </Link>
            <Link href="#" className="hover:text-gray-300">
              Anklets
            </Link>
            <Link href="#" className="hover:text-gray-300">
              Necklaces
            </Link>
          </nav>
        </div>

        {/* RIGHT: Search + Cart + Profile */}
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search..."
            className="bg-white text-black px-4 py-2 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-48 md:w-96"
          />

          {/* Cart Icon */}
          <div className="relative cursor-pointer">
            <FaShoppingCart className="text-2xl" />
            {/* Badge for item count */}
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
              3
            </span>
          </div>

          {/* Profile Icon */}
          <FaUserCircle className="text-2xl cursor-pointer" />
        </div>
      </div>
    </header>
  );
}

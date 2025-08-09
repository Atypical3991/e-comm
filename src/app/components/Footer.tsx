"use client";

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-12 py-6">
      <div className="w-4/5 mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-semibold">My Website</h3>
          <p className="text-sm mt-1">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div className="flex space-x-6 text-xl">
          <a href="#" aria-label="Facebook" className="hover:text-gray-400">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-gray-400">
            <FaTwitter />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-gray-400">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}

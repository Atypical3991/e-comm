"use client";

import { signOut, useSession } from "next-auth/react";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { FaBox, FaHeart, FaCog, FaSignOutAlt } from "react-icons/fa";

export default function ProfileSection({ onClose }: { onClose: () => void }) {
  const { data: session } = useSession();
  const dropdownRef = useRef<HTMLDivElement>(null);

  if (!session) return null;

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div
      ref={dropdownRef}
      className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-lg z-50"
    >
      {/* Arrow */}
      <div className="absolute -top-2 right-4 w-4 h-4 bg-white rotate-45 shadow-md" />

      {/* Profile Info */}
      <div className="flex items-center gap-3 p-4 border-b">
        <img
          src={session.user?.image || "/default-avatar.png"}
          alt="Profile"
          className="w-12 h-12 rounded-full border"
        />
        <div>
          <h3 className="text-sm font-semibold text-black">
            {session.user?.name || "User"}
          </h3>
          <p className="text-gray-700 text-xs">{session.user?.email}</p>
        </div>
      </div>

      {/* Menu Options */}
      <div className="flex flex-col p-2 text-black">
        <Link
          href="/orders"
          className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100"
        >
          <FaBox className="text-black" />
          <span className="text-sm">My Orders</span>
        </Link>

        <Link
          href="/wishlist"
          className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100"
        >
          <FaHeart className="text-black" />
          <span className="text-sm">Wishlist</span>
        </Link>

        <Link
          href="/account"
          className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100"
        >
          <FaCog className="text-black" />
          <span className="text-sm">Account Settings</span>
        </Link>

        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="flex items-center gap-3 px-4 py-2 rounded-lg text-left hover:bg-gray-100 text-black"
        >
          <FaSignOutAlt className="text-black" />
          <span className="text-sm">Logout</span>
        </button>
      </div>
    </div>
  );
}

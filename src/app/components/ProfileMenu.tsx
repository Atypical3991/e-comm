"use client";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { User, LogOut } from "lucide-react";

export default function ProfileMenu() {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);

  if (!session) return null;

  return (
    <div className="relative">
      <img
        src="/profile.png"
        alt="Profile"
        className="w-10 h-10 rounded-full cursor-pointer"
        onClick={() => setOpen(!open)}
      />
      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-xl p-2">
          <div className="flex items-center gap-2 p-2 text-gray-700">
            <User size={16} /> {session.user?.email}
          </div>
          <button
            onClick={() => signOut({ callbackUrl: "/auth" })}
            className="flex items-center gap-2 p-2 hover:bg-gray-100 w-full text-red-600"
          >
            <LogOut size={16} /> Logout
          </button>
        </div>
      )}
    </div>
  );
}

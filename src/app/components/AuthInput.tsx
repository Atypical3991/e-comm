"use client";

import React from "react";

interface AuthInputProps {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function AuthInput({
  label,
  type,
  value,
  onChange,
}: AuthInputProps) {
  return (
    <div className="mb-4">
      <input
        type={type}
        value={value}
        placeholder={label}
        onChange={onChange}
        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-gray-800"
      />
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import AuthInput from "@app/components/AuthInput";
import Collage from "@app/components/Collage";

export default function SignupPage() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstname, lastname, mobile, email, password }),
    });
    const data = await res.json();
    alert(data.message);
  }

  return (
    <div className="min-h-screen flex">
      {/* LEFT SIDE - collage */}
      <div className="flex-1">
        <Collage />
      </div>

      {/* RIGHT SIDE - signup form */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md p-8">
          <h1 className="text-3xl font-bold mb-6">Happening now</h1>
          <h2 className="text-xl font-medium mb-6">Create your account</h2>

          <form onSubmit={handleSubmit}>
            <div className="flex gap-2">
              <AuthInput
                label="First name"
                type="text"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
              <AuthInput
                label="Last name"
                type="text"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>

            <AuthInput
              label="Mobile"
              type="tel"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="+1 5551234567"
            />

            <AuthInput
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <AuthInput
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              className="w-full bg-gray-800 text-white font-semibold py-3 rounded-full hover:opacity-90 mt-4"
            >
              Sign Up
            </button>
          </form>

          <p className="text-sm text-gray-600 mt-6">
            Already have an account?{" "}
            <Link
              href="/auth/login"
              className="text-gray-800 font-medium hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

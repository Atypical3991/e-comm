"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import AuthInput from "@app/components/AuthInput";
import Collage from "@app/components/Collage";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: "/",
    });
  }

  return (
    <div className="min-h-screen flex">
      {/* LEFT SIDE - collage */}
      <div className="flex-1">
        <Collage />
      </div>

      {/* RIGHT SIDE - login form */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md p-8">
          <h1 className="text-3xl font-bold mb-6">Sign in to continue</h1>

          <form onSubmit={handleSubmit}>
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
              className="w-full bg-gray-800 text-white font-semibold py-3 rounded-full hover:opacity-90"
            >
              Sign In
            </button>
          </form>

          <p className="text-sm text-gray-600 mt-6">
            Don't have an account?{" "}
            <Link
              href="/auth/signup"
              className="text-gray-800 font-medium hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

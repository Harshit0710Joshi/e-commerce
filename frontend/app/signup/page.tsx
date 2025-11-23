"use client";

import AuthCard from "../components/AuthCard";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";
import Image from "next/image";
import { Mail, Phone, Lock, User } from "lucide-react";

export default function Signup() {
  const { login } = useAuth();

  const handleSignup = (e: any) => {
    e.preventDefault();
    login({ name: "NewUser" }); // temp
  };

  return (
    <AuthCard>

      {/* LOGO CENTER SMALLER */}
      <div className="flex justify-center mb-6 mt-2">
        <Image
          src="/logo.png"
          alt="App Logo"
          width={100}
          height={100}
          className="object-contain"
        />
      </div>

      {/* TITLE COMPACT */}
      <div className="flex flex-col items-center mb-6">
        <h3 className="text-2xl font-bold tracking-tight text-gray-900 font-sans">
          Create Account
        </h3>
        <p className="text-gray-600 text-xs mt-1 font-medium">
          Sign up to get started
        </p>
      </div>

      {/* FORM */}
      <form className="space-y-4" onSubmit={handleSignup}>

        {/* NAME */}
        <div className="flex items-center border-b border-gray-400 pb-1.5 focus-within:border-[#38bdf8] transition">
          <User size={18} className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Full Name"
            className="flex-1 bg-transparent text-sm text-gray-800 placeholder-gray-400 outline-none py-1"
          />
        </div>

        {/* EMAIL */}
        <div className="flex items-center border-b border-gray-400 pb-1.5 focus-within:border-[#38bdf8] transition">
          <Mail size={18} className="text-gray-500 mr-2" />
          <input
            type="email"
            placeholder="Email Address"
            className="flex-1 bg-transparent text-sm text-gray-800 placeholder-gray-400 outline-none py-1"
          />
        </div>

        {/* PHONE */}
        <div className="flex items-center border-b border-gray-400 pb-1.5 focus-within:border-[#38bdf8] transition">
          <Phone size={18} className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Mobile Number"
            className="flex-1 bg-transparent text-sm text-gray-800 placeholder-gray-400 outline-none py-1"
          />
        </div>

        {/* PASSWORD */}
        <div className="flex items-center border-b border-gray-400 pb-1.5 focus-within:border-[#38bdf8] transition">
          <Lock size={18} className="text-gray-500 mr-2" />
          <input
            type="password"
            placeholder="Password"
            className="flex-1 bg-transparent text-sm text-gray-800 placeholder-gray-400 outline-none py-1"
          />
        </div>

        {/* CONFIRM PASSWORD */}
        <div className="flex items-center border-b border-gray-400 pb-1.5 focus-within:border-[#38bdf8] transition">
          <Lock size={18} className="text-gray-500 mr-2" />
          <input
            type="password"
            placeholder="Confirm Password"
            className="flex-1 bg-transparent text-sm text-gray-800 placeholder-gray-400 outline-none py-1"
          />
        </div>

        {/* BUTTON */}
        <div className="flex items-center justify-center mt-2">
          <button
            type="submit"
            className="
              bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9]
              text-white font-semibold text-sm tracking-wide
              px-6 py-2 rounded-full
              shadow-md hover:shadow-lg hover:scale-105 
              transition-all duration-300
            "
          >
            Sign Up
          </button>
        </div>
      </form>

      {/* LOGIN LINK */}
      <p className="text-center text-gray-700 text-xs mt-4 font-medium">
        Already have an account?{" "}
        <Link href="/login" className="text-[#38bdf8] font-semibold hover:underline">
          Login
        </Link>
      </p>
    </AuthCard>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import listity from "../assets/listify-logo.png";

function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-200">
      {/* Internal CSS Animations */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }
        .animate-zoom-in {
          animation: zoomIn 0.8s ease-out forwards;
        }
        .animate-slide-right {
          animation: slideRight 1.2s ease-out forwards;
        }
      `}</style>

      {/* Card */}
      <div className="max-w-md w-full mx-auto p-8 border border-gray-200 rounded-2xl bg-white shadow-xl animate-zoom-in">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold animate-slide-right">Login</h1>
          <img src={listity} alt="logo" className="w-12 h-12 animate-fade-in-up" />
        </div>

        <p className="text-gray-600 mt-4 text-lg font-thin animate-fade-in-up">
          Enter your credentials to access your account
        </p>

        {/* Form */}
        <div className="mt-6 space-y-6">
          {/* Email */}
          <div className="animate-fade-in-up">
            <p className="font-semibold text-xl">Email</p>
            <div className="border-2 border-black py-2 px-3 rounded-lg focus-within:ring-2 focus-within:ring-red-400 transition">
              <input
                type="email"
                placeholder="Email..."
                required
                className="w-full outline-none text-[16px]"
              />
            </div>
          </div>

          {/* Password */}
          <div className="animate-fade-in-up">
            <p className="font-semibold text-xl">Password</p>
            <div className="border-2 border-black py-2 px-3 rounded-lg focus-within:ring-2 focus-within:ring-red-400 transition">
              <input
                type="password"
                placeholder="Password..."
                required
                className="w-full outline-none text-[16px]"
              />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-8 animate-fade-in-up">
          <Link
            to="/home"
            className="px-6 py-3 bg-black text-lg text-white font-semibold rounded-lg shadow-md transform transition hover:scale-110 hover:bg-red-600 hover:shadow-lg"
          >
            Login
          </Link>
          <Link
            to="/Signin"
            className="mt-2 text-lg text-black font-semibold hover:text-red-500 transition"
          >
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;

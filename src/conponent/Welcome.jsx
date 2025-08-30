import React from "react";
import { Link } from "react-router-dom";
import listity from "../assets/listify-logo.png";

function Welcome() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-200">
      {/* Internal CSS Styling */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-fade-in-delay {
          animation: fadeIn 1.5s ease-out forwards;
        }
        .animate-slide-down {
          animation: slideDown 1.2s ease-out forwards;
        }
        .animate-bounce-slow {
          animation: bounceSlow 2s infinite;
        }
      `}</style>

      <div className="lg:w-[60%] md:w-[70%] sm:w-[70%]  p-8 border border-gray-200 rounded-2xl bg-white shadow-xl animate-fade-in">
        {/* Logo with bounce */}
        <img
          src={listity}
          className="w-14 h-14 mx-auto animate-bounce-slow"
          alt="Listify Logo"
        />

        {/* Title with slide-in */}
        <h1 className="lg:text-4xl md:text-3xl text-3xl font-bold text-center mt-4 animate-slide-down">
          Welcome to <span className="text-black">Listify</span>
        </h1>

        {/* Description with fade */}
        <p className="text-xl text-gray-600 mt-4 text-center animate-fade-in-delay">
          A simple and intuitive To-Do List app to help you organize tasks, stay
          productive, and manage your daily activities effortlessly.
        </p>

        {/* Buttons with hover animation */}
        <div className="flex justify-center gap-6 mt-10">
          <Link
            to="/Signin"
            className="bg-black text-white py-3 px-6 text-lg font-semibold rounded-xl shadow-md transform transition hover:scale-110 hover:bg-red-600 hover:shadow-lg"
          >
            Signin
          </Link>
          <Link
            to="/Login"
            className="bg-black text-white py-3 px-6 text-lg font-semibold rounded-xl shadow-md transform transition hover:scale-110 hover:bg-red-600 hover:shadow-lg"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Welcome;

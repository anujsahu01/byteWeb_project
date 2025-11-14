




import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-purple-100 flex flex-col">
      
      {/* Header */}
      <Header />

      {/* Content */}
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">

          {/* Gradient Left Panel */}
          <div className="hidden md:flex w-1/2 bg-gradient-to-br from-pink-500 via-fuchsia-500 to-indigo-500 p-10 flex-col justify-center text-white">
            <h2 className="text-3xl font-bold mb-3">Welcome to Your Dashboard</h2>
            <p className="text-sm">
              Manage everything from one place. Track activity, insights, and
              performance with a beautiful UI.
            </p>

            <div className="mt-10 text-xs text-pink-100/80">
              © {new Date().getFullYear()} AppName
            </div>
          </div>

          {/* Right Content Section */}
          <div className="w-full md:w-1/2 bg-white px-10 py-10 flex flex-col justify-center">
            <h1 className="text-3xl font-bold mb-3 text-purple-600">
              Welcome to Home Page
            </h1>

            <p className="text-sm text-gray-600 mb-6">
              This is the homepage of your application.
            </p>

            <div className="flex flex-col gap-3">
              <Link
                to="/about"
                className="rounded-full text-center bg-gradient-to-r from-pink-500 via-fuchsia-500 to-indigo-500 
                  py-3 text-white font-medium shadow hover:opacity-90 transition"
              >
                Go to About Page
              </Link>

              <Link
                to="/signIn"
                className="rounded-full text-center border border-purple-300 py-3 text-purple-600 font-medium hover:bg-purple-50 transition"
              >
                Login
              </Link>
            </div>

            <ul className="mt-8 text-sm text-gray-600 space-y-2">
              <li>• Navigate to About, Login, and more.</li>
              <li>• Clean UI with responsive layout.</li>
              <li>• Matches theme pattern of Sign In page.</li>
            </ul>

          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

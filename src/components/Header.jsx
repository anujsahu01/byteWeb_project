import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="w-full border-b border-slate-200 bg-white">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-xl bg-gradient-to-r from-pink-500 to-indigo-500 
              flex items-center justify-center text-sm font-bold text-white shadow-md">
                        A
                    </div>
                    <span className="text-lg font-semibold tracking-tight text-slate-800">
                        <Link
                            to="/">AppName</Link>

                    </span>
                </div>

                {/* Navigation */}
                <nav className="hidden gap-6 text-sm text-slate-600 md:flex">
                    <a href="#features" className="hover:text-purple-600 transition-colors">
                        Features
                    </a>
                    <a href="#how-it-works" className="hover:text-purple-600 transition-colors">
                        How it works
                    </a>
                    <a href="#contact" className="hover:text-purple-600 transition-colors">
                        Contact
                    </a>
                </nav>

                {/* Buttons */}
                <div className="flex items-center gap-3">
                    <Link
                        to="/signIn"
                        className="text-sm text-purple-600 hover:text-purple-700 transition-colors"
                    >
                        Login
                    </Link>

                    <Link
                        to="/about"
                        className="hidden sm:inline-block rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-indigo-500 
              px-4 py-2 text-sm font-medium text-white shadow-md hover:opacity-90 transition"
                    >
                        Learn more
                    </Link>
                </div>

            </div>
        </header>
    );
}

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
                            to="/">ByteWeb</Link>

                    </span>
                </div>

                {/* Navigation */}
             

                {/* Buttons */}
                <div className="flex items-center gap-3">
                    <Link
                        to="/signIn"
                        className="text-md text-purple-700 hover:text-purple-800 transition-colors"
                    >
                        Login
                    </Link>

                    
                </div>

            </div>
        </header>
    );
}

import React, { useState } from "react";
import login from "../assets/image/login.png";
import GoogleIcon from "../components/GoogleIcon";
import LanguageSelector from "../components/LanguageSelector";
import { Mail, Lock, Instagram, Facebook, Twitter } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("⚠️ Please fill all the fields!", { position: "top-right" });
      return;
    }

    try {
      // Fake API (demo)
      const res = await axios.post("https://jsonplaceholder.typicode.com/posts", {
        email,
        password,
      });

      if (res.status === 201) {
        toast.success("✅ Login Successful!", { position: "top-right" });

        // Reset Form
        setEmail("");
        setPassword("");

        // Navigate Home
        navigate("/");
      } else {
        toast.error("❌ Login Failed!", { position: "top-right" });
      }
    } catch (err) {
      toast.error("❌ Server error, try again!", { position: "top-right" });
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <ToastContainer />

      <div className="w-full max-w-6xl px-4">
        <div className="rounded-[34px] bg-gradient-to-r p-[2px] shadow-[0_24px_60px_rgba(15,23,42,0.45)]">
          <div className="flex flex-col lg:flex-row bg-white rounded-[32px] overflow-hidden">
            
            {/* LEFT IMAGE */}
            <div className="w-full lg:w-1/2 bg-gradient-to-br via-[#c5288f] from-[#2b6ef2] to-[#f9735b] flex items-center justify-center p-10 lg:p-12">
              <div className="relative w-full max-w-md">
                <img src={login} alt="Sign In" className="w-full rounded-3xl opacity-95" />
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/10 rounded-3xl"></div>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="w-full lg:w-1/2 px-8 py-10 lg:px-14 lg:py-14 flex flex-col justify-center">

              <div className="flex justify-end mb-8">
                <LanguageSelector />
              </div>

              <h2 className="text-3xl font-bold text-[#1D4ED8] mb-2">SIGN IN</h2>

              <p className="text-gray-500 mb-8 text-sm">
                Enter your email and password to login
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Email */}
                <div>
                  <label className="text-xs font-medium text-gray-600">Email</label>
                  <div className="relative mt-1">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <Mail size={18} />
                    </span>
                    <input
                      type="email"
                      placeholder="Enter Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 rounded-md border border-gray-200 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label className="text-xs font-medium text-gray-600">Password</label>
                  <div className="relative mt-1">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <Lock size={18} />
                    </span>
                    <input
                      type="password"
                      placeholder="Enter Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 rounded-md border border-gray-200 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3 rounded-md bg-gradient-to-r from-[#f5487f] via-[#c433ff] to-[#2b6ef2] text-white font-semibold text-sm shadow-md hover:opacity-95 transition"
                >
                  SIGN IN
                </button>

                {/* OR */}
                <div className="flex items-center justify-center text-gray-300 text-xs mt-2">
                  <span className="h-px bg-gray-200 w-1/4" />
                  <span className="px-3 text-gray-400">OR</span>
                  <span className="h-px bg-gray-200 w-1/4" />
                </div>

                {/* Social icons */}
                <div className="flex items-center justify-center gap-6 mt-1">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-[#ff2e72] via-[#c433ff] to-[#4364f7] text-white cursor-pointer">
                    <Instagram size={18} />
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-[#ff2e72] via-[#c433ff] to-[#4364f7] text-white cursor-pointer">
                    <Facebook size={18} />
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-[#ff2e72] via-[#c433ff] to-[#4364f7] text-white cursor-pointer">
                    <Twitter size={18} />
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-[#ff2e72] via-[#c433ff] to-[#4364f7] text-white cursor-pointer">
                    <GoogleIcon size={18} />
                  </div>
                </div>
              </form>

              {/* Bottom */}
              <p className="text-[13px] text-center text-gray-500 mt-8">
                Don&apos;t have an account?{" "}
                <Link to="/signUp" className="text-[#1D4ED8] font-medium hover:underline">
                  SIGN UP
                </Link>
              </p>

              <br /><br /><br /><br />

              <p className="text-[14px] text-center text-gray-400 mt-6">
                © 2025. VRISTO All Rights Reserved.
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

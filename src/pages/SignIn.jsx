import React, { useState, useCallback } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
// import Checkbox from "../components/Checkbox";
// import SocialButton from "../components/SocialButton";
// import LanguageSelector from "../components/LanguageSelector";
// import SignInIllustration from "../components/SignInIllustration";
// import GoogleIcon from "../components/GoogleIcon";
import login from "../assets/image/login.png";
import { Mail, Lock, Instagram, Facebook, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const SignIn = ({ onSwitchPage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    console.log("Signing in:", { email, password, rememberMe });
    // Add your real API call here
  }, [email, password, rememberMe]);

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-tr from-[#2b6ef2] via-[#c5288f] to-[#ff6a3d]">
      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row bg-white/10 rounded-3xl backdrop-blur-xl overflow-hidden shadow-2xl">

        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/2 p-10 md:p-14 text-white flex flex-col justify-center items-center">


          <img
            src={login}
            alt="login illustration"
            className="w-110 h-100%"
          />

        </div>

        {/* RIGHT SIDE */}
        <div className="w-full lg:w-1/2 bg-white p-10 lg:p-14 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-blue-600 mb-3">SIGN IN</h2>
          <p className="text-gray-600 mb-8">
            Enter your email and password to login
          </p>

          <div className="flex flex-col space-y-6">
            {/* Email */}
            <div>
              <label className="text-sm text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full mt-1 px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-sm text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full mt-1 px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Newsletter */}
            <label className="flex items-center space-x-2 text-sm">
              <input type="checkbox" className="w-4 h-4" />
              <span>Subscribe to weekly newsletter</span>
            </label>

            {/* Sign In Button */}
            <button className="w-full py-3 rounded-md bg-gradient-to-r from-pink-500 to-blue-600 text-white font-semibold text-lg shadow-md hover:opacity-90 transition">
              SIGN IN
            </button>

            {/* OR */}
            <div className="flex items-center justify-center text-gray-400">
              <span className="border-t w-1/4"></span>
              <span className="px-4">OR</span>
              <span className="border-t w-1/4"></span>
            </div>
            {/* Social Icons */}
            <div className="flex items-center justify-center space-x-6 mt-2 text-xl text-gray-600">
              <i className="fa-brands fa-instagram cursor-pointer hover:text-pink-500"></i>
              <i className="fa-brands fa-facebook cursor-pointer hover:text-blue-600"></i>
              <i className="fa-brands fa-twitter cursor-pointer hover:text-blue-400"></i>
              <i className="fa-brands fa-google cursor-pointer hover:text-red-500"></i>
            </div>
          </div>

          <p className="text-sm text-center text-gray-600 mt-8">
            Don't have an account ? <span className="text-blue-600 cursor-pointer hover:underline">
              <Link to="/signUp">
                SIGN UP
              </Link>
            </span>
          </p>

          <p className="text-xs text-center text-gray-400 mt-10">
            © 2023. VRISTO All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

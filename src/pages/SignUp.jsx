import React, { useState, useCallback } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Checkbox from "../components/Checkbox";
import LanguageSelector from "../components/LanguageSelector";
import GoogleIcon from "../components/GoogleIcon";
import { User, Mail, Lock, Instagram, Facebook, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";

// Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = ({ onSwitchPage }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [subscribe, setSubscribe] = useState(false);

  const handleSubmit = async (e) => {
  e.preventDefault();

  // Validation
  if (!name || !email || !password) {
    toast.error("Please fill all fields!", {
      position: "top-right",
    });
    return;
  }

  try {
    const response = await axios.post(
      "http://localhost:3000/api/auth/signup",
      { name, email, password }
    );

    if (response.status === 200 || response.status === 201) {
      toast.success("Registration Successful!", {
        position: "top-right",
      });

      // FORM RESET
      setName("");
      setEmail("");
      setPassword("");
      setSubscribe(false);
    } else {
      toast.error("Signup failed!", {
        position: "top-right",
      });
    }
  } catch (error) {
    toast.error("Signup failed!", {
      position: "top-right",
    });
  }
};

  return (
    <>
      {/* Toast Container */}
      <ToastContainer />

      <div
        className="
      min-h-screen w-full relative 
      bg-gradient-to-br from-[#E4ECFF] via-[#F6E8FF] to-[#FDE8F4]
      flex items-center justify-center p-4 overflow-hidden
      "
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 20%, rgba(204, 150, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 90% 80%, rgba(255, 150, 200, 0.1) 0%, transparent 50%)",
          fontFamily: "Inter, sans-serif",
        }}
      >
        {/* Background Blurs */}
        <div className="absolute top-[40px] right-[100px] w-[260px] h-[260px] bg-gradient-to-br from-[#A78BFA] to-[#EC4899] opacity-30 blur-[120px] rounded-full"></div>
        <div className="absolute left-[120px] bottom-[120px] w-[300px] h-[300px] bg-gradient-to-tl from-[#F472B6] to-[#818CF8] opacity-30 blur-[130px] rounded-full"></div>

        {/* CARD */}
        <div
          className="
        w-full max-w-sm sm:max-w-md lg:max-w-[480px] 
        bg-white/70 backdrop-blur-2xl
        shadow-[0_20px_50px_rgba(0,0,0,0.1)]
        rounded-[24px] p-8 sm:p-10 lg:p-12
        border border-white/50
        relative z-10 
        "
        >
          {/* Language Selector */}
          <div className="flex justify-end mb-8">
            <LanguageSelector />
          </div>

          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-[30px] sm:text-[34px] font-extrabold text-[#4F46E5] tracking-wide">
              SIGN UP
            </h1>
            <p className="text-[15px] text-[#6B7280] mt-1">
              Enter your email and password to register
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-[14px] font-medium text-[#374151] mb-[8px]">
                Name
              </label>
              <Input
                type="text"
                placeholder="Enter Name"
                icon={User}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-[14px] font-medium text-[#374151] mb-[8px]">
                Email
              </label>
              <Input
                type="email"
                placeholder="Enter Email"
                icon={Mail}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-[14px] font-medium text-[#374151] mb-[8px]">
                Password
              </label>
              <Input
                type="password"
                placeholder="Enter Password"
                icon={Lock}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Checkbox */}
            <div className="pt-2">
              <Checkbox
                label="Subscribe to weekly newsletter"
                checked={subscribe}
                onChange={(e) => setSubscribe(e.target.checked)}
              />
            </div>

            {/* Submit Button */}
            <div className="pt-3">
              <Button type="submit">SIGN UP</Button>
            </div>
          </form>

          {/* Divider */}
          <div className="mt-8">
            <div className="relative flex items-center">
              <div className="flex-grow border-t border-[#E5E7EB]" />
              <span className="px-4 text-[14px] bg-white/70 text-[#9CA3AF] backdrop-blur-sm">
                OR
              </span>
              <div className="flex-grow border-t border-[#E5E7EB]" />
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-6 mt-1">
            <div className="w-10 h-10 flex items-center justify-center rounded-full 
      bg-gradient-to-br from-[#ff2e72] via-[#c433ff] to-[#4364f7] 
      text-white cursor-pointer hover:opacity-90 transition">
              <Instagram size={18} />
            </div>

            <div className="w-10 h-10 flex items-center justify-center rounded-full 
      bg-gradient-to-br from-[#ff2e72] via-[#c433ff] to-[#4364f7] 
      text-white cursor-pointer hover:opacity-90 transition">
              <Facebook size={18} />
            </div>

            <div className="w-10 h-10 flex items-center justify-center rounded-full 
      bg-gradient-to-br from-[#ff2e72] via-[#c433ff] to-[#4364f7] 
      text-white cursor-pointer hover:opacity-90 transition">
              <Twitter size={18} />
            </div>

            <div className="w-10 h-10 flex items-center justify-center rounded-full 
      bg-gradient-to-br from-[#ff2e72] via-[#c433ff] to-[#4364f7] 
      text-white cursor-pointer hover:opacity-90 transition">
              <GoogleIcon size={18} />
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-[14px] text-[#6B7280]">
              Already have an account?{" "}
              <Link
                to="/signIn"
                className="text-[#4F46E5] font-semibold hover:underline"
              >
                SIGN IN
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;

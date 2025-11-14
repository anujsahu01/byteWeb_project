import React, { useState, useCallback } from "react";
import login from "../assets/image/login.png";
import GoogleIcon from "../components/GoogleIcon";
import { Mail, Lock, Instagram, Facebook, Twitter } from "lucide-react";

const SignIn = ({ onSwitchPage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [subscribe, setSubscribe] = useState(false);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log("Signing in:", { email, password, subscribe });
      // TODO: call real API here
    },
    [email, password, subscribe]
  );

  return (
    // <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-[#f5487f] via-[#c433ff] to-[#4364f7]">
    <div className="min-h-screen flex items-center justify-center">
      {/* Outer padding so card doesn’t touch edges */}
      <div className="w-full max-w-6xl px-4">
        {/* Gradient border around card */}
        {/* <div className="rounded-[34px] bg-gradient-to-r from-[#f5487f] via-[#c433ff] to-[#4364f7] p-[2px] shadow-[0_24px_60px_rgba(15,23,42,0.45)]"> */}
        <div className="rounded-[34px] bg-gradient-to-r p-[2px] shadow-[0_24px_60px_rgba(15,23,42,0.45)]">
          {/* Actual card */}
          <div className="flex flex-col lg:flex-row bg-white rounded-[32px] overflow-hidden">
            {/* LEFT SIDE – gradient + image */}
            <div className="w-full lg:w-1/2 bg-gradient-to-br via-[#c5288f]  from-[#2b6ef2] to-[#f9735b] flex items-center justify-center p-10 lg:p-12">
            {/* <div className="w-full lg:w-1/2 bg-gradient-to-br flex items-center justify-center p-10 lg:p-12"> */}
              <img
                src={login}
                alt="Sign in illustration"
                className="w-full max-w-md"
              />
            </div>

            {/* RIGHT SIDE – form */}
            <div className="w-full lg:w-1/2 px-8 py-10 lg:px-14 lg:py-14 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-[#1D4ED8] mb-2">
                SIGN IN
              </h2>
              <p className="text-gray-500 mb-8 text-sm">
                Enter your email and password to login
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email */}
                <div>
                  <label className="text-xs font-medium text-gray-600">
                    Email
                  </label>
                  <div className="relative mt-1">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <Mail size={18} />
                    </span>
                    <input
                      type="email"
                      placeholder="Enter Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 rounded-md border border-gray-200 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label className="text-xs font-medium text-gray-600">
                    Password
                  </label>
                  <div className="relative mt-1">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <Lock size={18} />
                    </span>
                    <input
                      type="password"
                      placeholder="Enter Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 rounded-md border border-gray-200 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Newsletter checkbox */}
                <label className="flex items-center gap-2 text-xs text-gray-600">
                  <input
                    type="checkbox"
                    checked={subscribe}
                    onChange={(e) => setSubscribe(e.target.checked)}
                    className="w-4 h-4 rounded border-gray-300"
                  />
                  <span>Subscribe to weekly newsletter</span>
                </label>

                {/* Sign in button */}
                <button
                  type="submit"
                  className="w-full py-3 rounded-md bg-gradient-to-r from-[#f5487f] via-[#c433ff] to-[#2b6ef2] text-white font-semibold text-sm shadow-md tracking-wide hover:opacity-95 transition"
                >
                  SIGN IN
                </button>

                {/* OR divider */}
                <div className="flex items-center justify-center text-gray-300 text-xs mt-2">
                  <span className="h-px bg-gray-200 w-1/4" />
                  <span className="px-3 text-gray-400">OR</span>
                  <span className="h-px bg-gray-200 w-1/4" />
                </div>

                {/* Social icons (optional, like original design) */}
                <div className="flex items-center justify-center gap-6 mt-1">

  {/* Instagram */}
  <div className="w-10 h-10 flex items-center justify-center rounded-full 
      bg-gradient-to-br from-[#ff2e72] via-[#c433ff] to-[#4364f7] 
      text-white cursor-pointer hover:opacity-90 transition">
    <Instagram size={18} />
  </div>

  {/* Facebook */}
  <div className="w-10 h-10 flex items-center justify-center rounded-full 
      bg-gradient-to-br from-[#ff2e72] via-[#c433ff] to-[#4364f7] 
      text-white cursor-pointer hover:opacity-90 transition">
    <Facebook size={18} />
  </div>

  {/* Twitter */}
  <div className="w-10 h-10 flex items-center justify-center rounded-full 
      bg-gradient-to-br from-[#ff2e72] via-[#c433ff] to-[#4364f7] 
      text-white cursor-pointer hover:opacity-90 transition">
    <Twitter size={18} />
  </div>

  {/* Google */}
  <div className="w-10 h-10 flex items-center justify-center rounded-full 
      bg-gradient-to-br from-[#ff2e72] via-[#c433ff] to-[#4364f7] 
      text-white cursor-pointer hover:opacity-90 transition">
    <GoogleIcon size={18} />
  </div>

</div>
              </form>

              {/* Footer text */}
              <p className="text-[13px] text-center text-gray-500 mt-8">
                Don&apos;t have an account ?{" "}
                <button
                  type="button"
                  onClick={() => onSwitchPage && onSwitchPage("signup")}
                  className="text-[#1D4ED8] font-medium hover:underline"
                >
                   <Link to="Signup"> SIGN UP</Link>
                </button>
              </p>

              <p className="text-[10px] text-center text-gray-400 mt-6">
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

// size to thk h but small jaise lg rhe bjh se
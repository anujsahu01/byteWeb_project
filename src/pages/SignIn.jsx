import React, { useState, useCallback } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
// import Checkbox from "../components/Checkbox";
// import SocialButton from "../components/SocialButton";
// import LanguageSelector from "../components/LanguageSelector";
// import SignInIllustration from "../components/SignInIllustration";
// import GoogleIcon from "../components/GoogleIcon";
import { Mail, Lock, Instagram, Facebook, Twitter } from "lucide-react";

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
    <div 
      className="min-h-screen w-full bg-gradient-to-br from-[#E0E7FF] via-[#F3E8FF] to-[#FCE7F3] flex items-center justify-center p-4"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-stretch bg-white/70 shadow-2xl rounded-2xl overflow-hidden min-h-[600px] border border-white/50 backdrop-blur-md">

        {/* LEFT PANEL */}
        <div 
          className="w-full lg:w-5/12 relative flex items-center justify-center p-8 sm:p-12 lg:p-6 min-h-[300px]" 
          style={{
            background: 'linear-gradient(135deg, #FF0077 0%, #8000FF 100%)',
            clipPath: 'polygon(0% 0%, 90% 0%, 100% 100%, 0% 100%)',
            zIndex: 10,
          }}
        >
          {/* <SignInIllustration /> */}
        </div>

        {/* RIGHT PANEL */}
        <div className="w-full lg:w-7/12 flex flex-col justify-center p-8 sm:p-12 lg:p-16 relative z-0">
          {/* <div className="flex justify-end mb-8 absolute top-8 right-8">
            <LanguageSelector />
          </div> */}

          <div className="max-w-[380px] w-full mx-auto">
            <h2 className="text-[32px] font-bold text-[#4F46E5] text-center mt-12 lg:mt-0">SIGN IN</h2>
            <p className="text-[14px] text-center text-gray-500 mb-8">
              Enter your email and password to login
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <Input
                  type="email"
                  placeholder="Enter email"
                  icon={Mail}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <Input
                  type="password"
                  placeholder="Enter password"
                  icon={Lock}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="flex justify-end mt-2">
                    <a href="#" className="text-xs text-gray-500 hover:text-[#4F46E5] hover:underline">
                        Forgot Password?
                    </a>
                </div>
              </div>

              {/* <div className="flex justify-between items-center">
                <Checkbox
                  label="Remember me"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
              </div> */}

              <div className="pt-3">
                <Button type="submit">SIGN IN</Button>
              </div>
            </form>

            <div className="my-8 flex items-center">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-3 text-gray-400 text-sm">OR</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            {/* <div className="flex justify-center gap-5">
              <SocialButton icon={Instagram} ariaLabel="Instagram" className="text-[#E1306C] hover:shadow-[0_0_15px_rgba(255,0,122,0.6)]"/>
              <SocialButton icon={Facebook} ariaLabel="Facebook" className="text-[#1877F2] hover:shadow-[0_0_15px_rgba(0,115,255,0.6)]"/>
              <SocialButton icon={Twitter} ariaLabel="Twitter" className="text-[#1DA1F2] hover:shadow-[0_0_15px_rgba(29,161,242,0.7)]"/>
              <SocialButton svgIcon={GoogleIcon} ariaLabel="Google" className="hover:shadow-[0_0_15px_rgba(255,60,0,0.6)]"/>
            </div> */}

            <p className="mt-8 text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); onSwitchPage('signup'); }} 
                className="text-[#4F46E5] font-semibold hover:underline"
              >
                SIGN UP
              </a>
            </p>

            <p className="mt-6 text-center text-xs text-gray-400">
              © 2023. VRISTO All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

// import { useState, useCallback } from "react";
// import { User, Mail, Lock, Instagram, Facebook, Twitter, ChevronDown } from "lucide-react";

// // --- START: Reusable Components ---

// /**
//  * Custom Button Component
//  */
// const Button = ({ children, onClick, type = 'button', fullWidth = true }) => {
//   return (
//     <button
//       type={type}
//       onClick={onClick}
//       className={`h-[48px] bg-gradient-to-r from-[#D946A6] to-[#6366F1] text-white text-[16px] font-semibold rounded-[8px] hover:opacity-90 transition-opacity transform hover:scale-[1.005] active:scale-[0.99] ${
//         fullWidth ? 'w-full' : 'px-[32px]'
//       } shadow-lg shadow-[#6366F1]/40`}
//     >
//       {children}
//     </button>
//   );
// };

// /**
//  * Custom Input Component
//  */
// const Input = ({ type = 'text', placeholder, icon: Icon, value, onChange }) => {
//   return (
//     <div className="relative w-full">
//       {Icon && (
//         <div className="absolute left-[16px] top-1/2 -translate-y-1/2 text-[#9CA3AF]">
//           <Icon size={20} />
//         </div>
//       )}
//       <input
//         type={type}
//         placeholder={placeholder}
//         value={value}
//         onChange={onChange}
//         className={`w-full h-[48px] bg-white border border-[#E5E7EB] rounded-[8px] text-[14px] font-normal text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#6366F1] focus:ring-1 focus:ring-[#6366F1] transition-colors ${
//           Icon ? 'pl-[48px]' : 'pl-[16px]'
//         } pr-[16px]`}
//       />
//     </div>
//   );
// };

// /**
//  * Custom Checkbox Component
//  */
// const Checkbox = ({ label, checked, onChange }) => {
//   return (
//     <label className="flex items-center space-x-2 cursor-pointer select-none">
//       <input
//         type="checkbox"
//         checked={checked}
//         onChange={onChange}
//         className="form-checkbox h-4 w-4 text-[#6366F1] rounded border-gray-300 focus:ring-[#6366F1] transition duration-150 ease-in-out"
//       />
//       <span className="text-sm text-gray-600">{label}</span>
//     </label>
//   );
// };

// /**
//  * Custom Social Button Component
//  */
// const SocialButton = ({ icon: Icon, ariaLabel, onClick, className, svgIcon: SvgIcon }) => {
//   return (
//     <button
//       onClick={onClick}
//       aria-label={ariaLabel}
//       className={`
//         w-[40px] h-[40px] rounded-full bg-white 
//         border-2 border-[#E5E7EB] 
//         flex items-center justify-center 
//         transition-all duration-300 
//         hover:scale-110
//         shadow-md
//         ${className}
//       `}
//     >
//       {SvgIcon ? <SvgIcon /> : <Icon size={20} />}
//     </button>
//   );
// };

// /**
//  * Google SVG Icon (reused from original file)
//  */
// const GoogleIcon = () => (
//   <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
//     <path
//       d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
//       fill="#4285F4"
//     />
//     <path
//       d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
//       fill="#34A853"
//     />
//     <path
//       d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
//       fill="#FBBC05"
//     />
//     <path
//       d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
//       fill="#EA4335"
//     />
//   </svg>
// );


// /**
//  * Custom Language Selector Component
//  */
// const LanguageSelector = () => {
//   return (
//     <div className="flex items-center space-x-1 p-2 bg-white rounded-lg shadow-sm border border-gray-200 cursor-pointer hover:bg-gray-50 transition">
//       <span className="text-sm font-medium text-gray-700">EN</span>
//       <ChevronDown size={16} className="text-gray-500" />
//     </div>
//   );
// };


// /**
//  * Mock Illustration Component for Sign In (Based on Screenshot 2)
//  */
// const SignInIllustration = () => {
//     return (
//         <div className="relative flex flex-col items-center justify-center p-6 text-white text-center">
//             {/* Logo */}
//             <div className="absolute top-8 left-12 flex items-center">
//                 {/* Mock Logo Text */}
//                 <span className="text-4xl font-extrabold tracking-widest italic font-sans">
//                     tape<span className="font-normal text-pink-300">ct</span>
//                 </span>
//             </div>
            
//             <div className="mt-20 w-[300px] h-[300px] flex items-center justify-center">
//                 {/* Simple SVG Illustration of sign-in process */}
//                 <svg viewBox="0 0 350 350" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
//                     {/* Background elements */}
//                     <rect x="20" y="100" width="200" height="180" rx="15" fill="#f7f7f7" stroke="#e0e0e0" strokeWidth="2" />
//                     {/* Screen/Window */}
//                     <rect x="30" y="110" width="180" height="160" rx="10" fill="white" stroke="#e0e0e0" strokeWidth="1" />
                    
//                     {/* Login Form Placeholder */}
//                     <rect x="50" y="140" width="140" height="20" rx="5" fill="#e0e7ff" />
//                     <circle cx="65" cy="150" r="8" fill="#4f46e5" />
//                     <text x="80" y="153" fontSize="10" fill="#4f46e5" fontFamily="Inter">Username</text>
                    
//                     <rect x="50" y="180" width="140" height="20" rx="5" fill="#e0e7ff" />
//                     <circle cx="65" cy="190" r="8" fill="#4f46e5" />
//                     <text x="80" y="193" fontSize="10" fill="#4f46e5" fontFamily="Inter">Password</text>
                    
//                     {/* Sign In Button */}
//                     <rect x="50" y="220" width="140" height="30" rx="8" fill="#4f46e5" />
//                     <text x="120" y="240" fontSize="14" fill="white" textAnchor="middle" fontWeight="bold" fontFamily="Inter">Sign In</text>

//                     {/* Shield Icon */}
//                     <circle cx="170" cy="100" r="30" fill="#4f46e5" />
//                     <path d="M170 80 L190 110 L170 140 L150 110 Z" fill="white" />
//                     <circle cx="170" cy="100" r="15" fill="white" />
//                     <polyline points="160,105 170,115 185,95" stroke="#4f46e5" strokeWidth="3" fill="none" strokeLinecap="round"/>

//                     {/* Woman Illustration */}
//                     <circle cx="280" cy="200" r="50" fill="#f59e0b" /> {/* Head Placeholder */}
//                     <rect x="250" y="250" width="60" height="100" fill="#ec4899" /> {/* Body Placeholder */}
//                     <path d="M250 250 Q 280 200, 310 250" fill="#ec4899" />
//                     <circle cx="280" cy="170" r="20" fill="#6366f1" /> {/* Hair/Hat */}
//                     <circle cx="280" cy="200" r="10" fill="#fff" /> {/* Face highlight */}
//                     <path d="M220 250 L250 280 L220 300" stroke="#f59e0b" strokeWidth="10" strokeLinecap="round" fill="none" /> {/* Hand */}

//                     {/* Line connecting the hand to the device */}
//                     <path d="M210 250 C 230 250, 240 250, 245 230" stroke="#6366f1" strokeWidth="4" fill="none" strokeLinecap="round" />
                    
//                 </svg>
//             </div>
//             <p className="mt-8 text-lg font-medium tracking-wide">
//                 Secure access to your personal dashboard.
//             </p>
//         </div>
//     );
// };

// // --- END: Reusable Components ---


// // --- START: Sign Up Component (Screenshot 1 Style) ---

// const SignUp = ({ onSwitchPage }) => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [subscribe, setSubscribe] = useState(false);

//   const handleSubmit = useCallback((e) => {
//     e.preventDefault();
//     // Simulate signup logic
//     console.log("Signing up:", { name, email, password, subscribe });
//     // In a real app, this would call an API
//   }, [name, email, password, subscribe]);

//   return (
//     <div
//       className="
//       min-h-screen w-full relative 
//       bg-gradient-to-br from-[#E4ECFF] via-[#F6E8FF] to-[#FDE8F4]
//       flex items-center justify-center p-4 overflow-hidden
//       "
//       style={{
//           // Adding a subtle, world map like texture to the background for visual interest
//           backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(204, 150, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 90% 80%, rgba(255, 150, 200, 0.1) 0%, transparent 50%)',
//           fontFamily: 'Inter, sans-serif'
//       }}
//     >
//       {/* Decorative Background Blurs - Subtle and soft */}
//       <div className="absolute top-[40px] right-[100px] w-[260px] h-[260px] bg-gradient-to-br from-[#A78BFA] to-[#EC4899] opacity-30 blur-[120px] rounded-full"></div>
//       <div className="absolute left-[120px] bottom-[120px] w-[300px] h-[300px] bg-gradient-to-tl from-[#F472B6] to-[#818CF8] opacity-30 blur-[130px] rounded-full"></div>

//       {/* CARD (Frosted Glass Effect) */}
//       <div
//         className="
//         w-full max-w-sm sm:max-w-md lg:max-w-[480px] 
//         bg-white/70 backdrop-blur-2xl
//         shadow-[0_20px_50px_rgba(0,0,0,0.1)]
//         rounded-[24px] p-8 sm:p-10 lg:p-12
//         border border-white/50
//         relative z-10 
//         "
//       >
//         {/* Language Selector */}
//         <div className="flex justify-end mb-8">
//           <LanguageSelector />
//         </div>

//         {/* Header */}
//         <div className="mb-8 text-center">
//           <h1 className="text-[30px] sm:text-[34px] font-extrabold text-[#4F46E5] tracking-wide">
//             SIGN UP
//           </h1>
//           <p className="text-[15px] text-[#6B7280] mt-1">
//             Enter your email and password to register
//           </p>
//         </div>

//         {/* FORM */}
//         <form onSubmit={handleSubmit} className="space-y-5">
//           {/* Name */}
//           <div>
//             <label className="block text-[14px] font-medium text-[#374151] mb-[8px]">
//               Name
//             </label>
//             <Input
//               type="text"
//               placeholder="Enter Name"
//               icon={User}
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block text-[14px] font-medium text-[#374151] mb-[8px]">
//               Email
//             </label>
//             <Input
//               type="email"
//               placeholder="Enter Email"
//               icon={Mail}
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>

//           {/* Password */}
//           <div>
//             <label className="block text-[14px] font-medium text-[#374151] mb-[8px]">
//               Password
//             </label>
//             <Input
//               type="password"
//               placeholder="Enter Password"
//               icon={Lock}
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>

//           {/* Checkbox */}
//           <div className="pt-2">
//             <Checkbox
//               label="Subscribe to weekly newsletter"
//               checked={subscribe}
//               onChange={(e) => setSubscribe(e.target.checked)}
//             />
//           </div>

//           {/* Submit Button */}
//           <div className="pt-3">
//             <Button type="submit">SIGN UP</Button>
//           </div>
//         </form>

//         {/* Divider */}
//         <div className="mt-8">
//           <div className="relative flex items-center">
//             <div className="flex-grow border-t border-[#E5E7EB]" />
//             <span className="px-4 text-[14px] bg-white/70 text-[#9CA3AF] backdrop-blur-sm">
//               OR
//             </span>
//             <div className="flex-grow border-t border-[#E5E7EB]" />
//           </div>
//         </div>

//         {/* SOCIAL ICONS */}
//         <div className="mt-6 flex justify-center gap-4">
//           <SocialButton
//             icon={Instagram}
//             ariaLabel="Instagram"
//             className="text-[#E1306C] hover:shadow-[0_0_15px_rgba(255,0,122,0.6)]"
//           />
//           <SocialButton
//             icon={Facebook}
//             ariaLabel="Facebook"
//             className="text-[#1877F2] hover:shadow-[0_0_15px_rgba(0,115,255,0.6)]"
//           />
//           <SocialButton
//             icon={Twitter}
//             ariaLabel="Twitter"
//             className="text-[#1DA1F2] hover:shadow-[0_0_15px_rgba(29,161,242,0.7)]"
//           />
//           <SocialButton
//             svgIcon={GoogleIcon}
//             ariaLabel="Google"
//             className="hover:shadow-[0_0_15px_rgba(255,60,0,0.6)]"
//           />
//         </div>

//         {/* Footer */}
//         <div className="mt-8 text-center">
//           <p className="text-[14px] text-[#6B7280]">
//             Already have an account?{" "}
//             <a
//               href="#"
//               onClick={(e) => { e.preventDefault(); onSwitchPage('signin'); }}
//               className="text-[#4F46E5] font-semibold hover:underline"
//             >
//               SIGN IN
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// // --- END: Sign Up Component ---


// // --- START: Sign In Component (Screenshot 2 Style) ---

// const SignIn = ({ onSwitchPage }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [rememberMe, setRememberMe] = useState(false); // Changed to rememberMe for sign in context

//   const handleSubmit = useCallback((e) => {
//     e.preventDefault();
//     // Simulate signin logic
//     console.log("Signing in:", { email, password, rememberMe });
//     // In a real app, this would call an API
//   }, [email, password, rememberMe]);

//   return (
//     <div 
//         className="min-h-screen w-full bg-gradient-to-br from-[#E0E7FF] via-[#F3E8FF] to-[#FCE7F3] flex items-center justify-center p-4"
//         style={{ fontFamily: 'Inter, sans-serif' }}
//     >
//       <div className="w-full max-w-6xl flex flex-col lg:flex-row items-stretch bg-white/70 shadow-2xl rounded-2xl overflow-hidden min-h-[600px] border border-white/50 backdrop-blur-md">

//         {/* LEFT PANEL - Illustration & Gradient */}
//         <div 
//           className="w-full lg:w-5/12 relative flex items-center justify-center p-8 sm:p-12 lg:p-6 min-h-[300px] lg:min-h-[auto]" 
//           style={{
//             background: 'linear-gradient(135deg, #FF0077 0%, #8000FF 100%)',
//             // Custom shape for the left panel (Trapezoid/Diagonal cut on the right)
//             clipPath: 'polygon(0% 0%, 90% 0%, 100% 100%, 0% 100%)',
//             zIndex: 10,
//           }}
//         >
//           <SignInIllustration />
//         </div>

//         {/* RIGHT PANEL - Form */}
//         <div className="w-full lg:w-7/12 flex flex-col justify-center p-8 sm:p-12 lg:p-16 relative z-0">
          
//           {/* Language Selector */}
//           <div className="flex justify-end mb-8 absolute top-8 right-8">
//             <LanguageSelector />
//           </div>

//           <div className="max-w-[380px] w-full mx-auto">
//             <h2 className="text-[32px] font-bold text-[#4F46E5] text-center mt-12 lg:mt-0">SIGN IN</h2>
//             <p className="text-[14px] text-center text-gray-500 mb-8">
//               Enter your email and password to login
//             </p>

//             <form onSubmit={handleSubmit} className="space-y-5">
//               {/* Email */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
//                 <Input
//                   type="email"
//                   placeholder="Enter email"
//                   icon={Mail}
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </div>

//               {/* Password */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
//                 <Input
//                   type="password"
//                   placeholder="Enter password"
//                   icon={Lock}
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <div className="flex justify-end mt-2">
//                     <a href="#" className="text-xs text-gray-500 hover:text-[#4F46E5] hover:underline">
//                         Forgot Password?
//                     </a>
//                 </div>
//               </div>

//               <div className="flex justify-between items-center">
//                 <Checkbox
//                   label="Remember me"
//                   checked={rememberMe}
//                   onChange={(e) => setRememberMe(e.target.checked)}
//                 />
//               </div>

//               <div className="pt-3">
//                 <Button type="submit">SIGN IN</Button>
//               </div>
//             </form>

//             {/* OR LINE */}
//             <div className="my-8 flex items-center">
//               <div className="flex-grow border-t border-gray-300"></div>
//               <span className="mx-3 text-gray-400 text-sm">OR</span>
//               <div className="flex-grow border-t border-gray-300"></div>
//             </div>

//             {/* SOCIAL ICONS */}
//             <div className="flex justify-center gap-5">
//               <SocialButton
//                 icon={Instagram}
//                 ariaLabel="Instagram"
//                 className="text-[#E1306C] hover:shadow-[0_0_15px_rgba(255,0,122,0.6)]"
//               />
//               <SocialButton
//                 icon={Facebook}
//                 ariaLabel="Facebook"
//                 className="text-[#1877F2] hover:shadow-[0_0_15px_rgba(0,115,255,0.6)]"
//               />
//               <SocialButton
//                 icon={Twitter}
//                 ariaLabel="Twitter"
//                 className="text-[#1DA1F2] hover:shadow-[0_0_15px_rgba(29,161,242,0.7)]"
//               />
//               <SocialButton
//                 svgIcon={GoogleIcon}
//                 ariaLabel="Google"
//                 className="hover:shadow-[0_0_15px_rgba(255,60,0,0.6)]"
//               />
//             </div>

//             {/* SIGN UP LINK */}
//             <p className="mt-8 text-center text-sm text-gray-600">
//               Don't have an account?{" "}
//               <a 
//                 href="#" 
//                 onClick={(e) => { e.preventDefault(); onSwitchPage('signup'); }} 
//                 className="text-[#4F46E5] font-semibold hover:underline"
//               >
//                 SIGN UP
//               </a>
//             </p>

//             <p className="mt-6 text-center text-xs text-gray-400">
//               © 2023. VRISTO All Rights Reserved.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // --- END: Sign In Component ---


// // --- Main Application Component ---

// export default function App() {
//   const [page, setPage] = useState('signin'); // Default to Sign In page as per second image

//   return (
//     <div className="min-h-screen">
//       {page === 'signin' ? (
//         <SignIn onSwitchPage={setPage} />
//       ) : (
//         <SignUp onSwitchPage={setPage} />
//       )}
//     </div>
//   );
// }





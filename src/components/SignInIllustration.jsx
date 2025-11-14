const SignInIllustration = () => {
    return (
        <div className="relative flex flex-col items-center justify-center p-6 text-white text-center">
            {/* Logo */}
            <div className="absolute top-8 left-12 flex items-center">
                {/* Mock Logo Text */}
                <span className="text-4xl font-extrabold tracking-widest italic font-sans">
                    tape<span className="font-normal text-pink-300">ct</span>
                </span>
            </div>
            
            <div className="mt-20 w-[300px] h-[300px] flex items-center justify-center">
                {/* Simple SVG Illustration of sign-in process */}
                <svg viewBox="0 0 350 350" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    {/* Background elements */}
                    <rect x="20" y="100" width="200" height="180" rx="15" fill="#f7f7f7" stroke="#e0e0e0" strokeWidth="2" />
                    {/* Screen/Window */}
                    <rect x="30" y="110" width="180" height="160" rx="10" fill="white" stroke="#e0e0e0" strokeWidth="1" />
                    
                    {/* Login Form Placeholder */}
                    <rect x="50" y="140" width="140" height="20" rx="5" fill="#e0e7ff" />
                    <circle cx="65" cy="150" r="8" fill="#4f46e5" />
                    <text x="80" y="153" fontSize="10" fill="#4f46e5" fontFamily="Inter">Username</text>
                    
                    <rect x="50" y="180" width="140" height="20" rx="5" fill="#e0e7ff" />
                    <circle cx="65" cy="190" r="8" fill="#4f46e5" />
                    <text x="80" y="193" fontSize="10" fill="#4f46e5" fontFamily="Inter">Password</text>
                    
                    {/* Sign In Button */}
                    <rect x="50" y="220" width="140" height="30" rx="8" fill="#4f46e5" />
                    <text x="120" y="240" fontSize="14" fill="white" textAnchor="middle" fontWeight="bold" fontFamily="Inter">Sign In</text>

                    {/* Shield Icon */}
                    <circle cx="170" cy="100" r="30" fill="#4f46e5" />
                    <path d="M170 80 L190 110 L170 140 L150 110 Z" fill="white" />
                    <circle cx="170" cy="100" r="15" fill="white" />
                    <polyline points="160,105 170,115 185,95" stroke="#4f46e5" strokeWidth="3" fill="none" strokeLinecap="round"/>

                    {/* Woman Illustration */}
                    <circle cx="280" cy="200" r="50" fill="#f59e0b" /> {/* Head Placeholder */}
                    <rect x="250" y="250" width="60" height="100" fill="#ec4899" /> {/* Body Placeholder */}
                    <path d="M250 250 Q 280 200, 310 250" fill="#ec4899" />
                    <circle cx="280" cy="170" r="20" fill="#6366f1" /> {/* Hair/Hat */}
                    <circle cx="280" cy="200" r="10" fill="#fff" /> {/* Face highlight */}
                    <path d="M220 250 L250 280 L220 300" stroke="#f59e0b" strokeWidth="10" strokeLinecap="round" fill="none" /> {/* Hand */}

                    {/* Line connecting the hand to the device */}
                    <path d="M210 250 C 230 250, 240 250, 245 230" stroke="#6366f1" strokeWidth="4" fill="none" strokeLinecap="round" />
                    
                </svg>
            </div>
            <p className="mt-8 text-lg font-medium tracking-wide">
                Secure access to your personal dashboard.
            </p>
        </div>
    );
};

export default SignInIllustration;
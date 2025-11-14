// This component provides the main card structure, including the illustrative left panel and the form right panel.

const FormCard = ({ children, title, logoText, illustrationSrc, footerText, toggleText, onToggle }) => {
  return (
    // --- Main Card Wrapper (Update values based on Figma) ---
    // Approximated width/height for a large desktop card
    <div className="flex w-[900px] h-[600px] bg-white rounded-[12px] shadow-card overflow-hidden">
      
      {/* Left Illustrative Panel - Login Page Design */}
      {/* NOTE: The left panel changes its content/design based on SignIn vs SignUp */}
      <div className="w-[45%] bg-left-gradient relative flex flex-col justify-center items-center p-[40px] text-white">
        
        {/* Logo Text */}
        <div className="absolute top-[40px] left-[40px] text-[32px] font-bold tracking-wider">
          {logoText}
        </div>

        {/* Illustration */}
        <div className="mt-[20px]">
            {/* The image is one of the files you uploaded. Use the appropriate one based on 'title' */}
            <img 
                src={illustrationSrc} 
                alt="Authentication Illustration" 
                className="w-full h-auto object-contain max-h-[400px]"
            />
        </div>

      </div>

      {/* Right Form Panel */}
      <div className="w-[55%] relative p-[60px] flex flex-col justify-center">
        {children}
        
        {/* Copyright Text */}
        <div className="absolute bottom-[20px] left-[50%] transform -translate-x-1/2 text-[12px] font-normal text-gray-500">
          © 2023, VRESTO All Rights Reserved.
        </div>

        {/* Toggle Link (Don't have an account? SIGN UP) */}
        <div className="absolute bottom-[60px] left-[50%] transform -translate-x-1/2 text-[14px] text-center">
          {footerText} 
          <span 
            className="text-text-light-purple font-semibold ml-[4px] cursor-pointer"
            onClick={onToggle}
          >
            {toggleText}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FormCard;
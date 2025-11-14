
const SocialButton = ({ icon: Icon, ariaLabel, onClick, className, svgIcon: SvgIcon }) => {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className={`
        w-[40px] h-[40px] rounded-full bg-white 
        border-2 border-[#E5E7EB] 
        flex items-center justify-center 
        transition-all duration-300 
        hover:scale-110
        shadow-md
        ${className}
      `}
    >
      {SvgIcon ? <SvgIcon /> : <Icon size={20} />}
    </button>
  );
};

export default SocialButton;
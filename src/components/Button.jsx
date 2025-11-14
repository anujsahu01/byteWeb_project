const Button = ({ children, onClick, type = 'button', fullWidth = true }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`h-[48px] bg-gradient-to-r from-[#D946A6] to-[#6366F1] text-white text-[16px] font-semibold rounded-[8px] hover:opacity-90 transition-opacity transform hover:scale-[1.005] active:scale-[0.99] ${
        fullWidth ? 'w-full' : 'px-[32px]'
      } shadow-lg shadow-[#6366F1]/40`}
    >
      {children}
    </button>
  );
};

export default Button;
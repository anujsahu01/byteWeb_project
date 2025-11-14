const PrimaryButton = ({ text }) => {
  return (
    // --- Pixel-Perfect Styling (Update values based on Figma) ---
    // The button has a fixed height and a gradient background
    <button
      type="submit"
      className="w-full h-[52px] rounded-[8px] text-white text-[16px] font-semibold 
                 bg-button-gradient transition-opacity hover:opacity-90 
                 shadow-lg shadow-pink-500/50 mt-[16px]" // Approximated shadow
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
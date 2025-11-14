const Input = ({ type = 'text', placeholder, icon: Icon, value, onChange }) => {
  return (
    <div className="relative w-full">
      {Icon && (
        <div className="absolute left-[16px] top-1/2 -translate-y-1/2 text-[#9CA3AF]">
          <Icon size={20} />
        </div>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full h-[48px] bg-white border border-[#E5E7EB] rounded-[8px] text-[14px] font-normal text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#6366F1] focus:ring-1 focus:ring-[#6366F1] transition-colors ${
          Icon ? 'pl-[48px]' : 'pl-[16px]'
        } pr-[16px]`}
      />
    </div>
  );
};

export default Input;
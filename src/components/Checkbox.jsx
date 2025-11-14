const Checkbox = ({ label, checked, onChange }) => {
  return (
    <label className="flex items-center space-x-2 cursor-pointer select-none">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="form-checkbox h-4 w-4 text-[#6366F1] rounded border-gray-300 focus:ring-[#6366F1] transition duration-150 ease-in-out"
      />
      <span className="text-sm text-gray-600">{label}</span>
    </label>
  );
};

export default Checkbox;
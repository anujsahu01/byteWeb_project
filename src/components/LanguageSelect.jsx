const LanguageSelector = () => (
  <button className="flex items-center gap-2 px-3 py-1.5 bg-white/70 rounded-lg border border-gray-200 shadow-sm transition-all hover:bg-white hover:border-indigo-400">
    <img
      // Base64 SVG for a simple US Flag (for demonstration)
      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 30'%3E%3Crect width='60' height='30' fill='%23b22234'/%3E%3Cpath d='M0 3.5h60M0 10.5h60M0 17.5h60M0 24.5h60' stroke='%23fff' stroke-width='3'/%3E%3Crect width='24' height='17.5' fill='%233c3b6e'/%3E%3Cg fill='%23fff'%3E%3Cpath d='M3 4l1.3-4L4 4h4l-3 2.5-1.5-4L1 6.5l4 2.5z'/%3E%3C/g%3E%3C/svg%3E"
      alt="US Flag"
      className="w-5 h-3.5 object-cover rounded-[2px]"
    />
    <span className="text-sm font-medium text-gray-600">EN</span>
    <ChevronDown size={14} className="text-gray-400" />
  </button>
);

export default LanguageSelector;
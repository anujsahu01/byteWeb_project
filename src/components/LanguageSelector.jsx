import { useState } from "react";

const LanguageSelector = () => {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState("en");

  const flags = {
    en: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 30'%3E%3Crect width='60' height='30' fill='%23b22234'/%3E%3Cpath d='M0 3.5h60M0 10.5h60M0 17.5h60M0 24.5h60' stroke='%23fff' stroke-width='3'/%3E%3Crect width='24' height='17.5' fill='%233c3b6e'/%3E%3Cg fill='%23fff'%3E%3Cpath d='M3 4l1.3-4L4 4h4l-3 2.5-1.5-4L1 6.5l4 2.5z'/%3E%3C/g%3E%3C/svg%3E",
    hi: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 40'%3E%3Crect width='60' height='40' fill='%23FF9933'/%3E%3Crect y='13.33' width='60' height='13.33' fill='%23FFFFFF'/%3E%3Crect y='26.66' width='60' height='13.33' fill='%23128F39'/%3E%3Ccircle cx='30' cy='20' r='6' fill='none' stroke='%230080FF' stroke-width='2'/%3E%3Cg stroke='%230080FF'%3E%3Cline x1='30' y1='14' x2='30' y2='26'/%3E%3Cline x1='24' y1='20' x2='36' y2='20'/%3E%3Cline x1='26' y1='16' x2='34' y2='24'/%3E%3Cline x1='34' y1='16' x2='26' y2='24'/%3E%3C/g%3E%3C/svg%3E",
  };

  return (
    <div className="relative">
      {/* Main Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-1.5 bg-white/70 rounded-lg border border-gray-200 shadow-sm transition-all hover:bg-white hover:border-indigo-400"
      >
        <img
          src={flags[lang]}
          className="w-5 h-3.5 object-cover rounded-[2px]"
        />
        <span className="text-sm font-medium text-gray-600">
          {lang === "en" ? "EN" : "HI"}
        </span>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 bg-white border shadow-md rounded-lg p-2 w-32 z-50">
          {/* English Option */}
          <div
            className="flex items-center gap-2 px-2 py-1 hover:bg-gray-100 cursor-pointer rounded-md"
            onClick={() => {
              setLang("en");
              setOpen(false);
            }}
          >
            <img src={flags.en} className="w-5 h-3.5 rounded-[2px]" />
            <span className="text-sm">English</span>
          </div>

          {/* Hindi Option */}
          <div
            className="flex items-center gap-2 px-2 py-1 hover:bg-gray-100 cursor-pointer rounded-md"
            onClick={() => {
              setLang("hi");
              setOpen(false);
            }}
          >
            <img src={flags.hi} className="w-5 h-3.5 rounded-[2px]" />
            <span className="text-sm">Hindi</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;

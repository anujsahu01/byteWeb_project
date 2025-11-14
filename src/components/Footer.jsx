import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white mt-10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-[12px] text-slate-500">
        <span>© {new Date().getFullYear()} AppName. All rights reserved.</span>
        <span className="hidden sm:inline">
          Built with React &amp; react-router-dom
        </span>
      </div>
    </footer>
  );
}
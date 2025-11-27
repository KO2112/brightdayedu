"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-slate-800 px-8 py-2 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <img src="/logo.jpg" alt="Bright Day Logo" className="h-20 w-auto" />
        <div className="hidden md:flex justify-center gap-12">
          <a
            href="#home"
            className="text-orange-500 font-semibold text-lg hover:text-orange-400 transition"
          >
            HOME
          </a>
          <a
            href="#about"
            className="text-slate-700 font-semibold text-lg hover:text-orange-500 transition"
          >
            ABOUT US
          </a>
          <a
            href="#services"
            className="text-slate-700 font-semibold text-lg hover:text-orange-500 transition"
          >
            SERVICES
          </a>
          <a
            href="#contact"
            className="text-slate-700 font-semibold text-lg hover:text-orange-500 transition"
          >
            CONTACT US
          </a>
        </div>
        <button
          className="md:hidden text-slate-700 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2 pb-4">
          <a href="#home" className="block text-orange-500 hover:text-orange-400 font-semibold">
            HOME
          </a>
          <a href="#about" className="block text-slate-700 hover:text-orange-500 font-semibold">
            ABOUT US
          </a>
          <a href="#services" className="block text-slate-700 hover:text-orange-500 font-semibold">
            SERVICES
          </a>
          <a href="#contact" className="block text-slate-700 hover:text-orange-500 font-semibold">
            CONTACT US
          </a>
        </div>
      )}
    </nav>
  );
}

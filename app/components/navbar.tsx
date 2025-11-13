"use client";

export default function Navbar() {
  return (
    <nav className="bg-slate-700 text-white px-8 py-6">
      <div className="max-w-7xl mx-auto flex justify-center gap-16">
        <a
          href="#home"
          className="text-orange-500 font-semibold text-lg hover:text-orange-400"
        >
          HOME
        </a>
        <a
          href="#about"
          className="text-white font-semibold text-lg hover:text-gray-300"
        >
          ABOUT US
        </a>
        <a
          href="#services"
          className="text-white font-semibold text-lg hover:text-gray-300"
        >
          SERVICES
        </a>
        <a
          href="#contact"
          className="text-white font-semibold text-lg hover:text-gray-300"
        >
          CONTACT US
        </a>
      </div>
    </nav>
  );
}

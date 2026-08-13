"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const serviceLinks = [
    ["Private Tutoring", "#services"],
    ["Education Consultancy", "#services"],
    ["Parent Consultancy", "#services"],
    ["Gifted & Talented Education", "#services"],
    ["UK Education Support", "#international"],
    ["Bilingual Education Support", "#international"],
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[82px] max-w-7xl items-center justify-between px-6 md:px-8">
        {/* EXISTING LOGO - untouched */}
        <a href="#home" className="shrink-0">
          <img
            src="/logo.jpg"
            alt="Bright Day Education"
            className="h-20 w-auto"
          />
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          <a
            href="#home"
            className="text-sm font-semibold text-orange-500 transition hover:text-orange-600"
          >
            HOME
          </a>

          <a
            href="#about"
            className="text-sm font-semibold text-slate-600 transition hover:text-orange-500"
          >
            ABOUT US
          </a>

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-orange-500">
              SERVICES
              <span className="text-xs">⌄</span>
            </button>

            {servicesOpen && (
              <div className="absolute left-1/2 top-full w-72 -translate-x-1/2 pt-4">
                <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-900/10">
                  {serviceLinks.map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-orange-50 hover:text-orange-600"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <a
            href="#international"
            className="text-sm font-semibold text-slate-600 transition hover:text-orange-500"
          >
            INTERNATIONAL FAMILIES
          </a>

          <a
            href="#resources"
            className="text-sm font-semibold text-slate-600 transition hover:text-orange-500"
          >
            RESOURCES
          </a>

          <a
            href="#contact"
            className="text-sm font-semibold text-slate-600 transition hover:text-orange-500"
          >
            CONTACT
          </a>

          <a
            href="#contact"
            className="rounded-full bg-orange-500 px-5 py-3 text-sm font-bold text-white shadow-md shadow-orange-500/20 transition hover:-translate-y-0.5 hover:bg-orange-600"
          >
            Book a Consultation
          </a>
        </div>

        {/* Mobile */}
        <button
          className="rounded-lg border border-slate-200 px-3 py-2 text-xl text-slate-700 lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? "×" : "☰"}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-5 lg:hidden">
          <div className="flex flex-col gap-1">
            {[
              ["HOME", "#home"],
              ["ABOUT US", "#about"],
              ["SERVICES", "#services"],
              ["INTERNATIONAL FAMILIES", "#international"],
              ["RESOURCES", "#resources"],
              ["CONTACT", "#contact"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-orange-50 hover:text-orange-600"
              >
                {label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-3 rounded-full bg-orange-500 px-5 py-4 text-center text-sm font-bold text-white"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
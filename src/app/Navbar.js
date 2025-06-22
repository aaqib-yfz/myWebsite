"use client";
import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-dark flex items-center justify-between px-4 md:px-20 py-0 h-20">
      {/* Left Logo */}
      <div className="flex items-center h-full">
        <a
          href="#hero"
          className="text-white font-bold text-2xl tracking-widest cursor-pointer"
        >
          AAQIB
        </a>
      </div>
      {/* Center Nav Links */}
      <ul className="hidden md:flex flex-1 justify-center items-center gap-8">
        <li>
          <a
            href="#hero"
            className="text-white font-semibold tracking-wide hover:text-primary cursor-pointer flex items-center gap-1 uppercase"
          >
            HOME
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="text-white font-semibold tracking-wide hover:text-primary cursor-pointer uppercase"
          >
            ABOUT
          </a>
        </li>
        <li>
          <a
            href="#services"
            className="text-white font-semibold tracking-wide hover:text-primary cursor-pointer uppercase"
          >
            SERVICES
          </a>
        </li>
        <li>
          <a
            href="#resume"
            className="text-white font-semibold tracking-wide hover:text-primary cursor-pointer uppercase"
          >
            RESUME
          </a>
        </li>
      </ul>
      <button
        className="hidden md:inline-block border border-[#41C88E] text-[#41C88E] font-bold px-6 py-2 ml-6 shadow transition-all uppercase tracking-widest bg-transparent hover:bg-[#41C88E] hover:text-[#141C27]"
        onClick={() => {
          window.location.hash = "#contact";
        }}
      >
        Hire Me
      </button>
      {/* Right Hamburger */}
      <div
        className="bg-primary h-20 w-20 flex items-center justify-center md:hidden cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="8" width="32" height="3" rx="1.5" fill="#41C88E" />
          <rect y="15" width="32" height="3" rx="1.5" fill="#41C88E" />
          <rect y="22" width="32" height="3" rx="1.5" fill="#41C88E" />
        </svg>
      </div>
      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-20 left-0 w-full bg-[#09101A]/90 flex flex-col items-center justify-center py-8 z-50 md:hidden min-h-screen">
          <ul className="flex flex-col items-center gap-6">
            <li>
              <a
                href="#hero"
                className="text-white font-semibold tracking-wide hover:text-primary cursor-pointer flex items-center gap-1 uppercase text-center"
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-white font-semibold tracking-wide hover:text-primary cursor-pointer uppercase text-center"
              >
                ABOUT
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-white font-semibold tracking-wide hover:text-primary cursor-pointer uppercase text-center"
              >
                SERVICES
              </a>
            </li>
            <li>
              <a
                href="#resume"
                className="text-white font-semibold tracking-wide hover:text-primary cursor-pointer uppercase text-center"
              >
                RESUME
              </a>
            </li>
          </ul>
          <button
            className="mt-8 border border-[#41C88E] text-[#41C88E] font-bold px-8 py-3 shadow transition-all uppercase tracking-widest bg-transparent hover:bg-[#41C88E] hover:text-[#141C27]"
            onClick={() => {
              window.location.hash = "#contact";
            }}
          >
            Hire Me
          </button>
        </div>
      )}
    </nav>
  );
}

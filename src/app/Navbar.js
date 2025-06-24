"use client";
import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Helper for nav link click
  const handleNavClick = (e, hash) => {
    if (pathname === "/reviews") {
      e.preventDefault();
      router.push(`/${hash}`);
    }
    // Otherwise, let anchor work as normal
  };

  return (
    <nav className="w-full bg-dark flex items-center justify-between px-4 md:px-20 py-0 h-20 relative">
      {/* Left Logo */}
      <div className="flex items-center h-full z-10">
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="text-white font-bold text-2xl tracking-widest cursor-pointer"
        >
          AAQIB
        </a>
      </div>
      {/* Center Nav Links */}
      <ul className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 gap-8 text-lg font-mono hidden lg:hidden xl:flex">
        <li>
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="text-white font-semibold tracking-wide hover:text-primary cursor-pointer flex items-center gap-1 uppercase"
          >
            HOME
          </a>
        </li>
        <li>
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, "#about")}
            className="text-white font-semibold tracking-wide hover:text-primary cursor-pointer uppercase"
          >
            ABOUT
          </a>
        </li>
        <li>
          <a
            href="#services"
            onClick={(e) => handleNavClick(e, "#services")}
            className="text-white font-semibold tracking-wide hover:text-primary cursor-pointer uppercase"
          >
            SERVICES
          </a>
        </li>
        <li>
          <a
            href="#resume"
            onClick={(e) => handleNavClick(e, "#resume")}
            className="text-white font-semibold tracking-wide hover:text-primary cursor-pointer uppercase"
          >
            RESUME
          </a>
        </li>
      </ul>
      <div className=" hidden md:flex lg:hidden xl:flex items-center gap-4 ml-6 z-10 md:hidden lg:hidden xl:flex">
        <button
          className="border border-[#41C88E] text-[#41C88E] font-bold px-6 py-2 shadow transition-all uppercase tracking-widest bg-transparent hover:bg-[#41C88E] hover:text-[#141C27]"
          onClick={() => {
            router.push("/reviews");
          }}
        >
          Submit Feedback
        </button>
        <button
          className="border border-[#41C88E] text-[#41C88E] font-bold px-6 py-2 shadow transition-all uppercase tracking-widest bg-transparent hover:bg-[#41C88E] hover:text-[#141C27]"
          onClick={(e) => {
            if (pathname === "/reviews") {
              e.preventDefault();
              router.push("/#contact");
            } else {
              window.location.hash = "#contact";
            }
          }}
        >
          Hire Me
        </button>
      </div>
      {/* Right Hamburger */}
      <div
        className="ml-auto items-center justify-center w-10 h-10 rounded focus:outline-none lg:flex md:flex xl:hidden"
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
        <div className="absolute top-20 left-0 w-full bg-[#09101A]/90 flex flex-col items-center justify-center py-8 z-50 min-h-screen lg:flex md:flex xl:hidden text-center">
          <ul className="flex flex-col items-center gap-6 w-full px-4 justify-center text-center">
            <li>
              <a
                href="#hero"
                onClick={(e) => handleNavClick(e, "#hero")}
                className="block text-white font-semibold tracking-wide hover:text-primary cursor-pointer uppercase text-center py-3 w-full"
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => handleNavClick(e, "#about")}
                className="block text-white font-semibold tracking-wide hover:text-primary cursor-pointer uppercase text-center py-3 w-full"
              >
                ABOUT
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={(e) => handleNavClick(e, "#services")}
                className="block text-white font-semibold tracking-wide hover:text-primary cursor-pointer uppercase text-center py-3 w-full"
              >
                SERVICES
              </a>
            </li>
            <li>
              <a
                href="#resume"
                onClick={(e) => handleNavClick(e, "#resume")}
                className="block text-white font-semibold tracking-wide hover:text-primary cursor-pointer uppercase text-center py-3 w-full"
              >
                RESUME
              </a>
            </li>
          </ul>
          <div className="flex flex-col items-center gap-4 mt-8 z-10 w-full px-4 justify-center text-center">
            <button
              className="border border-[#41C88E] text-[#41C88E] font-bold px-6 py-2 shadow transition-all uppercase tracking-widest bg-transparent hover:bg-[#41C88E] hover:text-[#141C27]"
              onClick={() => {
                router.push("/reviews");
              }}
            >
              Submit Feedback
            </button>
            <button
              className="border border-[#41C88E] text-[#41C88E] font-bold px-6 py-2 shadow transition-all uppercase tracking-widest bg-transparent hover:bg-[#41C88E] hover:text-[#141C27]"
              onClick={(e) => {
                if (pathname === "/reviews") {
                  e.preventDefault();
                  router.push("/#contact");
                } else {
                  window.location.hash = "#contact";
                }
              }}
            >
              Hire Me
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

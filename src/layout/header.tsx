'use client'
import AsciiImage from "@/components/ascii-image";
import React, { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "home", href: "#home" },
    { name: "services", href: "#services" },
    { name: "resume", href: "#resume" },
    { name: "work", href: "#work" },
    { name: "contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center  px-4">
      <div className="w-full max-w-[1100px] backdrop-blur-md bg-radial bg-white/10 bg-linear-300 from-neutral-600 to-neutral-900/60 border border-white/10 shadow-lg shadow-black/10 rounded-full px-6 py-4 transition-all duration-300">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a href="/" className="group">
            <h1 className="text-xl font-bold font-jet text-white tracking-tighter">
              ayush<span className="text-neutal-400 group-hover:text-neutral-300 transition-colors">.</span>
            </h1>

          </a>



          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6 font-medium text-sm">
              {navLinks.map((link, index) => {
                const isContact = link.name === "contact";
                return (
                  <li key={index}>
                    <a
                      href={link.href}
                      className={`font-jet capitalize transition-all duration-300 ${isContact
                        ? "bg-white hover:bg-neutral-200 text-black px-5 py-2 rounded-full font-bold shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)]"
                        : "text-neutral-100 hover:text-white relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-neutral-100 after:transition-all after:duration-300 hover:after:w-full"
                        }`}
                    >
                      {link.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-neutral-400 transition-colors focus:outline-none"
            >
              {isMobileMenuOpen ? (
                // Close Icon (X)
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger Icon
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen ? "max-h-96 opacity-100 mt-6" : "max-h-0 opacity-0 mt-0"
            }`}
        >
          <ul className="flex flex-col gap-4 text-center pb-4">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-lg font-jet capitalize py-2 ${link.name === "contact"
                    ? "text-neutral-100 font-bold"
                    : "text-neutral-300 hover:text-white"
                    }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
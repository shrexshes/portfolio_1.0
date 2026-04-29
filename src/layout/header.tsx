'use client'
import Image from "next/image";
import React, { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "home", href: "/" },
    { name: "about", href: "/about-me" },
    { name: "blog", href: "/blog" },
    { name: "contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      {/* Container - Fixed alignment and padding */}
      <div className="w-full max-w-[1100px] backdrop-blur-sm bg-linear-to-b from-red-600 to-red-800/60 border border-red-900 rounded-[2rem] md:rounded-full px-6 py-3 md:py-4 transition-all duration-300">
        <div className="flex items-center justify-between">

          {/* Logo - Vertically Aligned */}
          <a href="/" className="group flex gap-3 items-center">
          <Image src="/images/icon.png" alt="icon of ayush shrestha" className="w-8 " width={100} height={100}/>
            <h1 className="text-xl font-bold font-inter text-white tracking-tighter">
              ayush.
            </h1>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            <ul className="flex items-center gap-6 font-medium text-sm">
              {navLinks.map((link, index) => {
                const isContact = link.name === "contact";
                return (
                  <li key={index} className="flex items-center">
                    <a
                      href={link.href}
                      className={`font-jet font-bold capitalize transition-all duration-300 flex items-center ${isContact
                        ? "bg-white hover:bg-gray-200 text-black px-5 py-2 rounded-full font-bold shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                        : "text-gray-100 hover:text-white relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-gray-100 after:transition-all after:duration-300 hover:after:w-full"
                        }`}
                    >
                      {link.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Mobile Menu Button - Perfectly Centered */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-black transition-colors focus:outline-none flex items-center justify-center p-1"
            >
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown - Aligned for mobile view */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "max-h-80 opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"
            }`}
        >
          <ul className="flex flex-col gap-2 text-center pb-4 border-t border-white/10 pt-4">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-sm md:text-base font-host uppercase py-3 ${link.name === "contact"
                    ? "bg-white/10 rounded-xl text-white font-bold mx-4"
                    : "text-white"
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
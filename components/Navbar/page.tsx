"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/Logo.svg";

const navLinks = [
  { name: "About Us", href: "/Page2" },
  { name: "Zonke for Business", href: "#" },
  { name: "Contact Us", href: "#" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when screen resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // Tailwind's md breakpoint
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <nav className="sticky top-0 absolute z-20 w-full bg-white ">
        <div className="px-[5%] py-6 flex items-center justify-between">
          {/* Logo & Left Links */}
          
            <div className="flex items-center space-x-8">
              <Link href="/">
              <Image src={Logo} alt="Logo" width={120} height={40} />
              </Link>
              {/* Desktop Left Links */}
              <div className="hidden md:flex space-x-8 text-[#A32C14] text-base font-medium">
                {navLinks.slice(0, 2).map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="hover:underline transition ease-in-out transition duration-300"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          

          {/* Desktop Right Link */}
          <div className="hidden md:flex text-[#A32C14] text-base font-medium">
            <Link
              href={navLinks[2].href}
              className="hover:underline transition duration-300 ease-in-out transition "
            >
              {navLinks[2].name}
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
              <svg
                className="w-6 h-6 text-orange-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu - Now using conditional rendering */}
        {isOpen && (
          <div className="md:hidden px-[5%] pb-4 flex flex-col gap-6 text-[#A32C14] text-base font-medium bg-white relative z-20">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:underline transition duration-300 ease-in-out"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Overlay - Only shows when menu is open AND screen is mobile */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm z-10"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
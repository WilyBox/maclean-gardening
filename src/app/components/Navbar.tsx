"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa"; 

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);


  // Scroll smoothly after navigating to the homepage
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash === "#services-accordion") {
      const element = document.getElementById("services-accordion");
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);


  return (
    <div className="relative w-full bg-white shadow-md z-50">
      <nav className="flex items-center justify-between px-6 lg:px-12 py-4" aria-label="Global">
        {/* Logo and Facebook Icon */}
        <div className="flex items-center space-x-4">
          <Link href="/" className="p-1.5">
            <span className="sr-only">Maclean Gardening</span>
            <Image
              className="h-16 w-auto"
              src="/images/logo-navbar-horiz.webp"
              alt="Maclean Gardening"
              width={320}
              height={80}
            />
          </Link>

          <Link 
            href="https://www.facebook.com/profile.php?id=61568108347078" 
            target="_blank" 
            rel="noopener noreferrer"
            className="logo-color-facebook hover:text-blue-800 transition-all"
          >
            <FaFacebook size={32} />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex flex-1 justify-center gap-x-16">
          <Link href="/" className="text-lg font-semibold text-gray-900 hover:text-green-700 transition-all font-poppins">
            Home
          </Link>
          <Link 
            href="/services" 
            // onClick={handleServicesClick}
            className="text-lg font-medium text-gray-800 hover:text-green-600 transition-all font-poppins tracking-wide cursor-pointer"
          >
            Services
          </Link>
          <Link href="/about" className="text-lg font-semibold text-gray-900 hover:text-green-700 transition-all font-poppins">
            About
          </Link>
          <Link href="/contact" className="text-lg font-semibold text-gray-900 hover:text-green-700 transition-all font-poppins">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            {menuOpen ? <FiX size={32} /> : <FiMenu size={32} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu (Animated) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-white shadow-lg lg:hidden"
          >
            <div className="flex flex-col items-center space-y-6 py-6 px-8">
              <Link 
                href="/" 
                className="text-lg font-medium text-gray-800 hover:text-green-600 transition-all font-poppins tracking-wide"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/services" 
                className="text-lg font-medium text-gray-800 hover:text-green-600 transition-all font-poppins tracking-wide cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/about" 
                className="text-lg font-medium text-gray-800 hover:text-green-600 transition-all font-poppins tracking-wide"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="text-lg font-medium text-gray-800 hover:text-green-600 transition-all font-poppins tracking-wide"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

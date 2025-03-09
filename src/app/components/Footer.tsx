import Link from "next/link";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white shadow-md py-6 mt-10">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <Link href="/" className="p-1.5">
          <span className="sr-only">MacLean Gardening</span>
          <Image
            className="h-16 w-auto"
            src="/images/logo-navbar-horiz.webp"
            alt="MacLean Gardening"
            width={320}
            height={80}
          />
        </Link>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center md:justify-end space-x-6 mt-4 md:mt-0">
          <Link href="/" className="text-gray-900 hover:text-green-700 transition-all font-poppins">
            Home
          </Link>
          <Link href="/services" className="text-gray-900 hover:text-green-700 transition-all font-poppins">
            Services
          </Link>
          <Link href="/about" className="text-gray-900 hover:text-green-700 transition-all font-poppins">
            About
          </Link>
          <Link href="/contact" className="text-gray-900 hover:text-green-700 transition-all font-poppins">
            Contact
          </Link>
        </div>

        {/* Social Media */}
        <div className="mt-4 md:mt-0">
          <Link 
            href="https://www.facebook.com/profile.php?id=61568108347078" 
            target="_blank" 
            rel="noopener noreferrer"
            className="logo-color-facebook hover:text-blue-800 transition-all"
          >
            <FaFacebook size={32} />
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} MacLean Gardening. All rights reserved.
      </div>
    </footer>
  );
}
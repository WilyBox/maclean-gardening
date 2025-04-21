import ModernCarousel from "./ModernCarousel";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";

export default function HeroSimple() {
  return (
    <section className="relative w-full pt-4 px-8 pb-12 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8">
      {/* Left Side - Text (flex-shrink) */}
      <div className="text-center lg:text-left flex-shrink-0 max-w-lg">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
          How can we help?
        </h1>
        <p className="mt-4 text-lg text-gray-700">
        We are dedicated to providing the best possible service to you, and take pride in maintaining gardens to a high standard.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
        <Link 
            href="https://www.facebook.com/profile.php?id=61568108347078" 
            target="_blank" 
            rel="noopener noreferrer"
            className="logo-color-facebook hover:text-blue-800 transition-all"
          >
            <div className="flex flex-row justify-center">
            <p className="text-xl font-bold logo-color-facebook pe-2 underline" >See us on Facebook</p>

            <FaFacebook size={32} />
            </div>
          </Link>
        </div>
      </div>

      {/* Right Side - Carousel (flex-grow) */}
      <div className="w-full flex-grow h-full">
        <ModernCarousel />
      </div>
    </section>
  );
}

import ModernCarousel from "./ModernCarousel";
// import {SwipeCarousel} from "./SwipeCarousel";

export default function HeroSimple() {
  return (
    <section className="relative w-full px-8 py-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
      {/* Left Side - Text */}
      <div className="text-center lg:text-left">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
          Transform Your Outdoor Space
        </h1>
        <p className="mt-4 text-lg text-gray-700">
        Providing reliable garden care for Dunoon and surrounding areas. Get in touch for a free quote.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
          <a
            href="/services"
            className="rounded-md bg-green-600 px-6 py-3 text-white text-lg font-semibold hover:bg-green-700"
          >
            Get Started
          </a>
          <a
            href="/contact"
            className="text-lg font-semibold text-gray-900 border border-gray-300 px-6 py-3 rounded-md hover:bg-gray-100"
          >
            Learn more →
          </a>
        </div>
      </div>

      {/* Right Side - Carousel */}
      <div className="w-full max-w-2xl mx-auto lg:max-w-none">
        <ModernCarousel />
      </div>
    </section>
  );
}

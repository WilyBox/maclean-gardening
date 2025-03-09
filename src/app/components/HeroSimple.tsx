import ModernCarousel from "./ModernCarousel";

export default function HeroSimple() {
  return (
    <section className="relative w-full px-8 pb-12 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8">
      {/* Left Side - Text (flex-shrink) */}
      <div className="text-center lg:text-left flex-shrink-0 max-w-lg">
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

      {/* Right Side - Carousel (flex-grow) */}
      <div className="w-full flex-grow h-full">
        <ModernCarousel />
      </div>
    </section>
  );
}

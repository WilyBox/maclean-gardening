import React from "react";

const HeroImage: React.FC = () => {
  return (
    <section className="relative min-h-[40rem] flex items-center justify-center overflow-hidden max-w-7xl mx-auto">
      {/* Background image */}
      <img
        src="/images/gardening-banner.webp"
        alt="Gardening background"
        className="absolute inset-0 w-full h-full object-cover "
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 " style={{ opacity: "0.5" }} />

      {/* Hero content */}
      <div className="relative text-center max-w-2xl px-6 z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Transform Your Outdoor Space
        </h1>
        <p className="mt-4 text-lg text-gray-200">
          Providing reliable garden care for Dunoon and surrounding areas. Get in touch for a free quote.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/contact"
            className="inline-block rounded-md bg-green-600 px-6 py-3 text-white text-lg font-semibold hover:bg-green-700 transition"
          >
            Get Started
          </a>
          <a
            href="/about"
            className="text-lg font-semibold text-white border border-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition"
          >
            Learn more →
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroImage;

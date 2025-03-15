"use client";

import Image from "next/image";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import SimpleAccordion from "./SimpleAccordion"; // ✅ Import the accordion component

export default function TestimonialSection() {
  return (
    <section className="container mx-auto px-6 py-12 lg:py-16 flex flex-col lg:flex-row gap-8">
   {/* Left Column: Main Testimonial Card */}
<div className="lg:w-1/2 flex justify-center">
  <div className="w-full max-w-md md:max-w-lg bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col">
    {/* Large Client Image */}
    <div className="relative w-full h-80">
      <Image
        className="object-cover w-full h-full"
        src="/images/owner1.webp"
        alt="Picture of gardener for Dunoon and surroundingareas"
        layout="fill"
        priority
      />
    </div>

    {/* Content */}
    <div className="p-6 text-center flex-grow">
      <blockquote className="text-lg font-light italic text-gray-700">
        {`Are you in the Cowal or Dunoon area and looking for reliable garden care - then look no further.
        At MacLean's Gardening we provide diligent garden maintenance.`}
      </blockquote>
    </div>

    {/* ✅ Footer with Two Rows */}
    <div className="border-t border-gray-300 px-6 py-4 flex flex-col gap-3">
      
      {/* First Row - Company Logo + Name + Title */}
      <div className="flex flex-col items-center text-center gap-2">
        <Image 
          src="/images/logo-navbar.webp" 
          alt="Company Logo" 
          width={40} 
          height={40} 
          className="rounded-full"
        />
        <div>
          <p className="font-semibold text-lg text-gray-900">Calum</p>
          <span className="text-sm text-gray-500">Owner, MacLean Gardening</span>
        </div>
      </div>

      {/* Second Row - University Logo + Degree + Study Level */}
      <div className="flex flex-col items-center text-center gap-2">
        <Image 
          src="/images/uhi-logo.webp" 
          alt="University Logo" 
          width={40} 
          height={40} 
          className="rounded-full"
        />
        <div>
          <p className="font-semibold text-green-700 text-lg">Horticulture</p>
          <span className="text-sm text-gray-500">Studying, HND-level</span>
        </div>
      </div>

    </div>
  </div>
</div>


      {/* Right Column: Services + Ratings */}
      <div className="lg:w-1/2 flex flex-col gap-8">
        {/* Top Card: Services Accordion (Replaces old list) */}
        <div className="bg-white shadow-lg rounded-2xl p-6" id="servicesAccordion">
          <SimpleAccordion /> {/* ✅ Insert Accordion Here */}
        </div>

        {/* Bottom Card: Simple Testimonial + Rating */}
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col justify-between">
          <p className="text-lg font-light italic text-gray-700">
            {` "Hard-working, very approachable, answered all of my questions. Extremely knowledgeable and down to earth. 5 stars!"`}
          </p>
          <p className="text-sm text-gray-500">-Google Review</p>
          
          {/* Rating Footer */}
          <div className="border-t mt-4 pt-4 text-center space-y-2">
            {/* Facebook Rating */}
            <div className="flex items-center justify-center gap-2 font-semibold">
              <FaFacebook className="logo-color-facebook text-xl" />
              <span className="text-gray-700">5/5 on Facebook</span>
              <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
            </div>

            {/* Google Rating */}
            <div className="flex items-center justify-center gap-2 font-semibold">
              <FaGoogle className="logo-color-google text-xl" />
              <span className="text-gray-700">5/5 on Google</span>
              <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

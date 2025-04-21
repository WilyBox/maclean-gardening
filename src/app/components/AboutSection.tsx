// components/AboutSection.tsx

import Image from "next/image";
import { FaHandshake, FaLeaf, FaClock, FaFacebook, FaGoogle } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
      
      {/* Left Column – About Card */}
      <div className="flex justify-start">
        <div className="w-full max-w-md md:max-w-lg bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col">
          
          {/* Image */}
          <div className="relative w-full h-80">
            <Image
              className="object-cover w-full h-full"
              src="/images/owner1.webp"
              alt="Picture of gardener for Dunoon and surrounding areas"
              layout="fill"
              priority
            />
          </div>

          {/* Quote */}
          <div className="p-6 text-center flex-grow">
            <blockquote className="text-lg font-light italic text-gray-700">
              {`Are you in the Cowal or Dunoon area and looking for reliable garden care – then look no further.
              At MacLean's Gardening we provide diligent garden maintenance.`}
            </blockquote>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-300 px-6 py-4 flex flex-col gap-3">
            
            {/* Owner Info */}
            <div className="flex flex-row justify-center items-center text-center gap-2">
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

            {/* Education Info */}
            <div className="flex flex-row justify-center items-center text-center gap-2">
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

{/* Right Column – Values + Ratings */}
<div className="flex flex-col gap-6">

  {/* Values Card */}
  <div className="bg-white shadow-lg rounded-2xl p-6">
    <h3 className="text-2xl font-bold mb-6 text-center ">Our Values</h3>

    {/* Icons */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
      <div className="flex flex-col items-center">
        <FaHandshake className="text-3xl text-green-600 mb-2" />
        <p className="font-medium text-gray-700">Client Satisfaction</p>
      </div>
      <div className="flex flex-col items-center">
        <FaClock className="text-3xl text-green-600 mb-2" />
        <p className="font-medium text-gray-700">Efficiency</p>
      </div>
      <div className="flex flex-col items-center">
        <FaLeaf className="text-3xl text-green-600 mb-2" />
        <p className="font-medium text-gray-700">Integrity</p>
      </div>
    </div>

    {/* Description Below Values */}
    <div className="mt-6 text-gray-600 text-lg leading-relaxed text-center">
      We offer tailored garden plans that include lawn care, planting, pruning, hedge work, and more —
      all based on your individual needs. Whether it’s rejuvenating a tired lawn or maintaining sharp hedges,
      we’re committed to delivering efficient and thoughtful service. From one-off clearances to long-term contracts,
      our focus remains on reliability, quality, and your satisfaction.
    </div>
  </div>

  {/* Ratings Card */}
  <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col justify-between">
    <h3 className="text-center font-semibold text-lg text-gray-800 mb-4">What Clients Say</h3>
    <div className="pt-4 text-center space-y-2">
      <div className="flex items-center justify-center gap-2 font-semibold">
        <FaFacebook className="text-blue-600 text-xl" />
        <span className="text-gray-700">5/5 on Facebook</span>
        <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
      </div>
      <div className="flex items-center justify-center gap-2 font-semibold">
        <FaGoogle className="text-red-500 text-xl" />
        <span className="text-gray-700">5/5 on Google</span>
        <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
      </div>
    </div>
  </div>

</div>

    </section>
  );
};

export default AboutSection;

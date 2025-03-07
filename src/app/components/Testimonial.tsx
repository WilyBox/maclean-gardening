import Image from "next/image";
import { FaFacebook, FaGoogle } from "react-icons/fa";

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
              src="/images/client1.webp"
              alt="Client Testimonial"
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


            {/* Client Info */}
            <div className="mt-6 flex flex-col items-center">
              <p className="font-semibold text-lg mt-2">Calum</p>
              <span className="text-sm text-gray-500">
                Owner, MacLean Gardening
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Right Column: Two Smaller Cards */}
      <div className="lg:w-1/2 flex flex-col gap-8">
        {/* Top Card: Services */}
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col text-center">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">Our Services</h3>
          <ul className="text-lg text-gray-700 space-y-2">
            <li>✂️ Hedge Cutting</li>
            <li>🌱 Lawn Care including Mowing, Strimming and Seeding</li>
            <li>🌱 Weeding</li>
            <li>🌱 Garden Clearance</li>
            <li>🌱 Planting and Bed Design</li>
            <li>🌱 Assistance with Vegetable Cultivation</li>
          </ul>
        </div>

        {/* Bottom Card: Simple Testimonial + Rating */}
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col justify-between">
          <p className="text-lg font-light italic text-gray-700">
            "Hard-working, very approachable, answered all of my questions. Extremely knowledgeable and down to earth. 5 stars!"
          </p>
          
          
        {/* Rating Footer */}
        <div className="border-t mt-4 pt-4 text-center space-y-2">
          {/* Facebook Rating */}
          <div className="flex items-center justify-center gap-2 text-green-700 font-semibold">
            <FaFacebook className="text-blue-600 text-xl" />
            <span>5/5 Stars on Facebook</span>
            <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
          </div>

          {/* Google Rating */}
          <div className="flex items-center justify-center gap-2 text-green-700 font-semibold">
            <FaGoogle className="text-red-500 text-xl" />
            <span>5/5 Stars on Google</span>
            <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
          </div>
</div>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const services = [
  { title: "Hedge Cutting", description: "Trimming and shaping hedges for a tidy garden." },
  { title: "Lawn Care", description: "Mowing, strimming, and seeding to keep your lawn healthy." },
  { title: "Weeding", description: "Removing unwanted weeds to keep your garden neat." },
  { title: "Garden Clearance", description: "Clearing overgrown areas and garden waste disposal." },
  { title: "Planting & Bed Design", description: "Designing and planting flower beds for year-round beauty." },
  { title: "Vegetable Cultivation", description: "Helping you grow fresh vegetables in your garden." },
];

export default function SimpleAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div> {/* ✅ Removed shadow & padding here */}
      <h3 className="text-2xl font-semibold text-green-700 text-center mb-4">Our Services</h3>
      <div className="divide-y divide-gray-300">
        {services.map((service, index) => (
          <div key={index} className="py-3">
            <button
              onClick={() => toggleAccordion(index)}
              className="flex justify-between items-center w-full text-lg font-medium text-gray-800 hover:text-green-700 transition"
            >
              {service.title}
              <FiChevronDown
                className={`text-xl transition-transform ${openIndex === index ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="mt-2 text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

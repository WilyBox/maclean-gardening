"use client";

import ServicesGrid from "../components/ServicesGrid";

export default function Services() {
const services  = [
    { title: "Hedge Maintenance", description: "Experienced in trimming and shaping hedges to enhance garden aesthetics.", imageUrl: "/images/services/hedges.webp" },
    { title: "Lawn Care Expertise", description: "Knowledgeable in mowing, strimming, and seeding to maintain a lush lawn.", imageUrl: "/images/services/garden-care.webp" },
    { title: "Weed Management", description: "Committed to keeping gardens neat by effectively removing weeds.", imageUrl: "/images/services/weed-remov.webp" },
    { title: "Garden Restoration", description: "Skilled in clearing overgrown areas and managing garden waste responsibly.", imageUrl: "/images/services/mown-lawn.webp" },
    { title: "Planting & Design", description: "Passionate about designing and planting flower beds for year-round beauty.", imageUrl: "/images/services/flowers.webp" },
    { title: "Vegetable Gardening", description: "Interested in helping others grow their own fresh produce at home.", imageUrl: "/images/services/veg-plots.webp" },
  ];

  return (
    <section className="bg-white relative w-full pt-4 px-8 pb-12 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8">
      <ServicesGrid services={services} />
    </section>
  );
}
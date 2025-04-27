"use client";

// import SkillsGrid from "./SkillsGrid";
import ServicesGrid from "./ServicesGrid";


export default function TestimonialSection() {
  const services  = [
    { title: "Hedge Maintenance", description: "Experienced in trimming and shaping hedges to enhance garden aesthetics.", imageUrl: "/images/services/hedges.webp" },
    { title: "Lawn Care Expertise", description: "Knowledgeable in mowing, strimming, and seeding to maintain a lush lawn.", imageUrl: "/images/services/garden-care.webp" },
    { title: "Weed Management", description: "Committed to keeping gardens neat by effectively removing weeds.", imageUrl: "/images/services/weed-remov.webp" },
    { title: "Garden Restoration", description: "Skilled in clearing overgrown areas and managing garden waste responsibly.", imageUrl: "/images/services/mown-lawn.webp" },
    { title: "Planting & Design", description: "Passionate about designing and planting flower beds for year-round beauty.", imageUrl: "/images/services/flowers.webp" },
    { title: "Vegetable Gardening", description: "Interested in helping others grow their own fresh produce at home.", imageUrl: "/images/services/veg-plots.webp" },
  ];



  return (

    <section className="container max-w-7xl mx-auto py-12 lg:py-16 ">

      <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="rounded-2xl" id="servicesAccordion">
          <ServicesGrid services={services} />
        </div>


      </div>
    </section>
  );
}

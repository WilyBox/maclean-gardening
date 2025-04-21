"use client";

import Image from "next/image";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import SimpleAccordion from "./SimpleAccordion"; // ✅ Import the accordion component

import SkillsGrid from "./SkillsGrid";


export default function TestimonialSection() {
  const skills = [
    { title: "Hedge Maintenance", imageUrl:"/images/icons/shears.svg",description: "Experienced in trimming and shaping hedges to enhance garden aesthetics." },
    { title: "Lawn Care Expertise", imageUrl:"/images/icons/hose.svg", description: "Knowledgeable in mowing, strimming, and seeding to maintain a lush lawn." },
    { title: "Weed Management", imageUrl:"/images/icons/trowel.svg", description: "Committed to keeping gardens neat by effectively removing weeds." },
    { title: "Garden Restoration", imageUrl:"/images/icons/flower-pot.svg", description: "Skilled in clearing overgrown areas and managing garden waste responsibly." },
    { title: "Planting & Design", imageUrl:"/images/icons/watering-can.svg", description: "Passionate about designing and planting flower beds for year-round beauty." },
    { title: "Vegetable Gardening",imageUrl:"/images/icons/carrot.svg", description: "Interested in helping others grow their own fresh produce at home." },
  ];


  return (

    <section className="container max-w-7xl mx-auto py-12 lg:py-16 flex flex-col lg:flex-row gap-8">


      {/* Right Column: Services + Ratings */}
      <div className="lg:full flex flex-col gap-8">
        {/* Top Card: Services Accordion (Replaces old list) */}
        <div className="rounded-2xl" id="servicesAccordion">
          {/* <SimpleAccordion />  */}

          <SkillsGrid skills={skills} />
        </div>


      </div>
    </section>
  );
}

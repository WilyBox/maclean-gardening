import Image from "next/image";
import SkillsGrid from "../components/SkillsGrid";


const About = () => {
  const skills = [
    { title: "Hedge Maintenance", imageUrl:"/images/icons/shears.svg",description: "Experienced in trimming and shaping hedges to enhance garden aesthetics." },
    { title: "Lawn Care Expertise", imageUrl:"/images/icons/hose.svg", description: "Knowledgeable in mowing, strimming, and seeding to maintain a lush lawn." },
    { title: "Weed Management", imageUrl:"/images/icons/trowel.svg", description: "Committed to keeping gardens neat by effectively removing weeds." },
    { title: "Garden Restoration", imageUrl:"/images/icons/flower-pot.svg", description: "Skilled in clearing overgrown areas and managing garden waste responsibly." },
    { title: "Planting & Design", imageUrl:"/images/icons/watering-can.svg", description: "Passionate about designing and planting flower beds for year-round beauty." },
    { title: "Vegetable Gardening",imageUrl:"/images/icons/carrot.svg", description: "Interested in helping others grow their own fresh produce at home." },
  ];


  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden">
        <Image 
          src="/images/owner-full.webp" 
          alt="Picture of gardener for Dunoon and surrounding areas" 
          layout="fill" 
          objectFit="cover" 
        />
      </div>
      <h1 className="text-3xl font-bold mt-6">About Me</h1>
      <p className="mt-4 text-lg">
        Raised in Dunoon, I have been working in gardens across the area for a number of years. 
        My passion for gardening has led me to study Horticulture, to help people grow their own garden plots at home.
      </p>
      <p className="mt-4 text-lg">
        For other garden maintenance tasks, see below. <span className="text-green-700">I come with my own van and equipment, and remove all the garden waste afterwards.</span>
        No job too big or small, get in contact for a bespoke, local gardening service.
      </p>
      <h2 className="text-2xl font-semibold mt-6">Skills & Interests</h2>
      <SkillsGrid skills={skills} />
    </div>
  );
};

export default About;

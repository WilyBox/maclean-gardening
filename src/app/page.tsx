import Layout from "./components/Layout";
import HeroSimple from "./components/HeroSimple";
import Testimonial from "./components/Testimonial";
// import BeforeAfterImageSlider from "./components/BeforeAfterImageSlider";
// import ModernCarousel from "./components/ModernCarousel";

export default function Home() {
  return (
    <Layout>
      <Testimonial />


      <HeroSimple />

      {/* <section className="">
        <BeforeAfterImageSlider />
      </section> */}
    </Layout>
  );
}
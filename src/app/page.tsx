import Layout from "./components/Layout";
import HeroSimple from "./components/HeroSimple";
import Testimonial from "./components/Testimonial";
// import BeforeAfterImageSlider from "./components/BeforeAfterImageSlider";
// import ModernCarousel from "./components/ModernCarousel";
import FeedbackCards from "./components/FeedbackCards";

export default function Home() {
  return (
    <Layout>
      <HeroSimple />
      <Testimonial />
      <FeedbackCards />
    </Layout>
  );
}
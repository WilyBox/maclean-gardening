import Layout from "./components/Layout";
import HeroSimple from "./components/HeroSimple";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
    <Layout>
      <Testimonial />
      <HeroSimple />
    </Layout>
  );
}
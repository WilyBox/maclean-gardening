"use client"

import { useIsHydrated } from "./hooks/useIsHydrated";
import LoadingScreen from "./components/LoadingScreen";

import Layout from "./components/Layout";
import HeroSimple from "./components/HeroSimple";
import HeroImage from "./components/HeroImage";
import Testimonial from "./components/Testimonial";
// import BeforeAfterImageSlider from "./components/BeforeAfterImageSlider";
// import ModernCarousel from "./components/ModernCarousel";
import FeedbackCards from "./components/FeedbackCards";
import AboutSection from "./components/AboutSection";



export default function Home() {
  const hydrated = useIsHydrated();

  if (!hydrated) return <LoadingScreen />;

  return (
    <Layout>
      <HeroImage />
      <Testimonial />
      <HeroSimple />
      <AboutSection />
      <FeedbackCards />
    </Layout>
  );
}
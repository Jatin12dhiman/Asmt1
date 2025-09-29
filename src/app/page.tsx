import Image from "next/image";
import Hero from "./components/Hero";
import HorizontalScroll from "./components/HorizontalStrip";
import Features from "./components/Features";
import DataSection from "./components/DataSection";
import Scaling from "./components/scaling";
import CustomerTestimonials from "./components/Customer";
// import Customer from "./components/Customer";

export default function Home() {
  return (
    <div>
      <Hero />
      <HorizontalScroll />
      <Features />
      <DataSection />
      <Scaling />
      <CustomerTestimonials />
    </div>
  );
}

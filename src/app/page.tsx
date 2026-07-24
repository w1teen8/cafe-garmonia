import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import SignatureDishes from "@/components/sections/SignatureDishes";
import ServicesStrip from "@/components/sections/ServicesStrip";
import MenuSection from "@/components/sections/MenuSection";
import WhyUs from "@/components/sections/WhyUs";
import Events from "@/components/sections/Events";
import Gallery from "@/components/sections/Gallery";
import Reviews from "@/components/sections/Reviews";
import FAQ from "@/components/sections/FAQ";
import Reservation from "@/components/sections/Reservation";
import Contacts from "@/components/sections/Contacts";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <SignatureDishes />
      <ServicesStrip />
      <MenuSection />
      <WhyUs />
      <Events />
      <Gallery />
      <Reviews />
      <FAQ />
      <Reservation />
      <Contacts />
      <FinalCTA />
    </>
  );
}

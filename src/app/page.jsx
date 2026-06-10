import About from "@/components/About";
import AreasMarquee from "@/components/AreasMarquee";
import Contact from "@/components/Contact";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Listings from "@/components/Listings";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Listings />
        <AreasMarquee />
        <About />
        <Services />
        <Team />
        <Testimonials />
        <FinalCta />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

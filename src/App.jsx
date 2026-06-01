import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Listings from "./components/Listings";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import WhyUs from "./components/WhyUs";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Listings />
        <About />
        <Services />
        <WhyUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

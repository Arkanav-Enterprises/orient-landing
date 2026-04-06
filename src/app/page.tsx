import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Products from "@/components/Products";
import Specifications from "@/components/Specifications";
import Features from "@/components/Features";
import Offer from "@/components/Offer";
import Benefits from "@/components/Benefits";
import Patrons from "@/components/Patrons";
import News from "@/components/News";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Legacy from "@/components/Legacy";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Introduction />
      <Products />
      <Specifications />
      <Features />
      <Offer />
      <Benefits />
      <Patrons />
      <News />
      <Gallery />
      <About />
      <CTA />
      <Contact />
      <Legacy />
      <Footer />
    </main>
  );
}

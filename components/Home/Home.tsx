"use client";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Services from "./Services/Services";
import WhyChoose from "./WhyChoose/WhyChoose";
import Price from "./Price/Price";
import ClientReview from "./ClientReview/ClientReview";
import Order from "./Order/Order";
import Contact from "./Contact/Contact";

const Home = () => {
  // Load AOS only in the browser, then start it once
  useEffect(() => {
    const initAOS = async () => {
      const AOS = (await import("aos")).default;
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAOS();
  }, []);

  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Services />
      <WhyChoose />
      <Price />
      <ClientReview />
      <Order />
      <Contact />
    </div>
  );
};

export default Home;

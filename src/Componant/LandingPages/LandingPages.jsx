import React from "react";
import Main from "./Main";
import Section2 from "./Section2";
import ServicesSection from "./ServicesSection";
import TestimonialsCarousel from "./CarsouleSection";
import FAQSection from "./FAQSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

export default function LandingPages() {
  return (
    <>
      <Main/>
      <Section2/>
      <ServicesSection/>
      <TestimonialsCarousel/>
      <FAQSection/>
      <ContactSection/>
      <Footer/>
    </>
  );
}

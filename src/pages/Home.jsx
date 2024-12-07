import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
import Navdetails from "../components/Navdetails";
import Number from "../components/Number";
import QuoteForm from "../components/QuoteForm";
import AboutUs from "../components/AboutUs";
import Discover from "../components/Discover";
import BenefitsSection from "../components/BenefitsSection";
import ClientTestimonials from "../components/ClientTestimonials";
import Footer from "../components/Footer";


function Home() {
  return (
    <div>
      <Navbar />
      <Navdetails />
      <Number />
      <QuoteForm />
      <AboutUs />
      <Discover />
      <BenefitsSection />
      <ClientTestimonials />
      <Footer />
    
    </div>
  );
}

export default Home;

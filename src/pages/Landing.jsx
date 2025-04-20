import React from "react";
import FullPageCarousel from "../components/Carousel";
import Navbar from "../components/Navbar";
import MenuSection from "../components/MenuSection";
import LocationButton from "../components/LocationButton";
import About from "../components/About";
import OrderTimeline from "../components/OrderTimeline";
import FeedbackSection from "../components/FeedbackSection";
import Footer from "../components/Footer";

const Landing = () => {
  return (
    <div>
      <Navbar /> {/* Absolute inside relative */}
      <FullPageCarousel />
      <LocationButton />
      <About />
      <MenuSection />
      <OrderTimeline />
      <FeedbackSection />
      <Footer />
    </div>
  );
};

export default Landing;

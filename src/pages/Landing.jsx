import React from "react";
import FullPageCarousel from "../components/Carousel";
import Navbar from "../components/Navbar";
import MenuSection from "../components/MenuSection";
import LocationButton from "../components/LocationButton";

const Landing = () => {
  return (
    <div>
      <Navbar /> {/* Absolute inside relative */}
      <FullPageCarousel />
      <LocationButton />
    </div>
  );
};

export default Landing;

import React from "react";
import HeroSection from "./HeroSection";
import AwardsSection from "./AwardsSection";
import StatsSection from "./StatsSection";
import PricingSection from "./PricingSection";
import EducationSection from "./EducationSection";
import OpenAccount from "../../../OpenAccount";
import Navbar from "../../../Navbar";
import Footer from "../../../Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AwardsSection />
      <StatsSection />
      <PricingSection />
      <EducationSection />
      <OpenAccount />
      <Footer />
    </>
  );
};

export default HomePage;

import React from 'react'
import HeroSection from "./HeroSection"
import AwardsSection from "./AwardsSection"
import StatsSection from "./StatsSection"
import PricingSection from "./PricingSection"
import EducationSection from "./EducationSection"

import Navbar from "./Navbar"



const HomePage = () => {
  return (
    <>
    <Navbar /> 
    <HeroSection />
    <AwardsSection />
    <StatsSection />
    <PricingSection />
    <EducationSection />

    </>
  )
}

export default HomePage
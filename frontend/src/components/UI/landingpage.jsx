import Hero from "../landingPage/hero";


import React from 'react';
import Navigation from "../landingPage/navigation";
import HowItWorks from "../landingPage/howItWorks";
import WhyChooseUs from "../landingPage/whyChooseUs";

const LandingPage = () => {
  return (
    <div>
      {/* <Navigation/> */}
        <Hero/>
        <HowItWorks/>
        <WhyChooseUs/>
    </div>
  );
};

export default LandingPage;

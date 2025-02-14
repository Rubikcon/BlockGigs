import Hero from "../landingPage/hero";


import React from 'react';
import Navigation from "../landingPage/navigation";
import HowItWorks from "../landingPage/howItWorks";

const LandingPage = () => {
  return (
    <div>
      {/* <Navigation/> */}
        <Hero/>
        <HowItWorks/>
    </div>
  );
};

export default LandingPage;

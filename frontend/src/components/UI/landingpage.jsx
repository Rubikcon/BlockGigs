import Hero from "../landingPage/hero";

import React from "react";
import HowItWorks from "../landingPage/howItWorks";
import WhyChooseUs from "../landingPage/whyChooseUs";
import Testimonial from "../landingPage/testimonial";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonial />
    </div>
  );
};

export default LandingPage;

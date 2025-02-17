import Hero from "../landingPage/hero";

import React from "react";
import HowItWorks from "../landingPage/howItWorks";
import WhyChooseUs from "../landingPage/whyChooseUs";
import Testimonial from "../landingPage/testimonial";
import Newsletter from "../landingPage/newsletter";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonial />
      <Newsletter />
    </div>
  );
};

export default LandingPage;

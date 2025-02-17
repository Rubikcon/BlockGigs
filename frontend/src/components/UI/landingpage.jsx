import Hero from "../landingPage/hero";

import React from "react";
import HowItWorks from "../landingPage/howItWorks";
import WhyChooseUs from "../landingPage/whyChooseUs";
import Testimonial from "../landingPage/testimonial";
import Newsletter from "../landingPage/newsletter";
import Footer from "../footer";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonial />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default LandingPage;

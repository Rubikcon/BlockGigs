import Hero from "./hero";
import React from "react";
import Pagination from "./Pagination";
import OpenGigs from "./OpenGigs";
import TopTechTalent from "./TopTechTalent";
import Footer from "../footer";

import TalentProfileViewOnly from "../Cards/TalentCardViewonly";
const GigsPage = () => {
  return (
    <div>
      <Hero />
      <OpenGigs />
      <hr />
      <TalentProfileViewOnly />
      <hr />
      <TopTechTalent />

      <Footer />
    </div>
  );
};

export default GigsPage;

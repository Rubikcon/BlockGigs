import Hero from "./hero";
import React from "react";
import Pagination from "./Pagination";
import OpenGigs from "./OpenGigs";
import TopTechTalent from "./TopTechTalent";

const GigsPage = () => {
  return (
    <div>
      <Hero />
      <OpenGigs />
      <TopTechTalent />
    </div>
  );
};

export default GigsPage;

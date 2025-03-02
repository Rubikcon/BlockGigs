import Hero from "./hero";
import React from "react";
import Pagination from "./Pagination";
import OpenGigs from "./OpenGigs";
import TopTechTalent from "./TopTechTalent";
import Footer from "../footer";

const GigsPage = () => {
  return (
    <div>
      <Hero />
      <OpenGigs />
      <TopTechTalent />
      <Footer />
    </div>
  );
};

export default GigsPage;

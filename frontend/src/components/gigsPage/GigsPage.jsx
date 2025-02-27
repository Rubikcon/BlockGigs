import Hero from "./hero";
import React from "react";
import Pagination from "./Pagination";
import OpenGigs from "./OpenGigs";

const GigsPage = () => {
  return (
    <div>
      <Hero />
      <OpenGigs />
      <Pagination />
    </div>
  );
};

export default GigsPage;

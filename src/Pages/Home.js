import React from "react";
import Ads from "../Component/Ads";
import PopularSection from "../Component/PopularSection";

const Home = ({ books }) => {
  return (
    <>
      <Ads />
      <PopularSection books={books} />
    </>
  );
};

export default Home;

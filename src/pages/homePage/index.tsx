import React from "react";
import AiCollection from "../../Components/AiCollection";
import Auctions from "../../Components/HomePage/Auctions";
import Banner from "../../Components/HomePage/Banner";
import StartJourney from "../../Components/StartJourney";
import Trade from "../../Components/Trade";
import Collection from "../collection";

const Home = () => {
  return (
    <>
      <Banner />
      <Auctions />
      <StartJourney />
      <AiCollection />
      <Trade />
      <Collection/>
    </>
  );
};

export default Home;

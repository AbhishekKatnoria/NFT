import React from "react";
import AiCollection from "../../Components/HomePage/AiCollection";
import { MarketplaceData } from "../../json";

const MarketPlace = () => {
  return (
    <>
      <AiCollection data={MarketplaceData} />
    </>
  );
};

export default MarketPlace;

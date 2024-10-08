import AiCollection from "../../Components/HomePage/AiCollection";
import Auctions from "../../Components/HomePage/Auctions";
import Banner from "../../Components/HomePage/Banner";
import StartJourney from "../../Components/HomePage/StartJourney";
import Trade from "../../Components/HomePage/Trade";
import Governance from "../../Components/HomePage/Governance";
import Subscribe from "../../Components/HomePage/Subscribe";
import { AiCollectionData, BannerData } from "../../json";

const Home = () => {
  return (
    <>
      <Banner data={BannerData} />
      <Auctions />
      <StartJourney />
      <AiCollection data={AiCollectionData} />
      <Trade />
      <Governance />
      <Subscribe />
    </>
  );
};

export default Home;

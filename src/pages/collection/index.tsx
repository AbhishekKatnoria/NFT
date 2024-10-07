import AiCollection from "../../Components/HomePage/AiCollection";
import Subscribe from "../../Components/HomePage/Subscribe";
import { OurPopularAICollection } from "../../json";

const Collection = () => {
  return (
    <>
      <AiCollection data={OurPopularAICollection}/>
      <Subscribe/>
    </>
  )
}

export default Collection;
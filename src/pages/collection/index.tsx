import AiCollection from "../../Components/HomePage/AiCollection";
import Subscribe from "../../Components/HomePage/Subscribe";
import { AllAiImages } from "../../json";

const Collection = () => {

  const cards = JSON.parse(localStorage.getItem(`likes`) || '[]');
  const data = {
    cards,
    heading: AllAiImages.heading,
    desc: AllAiImages.desc,
    layout: AllAiImages.layout,
  };

  return (
    <>
      <AiCollection data={data} />
      <Subscribe />
    </>
  )
}

export default Collection;
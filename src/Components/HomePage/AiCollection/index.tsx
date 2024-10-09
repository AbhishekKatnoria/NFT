import { useEffect, useState } from "react";
import { AiCollectionProp } from "../../../Types";
import { useNavigate } from "react-router-dom";

interface AiCollection {
  data: AiCollectionProp;
}

const AiCollection = ({ data }: AiCollection) => {
  const AiCollectionData = data;
  const [active, setactive] = useState(0);

  const [likes, setLikes] = useState<boolean[]>(Array(AiCollectionData?.cards && AiCollectionData?.cards.length).fill(false));
  console.log(likes)
  function handleChange({ items }: any) {
    const cards = JSON.parse(localStorage.getItem(`likes`) || '[]');
    const itemString = JSON.stringify(items);

    const cardExists = cards.some((item: any) => JSON.stringify(item) === itemString);

    if (!cardExists) {
      cards.push(items);
      localStorage.setItem("likes", JSON.stringify(cards));
    }
  }

  function handleActive({ i }: any) {
    console.log([...likes])
    const updatedLikes = [...likes];
    updatedLikes[i] = !updatedLikes[i];
    setLikes(updatedLikes);
  }

  return (
    <div className={`my-[120px] ${AiCollectionData?.layout ? "max-w-[1026px]" : "max-w-[1140px]"} w-full mx-auto text-center`}>
      <div className="max-w-[878px] mx-auto text-center mb-10">
        {AiCollectionData?.heading ? (
          <h2 className="mb-6 tracking-ab">{AiCollectionData?.heading}</h2>
        ) : null}
        {AiCollectionData?.desc ? <p>{AiCollectionData?.desc}</p> : null}
      </div>

      {AiCollectionData?.categories && AiCollectionData?.categories?.length > 0 && <ul className="flex justify-between items-center">
        {AiCollectionData?.categories?.map((item, i) => (
          <div className={`py-3 px-6 cursor-pointer ${active === i ? "background-grident active" : "gradient-border"}`} key={i} onClick={() => setactive(i)}>
            <li >{item?.title}</li>
          </div>
        ))}
      </ul>}

      {AiCollectionData?.cards && <div className={`grid ${AiCollectionData?.layout ? "max-w-[772px] grid-cols-2 gap-x-7 gap-y-10 " : " grid-cols-3 gap-y-20 gap-x-3"} mt-[120px] w-full mx-auto`}>
        {AiCollectionData?.cards?.map((items, i) => {
          const gridArea = i === 0
            ? "1 / 1 / 5 / 2"
            : i === 1
              ? "2 / 2 / 6 / 3"
              : i === 2
                ? "5 / 1 / 9 / 2"
                : i === 3
                  ? "6 / 2 / 10 / 3"
                  : i === 4
                    ? "9 / 1 / 14 / 2"
                    : "10 / 2 / 14 / 3";
          return (
            <div className={`h-[367px] relative flex items-end`} key={i}
              style={AiCollectionData?.layout ? { gridArea } : {}}
            >
              <img src={items?.img} alt="" key={i} className="absolute top-0  w-full h-full rounded-xl object-cover z-10" />
              <div className="flex flex-col z-20 relative w-full blur-bg">
                <div className="my-[18px] mx-[24px] ">
                  <div className="flex justify-between items-center mb-2">
                    <h3>{items?.name}</h3>
                    {
                      <img src={likes[i] ? "/HomePage/heart.svg" : items?.like} alt="Like" onClick={() => { handleChange({ items }); handleActive({ i }); }} className="cursor-pointer"
                      />}
                  </div>
                  <div className="flex justify-between items-center">
                    <p>Price</p>
                    <span>{items?.price}</span>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>}
    </div>
  );
};

export default AiCollection;

import { useState } from "react";
import { AiCollectionData } from "../../../json";

const AiCollection = () => {
  const [active, setactive] = useState(0);

  return (
    <div className="my-[180px] max-w-[1026px] w-full mx-auto text-center">
      <div className="max-w-[878px] mx-auto text-center mb-10">
        {AiCollectionData?.heading ? (
          <h2 className="mb-6 tracking-ab">{AiCollectionData?.heading}</h2>
        ) : null}
        {AiCollectionData?.desc ? <p>{AiCollectionData?.desc}</p> : null}
      </div>

      <ul className="flex justify-between items-center">
        {AiCollectionData?.categories?.map((item, i) => (
          <div className={`py-3 px-6 cursor-pointer ${active === i ? "background-grident active" : "gradient-border"}`} key={i} onClick={() => setactive(i)}>
            <li >{item?.title}</li>
          </div>
        ))}
      </ul>

      {AiCollectionData?.cards.length > 0 && <div className="grid grid-cols-2 mt-[120px] w-full max-w-[772px] mx-auto gap-x-7 gap-y-10 ">
        {AiCollectionData?.cards?.map((items, i) => {

          const gridArea = i === 0
            ? "1 / 1 / 5 / 2"
            : i === 1
              ? "2 / 2 / 6 / 3"
              : i === 2
                ? "5 / 1 / 9 / 2"
                : "6 / 2 / 10 / 3";
          return (
            <div className={`h-[367px] relative flex items-end`} key={i}
              style={{ gridArea }}
            >
              <img src={items?.img} alt="" key={i} className="absolute top-0  w-full h-full rounded-xl object-cover z-10" />
              <div className="flex flex-col z-20 relative w-full blur-bg">
                <div className="my-[18px] mx-[24px] ">
                  <div className="flex justify-between items-center mb-2">
                    <h3>{items?.name}</h3>
                    <img src={items?.like} alt="Like" />
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

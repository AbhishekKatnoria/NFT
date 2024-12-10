import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Cards } from "../../../Types";
import Subscribe from "../../../Components/HomePage/Subscribe";
import AiCollection from "../../../Components/HomePage/AiCollection";

const ItemDetail = () => {
  let { id } = useParams();
  const [data, setData] = useState<Cards[] | undefined>(undefined);
  const [count, setCount] = useState<number>(1);
  const [price, setPrice] = useState<number>(0);

  useEffect(() => {
    const cards = JSON.parse(localStorage.getItem(`likes`) || "[]");
    if (id) {
      const parsedId = parseInt(id);
      if (!isNaN(parsedId)) {
        const card = cards.filter((item: any) => item.id === parsedId);
        setData(card);
        let buyPrice = card.map((items: any) => items.price);
        let prices = parseInt(buyPrice);
        setPrice(prices);
      }
    }
  }, [id]);

  const handleSub = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleAdd = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div className="my-[120px] max-w-[1026px] w-full mx-auto text-center">
        <h1 className="mb-6 tracking-ab">AI Marketplace</h1>
        <p>
          Our AI marketplace specializes in offering unique AI-generated NFTs,
          including algorithmically created art, digital collectibles, and
          AI-enhanced images. These NFTs represent cutting-edge AI creativity,
          providing a new way for collectors and enthusiasts to own, trade, and
          showcase innovative digital assets.
        </p>
        <div className="mt-[100px] flex gap-10 items-center">
          {data?.map((items, i) => (
            <>
              <div className="w-full max-w-[588px] h-[580px]">
                <img
                  src={items?.img}
                  alt={items?.alt}
                  className="object-cover rounded-[20px] w-full h-full"
                />
              </div>
              <div className="w-full max-w-[467px]">
                <h2 className="text-font5xl leading-lineHeight4xl mb-3 text-start">
                  {items?.name}
                </h2>
                <span className="text-fontBase mb-[17px] inline-block text-start leading-7 tracking-ab">
                  In our marketplace, we feature a unique collection of NFTs
                  inspired by cyborg alien mechas—futuristic, biomechanical
                  beings that blend advanced technology with extraterrestrial
                  elements. These digital artworks depict powerful, armored
                  hybrids of alien and machine, showcasing intricate designs,
                  glowing elements, and otherworldly aesthetics. Perfect for
                  fans of sci-fi and cyberpunk genres, each NFT captures the
                  essence of a universe where technology and alien biology merge
                  into formidable, otherworldly warriors.
                </span>
                <div className="flex w-full gap-3">
                  <div className="bg-white bg-opacity-20 flex justify-between items-center pt-[18px] pb-[18px] w-full max-w-[148px] rounded-xl pr-5 pl-5">
                    <img
                      src="/AiCollectionImages/sub.svg"
                      alt=""
                      className="w-[20px] h-[20px] aspect-square cursor-pointer"
                      onClick={handleSub}
                    />
                    <p className="text-3xl leading-9 font-inriasans font-bold">
                      {count}
                    </p>
                    <img
                      src="/AiCollectionImages/add.svg"
                      alt=""
                      className="w-[20px] h-[20px] aspect-square cursor-pointer"
                      onClick={handleAdd}
                    />
                  </div>
                  <div className="w-full max-w-[280px] bg-white bg-opacity-20 rounded-xl flex justify-center items-center gap-3 font-inriasans">
                    <p className="text-[32px] leading-9 font-inriasans font-bold">
                      Buy now for
                    </p>
                    <p className="text-[32px] leading-9 font-inriasans font-bold">
                      {count * price}$
                    </p>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      <AiCollection />
      <Subscribe />
    </>
  );
};

export default ItemDetail;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Cards } from "../../../Types";

const ItemDetail = () => {
  let { id } = useParams();
  const [data, setData] = useState<Cards[] | undefined>(undefined);
  useEffect(() => {
    const cards = JSON.parse(localStorage.getItem(`likes`) || "[]");
    console.log(cards);
    if (id) {
      const parsedId = parseInt(id);
      if (!isNaN(parsedId)) {
        const card = cards.filter((item: any) => item.id === parsedId);
        setData(card);
      }
    }
  }, [id]);
  console.log(data);

  return (
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
            <img
              src={items?.img}
              alt={items?.alt}
              className="object-cover rounded-[20px]"
            />
            <div>
              <h2 className="text-font5xl leading-lineHeight4xl mb-3">
                {items?.name}
              </h2>
              <span className="text-fontSm">
                In our marketplace, we feature a unique collection of NFTs
                inspired by cyborg alien mechas—futuristic, biomechanical beings
                that blend advanced technology with extraterrestrial elements.
                These digital artworks depict powerful, armored hybrids of alien
                and machine, showcasing intricate designs, glowing elements, and
                otherworldly aesthetics. Perfect for fans of sci-fi and
                cyberpunk genres, each NFT captures the essence of a universe
                where technology and alien biology merge into formidable,
                otherworldly warriors.
              </span>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default ItemDetail;

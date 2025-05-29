import { useEffect, useState } from "react";
import { AiCollectionProp, Cards, Categories } from "../../../Types";
import { useNavigate } from "react-router-dom";

interface AiCollection {
  data?: AiCollectionProp;
  items?: Cards;
}

interface Index {
  i: number;
}

interface ab {
  name: string;
  like: string;
  price: string;
}

const AiCollection = ({ data }: AiCollection) => {
  const AiCollectionData = data;
  const [active, setActive] = useState(0);
  const [category, setCategory] = useState<Cards[] | undefined>(undefined);
  const [storageData, setStorageData] = useState<Cards[] | undefined>(
    undefined
  );
  const navigate = useNavigate();

  useEffect(() => {
    const cards = JSON.parse(localStorage.getItem(`likes`) || "[]");
    setStorageData(cards);

    if (AiCollectionData?.category && AiCollectionData?.category?.length > 0) {
      setCategory(data?.category);
    }
  }, []);

  useEffect(() => {
    if (
      AiCollectionData?.categories &&
      AiCollectionData.categories.length > 0
    ) {
      handleCategories({ id: AiCollectionData.categories[0].id });
    }
  }, [AiCollectionData]);

  // Function to handle category selection
  function handleCategories({ id }: Categories) {
    setActive(id ?? 0);
    if (AiCollectionData) {
      const foundCategory = AiCollectionData?.categories?.find(
        (category) => category.id === id
      );
      if (foundCategory) {
        const title = foundCategory.title;
        if (title && title in AiCollectionData) {
          const cards = AiCollectionData[title as keyof AiCollectionProp];
          if (Array.isArray(cards) || cards === undefined) {
            setCategory(cards);
          }
        } else {
          setCategory([]);
        }
      }
    }
  }

  // Function to handle adding/removing items from local storage
  const handleChange = ({ items }: AiCollection, event: any) => {
    event.stopPropagation();
    const cards = JSON.parse(localStorage.getItem("likes") || "[]");
    const itemString = JSON.stringify(items);
    const cardExists = cards.some(
      (item: Categories) => JSON.stringify(item) === itemString
    );

    if (!cardExists) {
      cards.push(items);
      localStorage.setItem("likes", JSON.stringify(cards));
      setStorageData(cards);
    }
  };

  // Function to handle removing items from local storage
  function handleRemove(i: number) {
    const exists = storageData?.some((item) => item.id === i);
    if (exists) {
      if (storageData) {
        const updatedData = storageData.filter((item) => item.id !== i);
        setStorageData(updatedData);
        localStorage.setItem("likes", JSON.stringify(updatedData));
        setTimeout(() => {
          window.location.reload();
        }, 300);
      }
    }
  }

  // Function to handle item click and navigate to item detail page
  const handleClick = (itemId: any, event: any) => {
    event.stopPropagation();
    navigate(`/market-place/item-detail/${itemId}`);
  };

  // // Effect to navigate to collection page after 2 seconds if storageData has items
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (storageData && storageData.length >= 2) {
      timeoutId = setTimeout(() => {
        navigate("/collection");
      }, 2000);
    }
    return () => clearTimeout(timeoutId);
  }, [storageData, navigate]);

  return (
    <div
      data-aos="fade-left"
      className={`my-[120px] ${
        AiCollectionData?.layout ? "max-w-[1026px]" : "max-w-[1140px]"
      } w-full mx-auto text-center`}
    >
      <div className="max-w-[878px] mx-auto text-center mb-10">
        {AiCollectionData?.heading ? (
          <h2 className="mb-6 tracking-ab">{AiCollectionData?.heading}</h2>
        ) : null}
        {AiCollectionData?.desc ? <p>{AiCollectionData?.desc}</p> : null}
      </div>

      {AiCollectionData?.categories &&
        AiCollectionData?.categories?.length > 0 && (
          <ul className="flex justify-between items-center">
            {AiCollectionData?.categories?.map((item, i) => {
              let id = item?.id;
              return (
                <div
                  className={`py-3 px-6 cursor-pointer ${
                    active === i
                      ? "background-grident active"
                      : "gradient-border gradient-border-effect"
                  }`}
                  key={id}
                  onClick={() => handleCategories({ id })}
                >
                  <li>{item?.title}</li>
                </div>
              );
            })}
          </ul>
        )}

      {category && category?.length > 0 ? (
        <div
          className={`grid ${
            AiCollectionData?.layout
              ? "max-w-[772px] grid-cols-2 gap-x-7 gap-y-10 "
              : " grid-cols-3 gap-y-20 gap-x-3"
          } mt-[120px] w-full mx-auto`}
        >
          {category?.map((items, i) => {
            const gridArea =
              i === 0
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
            const isItemInStorage = storageData?.some(
              (item) => item.id === items.id
            );
            return (
              <>
                <div
                  className={`h-[367px] relative flex items-end ${
                    isItemInStorage ? "cursor-pointer" : ""
                  }`}
                  key={i}
                  style={AiCollectionData?.layout ? { gridArea } : {}}
                  onClick={(e) => {
                    if (isItemInStorage) {
                      handleClick(items?.id, e);
                    }
                  }}
                >
                  <img
                    src={items?.img}
                    alt=""
                    key={i}
                    className="absolute top-0  w-full h-full rounded-xl object-cover z-10"
                  />
                  <div className="flex flex-col z-20 relative w-full blur-bg">
                    <div className="my-[18px] mx-[24px] ">
                      <div className="flex justify-between items-center mb-2">
                        <h3>{items?.name}</h3>
                        <img
                          src={
                            isItemInStorage
                              ? "/HomePage/heart.svg"
                              : items?.like
                          }
                          alt="Like"
                          onClick={(e) => {
                            handleChange({ items }, e);
                          }}
                          className="cursor-pointer transition-transform duration-300 hover:scale-125"
                        />
                      </div>
                      <div className="flex justify-between items-center">
                        <p>Price</p>
                        <span>{items?.price}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      ) : (
        <>
          {AiCollectionData &&
            AiCollectionData?.cards &&
            AiCollectionData?.cards.length > 0 && (
              <div
                className={`grid ${
                  AiCollectionData?.layout
                    ? "max-w-[772px] grid-cols-2 gap-x-7 gap-y-10 "
                    : " grid-cols-3 gap-y-20 gap-x-3"
                } mt-[120px] w-full mx-auto`}
              >
                {AiCollectionData?.cards.map((items: Cards, i) => {
                  const gridArea =
                    i === 0
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
                    <div
                      className={`h-[367px] relative flex items-end cursor-pointer`}
                      key={i}
                      style={AiCollectionData?.layout ? { gridArea } : {}}
                      onClick={(e) => {
                        handleClick(items?.id, e);
                      }}
                    >
                      <img
                        src={items?.img}
                        alt=""
                        className="absolute top-0 w-full h-full rounded-xl object-cover z-10"
                      />
                      <div className="flex flex-col z-20 relative w-full blur-bg">
                        <div className="my-[18px] mx-[24px]">
                          <div className="flex justify-between items-center mb-2">
                            <h3>{items?.name}</h3>
                            <img
                              src={
                                storageData?.some(
                                  (item) => item.id === items.id
                                )
                                  ? "/HomePage/heart.svg"
                                  : items.like
                              }
                              alt="Like"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleRemove(items?.id ?? 0);
                              }}
                              className="cursor-pointer transition-transform duration-300 hover:scale-125"
                            />
                          </div>
                          <div className="flex justify-between items-center">
                            <p>Price</p>
                            <span>{items?.price}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
        </>
      )}
    </div>
  );
};
export default AiCollection;

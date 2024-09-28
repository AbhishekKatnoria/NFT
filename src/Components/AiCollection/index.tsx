import { AiCollectionData } from "../../json";

const AiCollection = () => {
  return (
    <div className="my-[180px] max-w-[1026px] w-full mx-auto text-center">
      <div className="max-w-[878px] mx-auto text-center mb-10">
        {AiCollectionData?.heading ? (
          <h2 className="mb-6 tracking-ab">{AiCollectionData?.heading}</h2>
        ) : null}
        {AiCollectionData?.desc ? <p>{AiCollectionData?.desc}</p> : null}
      </div>

      <div>
        <ul className="flex justify-between items-center">
          {AiCollectionData?.categories?.map((item, i) => (
            <li key={i}>{item?.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AiCollection;

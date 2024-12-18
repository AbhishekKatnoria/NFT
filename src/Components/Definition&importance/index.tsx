import { DefinitionProps } from "../../Types";

interface Definition {
  data: DefinitionProps;
}

const Definition = ({ data }: Definition) => {
  return (
    <div className="mt-[120px]">
      <h2 className="text-center">{data?.title}</h2>
      <div className="flex flex-col mt-[220px]">
        {data?.card?.map((item, i) => (
          <div
            className={`flex w-full max-w-[1140px] gap-[50px] ${
              i === data.card.length - 1 ? "mb-[0]" : "mb-[220px]"
            } ${i % 2 !== 0 ? "flex-row-reverse" : ""}`}
            key={i}
          >
            <div className="rounded-xl bg-backgroundBlack gradient-border w-full max-w-[582px]">
              <img src={item?.img} alt="" className="m-auto my-[149px]" />
            </div>
            <div className="w-full max-w-[508px] mt-[30px]">
              <h2 className="mb-[24px]">{item?.heading}</h2>
              <p className="tracking-ab">{item?.subHeading}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Definition;

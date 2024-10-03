import { TradeData } from "../../json";

const Trade = () => {
  return (
    <div className="my-[180px]">
      {TradeData?.heading && (
        <div className="mb-[40px]">
          <h2>{TradeData?.heading}</h2>
        </div>
      )}
      {TradeData?.content && (
        <div className="w-full max-w-[408px]">
          {TradeData?.content?.map((item, i) => (
            <div
              className="flex justify-start items-start gap-6 border-underline"
              key={i}
            >
              <img src={TradeData?.img} alt="" className="mt-[40px]" />
              <div className="pt-10">
                <h3 className="mb-[10px] font-bold">{item?.title}</h3>
                <p className="pb-10">{item?.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Trade;

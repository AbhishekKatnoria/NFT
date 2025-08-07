import { TradeData } from "../../../json";

const Trade = () => {
  return (
    <div data-aos="fade-up-right" className="my-[220px]">
      {TradeData?.heading && (
        <div className="mb-[40px]">
          <h2>{TradeData?.heading}</h2>
        </div>
      )}
      {TradeData?.content?.length > 0 && (
        <div className="flex justify-between">
          <div className="w-full max-w-[408px]">
            {TradeData?.content?.map((item, i) => (
              <div
                className="flex justify-start items-start gap-6 border-underline"
                key={i}
              >
                <img src={TradeData?.img1} alt="" className="mt-[40px]" loading="lazy"/>
                <div className="pt-10">
                  <h3 className="mb-[10px] font-bold">{item?.title}</h3>
                  <p className="pb-10">{item?.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
          {TradeData?.img2 && (
            <div className="flex items-center justify-between linear-gradient-custom relative w-[292px]">
              <img src={TradeData?.img2} alt="" className="absolute -z-10" loading="lazy"/>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Trade;

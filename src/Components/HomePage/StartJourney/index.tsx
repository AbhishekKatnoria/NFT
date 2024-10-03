import { StartJourneryData } from "../../../json";

const StartJourney = () => {
  return (
    <div className="mt-[275px] mb-[180px]">
      <h2
        className="text-center mb-[120px]"
        dangerouslySetInnerHTML={{ __html: StartJourneryData?.heading }}
      />
      <div className="flex gap-6">
        {StartJourneryData?.cards.map((item, i) => (
          <div
            className=" flex flex-col gap-[18px] pt-10 pb-9 pl-[14px] pr-[14px] rounded-xl bg-backgroundBlack gradient-border"
            key={i}
          >
            <div className="inline-block">
              <img src={item?.img} alt="Cards" />
            </div>

            <h3 className="text-font5xl ">{item?.title}</h3>
            <p>{item?.subTitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StartJourney;

import { GovernanceData } from "../../../json";
import Button from "../../Button";

const Governance = () => {
  return (
    <div className="my-[180px]">
      <div className="mb-[120px]">
        <h2 dangerouslySetInnerHTML={{ __html: GovernanceData?.heading }} className="text-center" />
      </div>
      <div className="flex gap-6 ">
        {GovernanceData?.cards.map((item, i) => (
          <div
            className="flex justify-center items-center flex-col gap-[18px] py-[42px] pl-[14px] pr-[14px] rounded-xl bg-backgroundBlack gradient-border"
            key={i}
          >
            <div className="inline-block">
              <img src={item?.logo} alt="Cards" />
            </div>

            <h3 className="text-font5xl">{item?.name}</h3>
            <p>{item?.desc}</p>

            <div className="flex gap-[11px]">
              {
                item?.btn?.map((items, index) => (
                  <div key={index} className="flex justify-center items-center gap-[11px]">
                    {items?.label ? (
                      <Button variant="filled" css="rounded-[42px]">{items?.label}</Button>
                    ) : (
                      <Button variant="filled" css="rounded-[42px]">
                        <img src={items?.icon} alt="Button icon" className="p-[5px]" />
                      </Button>
                    )}
                  </div>
                ))
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Governance;
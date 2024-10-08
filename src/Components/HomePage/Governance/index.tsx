import { GovernanceData } from "../../../json";
import Button from "../../Button";

const Governance = () => {
  return (
    <div className="my-[220px]">
      <div className="mb-[120px]">
        {GovernanceData?.heading && <h2 dangerouslySetInnerHTML={{ __html: GovernanceData?.heading }} className="text-center" />}
      </div>
      {GovernanceData?.cards?.length > 0 && <div className="flex gap-6 ">
        {GovernanceData?.cards.map((item, i) => (
          <div
            className="flex justify-center items-center flex-col gap-[18px] py-[42px] pl-[14px] pr-[14px] rounded-xl bg-backgroundBlack gradient-border"
            key={i}
          >
            {item?.logo && <div className="inline-block">
              <img src={item?.logo} alt="Cards" />
            </div>}

            {item?.name && <h3 className="text-font5xl">{item?.name}</h3>}
            {item?.desc && <p className="text-center">{item?.desc}</p>}

            {item?.btn?.length > 0 && <div className="flex gap-[11px]">
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
            </div>}
          </div>
        ))}
      </div>}
    </div>
  )
}

export default Governance;
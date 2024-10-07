import { BannerProp } from "../../../Types";
import Button from "../../Button";

interface Banner {
  data: BannerProp;
}

const Banner = ({ data }: Banner) => {
  const BannerData = data;
  return (
    <div className="flex mt-[114px] gap-[105px] max-w-[1111px] mx-auto">
      <div className="py-3 max-w-[594px] w-full">
        {BannerData?.content?.heading && (
          <h1
            className="mb-5 tracking-ab"
            dangerouslySetInnerHTML={{ __html: BannerData?.content?.heading }}
          />
        )}
        <p className="mb-[30px]">{BannerData?.content?.subHeading}</p>
        {BannerData?.content?.btns && BannerData?.content?.btns?.length > 0 && (
          <div className="flex gap-[10px]">
            {BannerData?.content?.btns?.map((item, i) =>
              i === 0 ? (
                <Button variant="filled" css="rounded-[42px]" key={i}>
                  <img src={`${item?.img}`} alt="Wallet" />
                  {item?.label}
                </Button>
              ) : (
                <Button label={item?.label} css="rounded-[42px]" key={i}>
                  <img src={`${item?.img}`} alt="Arrow" />
                </Button>
              )
            )}
          </div>
        )}
      </div>
      {BannerData?.images?.length > 0 && (
        <div className="flex relative max-w-[411px] w-full">
          {BannerData?.images?.map((item, i) => (
            <div className={`bannerImages bannerImages${i + 1}`} key={i}>
              <img src={item?.img} alt={item?.alt} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Banner;

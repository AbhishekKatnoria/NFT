import { useEffect, useState } from "react";
import { BannerProp } from "../../../Types";
import Button from "../../Button";
import ConnectWallet from "../../ConnectWallet";

interface Banner {
  data: BannerProp;
}

const Banner = ({ data }: Banner) => {
  const [hasLoaded, setHasLoaded] = useState<boolean>(false);
  const BannerData = data;
  const [tip, settip] = useState<boolean>(false);

  // Set hasLoaded to true once the component is mounted (page is loaded)
  useEffect(() => {
    setHasLoaded(true);
  }, []);
  return (
    <div
      data-aos={!hasLoaded ? "fade-up" : ""}
      className="flex mt-[114px] gap-[105px] max-w-[1111px] mx-auto"
    >
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
                <Button
                  variant="filled"
                  css="rounded-[42px]"
                  key={i}
                  onClick={() => {
                    settip(true);
                  }}
                >
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
        <div className="flex relative max-w-[411px] w-full blueEffect">
          {BannerData?.images?.map((item, i) => (
            <div className={`bannerImages bannerImages${i + 1}`} key={i}>
              <img src={item?.img} alt={item?.alt} loading="lazy" />
            </div>
          ))}
        </div>
      )}

      {tip && <ConnectWallet onClick={() => settip(false)} />}
    </div>
  );
};

export default Banner;

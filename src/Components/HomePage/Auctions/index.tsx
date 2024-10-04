import { AuctionData } from "../../../json";

const Auctions = () => {
  return (
    <div className="mt-[120px] border-b-2  border-borderColor">
      {AuctionData?.length > 0 && <div className="flex justify-between mx-auto max-w-[991px] w-full pb-4">
        {
          AuctionData?.map((items, i) => (
            <div key={i} className="flex-1 text-center border-Line">
              <h1 className="text-font5xl pb-2 tracking-ab font-poppins font-bold">{items?.heading}</h1>
              <p className="text-font5xl leading-[150%]">{items?.subHeading}</p>
            </div>
          ))
        }
      </div>}
    </div>
  )
}
export default Auctions;
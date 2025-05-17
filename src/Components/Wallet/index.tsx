import { Link } from "react-router-dom";
import { WalletData } from "../../json";
import { Data } from "../ConnectWallet";

const Wallet = ({ onClick }: Data) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black w-screen h-screen z-40 bg-opacity-70">
      <div className="bg-black rounded-lg shadow-lg w-[441px] h-auto gradient-border z-10">
        <div className="flex justify-end pt-4 pr-4">
          <img
            src="/HomePage/cross.svg"
            alt=""
            className="p-2 text-end cursor-pointer"
            loading="lazy"
            onClick={() => {
              onClick();
            }}
          />
        </div>
        <div className="flex justify-center items-center pt-5 flex-col gap-5 mb-[30px]">
          <h2 className="text-[40px] leading-[120%]">Connect Wallet</h2>
          {WalletData?.walletCategory?.length > 0 &&
            WalletData?.walletCategory?.map((items, index) => (
              <Link
                to={items?.href}
                className="bg-white/20 w-full max-w-[341px] rounded-xl flex gap-4 px-10 py-[14px] cursor-pointer items-center"
                key={index}
              >
                <img src={items?.img} />
                <p className="text-xl ">{items?.heading}</p>
              </Link>
            ))}
        </div>
        <span className="text-center inline-block text-fontXs text-white/70 pb-10">
          We do not own your private keys and cannot access your funds without
          your confirmation
        </span>
      </div>
    </div>
  );
};

export default Wallet;

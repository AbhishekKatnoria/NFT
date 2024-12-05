import Button from "../Button";

const ConnectWallet = ({ onClick }: any) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 w-screen h-screen z-40">
      <div className="bg-black rounded-lg shadow-lg w-[441px] h-[355px]">
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
        <div className=" px-[50px]  pb-[40px]  flex flex-col justify-center items-center gap-4">
          <img
            src="/HomePage/conncetwallet.svg"
            alt=""
            className="w-[57px] h-[57px]"
            loading="lazy"
          />
          <h2 className="text-[40px] leading-[120%]">Connect Wallet</h2>
          <p className="text-center">
            Connect your wallet to securely access and manage your NFTs and
            transactions on our platform.
          </p>
          <Button
            label={"Sign in with wallet"}
            variant="filled"
            css="rounded-[42px] w-[341px] flex justify-center border-[0.5px]"
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default ConnectWallet;

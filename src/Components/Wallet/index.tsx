import React from "react";

const Wallet = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black w-screen h-screen z-40 bg-opacity-70">
      <div className="bg-black rounded-lg shadow-lg w-[441px] h-[355px] gradient-border z-10">
        <div className="flex justify-end pt-4 pr-4">
          <img
            src="/HomePage/cross.svg"
            alt=""
            className="p-2 text-end cursor-pointer"
            loading="lazy"
            onClick={() => {
            }}
          />
        </div>
        <div className="flex justify-center items-center pt-5">
          <h2 className="text-[40px] leading-[120%]">Connect Wallet</h2>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;

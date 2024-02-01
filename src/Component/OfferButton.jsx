import React from "react";

const OfferButton = () => {
  return (
    <div className="py-10">
      <div className="py-10 px-16 flex items-center justify-between bg-gradient-to-b from-[#393e46] to-[#21202b] rounded-[15px]">
        <div>
          <h5 className="font-bold text-white text-5xl">
            Let's try our service now!
          </h5>
          <p className="mt-4 text-sm font-normal text-[#b5aaaa]">
            Everything you need to accept card payments <br /> and grow your
            business anywhere on the planet.
          </p>
        </div>
        <button className="mt-10 px-6 rounded-[10px] py-2 bg-gradient-to-r from-[#9afcff] to-[#05b8be] font-semibold text-base text-black">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default OfferButton;

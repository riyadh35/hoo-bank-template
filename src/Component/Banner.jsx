import BannerImg from "../assets/banner-img.png";
import combine from "../assets/combined-shape.png";

const Banner = () => {
  return (
    <div>
      <div className="flex flex-row items-center justify-between -mt-10">
        <div className="pl-2">
          <div className="px-2 py-1 bg-[#393939] flex items-center justify-center rounded-md gap-2 w-[350px]">
            <img src={combine} alt="" className="w-[11.4px] h-[11.4px]" />
            <p className="text-[#e7e2e2] space-x-2">
              {" "}
              <span className="text-white">20%</span> DISCOUNT FOR{" "}
              <span className="text-white">1 MONTH</span> ACCOUNT
            </p>
          </div>
          <h1 className="text-white font-bold text-[65px] leading-[90px] mt-4">
            The Next <br />{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#96e5e8] to-[#DEF9FA]">
              Generation
            </span>
          </h1>
          <h2 className="text-white font-bold text-[65px] leading-[90px]">
            {" "}
            Payment Method
          </h2>
          <p className="mt-9 text-[#efdddd] text-sm font-thin">
            Our team of experts uses a methodology to identify <br /> the credit
            cards most likely to fit your needs.
            <br /> We examine annual percentage rates, annual fees.
          </p>
        </div>
        <div>
          <img src={BannerImg} alt="" className="w-[643px]" />
        </div>
      </div>
      <div className="flex items-center justify-between gap-5 pb-5 px-2">
        <div className="flex items-center justify-center gap-6">
          <h6 className="font-bold text-white text-4xl">3800+</h6>
          <p className="bg-clip-text text-transparent bg-gradient-to-r from-[#7feaed] to-[#DEF9FA] text-xl uppercase font-medium">
            user active
          </p>
        </div>
        <div className="flex items-center justify-center gap-6">
          <h6 className="font-bold text-white text-4xl">230+</h6>
          <p className="bg-clip-text text-transparent bg-gradient-to-r from-[#7feaed] to-[#DEF9FA] text-xl uppercase font-medium">
            Trusted by company
          </p>
        </div>
        <div className="flex items-center justify-center gap-6">
          <h6 className="font-bold text-white text-4xl">$230M+</h6>
          <p className="bg-clip-text text-transparent bg-gradient-to-r from-[#7feaed] to-[#DEF9FA] text-xl uppercase font-medium">
            TRANSACTION
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;

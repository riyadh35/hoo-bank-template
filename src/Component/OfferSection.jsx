import staricon from "../assets/star-icon.png";
import arrowicon from "../assets/rightarrow-icon.png";
import sendicon from "../assets/send-icon.png";

const OfferSection = () => {
  return (
    <div className="flex items-center justify-between gap-10 mt-20 pb-20">
      <div>
        <h4 className="font-semibold text-white text-5xl leading-[60px]">
          You do the business, <br /> we'll handle the money.
        </h4>
        <p className="pt-10 text-xs leading-5">
          With the right credit card, you can improve your financial life <br />{" "}
          by building credit, earning rewards and saving money. But <br /> with
          hundreds of credit cards on the market.
        </p>
        <button className="mt-10 px-6 rounded-[10px] py-2 bg-gradient-to-b from-[#81e8ec] to-[#3ea9ad] font-semibold text-base text-black">
          Get Started
        </button>
      </div>
      <div className="pr-10">
        <div className="flex items-center pb-3 px-4  gap-4">
          <img src={staricon} alt="" className="" />
          <div>
            <h6 className="font-bold text-base">Rewards</h6>
            <p className="pt-2 text-xs">
              The best credit cards offer some tantalizing <br /> combinations
              of promotions and prizes
            </p>
          </div>
        </div>
        <div className="flex items-center bg-[#2c2a35] border border-[#2c2a35] rounded-xl px-4  py-3 gap-4">
          <img src={arrowicon} alt="" />
          <div>
            <h6 className="font-bold text-base">Rewards</h6>
            <p className="pt-2 text-xs">
              We take proactive steps make sure your <br /> information and
              transactions are secure.
            </p>
          </div>
        </div>
        <div className="flex items-center px-4  pt-3 gap-4">
          <img src={sendicon} alt="" />
          <div>
            <h6 className="font-bold text-base">Rewards</h6>
            <p className="pt-2">
              A balance transfer credit card can save <br /> you a lot of money
              in interest charges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferSection;

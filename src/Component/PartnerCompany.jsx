import airbnb from "../assets/airbnb.png";
import binance from "../assets/binance.png";
import coinbase from "../assets/conibase.png";
import dropbox from "../assets/dropbox.png";

const PartnerCompany = () => {
  return (
    <div className="py-9 px-8 flex items-center justify-between w-[1065px]">
      <img src={airbnb} alt="" className="w-[192.25px] h-[60px]" />
      <img src={binance} alt="" className="w-[192.25px] h-[38.64px]" />
      <img src={coinbase} alt="" className="w-[189px] h-[41.25px]" />
      <img src={dropbox} alt="" className="w-[192.25px] h-[37.86px]" />
    </div>
  );
};

export default PartnerCompany;

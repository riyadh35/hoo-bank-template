import banner3 from "../assets/banner-3.png";
import appstore from "../assets/appstore-img.png";
import playstore from "../assets/playstore-img.png";
import banner4 from "../assets/card-img.png";

const Billing = () => {
  return (
    <div>
      <div className="py-14 flex flex-row items-center justify-between">
        <div>
          <img src={banner3} alt="" className="h-[455px]" />
        </div>
        <div>
          <h5 className="text-white font-bold font-serif text-5xl leading-[70px]">
            Easily control your <br /> billing & invoicing.
          </h5>
          <p className="mt-5 text-sm font-thin text-[#dcd0d0]">
            Elit enim sed massa etiam. Mauris eu adipiscing <br /> ultrices
            ametodio aenean neque. Fusce ipsum orci <br /> rhoncus aliporttitor
            integer platea placerat.
          </p>
          <div className="mt-6 flex items-center gap-5">
            <img src={appstore} alt="" />
            <img src={playstore} alt="" />
          </div>
        </div>
      </div>
      {/*  ---------------------------------------- */}
      <div className="py-14 flex flex-row-reverse items-center justify-between">
        <div>
          <img src={banner4} alt="" className="h-[455px]" />
        </div>
        <div>
          <h5 className="text-white font-bold font-serif text-5xl leading-[70px]">
            Find a better card deal <br /> in few easy steps.
          </h5>
          <p className="mt-5 text-sm font-thin text-[#dcd0d0] text-wrap">
            Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
            aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
          </p>
          <button className="mt-10 px-6 rounded-[10px] py-2 bg-gradient-to-b from-[#81e8ec] to-[#3ea9ad] font-semibold text-base text-black">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Billing;

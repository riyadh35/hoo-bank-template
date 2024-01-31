import semicolon from "../assets/semicolon.png";
import avator1 from "../assets/Image.png";
import avator2 from "../assets/Image-1.png";
import avator3 from "../assets/Image-2.png";

const Feedback = () => {
  return (
    <div className="py-5">
      <div className="flex items-center justify-between">
        <h5 className="font-bold text-5xl text-white leading-[60px]">
          What people are <br />
          saying about us
        </h5>
        <p className="pr-20 text-base text-[#ebdcdc] leading-6">
          Everything you need to accept card payments <br /> and grow your
          business anywhere on the planet.
        </p>
      </div>

      <div className="flex flex-row items-center justify-around  mt-16">
        {/* card 1 */}
        <div className=" p-6 bg-gradient-to-b from-[#35343c] to-[#090b17] w-[320px] h-[325px] rounded-md">
          <img src={semicolon} alt="" className="pt-8" />
          <p className="text-[#d8c2c2] text-lg pt-8">
            Money is only a tool. It will take you wherever you wish, but it
            will not replace you as the driver.
          </p>
          <div className="pt-8 flex items-center gap-4">
            <img src={avator1} alt="" className="w-12 h-12" />
            <div>
              <h6 className="font-semibold text-base text-[#e0dada]">
                Herman Jensen
              </h6>
              <p className="font-normal text-sm text-[#a39595]">
                Founder & Leader
              </p>
            </div>
          </div>
        </div>
        {/* card 2 */}
        <div className=" p-6 w-[320px] h-[325px] ">
          <img src={semicolon} alt="" className="pt-8" />
          <p className="text-[#d8c2c2] text-lg pt-8">
            Money makes your life easier. If you're lucky to have it, you're
            lucky.
          </p>
          <div className="pt-8 flex items-center gap-4">
            <img src={avator2} alt="" className="w-12 h-12" />
            <div>
              <h6 className="font-semibold text-base text-[#e0dada]">
                Steve Mark
              </h6>
              <p className="font-normal text-sm text-[#a39595]">
                Founder & Leader
              </p>
            </div>
          </div>
        </div>
        <div className=" p-6 w-[320px] h-[325px]">
          <img src={semicolon} alt="" className="pt-8" />
          <p className="text-[#d8c2c2] text-lg pt-8">
            Money is only a tool. It will take you wherever you wish, but it
            will not replace you as the driver.
          </p>
          <div className="pt-8 flex items-center gap-4">
            <img src={avator3} alt="" className="w-12 h-12" />
            <div>
              <h6 className="font-semibold text-base text-[#e0dada]">
                Kenn Gallagher
              </h6>
              <p className="font-normal text-sm text-[#a39595]">
                Founder & Leader
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;

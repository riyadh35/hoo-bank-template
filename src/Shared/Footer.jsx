import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import footerlogo from "../assets/footer-logo.png";

const Footer = () => {
  return (
    <div className="py-5  w-[1170px] mx-auto px-7 ">
      <div className="py-5 flex justify-between gap-4">
        {/*footer logo ------------------------------------------*/}
        <div>
          <img src={footerlogo} alt="" className="pb-3" />
          <p className="pt-2 text-base text-[#c1b8b8] font-normal">
            A new way to make the payments <br /> easy, reliable and secure.
          </p>
        </div>
        {/* Usefull links section --------------------------- */}
        <div>
          <h6 className="font-medium text-base text-[#e3d8d8]">
            Usefull Links
          </h6>
          <ul className="pt-4 text-[#ada1a1] flex flex-col gap-2">
            <li>
              <a href="">Content</a>
            </li>
            <li>
              <a href="">How it Works</a>
            </li>
            <li>
              <a href="">Create </a>
            </li>
            <li>
              <a href="">Explore </a>
            </li>
            <li>
              <a href="">Terms & Services </a>
            </li>
          </ul>
        </div>
        {/* Community section -------------------------- */}
        <div>
          <h6 className="font-medium text-base text-[#e3d8d8]">Community</h6>
          <ul className="pt-4 text-[#ada1a1] flex flex-col gap-2">
            <li>
              <a href="">Help Center</a>
            </li>
            <li>
              <a href="">Partners</a>
            </li>
            <li>
              <a href="">Suggestions</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Newsletters</a>
            </li>
          </ul>
        </div>
        {/* Partner section =---------------------==================================== */}
        <div>
          <h6 className="font-medium text-base text-[#e3d8d8]">Partner</h6>
          <ul className="pt-4 text-[#ada1a1] flex flex-col gap-2">
            <li>
              <a href="">Our Partner</a>
            </li>
            <li>
              <a href="">Become a Partner</a>
            </li>
          </ul>
        </div>
      </div>
      {/* divider j-------------------------------------------- */}
      <div className=" h-[1px] bg-[#6b6262] px-5"></div>
      {/* copyright & social icon section  */}
      <div className="py-5 flex justify-between items-center">
        <p className="text-[#b9b4b4]">
          Copyright ©️{new Date().getFullYear()} HooBank.All Rights Reserved by
          Riyad
        </p>
        <div className="flex items-center text-[#988f8f] gap-3">
          <span>
            <FaInstagram className="" />
          </span>
          <span>
            <FaFacebook />
          </span>
          <span>
            <IoLogoTwitter />
          </span>
          <span>
            <FaLinkedin />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

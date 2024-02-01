import Banner from "./Banner";
import Billing from "./Billing";
import Feedback from "./Feedback";
import OfferButton from "./OfferButton";
import OfferSection from "./OfferSection";
import PartnerCompany from "./PartnerCompany";

const Homepage = () => {
  return (
    <div className="w-[1170px] mx-auto px-7">
      <Banner />
      <OfferSection />
      <Billing />
      <Feedback />
      <PartnerCompany />
      <OfferButton />
    </div>
  );
};

export default Homepage;

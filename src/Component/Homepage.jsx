import Banner from "./Banner";
import Billing from "./Billing";
import Feedback from "./Feedback";
import OfferSection from "./OfferSection";

const Homepage = () => {
  return (
    <div className="w-[1240px] mx-auto px-7">
      <Banner />
      <OfferSection />
      <Billing />
      <Feedback />
    </div>
  );
};

export default Homepage;

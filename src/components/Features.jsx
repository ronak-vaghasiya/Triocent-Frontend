import FeatureType from "./FeatureType";
import { TbCalendarTime } from "react-icons/tb";
import { GiMoneyStack } from "react-icons/gi";
import { FaShippingFast } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";

const Features = () => {
  return (
    <div className="flex justify-center items-center font-[Sora] py-[80px] px-[30px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center lg:items-start justify-center pb-[50px] border-b-[0.5px] border-slate-300">
        <FeatureType
          icon={<TbCalendarTime />}
          title={"Member Discount"}
          subtitle={"Back guarantee under 7 days"}
        />
        <FeatureType
          icon={<GiMoneyStack />}
          title={"Money Return"}
          subtitle={"Support online 24 hours a day"}
        />
        <FeatureType
          icon={<FaShippingFast />}
          title={"Free Shipping"}
          subtitle={"Free shipping on all order"}
        />
        <FeatureType
          icon={<BiSupport />}
          title={"Online Support"}
          subtitle={"Online Support 24/7"}
        />
      </div>
    </div>
  );
};

export default Features;

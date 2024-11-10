import TopBanner from "./TopBanner";
import Navbar from "./Navbar";
import BreadCrumb from "./BreadCrumb";

const BgHeader = ({ title, section }) => {
  const getBackground = () => {
    if (section === "about") {
      return "bg-about-banner";
    } else if (section === "contact") {
      return "bg-contact-banner";
    } else if (section === "product") {
      return "bg-product-banner";
    } else {
      return "bg-default-banner";
    }
  };

  return (
    <div className="flex flex-col w-full max-w-[100vw] lg:px-[20px]">
      <TopBanner />
      {/* Navigate Card */}
      <div
        className={`${getBackground()} shadow-md w-full h-[500px] p-[35px] lg:rounded-[30px] bg-cover bg-center `}
      >
        <Navbar />
        <div className="font-[Sora] flex flex-col justify-center h-full w-full">
          <div className="text-white text-[55px] md:text-[60px]">{title}</div>
          <div className="text-white font-semibold">
            <BreadCrumb />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BgHeader;

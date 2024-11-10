import {
  GrLocation,
  GrMailOption,
  GrPhone,
  GrFacebookOption,
  GrLinkedinOption,
  GrInstagram,
} from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";

const TopBanner = () => {
  return (
    <div className="lg:flex hidden justify-center w-full px-[70px] py-[16px]">
      <div className="flex items-center justify-between w-full">
        {/* Contact Information */}
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            {/* Location */}
            <GrLocation className="text-li-blue" />
            <a
              href="#"
              className="text-gray hover:text-li-green text-sm transition-all duration-300"
              target="_blank"
            >
              Surat, Gujarat.
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center gap-2">
            <GrMailOption className="text-li-blue" />
            <a
              href="mailto:temp@gmail.com"
              className="text-gray hover:text-li-green text-sm transition-all duration-300"
              target="_blank"
            >
              info@triocenthealthcare.com
            </a>
          </div>

          {/* Contact */}
          <div className="flex items-center gap-2">
            <GrPhone className="text-li-blue" />
            <a
              href="tel:9876543210"
              className="text-gray hover:text-li-green text-sm transition-all duration-300"
              target="_blank"
            >
              Make a call : +91 9876543210
            </a>
          </div>
        </div>

        {/* Social Icons */}
        <div>
          <ul className="flex text-lg gap-6">
            <li>
              <a title="Facebook" href="#" target="_blank">
                <GrFacebookOption className="text-blue hover:text-li-green transition-all duration-300" />
              </a>
            </li>
            <li>
              <a title="Facebook" href="#" target="_blank">
                <FaXTwitter className="text-blue hover:text-li-green transition-all duration-300" />
              </a>
            </li>
            <li>
              <a title="Facebook" href="#" target="_blank">
                <GrLinkedinOption className="text-blue hover:text-li-green transition-all duration-300" />
              </a>
            </li>
            <li>
              <a title="Facebook" href="#" target="_blank">
                <GrInstagram className="text-blue hover:text-li-green transition-all duration-300" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;

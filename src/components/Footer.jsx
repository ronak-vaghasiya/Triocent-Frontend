import { Link } from "react-router-dom";
import { PiPhoneCall } from "react-icons/pi";
import { HiOutlineMail } from "react-icons/hi";
import { motion } from "framer-motion";
import logo from "../assets/logo-original.png";

// social icons links
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <motion.div
      className="flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 80, duration: 1 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="flex flex-col">
        {/* awards list */}
        <div className="flex justify-between items-center px-[35px] h-[125px] w-full bg-gradient-to-r from-blue to-li-blue md:rounded-ss-[30px] md:rounded-tr-[30px] shadow-md">
          <ul className="flex items-center text-white uppercase text-sm gap-4">
            <li>
              <Link to="/" className="hover:text-dark-blue duration-700">
                our mission
              </Link>
            </li>
            <li className="h-[6px] w-[6px] bg-li-green rounded-full"></li>
            <li>
              <Link to="/" className="hover:text-dark-blue duration-700">
                awards
              </Link>
            </li>
            <li className="h-[6px] w-[6px] bg-li-green rounded-full"></li>
            <li>
              <Link to="/" className="hover:text-dark-blue duration-700">
                experience
              </Link>
            </li>
            <li className="h-[6px] w-[6px] bg-li-green rounded-full"></li>
            <li>
              <Link to="/" className="hover:text-dark-blue duration-700">
                success story
              </Link>
            </li>
          </ul>

          <div className="flex gap-12 mr-32">
            <div className="flex items-center gap-4 font-bold text-white">
              <div className="flex items-center justify-center h-[50px] w-[50px] bg-white rounded-full text-xl text-dark-blue">
                <PiPhoneCall />
              </div>
              <div>
                <Link to="tel:9876543210">+91 9876543210</Link>
              </div>
            </div>

            <div className="flex items-center gap-4 font-bold text-white">
              <div className="flex items-center justify-center h-[50px] w-[50px] bg-white rounded-full text-xl text-dark-blue">
                <HiOutlineMail />
              </div>
              <div>
                <Link to="mailto:info@triocenthealthcare.com">
                  info@triocenthealthcare.com
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* footer list */}
        <div className="w-full my-16">
          <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start px-[50px]">
            {/* left */}
            <div className="flex flex-col items-start gap-y-6">
              {/* logo */}
              <div className="w-[280px]">
                <img src={logo} alt="Triocent Healthcare" />
              </div>

              {/* desc */}
              <p className="text-gray w-[60%]">
                The healthcare arena there was a felt need of developing new as
                well as upgrading the existing functioning.
              </p>

              {/* social icons */}
              <div className="flex gap-x-2">
                {/* facebbok */}
                <div className="flex items-center justify-center h-[40px] w-[40px] rounded-full border-[1px] text-lg border-blue text-blue hover:text-white hover:bg-blue ">
                  <FaFacebookF />
                </div>
                {/* Twitter */}
                <div className="flex items-center justify-center h-[40px] w-[40px] rounded-full border-[1px] text-lg border-blue text-blue hover:text-white hover:bg-blue ">
                  <FaXTwitter />
                </div>
                {/* LinkedIn */}
                <div className="flex items-center justify-center h-[40px] w-[40px] rounded-full border-[1px] text-lg border-blue text-blue hover:text-white hover:bg-blue ">
                  <FaLinkedinIn />
                </div>
                {/* Instagram */}
                <div className="flex items-center justify-center h-[40px] w-[40px] rounded-full border-[1px] text-lg border-blue text-blue hover:text-white hover:bg-blue ">
                  <FaInstagram />
                </div>
              </div>
            </div>

            {/* right */}
            <div className="flex flex-col gap-y-10 text-center md:text-left text-gray-700">
              <div className="font-[Sora] text-dark-blue text-[34px] mr-12">
                There is Only One Thing In The World We Want And That Is
                Hospital.
              </div>

              <div className="flex justify-between w-[90%]">
                {/* sec1 */}
                <div>
                  <h1 className="text-blue font-[Sora] font-bold mb-4">
                    Quick Links
                  </h1>
                  <ul className="space-y-2">
                    <li className="text-li-gray hover:text-gray duration-500">
                      <Link to={"/about"}>About Us</Link>
                    </li>
                    <li className="text-li-gray hover:text-gray duration-500">
                      <Link to={"/contact-us"}>Contact Us</Link>
                    </li>
                  </ul>
                </div>

                {/* sec2 */}
                <div>
                  <h1 className="text-blue font-[Sora] font-bold mb-4">
                    Working Time
                  </h1>
                  <ul className="space-y-2">
                    <li className="text-li-gray">
                      Monday - Friday: 9.00am - 5.00pm
                    </li>
                    <li className="text-li-gray">Saturday: 10.00am - 6.00pm</li>
                    <li className="text-li-gray">Sunday: Closed</li>
                  </ul>
                </div>

                {/* sec3 */}
                <div>
                  <h1 className="text-blue font-[Sora] font-bold mb-4">
                    Our Address
                  </h1>
                  <p className="text-li-gray">Surat, Gujarat, India.</p>
                </div>
              </div>

              <div className="w-full h-[0.5px] bg-li-gray opacity-50"></div>

              <div className="w-full flex justify-between">
                <div>
                  <Link
                    to={"/"}
                    className="text-li-gray hover:text-gray duration-500"
                  >
                    Terms and conditions
                  </Link>
                  {"  "}
                  <span className="opacity-50">|</span>
                  {"  "}
                  <Link
                    to={"/"}
                    className="text-li-gray hover:text-gray duration-500"
                  >
                    Privacy policy
                  </Link>
                </div>

                <div className="text-li-gray">
                  Copyright &#169; 2024 Triocent healthcare
                </div>

                <div className="text-li-gray hover:text-gray duration-500">
                  <Link to={"https://ronakvaghasiya.me"} target="_blank">
                    Developed by Visual Vortex
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;



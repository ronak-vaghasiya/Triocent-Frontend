import ContactCard from "../ContactCard";
import ContactForm from "../ContactForm";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { SiGmail, SiGooglemaps } from "react-icons/si";
import { FiPhoneCall } from "react-icons/fi";
import { useInView } from "react-intersection-observer";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const ContactSection = () => {
  const controls = useAnimation();
  const formControls = useAnimation();
  const mapControls = useAnimation();

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formRef, formInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [mapRef, mapInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  useEffect(() => {
    if (formInView) formControls.start("visible");
  }, [formControls, formInView]);

  useEffect(() => {
    if (mapInView) mapControls.start("visible");
  }, [mapControls, mapInView]);

  return (
    <div className="px-[25px] lg:px-[60px] justify-center lg:justify-between">

      {/* Contact Cards */}
      <motion.div
        ref={ref}
        className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap gap-6 lg:gap-8 py-[100px]"
        initial="hidden"
        animate={controls}
        variants={fadeUp}
        transition={{ duration: 0.6, ease: "easeOut", staggerChildren: 0.2 }}
      >
        <motion.div className="md:w-[calc(50%-12px)] lg:w-1/3" variants={fadeUp}>
          <ContactCard
            icon={<SiGmail />}
            title="Mail us 24/7"
            detail="info@triocenthealthcare.com"
          />
        </motion.div>
        <motion.div className="md:w-[calc(50%-12px)] lg:w-1/3" variants={fadeUp}>
          <ContactCard
            icon={<FiPhoneCall />}
            title="Call us 24/7"
            detail="+91 9876543210"
          />
        </motion.div>
        <motion.div className="w-full lg:w-1/3" variants={fadeUp}>
          <ContactCard
            icon={<SiGooglemaps />}
            title="Our Locations"
            detail="Surat, Gujarat, India"
          />
        </motion.div>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        ref={formRef}
        className="flex flex-col lg:flex-row w-full h-auto bg-white rounded-[30px] shadow-md"
        initial="hidden"
        animate={formControls}
        variants={zoomIn}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="lg:w-1/2 w-full h-[300px] lg:h-auto bg-contact-form rounded-t-[30px] lg:rounded-l-[30px] lg:rounded-tr-none bg-cover bg-center"></div>

        <div className="lg:w-1/2 w-full px-[20px] py-[50px] lg:px-[80px] lg:py-[100px]">
          <ContactForm />
        </div>
      </motion.div>

      {/* Google Maps Embed */}
      <motion.div
        ref={mapRef}
        className="my-[100px]"
        initial="hidden"
        animate={mapControls}
        variants={fadeUp}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13510.915961905375!2d72.8945388555588!3d21.229017162851633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f5e3f2bb84d%3A0xf95fa453e0005985!2sSarthana%20Jakat%20Naka%2C%20Nana%20Varachha%2C%20Surat%2C%20Gujarat%20395006!5e0!3m2!1sen!2sin!4v1730628766466!5m2!1sen!2sin"
          className="w-full h-[600px] rounded-[30px] shadow-md"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>
    </div>
  );
};

export default ContactSection;

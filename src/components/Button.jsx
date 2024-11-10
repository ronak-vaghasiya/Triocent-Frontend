import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Button = ({ title, color }) => {
  const baseClasses =
    "flex items-center gap-2 px-[18px] lg:px-[30px] py-[12px] lg:py-[18px] text-[10px] lg:text-[14px] rounded-full uppercase tracking-wider transition-all duration-500 ease-out";
  const bgClasses =
    color === "blue"
      ? `${baseClasses} bg-dark-blue text-white hover:bg-white hover:text-dark-blue`
      : `${baseClasses} bg-white text-dark-blue hover:bg-dark-blue hover:text-white`;

  return (
    <motion.button
      className={bgClasses}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {title}
      <motion.span
        initial={{ x: 0 }}
        animate={{ x: 5 }}
        transition={{ repeat: Infinity, duration: 0.8, repeatType: "reverse" }}
      >
        <FaArrowUpRightFromSquare />
      </motion.span>
    </motion.button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.oneOf(["blue", "white"]).isRequired,
};

export default Button;

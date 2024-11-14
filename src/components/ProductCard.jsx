import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { productData } from "../components/data/productData";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
};

const ProductCard = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const renderStars = (rating) => {
    const totalStars = 5;
    return [...Array(rating)]
      .map((_, index) => <FaStar key={`filled-${index}`} color="gold" />)
      .concat(
        [...Array(totalStars - rating)].map((_, index) => (
          <FaStar key={`empty-${index}`} color="lightgray" />
        ))
      );
  };

  return (
    <div
      ref={ref}
      className="flex flex-wrap justify-start sm:justify-center gap-6 lg:gap-8"
    >
      {productData.map((item) => (
        <motion.div
          key={item.id}
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          whileHover={{
            scale: 1.03,
            boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
          }}
          transition={{ duration: 0.2 }}
          className="relative flex flex-col items-center p-4 bg-white w-full sm:w-[48%] lg:w-[23%] rounded-[30px] shadow-md overflow-hidden"
        >
          {/* Product Image */}
          <div className="w-full">
            <img
              src={item.img}
              alt={item.name}
              loading="lazy"
              className="h-[200px] w-full object-cover rounded-[30px]"
            />
          </div>

          {/* Rating */}
          <div className="flex justify-center pt-3">
            {renderStars(item.rating)}
          </div>

          {/* Product Name */}
          <div className="text-lg md:text-[18px] text-dark-blue font-semibold pt-1 text-center">
            {item.name}
          </div>

          {/* Price */}
          <div className="flex justify-center gap-x-4 bg-slate-100 py-1 mt-2 w-full rounded-lg">
            <div className="text-li-blue line-through opacity-50">
              {item.price}
            </div>
            <div className="text-blue font-semibold">{item.discount}</div>
          </div>

          {/* Description */}
          <div className="text-[14px] text-center pt-3 text-dark-blue">
            {item.description}
          </div>

          {/* Fade-in Text Overlay */}
          <motion.div
            className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-90 text-dark-blue transition-opacity duration-300 ease-in-out"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            <p className="font-[Sora] text-lg tracking-wide">More Details</p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProductCard;

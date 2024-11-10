import Heading from "../Heading";
import ProductCard from "../ProductCard";

const ProductSection = () => {
  return (
    <section className="font-[Sora] flex flex-col gap-10 p-[25px] md:p-[30px] lg:p-[35px] h-[100vh] pt-4">
        <Heading name={"Customer Choice"} title={"Our Latest Products"} />
        
        {/* product card */}
        <ProductCard />
    </section>
  );
};

export default ProductSection;

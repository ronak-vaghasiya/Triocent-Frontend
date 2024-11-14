import TopBanner from "../components/TopBanner";
import HeroSection from "../components/sections/HeroSection";
import ProductSection from "../components/sections/ProductSection";
import Features from "../components/Features";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div>
      <TopBanner />
      <HeroSection />
      <Features />
      <ProductSection />
      <Footer/>
    </div>
  );
};

export default Home;

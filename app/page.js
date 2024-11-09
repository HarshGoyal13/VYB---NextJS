import HomePage from "./components/Cards";
import FAQSection from "./components/FaqSection";
import FeaturesSection from "./components/FeatureSection";
import HeroSection from "./components/HeroSection";
import InfluencersSection from "./components/influencer";
import Navbar from "./components/Navbar";
import TravelSection from "./components/TravelSection";


export default function Home() {
  return (
    <div >
      
      <Navbar/>
      <HeroSection/>
      <TravelSection/>
      <FeaturesSection/>
      <InfluencersSection/>
      <HomePage/>
      <FAQSection/>
    </div>
  );
}

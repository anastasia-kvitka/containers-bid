import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HowItWorks from "./components/HowItWorks";
import FeatureHighlight from "./components/FeatureHighlight";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HowItWorks />
      <FeatureHighlight />
      <Footer />
    </>
  );
}

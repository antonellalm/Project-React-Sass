import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import CompanySection from "./components/companySection/CompanySection";
import FeaturesSection from "./components/featuresSection/FeaturesSection";
import PaymentSection from "./components/paymentSection/PaymentSection";
import CtaSection from "./components/ctaSection/CtaSection";
import PlanSection from "./components/planSection/PlanSection";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CompanySection />
      <FeaturesSection />
      <PaymentSection />
      <CtaSection />
      <PlanSection />
    </>
  );
}

export default App;

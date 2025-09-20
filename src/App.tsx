import Layout from "@/components/layout/Layout";
import CRM from "@/components/sections/CRM";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Slider from "@/components/sections/Slider";
import Reviews from "./components/sections/Reviews";
import SupportedLeadCRM from "./components/sections/SupportedLeadCRM";
import LeadCRMBanner from "./components/sections/LeadCRMBanner";
import SalesSolution from "./components/sections/SalesSolution";

const App = () => {
  return (
    <Layout>
      <Hero />
      <Slider />
      <CRM />
      <HowItWorks />
      <Reviews />
      <SalesSolution />
      <SupportedLeadCRM />
      <LeadCRMBanner />
      {/* Add Features, CTA, Pricing, etc. here */}
    </Layout>
  );
};

export default App;

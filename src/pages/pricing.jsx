import Breadcrumb from "../components/common/Breadcrumb";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import PricingArea from "../components/Pricing/PricingArea";
import SEO from "../components/seo";

const PricingPage = () => {
  return (
    <main>
      <SEO pageTitle="Pricing" />
      <Header />
      <Breadcrumb title="Pricing" subtitle="Price & Plan" />
      <PricingArea />
      <Footer />
    </main>
  );
};

export default PricingPage;

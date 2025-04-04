import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import SEO from "../components/seo";
import Breadcrumb from "../components/common/Breadcrumb";
import TermsAndCondition from "../components/TermsAndCondition/TermsAndCondition";
export default function Privacy() {
  return (
    <div>
      <main>
        <SEO/>
        <Header/>
        <Breadcrumb title="Terms & Condition" subtitle="Terms & Condition" />
        <TermsAndCondition/>
        <Footer/>
      </main>
    </div>
  );
}

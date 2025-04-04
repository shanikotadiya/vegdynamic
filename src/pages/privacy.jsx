import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import SEO from "../components/seo";
import Breadcrumb from "../components/common/Breadcrumb";
import PrivacyPolicy from "../components/Privacy/privacypolicy";

export default function Privacy() {
  return (
    <div>
      <main>
        <SEO/>
        <Header/>
        <Breadcrumb title="Privacy Policy" subtitle="Privacy Policy" />
        <PrivacyPolicy/>
        <Footer/>
      </main>
    </div>
  );
}

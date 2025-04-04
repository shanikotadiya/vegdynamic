import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import SEO from "../components/seo";
import Breadcrumb from "../components/common/Breadcrumb";
import Cookie_Policy from "../components/Cookie_Policy/Cookie_policy";
export default function Privacy() {
  return (
    <div>
      <main>
        <SEO/>
        <Header/>
        <Breadcrumb title="Cookie Policy" subtitle="Cookie Policy" />
        <Cookie_Policy/>
        <Footer/>
      </main>
    </div>
  );
}

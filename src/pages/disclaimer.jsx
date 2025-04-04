import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import SEO from "../components/seo";
import Breadcrumb from "../components/common/Breadcrumb";
import DetailsDisclaimer from "../components/Disclaimer/detailsdisclaimer";

export default function Disclaimer() {
  return (
    <div>
      <main>
        <SEO/>
        <Header/>
        <Breadcrumb title="Disclaimer" subtitle="Disclaimer" />
        <DetailsDisclaimer/>
        <Footer/>
      </main>
    </div>
  );
}

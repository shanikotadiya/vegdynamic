import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import SEO from "../components/seo";
import Form from "../components/Form/form";
import Breadcrumb from "../components/common/Breadcrumb";

export default function Carrier() {
  return (
    <div>
      <main>
        <SEO/>
        <Header/>
        <Breadcrumb title="Career" subtitle="Join Our Team" />
        <Form/>
        <Footer/>
      </main>
    </div>
  );
}

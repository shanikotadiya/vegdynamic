import CertificatesData from "../components/Certificate/CertificatesData";
import Breadcrumb from "../components/common/Breadcrumb";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import SEO from "../components/seo";

const Certificates = () => {
    return (
        <main>
            <SEO pageTitle="Certificates" />
            <Header/>
            <Breadcrumb title="Certificates" subtitle="Certified for Quality and Trust" />
            <CertificatesData/>
            <Footer/>
        </main>
    );
};

export default Certificates;
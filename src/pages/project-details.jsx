import Breadcrumb from "../components/common/Breadcrumb";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import PortfolioDetailsArea from "../components/ProjectDetails/ProjectDetailsArea";
import RelatedService from "../components/ProjectDetails/RelatedService";
import SEO from "../components/seo";


const PortfolioDetails = () => {
    return (
        <main>
            <SEO pageTitle="Project Details" />
            <Header/>
            <Breadcrumb title="Project" subtitle="Project Details" />
            <PortfolioDetailsArea/>
            <RelatedService/>
            <Footer/>
        </main>
    );
};

export default PortfolioDetails;
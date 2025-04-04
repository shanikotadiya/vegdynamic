import Breadcrumb from "../components/common/Breadcrumb";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import PortfolioArea from "../components/Portfolio/PortfolioArea";
import SEO from "../components/seo";


const portfolio = () => {
    return (
        <main>
          <SEO pageTitle="Projects" />
          <Header/>
          <Breadcrumb title="Projects" subtitle="Our Latest Projects" />  
          <PortfolioArea/>
          <Footer/>
        </main>
    );
};

export default portfolio;
import AboutArea from "../components/About/AboutArea";
import CompanyAbout from "../components/About/CompanyAbout";
import HistoryArea from "../components/About/HistoryArea";
// import Team from "../components/About/Team";
import Breadcrumb from "../components/common/Breadcrumb";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import SEO from "../components/seo";
import ServicesArea from "../components/Home/ServicesArea";
import CompanyAboutDetails from "../components/About/CompanyAboutDetails";
import FoundersMessages from "../components/About/FoundersMessages";
import GetInTouch from "../components/About/GetInTouch";
import CompanyInfrastructure from "../components/About/CompanyInfrastructure";
// import SingleCompanyAbout from "../components/common/SingleCompanyAbout";



const about = () => {
    return (
        <main>
            <SEO pageTitle="About" />
            <Header/>
            <Breadcrumb title="About us" subtitle="About Company" />
            <AboutArea/>
            <CompanyAboutDetails />
            <FoundersMessages />
            <CompanyInfrastructure />
            <ServicesArea/>
            <HistoryArea/>
            {/* <CompanyAbout/> */}
            <GetInTouch />
            <Footer/>
        </main>
    );
};

export default about;
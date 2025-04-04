import Breadcrumb from "../components/common/Breadcrumb";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import SEO from "../components/seo";
import ClientsComponent from "../components/Clients/ClientsComponent.jsx"
const Clients = () => {
    return (
        <main>
            <SEO pageTitle="Clients Details" />
            <Header/>
            <Breadcrumb title="Clients" subtitle="All Clients" />
            <ClientsComponent/>
            <Footer/>
        </main>
    );
};

export default Clients;
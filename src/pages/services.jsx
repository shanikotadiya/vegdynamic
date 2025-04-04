import Breadcrumb from '../components/common/Breadcrumb';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import SEO from '../components/seo';
import BlogArea from '../components/Services/BlogArea';
import ServicesArea from '../components/Services/ServicesArea';

const Services = () => {
    return (
        <main>
            <SEO pageTitle="Services" />
            <Header/>
            <Breadcrumb title="Services" subtitle="What we do" />
            <ServicesArea/>
            <BlogArea/>
            <Footer/>
        </main>
    );
};

export default Services;
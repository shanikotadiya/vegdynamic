import Breadcrumb from "../../components/common/Breadcrumb";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import SEO from "../../components/seo";
import AboutArea from "../../components/ServicesDetails/AboutArea";
import SmServices from "../../components/ServicesDetails/SmServices";
import BlogArea from "../../components/Home/BlogArea";
import ImageGallery from "../../components/Imagegallary/ImagegallaryArea";
import BrandArea from "../../components/common/BrandArea";
import TestimonialArea from "../../components/ServicesDetails/TestimonialArea";
import { servicesData } from "../../data/servicesData";

const ServiceDetailsPage = ({currentService}) => {
  
  return (
    <main>
      <SEO pageTitle={`Service Details - ${currentService.title}`} />
      <Header />
      <Breadcrumb title="Service Details" subtitle={currentService.breadcrumb_title} />
      <AboutArea  selectedService={currentService}/>
      <SmServices currentService={currentService}/>
      <ImageGallery  category={currentService.key}/>
      <BrandArea />
      <TestimonialArea />
      <BlogArea />
      <Footer />
    </main>
  );
};

// Generate static paths
export async function getStaticPaths() {
  const paths = servicesData.map((service) => ({
    params: { slug: service.key }
  }));

  

  return { paths, fallback: "blocking" };
}

// Fetch data for each service
export async function getStaticProps({ params }) {
  
  const currentService = servicesData.find((s) => s.key === params.slug) || null;  
  return {
    props: { currentService },
    revalidate: 10, // Regenerate at most every 10 seconds
  };
}

export default ServiceDetailsPage;

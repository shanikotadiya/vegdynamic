import BlogArea from "../components/Blog/BlogArea";
import Breadcrumb from "../components/common/Breadcrumb";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import SEO from "../components/seo";

const News = () => {
    return (
        <main>
            <SEO pageTitle="News" />
            <Header/>
            <Breadcrumb title="News" subtitle="News Feeds" />
            <BlogArea/>
            <Footer/>
        </main>
    );
};

export default News;
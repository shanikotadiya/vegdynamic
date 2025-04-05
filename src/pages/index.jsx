import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import AboutUs from "../components/Home/AboutUs";
import BlogArea from "../components/Home/BlogArea";
import HeroSlider from "../components/Home/HeroSlider";
import ProcessArea from "../components/Home/ProcessArea";
import SdBanner from "../components/Home/SdBanner";
import ServicesArea from "../components/Home/ServicesArea";
import Testimonial from "../components/Home/Testimonial";
import SEO from "../components/seo";
import BrandArea from "../components/common/BrandArea";
import CtaArea from "../components/Home/CtaArea";
import AnimatedIntro from "../components/common/AnimatedIntro";
import { getHomePage } from "../utils/staticpropsfetcher";
export const getStaticProps = getHomePage;

const Index = ({landingSlides, clientele, workProcess, clientStory}) => {
  
 
fetch('http://vegadmin.cittaserver.com/api/servicedetails')
.then((res) => res.json())
.then((data) => console.log(data));

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasShownIntro = sessionStorage.getItem("hasShownIntro");
    if (hasShownIntro) {
      setLoading(false);
    }
  }, []);

  const handleIntroFinish = () => {
    sessionStorage.setItem("hasShownIntro", "true");
    setLoading(false);
  };
  return (
    <main>
      {loading ? (
        <AnimatedIntro onFinish={handleIntroFinish} />
      ) : (
        <>
          <SEO />
          <Header />
          <HeroSlider landingSlides={landingSlides} />
          <AboutUs />
          <ServicesArea />
          <SdBanner />
          <BrandArea clientele={clientele}/>
          <Testimonial clientStory={clientStory}/>
          <ProcessArea workProcess={workProcess}/>
          <CtaArea />
          <BlogArea />
          <Footer/>
        </>
      )}
    </main>
  );
};

export default dynamic(() => Promise.resolve(Index), { ssr: false });

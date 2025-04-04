import { Swiper, SwiperSlide } from "swiper/react";
import Link from 'next/link';
import SwiperCore, {
  Navigation,
  EffectFade,
  Autoplay,
} from "swiper";


const HeroSlider = ({landingSlides}) => {    
  console.log("URL:", process.env.NEXT_PUBLIC_IMAGE_URL); // Should print the correct URL

  const sliderData = [
    {
      id: 1,
      title: "Proven Technology",
      subTitle: "It is time tested technology which last for 150 years",
      img: "assets/img/slider/slidernew-2.png",
    },
    {
      id: 2,
      title: "Maintenance Free",
      subTitle: "The Perfect choice for maintenance free tomorrow",
      img: "assets/img/slider/slidernew-1.png",
    },
    {
      id: 3,
      title: "Resistant Structure",
      subTitle: "Exploring the engineering behind the corrosion",
      img: "assets/img/slider/slider-011.png",
    },
    // {
    //   id: 4,
    //   title: "The Perfect Choice for Maintenance Free Tomorrow.",
    //   img: "assets/img/slider/slider-02.png",
    // },
  ];

  return (
    <div>
      <section className="slider-area fix">
        <div className="swiper main-slider swiper-container swiper-container-fade p-relative">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            className="swiper-wrapper"
            autoplay={{ delay: 5000 }}
            effect={"fade"}
            modules={[Navigation,EffectFade,Autoplay]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
          >
            {landingSlides.landingslide.map((slider) => {
              return (
                <SwiperSlide key={slider.id}>
                  <div className="item-slider sliderm-height p-relative swiper-slide">
                    <div
                      className="slide-bg"
                      style={{
                        background: `url(${process.env.NEXT_PUBLIC_IMAGE_URL}${slider.filepath})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                      }}
                    ></div>

                    <div className="container">
                      <div className="row ">
                        <div className="col-lg-12">
                          <div className="slider-contant">
                            <span className="fw-bold">{slider.title}</span>
                            <span className="hero_subTitle">It is time tested technology which last for 150 years</span>
                            {/* <div className="slider-button">
                              <Link href="/services">
                                <a className="tp-btn mr-30">Our Services
                                <i className="fal fa-angle-right"></i></a>
                              </Link>
                            </div>  */}
                            {/* <p style={{fontSize:"18px"}}>The different modes of transport are air, water, and land transport, which includes Rails or railways.</p> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          <div className="swiper-button-prev ms-button">
            <i className="far fa-long-arrow-left"></i>
          </div>
          <div className="swiper-button-next ms-button">
            <i className="far fa-long-arrow-right"></i>
          </div>
        </div>
      </section>
    
    </div>
  );
};

export default HeroSlider;

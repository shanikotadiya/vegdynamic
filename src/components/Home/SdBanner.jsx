import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";

const SdBanner = () => {
  const bannerData = [
    {
      id: 1,
      img: "assets/img/banner/Transmission.png",
      title: "400 KV Quad Conductor Transmission Tower",
      company: "Maharashtra State Electricity Transmission Co. Ltd. (MSCTCL)",
      // year: "2005",
      location: "Nagpur, Maharashtra",
    },
    {
      id: 2,
      img: "assets/img/banner/Charanka_Solar_Park.png",
      title: "Charanka Solar Park",
      company: "Larsen & Toubro (L&T)",
      // year: "2005",
      location: "Patan, Gujarat",
    },
    {
      id: 3,
      img: "assets/img/banner/Telescopic1.png",
      title: "Telescopic Communication Towers",
      company: "Reliance Jio",
      // year: "2005",
      location: "PAN India",
    },
    {
      id: 4,
      img: "assets/img/banner/Gujarat_Metro1.png",
      title: 'Ahmedabad Metro Rail Safety Railing',
      company: 'Gujarat Metro Rail Corporation (GMRC)',
      // year: '2005',
      location: 'Ahmedabad, Gujarat'
    },
    {
      id: 5,
      img: "assets/img/banner/Solar_Carport_Structure.png",
      title: "Solar Carport Structure",
      company: "Infosys",
      // year: "2005",
      location: "Jaipur, Rajasthan",
    },
  ];

  return (
    <div>
      <section className="sd-banner-area pb-110">
        <div className="banner__slider swiper-container">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            className="banner__wrapper"
            autoplay={{ delay: 6000 }}
            navigation={true} // Enables navigation buttons
            modules={[Autoplay, Navigation]}
          >
            {bannerData.map((banner) => (
              <SwiperSlide key={banner.id}>
                <div
                  className="sd-banner__item swiper-slide"
                  style={{
                    background: `url(${banner.img})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="container-0">
                    <div className="row g-0">
                      <div className="col-xl-3 banner-slide-height d-none d-xl-block">
                        <div className="slide-border"></div>
                      </div>
                      <div className="col-xl-3 banner-slide-height">
                        <div className="slide-border"></div>
                        <div className="sd-content">
                          <span className="sd-meta">{banner.company}</span>
                          <h5>{banner.title}</h5>
                          <div className="project-info">
                            <span>{banner.location}</span>
                            {/* {banner.year}  */}
                          </div>
                          <div className="sd-bg-icon">
                            <img
                              src="/assets/img/icon/telecommunication.png"
                              alt="icon"
                              width="50"
                              height="60"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 banner-slide-height d-none d-xl-block">
                        <div className="slide-border"></div>
                      </div>
                      <div className="col-xl-3 banner-slide-height d-none d-xl-block">
                        <div className="slide-border"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default SdBanner;

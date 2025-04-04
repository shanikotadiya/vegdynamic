import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import Link from "next/link";
const ServicesArea = () => {
  const servicesData = [
    {
      id: 1,
      icon: "/assets/img/icon/prototype.png",
      title: <>Prototyping</>,
      key: "prototype",
      discription:
        "Precise prototype fabrication for steel structures and infrastructure projects.",
    },
    {
      id: 2,
      icon: "/assets/img/icon/electrical.png",
      title: <>Electrical</>,
      key: "electrical",
      discription:
        "Premium steel components for electrical transmission towers and substations.",
    },
    {
      id: 3,
      icon: "/assets/img/icon/telecommunication.png",
      title: <>Telecommunication </>,
      key: "telecommunication",
      discription:
        "Reliable galvanized steel solutions for telecom towers and communication networks.",
    },
    {
      id: 4,
      icon: "/assets/img/icon/windpower.png",
      title: <>Windmill </>,
      key: "windmill",
      discription:
        "Durable steel structures supporting efficient wind energy generation systems.",
    },
    {
      id: 5,
      icon: "/assets/img/icon/solarcell.png",
      title: <>Solar </>,
      key: "solar",
      discription:
        "Customized steel frames and mounts for solar panel installations.",
    },
    {
      id: 6,
      icon: "/assets/img/icon/road.png",
      title: <>Roadways </>,
      key: "roadways",
      discription:
        "Galvanized steel products ensuring durable and safe road infrastructure.",
    },
    {
      id: 7,
      icon: "/assets/img/icon/agriculture.png",
      title: <>Agriculture </>,
      key: "agriculture",
      discription:
        "Steel solutions designed for irrigation, fencing, and agricultural advancements.",
    },
    {
      id: 8,
      icon: "/assets/img/icon/structural.png",
      title: <>Structural </>,
      key: "structural",
      discription:
        "High-quality steel fabrication for industrial, commercial, and structural needs.",
    },
    {
      id: 9,
      icon: "/assets/img/icon/tmt-bars.png",
      key: <>TMT Bars</>,
      title: "TMT Bars",
      discription:
        "High-strength, corrosion-resistant TMT bars for durable and reliable construction projects.",
    },
    {
      id: 10,
      icon: "/assets/img/icon/customization.png",
      title: <>Customization </>,
      key: "customization",
      discription:
        "Tailored steel solutions for unique infrastructure and industrial challenges.",
    },
  ];
  return (
    <div>
      <section
        className="services__area pt-120 pb-80"
        style={{
          background: `url(/assets/img/services/services-bg.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
            <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="section__wrapper mb-40">
                <h4 className="section__title">
                We have highly-tailored industry solution.
                </h4>
                <div className="r-text">
                  <span>Services</span>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="team__buttons text-lg-end">
              <Link  href="/services">
              <a className="tp-btn">View all</a>
              </Link>
              </div>
            </div>
          </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="project__slider project__slider-active swiper-container">
                <div className="project___slider-wrapper swiper-wrapper">
                  <Swiper
                    spaceBetween={40}
                    slidesPerView={4}
                    loop={true}
                    autoplay={{ delay: 3000 }}
                    modules={[ Autoplay]}
                  
                    breakpoints={{
                      0: {
                        slidesPerView: 1,
                      },
                      550: {
                        slidesPerView: 1,
                      },
                      768: {
                        slidesPerView: 2,
                      },
                      992: {
                        slidesPerView: 3,
                      },
                      1200: {
                        slidesPerView: 4,
                      },
                    }}
                  >
                    {servicesData.map((project) => {
                      return (
                        <SwiperSlide key={project.id}>
                          <div key={project.id}>
                          <Link href={`/services-details/${project.key}`} passHref>
                              <div className="services__item services__item-grid text-center mb-40" >
                                <div className="services__item-content">
                                  <div className="ser__icon mb-30">
                                    <img
                                      src={project.icon}
                                      alt="img"
                                      width={50}
                                      height={60}
                                    />
                                  </div>
                                  <h5 className="ser__title mb-10">
                                    <Link href={`/services-details/${project.key}`}>
                                      {project.title}
                                    </Link>
                                  </h5>
                                  <p>{project.discription}</p>
                                </div>
                              </div>
                          </Link>
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesArea;

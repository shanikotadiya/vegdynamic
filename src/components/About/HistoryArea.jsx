import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import Link from "next/link";

const HistoryArea = () => {
  const historyData = [
    {
      id: 1,
      img: '/assets/img/portfolio/Telescopic Communication Towers.png',
      year: 2004,
      title: "Exclusive Plant for Reliance Infocom",
      description: "Established dedicated fabrication plant for Reliance Infocom projects.",
    },
    {
      id: 2,
      img: '/assets/img/portfolio/KEC International Limited.png',
      year: "2006-07",
      title: "L&T Transmission & Hazira Projects",
      description: "Supplied high-quality fabricated structures for L&T group projects.",
    },
    {
      id: 3,
      img: '/assets/img/portfolio/Sabarmati Riverfront.png',
      year: 2008,
      title: "Jetco Projects & Sabarmati Riverfront",
      description: "Began long-term association with Jetco and Riverfront railing.",
    },
    {
      id: 4,
      img: '/assets/img/portfolio/conductortransmissiontower.png',
      year: 2009,
      title: "MSETCL 400kV Transmission Line",
      description: "Delivered 200 km transmission line with CPRI-tested quad conductor.",
    },
    {
      id: 5,
      img: '/assets/img/portfolio/Infosys Solar Carport Structure.png',
      year: 2010,
      title: "Solar Power Projects Initiated",
      description: "Entered renewable energy sector with large-scale solar projects.",
    },
    {
      id: 6,
      img: '/assets/img/portfolio/Iscon temple mathura.png',
      year: "2011-12",
      title: "ISKCON Temple Mathura",
      description: "Supplied galvanized TMT bars for ISKCON Temple structural work.",
    },
    {
      id: 7,
      img: '/assets/img/portfolio/Telescopic Communication Towers.png',
      year: "2013-16",
      title: "Reliance Jio Mobile Towers",
      description: "Fabricated telecom towers for Reliance Jio’s nationwide network.",
    },
    {
      id: 8,
      img: '/assets/img/portfolio/Somnath - Hot Dip Galvanized.png',
      year: "2018-19",
      title: "Somnath Visitor Center & Ram Temple",
      description: "Contributed to iconic religious and public infrastructure projects.",
    },
    {
      id: 9,
      img: '/assets/img/portfolio/Gujarat Metro.png',
      year: 2020,
      title: "Ahmedabad Metro Walkway & Tunnel",
      description: "Provided structural fabrication for metro’s underground pedestrian tunnel.",
    },
    {
      id: 10,
      img: '/assets/img/portfolio/gujrat_metro.png',
      year: 2024,
      title: "Somnath Railway Station Galvanizing",
      description: "Delivered galvanized structures for Somnath railway station project.",
    },
  ];
  return (
    <div>
      <section className="history__area grey-bg-5 pt-120 pb-90 fix">
        <div className="history__right-bg">
          <img src="/assets/img/testimonial/testimonial-bg-1.jpg" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-8">
              <div className="section__wrapper mb-55">
                <h4 className="section__title">
                  Our Journey of Excellence & Growth
                </h4>
                <div className="r-text">
                  <span>history</span>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-4">
              <div className="project__slider-arrow-wrapper mb-50 text-sm-end">
                <div className="project__slider-arrow">
                  <div className="project-button-prev ms-button-3 ms-button-3-border">
                    <i className="far fa-long-arrow-left"></i> Prev
                  </div>
                  <div className="project-button-next ms-button-3">
                    Next <i className="far fa-long-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-12">
              <div className="row">
                
              <Swiper
                    spaceBetween={40}
                    slidesPerView={4}
                    loop={true}
                    autoplay={{ delay: 3000 }}
                    modules={[Navigation, Autoplay]}
                    navigation={{
                      nextEl: ".project-button-next",
                      prevEl: ".project-button-prev",
                    }}
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
                    {historyData.map((project) => {
                      return (
                        <SwiperSlide key={project.id} style={{ height: "100%" }}>
                    <div
                      key={project.id}
                    >
                      <div className="history__item mb-30">
                        <div className="sm-item-thumb w-img">
                          <a href="#">
                            <img src={project.img} alt={project.img} />
                          </a>
                          <div className="sm-item-tag">
                            <span>{project.year}</span>
                          </div>
                        </div>
                        <div className="sm-item-content">
                          <h6>
                            <Link href="/services-details">{project.title}</Link>
                          </h6>
                          <p>
                            {project.description}
                          </p>
                        </div>
                      </div>
                    </div>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HistoryArea;

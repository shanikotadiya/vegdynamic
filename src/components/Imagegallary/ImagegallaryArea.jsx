import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
import { useState, useEffect } from "react";
import Modal from "react-modal";
import projectData from "../../data/projectData";
import "swiper/css/lazy";
import Lightbox from "react-image-lightbox";

// Swiper Modules
SwiperCore.use([Navigation]);

const Imagegallary = ({ category }) => {
  const currentService = projectData[category] || []; // Get images of the selected category

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      Modal.setAppElement("#__next"); // Ensure accessibility in Next.js
    }
  }, []);

  return (
    <>
      {modalIsOpen && (
        <Lightbox
          mainSrc={currentService[photoIndex]?.img} // Ensure you're passing a string (image URL)
          nextSrc={
            currentService[(photoIndex + 1) % currentService.length]?.img
          }
          prevSrc={
            currentService[
              (photoIndex + currentService.length - 1) % currentService.length
            ]?.img
          }
          onCloseRequest={() => setModalIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + currentService.length - 1) % currentService.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % currentService.length)
          }
        />
      )}
      <div>
        <section className="project__area pt-120 pb-70 fix">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="section__wrapper section__wrapper-2 mb-50">
                  <span className="st-meta">Project Gallery</span>
                  <h4 className="section__title">Our recent projects.</h4>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
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
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="project__slider project__slider-active swiper-container">
                  <div className="project___slider-wrapper swiper-wrapper">
                    <Swiper
                      spaceBetween={40}
                      slidesPerView={3}
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
                          slidesPerView: 3,
                        },
                      }}
                    >
                      {currentService.map((project, index) => {
                        return (
                          <SwiperSlide key={project.id}>
                            <div className="project__slider-item swiper-slide">
                              <img
                                src={project.img}
                                className="project__slider-item-image mb-20"
                                onClick={() => {
                                  setPhotoIndex(index), setModalIsOpen(true);
                                }}
                                alt="img"
                              />
                              {/* <span>
                              <Link href="/portfolio-details">
                                {project.subtitle}
                              </Link>
                            </span>
                            <h5 className="project__slider-item-title">
                              <Link href="/portfolio-details">
                                {project.title}
                              </Link>
                            </h5> */}
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
    </>
  );
};

export default Imagegallary;

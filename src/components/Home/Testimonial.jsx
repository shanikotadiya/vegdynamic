import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay, Pagination } from "swiper";
import useGlobalContext from "../../hook/useGlobalContext";
import VideoModal from "../common/VideoModal";

const Testimonial = ({clientStory}) => {
  const { show, handleClose, handleShow } = useGlobalContext();
  const testimonialData = [
    {
      id: 1,
      clientImg: "assets/img/author/client-1.jpg",
      name: "Civil Engineer",
      content:
        "“ Vishal Engineers delivers top-quality galvanized structures with precision and durability. Their prompt service and expert craftsmanship have been invaluable in strengthening our telecom infrastructure projects. Highly recommended ! ”",
      work: " Telecom Company",
    },
    {
      id: 2,
      clientImg: "assets/img/author/client-2.jpg",
      name: "Site Manager",
      content:
        "“Reliable and efficient, Vishal Engineers provides superior galvanized mounting structures. Their timely delivery and robust quality ensure seamless solar installations, making them our go-to partner for every project. ” ",
      work: " Solar Installation & Consultancy Firm",
    },
    {
      id: 3,
      clientImg: "assets/img/author/client-3.jpg",
      name: "Owner",
      content:
        "“Vishal Engineers’ exceptional fabrication and galvanization services have enhanced our construction projects. Their quality, consistency, and professionalism set them apart as a trusted partner in real estate development. ” ",
      work: "Real Estate Construction Firm",
    },
    {
      id: 4,
      clientImg: "assets/img/author/client-4.jpg",
      name: "Contractor",
      content:
        "“For durable and corrosion-resistant structures, Vishal Engineers is unmatched. Their high-quality materials and commitment to excellence have significantly improved our roadway infrastructure projects. Outstanding service and reliability ! ”",
      work: "Government Roadways Project",
    },
  ];
  return (
    <>
      <section className="testimonial__area pt-250 pb-120 black-bg-3 fix">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6">
              <div className="testimonial__side-image w-img">
                <img
                  src="assets/img/testimonial/ts-image-2.jpg"
                  alt="testimonial-img"
                />
                <div className="vide-button vide-button-3">
                  <button
                    onClick={handleShow}
                    href="https://www.youtube.com/watch?v=o4GuSJYSzrY"
                    className="popup-video"
                  >
                    <i className="fa-solid fa-play"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="testimonial__left-info-2">
                <div className="section__wrapper section__wrapper-2 mb-40">
                  <span className="st-meta-3 mb-20">Client Story</span>
                  <h4 className="sm-title-d">Hear from trusted clients</h4>
                </div>
                <div className="testimonial__slider-2 swiper-container p-relative">
                  <div className="testimonial__slider-2-wrapper">
                    <Swiper
                      spaceBetween={0}
                      slidesPerView={1}
                      loop={true}
                      autoplay={{ delay: 6000 }}
                      pagination={{
                        el: ".ts-pagination",
                        clickable: true,
                      }}
                      modules={[Navigation, Autoplay, Pagination]}
                      navigation={{
                        nextEl: ".bs-button-next",
                        prevEl: ".bs-button-prev",
                      }}
                    >
                      {clientStory.map((testimonial) => {
                        return (
                          <SwiperSlide key={testimonial.id}>
                            <div className="testimonial__item testimonial__item-3 swiper-slide">
                              <p className="review__text">
                                {testimonial.content}
                              </p>
                              <div
                                className="review__info mt-30"
                                style={{ justifyContent: "left" }}
                              >
                                <div className="client__content">
                                  <h5 className="client__name">
                                    <a>{testimonial.companyname}</a>
                                  </h5>
                                  <div className="client__designation">
                                    <p>
                                      <a>{testimonial.designation}</a>
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="testimonial__icon-3">
                                <img
                                  src="assets/img/icon/quote-3.png"
                                  alt="quote-icon"
                                />
                              </div>
                            </div>
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>
                  </div>
                  <div className="ts-pagination"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonial__shape">
          <img src="assets/img/testimonial/ts-shape-1.png" alt="" />
        </div>
        <div className="testimonial__shape-2">
          <img src="assets/img/testimonial/ts-shape-2.png" alt="" />
        </div>
      </section>

      <VideoModal show={show} handleClose={handleClose} />
    </>
  );
};

export default Testimonial;

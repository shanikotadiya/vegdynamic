import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay, Pagination } from "swiper";
import useGlobalContext from "../../hook/useGlobalContext";
import VideoModal from "../common/VideoModal";
import Link from "next/link";

const TestimonialArea = () => {
  const { show, handleClose, handleShow } = useGlobalContext();
  const testimonialData = [
    {
      id: 1,
      clientImg: "/assets/img/author/client-1.jpg",
      name: "Alonso D. Dowson",
    },
    {
      id: 2,
      clientImg: "/assets/img/author/client-2.jpg",
      name: "Josep Andrew",
    },
    {
      id: 3,
      clientImg: "/assets/img/author/client-3.jpg",
      name: "Maxson Dowson",
    },
    {
      id: 4,
      clientImg: "/assets/img/author/client-4.jpg",
      name: "Nico Robin",
    },
  ];
  return (
    <div>
      <section className="testimonial__area pt-170 pb-30 black-bg-3 fix">
        <div className="container">
          <div className="row align-items-center">
            {/* <div className="col-xl-6">
              <div className="testimonial__side-image w-img">
                <img src="/assets/img/testimonial/ts-image-2.jpg" alt="testimonial-img"/>
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
            </div> */}
            {/* <div className="col-xl-6 justify-content-center"> */}
            {/* <div className="testimonial__left-info-2"> */}
            <div className="section__wrapper section__wrapper-2 mb-10">
              {/* <span className="st-meta-3 mb-20">Client Story</span> */}
              <h4 className="sm-title-d">Can we help our clients succeed by creating </h4>
            </div>
            {/* <p style={{ color: "white" }}>
              Can we help our clients succeed by creating brand identity,
              digital experiences, and print materials. Financial consulting
              slogans and Financial consu lting be used to lients succeed by
              creatin communic.
            </p> */}
            {/* </div> */}
          </div>
          {/* </div> */}
          <div className="about__button mt-35 text-end">
            <Link href="/about">
              <a className="tp-btn me-3">
                Learn More <i className="fa-light fa-arrow-right-long"></i>
              </a>
            </Link>
          </div>
        </div>
        <div className="testimonial__shape">
          <img src="/assets/img/testimonial/ts-shape-1.png" alt="" />
        </div>
        <div className="testimonial__shape-2">
          <img src="/assets/img/testimonial/ts-shape-2.png" alt="" />
        </div>
      </section>

      <VideoModal show={show} handleClose={handleClose} />
    </div>
  );
};

export default TestimonialArea;

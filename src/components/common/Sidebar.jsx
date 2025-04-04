import Link from "next/link";
import useGlobalContext from "../../hook/useGlobalContext";
import dynamic from "next/dynamic";
import { useState } from "react";
import Lightbox from "react-image-lightbox";
const Collapsible = dynamic(() => import("react-collapsible"), {
  ssr: false,
});

const Sidebar = ({ sidebarTwo }) => {
  const { showSidebar, setShowSidebar } = useGlobalContext();
  const [photoIndex, setPhotoIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const galleryImages = [
    {
      id: 1,
      img: "/assets/img/gallery/1.png",
    },
    {
      id: 2,
      img: "/assets/img/gallery/2.png",
    },
    {
      id: 3,
      img: "/assets/img/gallery/3.png",
    },
    {
      id: 4,
      img: "/assets/img/gallery/4.png",
    },
    {
      id: 5,
      img: "/assets/img/gallery/5.png",
    },
    {
      id: 6,
      img: "/assets/img/gallery/6.png",
    },
  ];
  const lightBoxImages = galleryImages.map((img) => img.img);
  const images = lightBoxImages;

  return (
    <>
      {open && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}

      {/* <!-- sidebar area start --> */}
      <div
        className={`${
          sidebarTwo ? "sidebar__area sidebar__area-2" : "sidebar__area"
        } 
		   ${showSidebar ? "sidebar-opened" : ""}`}
      >
        <div className="sidebar__wrapper">
          <div className="sidebar__close">
            <button
              onClick={() => setShowSidebar(false)}
              className="sidebar__close-btn"
              id="sidebar__close-btn"
            >
              <i className="fal fa-times"></i>
            </button>
          </div>
          <div className="sidebar__content">
            <div className="sidebar__logo mb-40">
              <Link href="/">
                <a>
                  <img
                    src="/assets/img/logo/veg-logo.jpg"
                    alt="logo"
                    className="logo-image"
                  />
                </a>
              </Link>
            </div>
            {/* <div className="sidebar__search mb-25">
              <form action="#">
                <input type="text" placeholder="What are you searching for?" />
                <button type="submit">
                  <i className="far fa-search"></i>
                </button>
              </form>
            </div> */}

            <div className="mobile-menu fix">
              <nav
                id="mobile-menu"
                className={`${sidebarTwo ? "d-xl-none" : "d-lg-none"}`}
              >
                <ul>
                  <div className="single_link iconAdd border-0">
                    <li>
                      <Link href="/">
                        <a>Home</a>
                      </Link>
                    </li>
                  </div>

                  <div className="single_link iconAdd border-0">
                    <li>
                      <Link href="/about">
                        <a>About Us</a>
                      </Link>
                    </li>
                  </div>

                  <div className="single_link iconAdd border-0">
                    <li>
                      <Link href="/services">
                        <a>Services</a>
                      </Link>
                    </li>
                  </div>

                  {/* <Collapsible
                    trigger={<li className="service_list"><a>Services</a></li>}
                    triggerTagName="div"
                    triggerOpenedClassName="icon_close"
                    triggerClassName="iconAdd"
                    open={false}
                  >
                    <ul
                      onClick={() => setShowSidebar(false)}
                      className="sidebar_sub_menu submenu text-black"
                    >
                      <li>
                        <Link href="/services">Services</Link>
                      </li>
                      <li>
                        <Link href="/services-details">Services Details</Link>
                      </li>
                    </ul>
                  </Collapsible> */}

                  <div className="single_link iconAdd border-0">
                    <li>
                      <Link href="/projects">
                        <a>Projects</a>
                      </Link>
                    </li>
                  </div>

                  <div className="single_link iconAdd border-0">
                    <li>
                      <Link href="/career">
                        <a>Career</a>
                      </Link>
                    </li>
                  </div>

                  {/* <Collapsible
                    trigger={<a>Media</a>}
                    triggerTagName="div"
                    triggerOpenedClassName="icon_close"
                    triggerClassName="iconAdd"
                    open={false}
                  >
                    <ul
                      onClick={() => setShowSidebar(false)}
                      className="sidebar_sub_menu submenu text-black"
                    >
                      <li>
                        <Link href="/blog">Blogs</Link>
                      </li>
                      <li>
                        <Link href="/news">News</Link>
                      </li>
                    </ul>
                  </Collapsible> */}

                  <div className="single_link iconAdd border-0">
                    <li>
                      <Link href="/contact">
                        <a>Contact</a>
                      </Link>
                    </li>
                  </div>
                </ul>
              </nav>
            </div>

            <div
              className={`sidebar__text d-none ${
                sidebarTwo ? "d-xl-block" : "d-lg-block"
              }`}
            >
              <p>
                Vishal Engineers & Galvanizers Pvt. Ltd. specializes in
                fabrication and hot-dip galvanizing of steel products, ensuring
                superior durability and corrosion resistance. Committed to
                quality and innovation, we deliver reliable solutions that
                enhance infrastructure longevity while meeting national and
                international standards.
              </p>
            </div>
            <div
              className={`sidebar__img d-none ${
                sidebarTwo ? "d-xl-block" : "d-lg-block"
              } mb-20`}
            >
              <div className="row gx-2">
                {galleryImages.map((image, index) => (
                  <div key={image.id} className="col-4">
                    <div
                      onClick={() => setShowSidebar(false)}
                      className="sidebar__single-img w-img mb-10"
                    >
                      <button
                        onClick={() => setOpen(true)}
                        className="popup-image"
                      >
                        <a onClick={() => setPhotoIndex(index)}>
                          <img src={`${image.img}`} alt="" />
                        </a>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="sidebar__contact only-mt-30 mb-20">
              <h4>Contact Info</h4>
              <ul>
                <li className="d-flex align-items-center">
                  <div className="sidebar__contact-icon mr-15">
                    <i className="fal fa-map-marker-alt"></i>
                  </div>
                  <div className="sidebar__contact-text">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.google.com/maps/place/Dhaka/@23.7806207,90.3492859,12z/data=!3m1!4b1!4m5!3m4!1s0x3755b8b087026b81:0x8fa563bbdd5904c2!8m2!3d23.8104753!4d90.4119873"
                    >
                      73, Ashwamegh Indl. Estate, Sarkhej-Bavla Rd, N H 8A 1,
                      Changodar, Gujarat Ahmedabad - 382213
                    </a>
                  </div>
                </li>
                <li className="d-flex align-items-center">
                  <div className="sidebar__contact-icon mr-15">
                    <i className="far fa-phone"></i>
                  </div>
                  <div className="sidebar__contact-text">
                    <a href="tel:+919376422225">+91 93764 22225</a>
                  </div>
                </li>
                <li className="d-flex align-items-center">
                  <div className="sidebar__contact-icon mr-15">
                    <i className="fal fa-envelope"></i>
                  </div>
                  <div className="sidebar__contact-text">
                    <a href="mailto:info@vegtower.com">info@vegtower.com </a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="sidebar__social">
              <ul>
                <li>
                  {/* <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a> */}
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/vishal_engineers_galvanizers/?hl=en"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/vishal-engineers-and-galvanizers-pvt-ltd/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/+919376866611"
                    aria-label="WhatsApp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- sidebar area end -->      */}
      <div
        onClick={() => setShowSidebar(false)}
        className={`${showSidebar ? "body-overlay opened" : "body-overlay"}`}
      ></div>
      {/* <!-- sidebar area end -->  */}
    </>
  );
};

export default Sidebar;

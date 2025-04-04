import Link from "next/link";
import useSticky from "../../hook/use-sticky";
import useGlobalContext from "../../hook/useGlobalContext";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { useRouter } from "next/router";

const Header = () => {
  const { headerSticky } = useSticky();  
  const { setShowSidebar } = useGlobalContext();
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  return (
    <>
      <header
        id="header-sticky"
        className={`header__area-3 
      ${headerSticky && "header__sticky"}`}
      >
        <div className="container custom-container ">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-3 col-lg-3 col-md-4 col-6">
              <div className="header__side">
                <div className="header__side-logo">
                  <Link href="/">
                    <a>
                        <img
                        src={headerSticky?"/assets/img/logo/logo for white header.png":"/assets/img/logo/imagewhitebg.png"}
                        alt=""
                        className="logo_image"
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6 d-none d-xl-block">
              <div className="main-menu-3 menu-counter">
                <nav id="mobile-menu-2" className="d-none d-xl-block">
                  <ul>
                    <li>
                      <Link href="/">
                        <span
                          className={`${headerSticky ? "sticky" : ""} ${
                            router.pathname === "/" ? "active" : ""
                          }`}
                        >
                          Home
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/about">
                        <span
                          className={`${headerSticky ? "sticky" : ""} ${
                            router.pathname === "/about" ? "active" : ""
                          }`}
                        >
                          About Us
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services">
                        <span
                          className={`${headerSticky ? "sticky" : ""} ${
                            router.pathname === "/services" ? "active" : ""
                          }`}
                        >
                          Services
                        </span>
                      </Link>
                    </li>
                    {/* <li className="has-dropdown">
                        <span className={`${headerSticky ? "sticky" : ""} `}>Services</span>
                        <ul className="sub-menu">
                          <li className="px-4">
                            <Link href="/services">
                              <span className="sticky-color">Services</span>
                            </Link>
                          </li>
                          <li className="px-4">
                            <Link href="/services-details">
                              <span className="sticky-color">Services Details</span>
                            </Link>
                          </li>
                        </ul>
                    </li> */}
                    <li>
                      <Link href="/projects">
                        <span
                          className={`${headerSticky ? "sticky" : ""} ${
                            router.pathname === "/projects" ? "active" : ""
                          }`}
                        >
                          Projects
                        </span>
                      </Link>
                    </li>
                    {/* <li>
                      <Link href="/blog">
                        <span className={`${headerSticky ? "sticky" : ""} `}>Blog</span>
                      </Link>
                    </li> */}
                    <li>
                      <Link href="/career">
                        <span
                          className={`${headerSticky ? "sticky" : ""} ${
                            router.pathname === "/career" ? "active" : ""
                          }`}
                        >
                          Career
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact">
                        <span
                          className={`${headerSticky ? "sticky" : ""} ${
                            router.pathname === "/contact" ? "active" : ""
                          }`}
                        >
                          Contact Us
                        </span>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-6 d-flex justify-content-end">
              <div
                onClick={() => setShowSidebar(true)}
                className={
                  headerSticky
                    ? "stickyicon"
                    : "header__side-icon info-toggle-btn sidebar-toggle-btn"
                }
              >
                <span className="bar1"></span>
                <span className="bar2"></span>
                <span className="bar3"></span>
              </div>
            </div>
            {/* <div className="col-xl-2 col-lg-6 col-md-6 col-sm-5">
              <div
                className={`${
                  !headerSticky ? "sticky" : "no-hover"
                } header__smcontact-list header__smcontact-list-3`}
                onClick={togglePopup}
              >
                <div className="sm-clist__text sm-clist__text-2">
                  <span>Inquiry Form</span>
                  <h4 onClick={togglePopup} style={{ cursor: "pointer" }}>
                    Connect Us
                  </h4>
                </div>
                <div
                  className="sm-clist__icon sm-clist__icon-2"
                  onClick={togglePopup}
                  style={{ cursor: "pointer" }}
                >
                  <i className="fal fa-long-arrow-right"></i>{" "}
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </header>

      {/* Popup Component */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <span className="close-popup-btn" onClick={togglePopup}>
              &times;
            </span>
            <h2>Inquiry Form</h2>
            <form>
              <label>Name:</label>
              <input type="text" placeholder="Enter your name" required />

              <label>Email:</label>
              <input type="email" placeholder="Enter your email" required />

              <label>Company Name:</label>
              <input
                type="text"
                placeholder="Enter your company name"
                required
              />

              <label>Designation:</label>
              <input
                type="text"
                placeholder="Enter your designation"
                required
              />

              <label>Phone:</label>
              <input
                type="text"
                placeholder="Enter your phone number"
                required
              />

              <label>Message:</label>
              <textarea placeholder="Your message..." required></textarea>

              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Sidebar */}
      <Sidebar sidebarTwo={true} />
      {/* Sidebar */}
    </>
  );
};

export default Header;

import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer-area black-bg-2 pt-100 fix">
          <div className="container">
            <div className="row">
              {/* <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4">
                <div className="footer__widget mb-40">
                  <div className="footer__logo">
                    <Link href="/">
                      <a>
                        <img
                          src="/assets/img/logo/veg-logo.jpg"
                          alt=""
                          className="logo-image"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div> */}
              <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="footer__widget mb-40">
                  <h5 className="footer__widget-title">Company</h5>
                  <div className="footer__widget-content">
                    <div className="footer__links">
                      <ul>
                        <li>
                          <Link href="/about">About Us</Link>
                        </li>
                        <li>
                          <Link href="/services">Services</Link>
                        </li>
                        <li>
                          <Link href="/news">News</Link>
                        </li>
                        <li>
                          <Link href="/projects">Projects</Link>
                        </li>
                        <li>
                          <Link href="/clients">Clients</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="footer__widget mb-40">
                  <h5 className="footer__widget-title">Quick Links</h5>
                  <div className="footer__widget-content">
                    <div className="footer__links">
                      <ul>
                        <li>
                          <Link href="/career">Career</Link>
                        </li>
                        <li>
                          <Link href="/faq">FAQ&apos;s</Link>
                        </li>
                        <li>
                          <Link href="/contact">Contact Us</Link>
                        </li>
                        <li>
                          <Link href="/resource-center">Resource Center</Link>
                        </li>
                        <li>
                          <Link href="/certificates">Certificates</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="footer__widget mb-40">
                  <h5 className="footer__widget-title">Services</h5>
                  <div className="footer__widget-content">
                    <div className="footer__links">
                      <ul>
                        {/* <li>
                          <Link href="/blog">Blogs</Link>
                        </li> */}
                        <li>
                          <Link href="/services-details/prototype">
                            Prototype
                          </Link>
                        </li>
                        <li>
                          <Link href="/services-details/electrical">
                            Electrical
                          </Link>
                        </li>
                        <li>
                          <Link href="/services-details/telecommunication">
                            Telecommunication
                          </Link>
                        </li>
                        <li>
                          <Link href="/services-details/windmill">
                          Windmill
                          </Link>
                        </li>

                        <li>
                          <Link href="/services-details/solar">
                          Solar
                          </Link>
                        </li>
                       
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="footer__widget mb-40">
                  <div className="footer__widget-content">
                    <div className="footer__links">
                      <ul style={{marginTop:"8vh"}}>
                      <li>
                          <Link href="/services-details/roadways">
                          Roadways
                          </Link>
                        </li>
                        <li>
                          <Link href="/services-details/agriculture">
                          Agriculture
                          </Link>
                        </li>
                        <li>
                          <Link href="/services-details/structural">
                          Structural
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                          TMT Bars
                          </Link>
                        </li>
                        <li>
                          <Link href="/services-details/customization">
                          Customization
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-8 col-sm-8">
                <div className="footer__widget mb-40">
                  <h5 className="footer__widget-title">Connect with us</h5>
                  <div className="footer__widget-content">
                    <p className="ft-text mb-35">
                      Subscribe to out newsletter today to receive updates on
                      the latest news, releases and special offers. We respect
                      your privacy. Your information is safe.
                    </p>
                    <div className="footer__subscribe-form p-relative mb-30">
                      <form action="#">
                        <div className="footer__input-group">
                          <input type="text" placeholder="Address" />
                        </div>
                        <div className="footer__input-group">
                          <input type="phone" placeholder="Phone" />
                        </div>
                        <div className="footer__input-group">
                          <input type="email" placeholder="Email" />
                        </div>
                        <div className="footer__button-group">
                          <button type="submit" className="s-button">
                            Subscribe
                          </button>
                        </div>
                      </form>
                    </div>

                    <div className="footer__social">
                      <div className="footer__social-info">
                        <span>Social Network:</span>
                        <div className="footer__social-icon">
                          {/* <a href="#" aria-label="Facebook">
                            <i className="fab fa-facebook-f"></i>
                          </a> */}
                          <a
                            href="https://www.instagram.com/vishal_engineers_galvanizers/?hl=en"
                            aria-label="Instagram"
                          >
                            <i className="fab fa-instagram"></i>
                          </a>
                          <a
                            href="https://www.linkedin.com/company/vishal-engineers-and-galvanizers-pvt-ltd/"
                            aria-label="LinkedIn"
                          >
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                          <a
                            href="https://wa.me/+919376866611"
                            aria-label="WhatsApp"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fab fa-whatsapp"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer__copyright white-bg mt-60">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                  <div className="footer__copyright-text">
                    <p>
                      Copyright & Design By{" "}
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.cittasolutions.com/"
                      >
                        @Citta Solutions
                      </a>{" "}
                      - 2025
                    </p>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                  <div className="footer__copyright-links text-sm-end">
                    <Link href="/disclaimer">Disclaimer</Link>
                    <Link href="/privacy">Privacy Policy</Link>
                    <Link href="/termsandcondition">Terms & Condition</Link>
                    <Link href="/cookie-policy">Cookie Policy</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="footer__shape-1">
            <img src="/9assets/img/footer/footer-shape-1.png" alt="" />
          </div> */}
          {/* <div className="footer__shape-2">
            <img src="/9assets/img/footer/footer-shape-2.png" alt="" />
          </div> */}
        </div>
      </footer>
    </div>
  );
};

export default Footer;

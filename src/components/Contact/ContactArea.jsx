const ContactArea = () => {
  return (
    <div>
      <section
        className="contact__area pt-120 pb-80"
        style={{
          background: `url(/assets/img/bg/contact-bg.png)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="contact__item text-center mb-30">
                <div className="contact__icon mb-35">
                  <i className="fal fa-envelope-open-text"></i>
                </div>
                <h5 className="contact__title mb-25">Email Address</h5>
                <div className="contact__text">
                  <p>
                    <a href="mailto:info@vegtower.com">info@vegtower.com</a>
                  </p>
                  {/* <p>
                    <a href="mailto:hr@vegtower.com">hr@vegtower.com</a>
                  </p> */}
                </div>
                <div className="contact__button mt-65">
                  <a
                    href="mailto:info@vegtower.com"
                    className="tp-btn-white"
                    style={{ width: "25vh" }}
                  >
                    Email Us <i className="fa-light fa-arrow-right-long"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="contact__item text-center mb-30">
                <div className="contact__icon mb-35">
                  <i className="fa-light fa-phone"></i>
                </div>
                <h5 className="contact__title mb-25">Phone Number</h5>
                <div className="contact__text">
                  <p>
                  <img src="/assets/img/smartphone.png" className="pe-1" alt="smartphone" />

                    <a href="tel:+919376422225<">+91 93764 22225</a>
                  </p>
                  <p>
                    <img src="/assets/img/whatsapp.png" className="pe-1" alt="whatsapp" />
                    <a href="tel:+9193768666111<">+91 93768 66611</a>
                  </p>
                </div>
                <div className="contact__button mt-35">
                  <a
                    href="tel:+919376422225<"
                    className="tp-btn-white"
                    style={{ width: "25vh" }}
                  >
                    Call Us <i className="fa-light fa-arrow-right-long"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="contact__item text-center mb-30">
                <div className="contact__icon mb-35">
                  <i className="fa-light fa-map-location-dot"></i>
                </div>
                <h5 className="contact__title mb-25">Office Address</h5>
                <div className="contact__text">
                  <p>
                    <a
                      href="https://goo.gl/maps/ZW5MZEgAG4zRJc6B7"
                      target="blank"
                    >
                      73, Ashwamegh Indl. Estate, Sarkhej-Bavla Rd, N H 8A 1,
                      Changodar, Gujarat Ahmedabad - 382213
                    </a>
                  </p>
                </div>
                <div className="contact__button mt-20">
                  <a
                    href="https://goo.gl/maps/ZW5MZEgAG4zRJc6B7"
                    target="blank"
                    className="tp-btn-white"
                    style={{ width: "25vh" }}
                  >
                    Direction <i className="fa-light fa-arrow-right-long"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="contact__item text-center mb-30">
                <div className="contact__icon mb-35">
                  <i className="fa-light fa-bullseye-arrow"></i>
                </div>
                <h5 className="contact__title mb-25">Social Connect</h5>
                <div className="contact__social mt-30">
                  {/* <a href="#" aria-label="Facebook">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a> */}
                  <a
                    href="https://www.instagram.com/vishal_engineers_galvanizers/?hl=en"
                    aria-label="Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/vishal-engineers-and-galvanizers-pvt-ltd/"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                  <a
                    href="https://wa.me/+919376866611"
                    aria-label="WhatsApp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-whatsapp"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactArea;

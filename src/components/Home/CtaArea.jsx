import Link from 'next/link';
import { useState } from 'react';
const CtaArea = () => {
    const [showPopup, setShowPopup] = useState(false);
    const togglePopup = () => {
      setShowPopup(!showPopup);
    };
  return (
    <div>
      <section
        className="cta__area pt-120 pb-115"
        style={{
          background: `url(assets/img/bg/cta-bg.png)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="cta__content text-center">
                <h6 className="cta__title mb-45 mt-45">
                  Protecting the Environment Through <br /> Smart Engineering.
                </h6>
                <div className="cta__button" onClick={()=>setShowPopup(true)}>
                  {/* <Link href="/services" > */}
                    <a className="tp-btn mr-30">Get a Quote<i className="fal fa-angle-right"></i></a>
                  {/* </Link> */}
                  {/* <Link href="/about" > */}
                    {/* <a className="tp-btn-2">Learn More</a> */}
                  {/* </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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

    </div>
  );
};

export default CtaArea;

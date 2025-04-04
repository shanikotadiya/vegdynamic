import Link from "next/link";

const AboutUs = () => {
  return (
    <div>
      <section className="about__area pt-120 pb-90">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="ab-tab-info mb-30">
                <div className="ab-image w-img">
                  <img src="assets/img/about/index about.jpg" alt="" />
                </div>
                <div className="absp-text absp-text-1">
                  <i className="flaticon-windmill"></i>
                  <div className="absp-info">
                    <h5>
                      <span className="counter">500</span>+
                    </h5>
                    <span className="absm-title">Projects Done</span>
                  </div>
                </div>
                <div className="absp-text absp-text-2">
                  <i className="flaticon-container-1"></i>
                  <div className="absp-info">
                    <h5>
                      <span className="counter">200</span>+
                    </h5>
                    <span className="absm-title">Happy Customer</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="ab-left-content">
                <div className="section__wrapper mb-30">
                  <h4 className="section__title">
                    We fabricate for you the tower of galvanized success
                  </h4>
                  <div className="r-text">
                    <span>about us</span>
                  </div>
                </div>
                <p className="sm-text mb-15">
                The Company can take pride in achieving quite a few milestones, thanks to the continued improvement in production methods, automation, etc. advocated by the management. The care taken at every stage by qualified technical staff also goes a long way in establishing credibility for delivering quality and cost-effective products to the clients. To our customers, we promise to supply Fabricated & Hot Dip Galvanized Steel products that meet National & International Standards, at competitive price and delivery as committed.
                </p>
                {/* <p className="sm-text mb-30">
                  Our mission is to provide quality English language instruction
                  a variety of courses to international and local students in a
                  professional and supportive atmosphere. A variety of courses to
                  international and local students.  Our mission is to provide quality
                  English language instructiona variety of courses to international and local students.
                </p> */}
                <div className="ab-button mb-30">
                  <Link href="/about"><a className="tp-btn">Learn More</a></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

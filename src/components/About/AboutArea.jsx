import Link from 'next/link';

const AboutArea = () => {
  return (
    <div>
      <section className="about__area-2 pt-150 pb-10">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="about__sm-image about__sm-image-df">
                    <div className="sm-image__item w-img mb-30">
                      <a href="#">
                        <img src="/assets/img/about/2/about-1.png" alt="ab-img"/>
                      </a>
                    </div>
                    <div className="sm-image__item w-img mb-30">
                      <a href="#">
                        <img src="/assets/img/about/2/about-3.png" alt="ab-img"/>
                      </a>
                      <div className="sm-image__content">
                        <div className="sm-number">
                          <a href="#" className='text-decoration-none'>
                            30 <span>+</span>
                          </a>
                          <p>Year Of Experience</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="about__sm-image">
                    <div className="sm-image__item w-img mb-30">
                      <a href="#">
                        <img src="/assets/img/about/2/about-2.png" alt="ab-img"/>
                      </a>
                    </div>
                    <div className="sm-image__item w-img mb-30">
                      <a href="#">
                        <img src="/assets/img/about/2/about-4.png" alt="ab-img"/>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="ab-left-content">
                <div className="section__wrapper mb-30">
                  <h4 className="section__title md-text">
                    We can take your business to the next level.
                  </h4>
                  <div className="r-text">
                    <span>about us</span>
                  </div>
                </div>
                <p className="sm-text mb-15">
                  We are in the business of Fabrication & Hot-Dip Galvanizing of Steel Products like Transmission Tower, Telecom Tower, Reinforcement Steel Bar, etc. It is the trust of our customers that has made our presence prominent in the market. Our concept of value to the customers includes supplying Fabricated & Hot-Dip Galvanized steel products according to the National and International standards at competitive price and delivery as committed. To keep pace with new development, we are committed to incorporate and assimilate new production technology. This will enable quality improvement in existing products on continuous basis and we will introduce new products based on the changing market needs. The stability and quality of company&apos;s financial performance will be developed through profitable execution of existing business and new product, and market development.
                </p>
                <p className="sm-text mb-15">
                  Vishal Engineers and Galvanizers Pvt. Ltd. is your trusted partner for Hot-Dip galvanizing and fabrication. Our expertise ensures that your infrastructure is not only durable but also protected from the elements, maximizing the lifespan and efficiency of your solar installations. Choose us for reliable, high-quality galvanizing services that empower your renewable energy projects to thrive.
                </p>
                {/* <div className="ab-button mb-30">
                  <Link href="/about">
                    <a className="tp-btn-d">Learn More</a>
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutArea;

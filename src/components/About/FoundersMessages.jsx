const FoundersMessages = () => {
  return (
    <div>
      <section className="about__area pt-40 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 founder_main">
              <div className="about__right-2 remove_margin">
                <div className="about__info pb-20">
                  <div className="section-2__wrapper mb-30">
                    <h5 className="section__title-sm">
                      Visionary Leadership & Commitment to Excellence
                    </h5>
                    <p className="founder__position">
                      Message from Our Founders & Directors
                    </p>
                  </div>
                  <p>
                  At Vishal Engineers & Galvanizers Pvt. Ltd., we are on a mission to combat the devastating impact of corrosion on the Indian economy. Government figures reveal a staggering annual loss of ₹2,00,000 crores (2015) due to the corrosion of steel products. This not only impacts businesses but also hinders national progress. 
                  </p>
                  <p>
                  Our expertise lies in fabrication and hot-dip galvanizing, a time-tested and highly effective technology that provides unparalleled protection against corrosion. By employing this superior method, we empower our customers to significantly enhance the lifespan and durability of their steel structures and components.
                  </p>
                  <p>
                  We believe that by partnering with our clients, we can contribute to a more resilient and sustainable future for India. Through our innovative solutions and unwavering commitment to quality, we strive to minimize corrosion-related losses and contribute to a stronger, more prosperous nation. 
                  </p>
                  {/* <ul className="founder__highlights">
                    <li>🏆 25+ years of industry experience</li>
                    <li>🔬 Expert in steel fabrication & corrosion prevention</li>
                    <li>🌍 Leading innovation in sustainable galvanization</li>
                    <li>🤝 Trusted by 500+ businesses across India</li>
                  </ul> */}
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 founder_main_image d-flex align-items-center justify-content-center">
              <div className="about__image about__image-2">
                <div className="about__image-big">
                  <img src="/assets/img/about/founders2.webp" alt="Founder Vishal Sharma" width={490} height={500}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FoundersMessages;

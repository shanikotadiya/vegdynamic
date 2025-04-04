const CompanyAbout = () => {
  return (
    <div>
      <section className="company__about">
        <div className="row g-0">
          <div className="col-xl-12">
            <div className="company__about-tab">
              <ul className="nav nav-tabs about-tabs" id="myTab" role="tablist">
                <li className="nav-item abst-item abst-item" role="presentation">
                  <button
                    className="nav-link abst-item-link"
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home"
                    type="button"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    company vision
                    <i className="fa-light fa-arrow-down-long"></i>
                  </button>
                </li>
                <li className="nav-item abst-item" role="presentation">
                  <button
                    className="nav-link active abst-item-link"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    company values
                    <i className="fa-light fa-arrow-down-long"></i>
                  </button>
                </li>
                <li className="nav-item abst-item" role="presentation">
                  <button
                    className="nav-link abst-item-link"
                    id="contact-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#contact"
                    type="button"
                    role="tab"
                    aria-controls="contact"
                    aria-selected="false"
                  >
                    company mission
                    <i className="fa-light fa-arrow-down-long"></i>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="tab-content company__about-tabs-content" id="myTabContent">
              <div
                className="tab-pane fade pt-90 pb-40"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="row">
                  <div className="company_vision justify-content-between">
                    <img src="assets/img/about/Company-mission.jpg" alt="Company Vision" width={350} height={360}/>
                    <div className="col-xl-8">
                      <div className="company__sm-about text-center">
                      <p>
                            <strong>Vishal Engineers & Galvanizers Pvt. Ltd.</strong> is a leading
                            provider of high-quality fabricated and hot-dip galvanized steel products.
                            We are dedicated to delivering innovative and cost-effective solutions that
                            enhance the durability and longevity of critical infrastructure, including
                            transmission towers, telecom towers, reinforcement steel bars, and other
                            essential structures.
                        </p>
                        <p>
                          By leveraging our expertise in advanced fabrication techniques and employing
                          the superior corrosion protection of hot-dip galvanizing, we significantly
                          extend the service life of structures while minimizing maintenance costs and
                          environmental impact. This commitment to excellence benefits our customers
                          by reducing operational expenses and ensuring the long-term reliability of
                          their assets, ultimately contributing to a more sustainable and prosperous
                          economy for India.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade show active pt-90 pb-40"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <div className="row">
                  <div className="company_vision justify-content-between">
                    <img src="assets/img/about/Company-value.jpg" alt="Company Vision" width={350} height={360}/>
                    <div className="col-xl-8">
                      <div className="company__sm-about text-center">
                      <p>
                            <strong>Vishal Engineers & Galvanizers Pvt. Ltd.</strong> is a leading
                            provider of high-quality fabricated and hot-dip galvanized steel products.
                            We are dedicated to delivering innovative and cost-effective solutions that
                            enhance the durability and longevity of critical infrastructure, including
                            transmission towers, telecom towers, reinforcement steel bars, and other
                            essential structures.
                        </p>
                        <p>
                          By leveraging our expertise in advanced fabrication techniques and employing
                          the superior corrosion protection of hot-dip galvanizing, we significantly
                          extend the service life of structures while minimizing maintenance costs and
                          environmental impact. This commitment to excellence benefits our customers
                          by reducing operational expenses and ensuring the long-term reliability of
                          their assets, ultimately contributing to a more sustainable and prosperous
                          economy for India.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade pt-90 pb-40"
                id="contact"
                role="tabpanel"
                aria-labelledby="contact-tab"
              >
                <div className="row">
                  <div className="company_vision justify-content-between">
                    <img src="assets/img/about/Company-vision.jpg" alt="Company Vision" width={350} height={360}/>
                    <div className="col-xl-8">
                      <div className="company__sm-about text-center">
                      <p>
                            <strong>Vishal Engineers & Galvanizers Pvt. Ltd.</strong> is a leading
                            provider of high-quality fabricated and hot-dip galvanized steel products.
                            We are dedicated to delivering innovative and cost-effective solutions that
                            enhance the durability and longevity of critical infrastructure, including
                            transmission towers, telecom towers, reinforcement steel bars, and other
                            essential structures.
                        </p>
                        <p>
                          By leveraging our expertise in advanced fabrication techniques and employing
                          the superior corrosion protection of hot-dip galvanizing, we significantly
                          extend the service life of structures while minimizing maintenance costs and
                          environmental impact. This commitment to excellence benefits our customers
                          by reducing operational expenses and ensuring the long-term reliability of
                          their assets, ultimately contributing to a more sustainable and prosperous
                          economy for India.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompanyAbout;

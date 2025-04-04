import React from "react";

const CompanyInfrastructure = () => {
  return (
    <section className="about__area pt-40 pb-90">
      <div className="container">
        <div className="row">
          
          {/* Left Side - Infrastructure Image */}
          <div className="col-xl-6 col-lg-6 about__image-section d-flex align-items-center justify-content-center">
            <div className="about__image about__image-2">
              <div className="about__image-big">
                <img 
                  src="/assets/img/about/Infrastructure.webp" 
                  alt="Vishal Engineers Infrastructure"
                  width={500} 
                  height={500}
                />
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="col-xl-6 col-lg-6 about__content-section">
            <div className="about__info">
              <div className="section-2__wrapper mb-30">
                <h5 className="section__title-sm">Our State-of-the-Art Infrastructure</h5>
              </div>
              <p>
                At Vishal Engineers, we take pride in our world-class infrastructure, designed to deliver 
                high-quality fabrication and galvanization solutions with precision, efficiency, and scale.
              </p>

              <h3> Strategic Location & Expansive Facility</h3>
              <ul className="about__highlights">
                <li> Prime Industrial Location – Situated on National Highway 8.A, just 20 km from Ahmedabad.</li>
                <li> Massive Land Area – 45,000 Sq. yards for large-scale operations.</li>
                <li> High Production Capacity – Fabricating 54,000 Metric Tonnes per annum.</li>
              </ul>

              <h3> Advanced Fabrication Capabilities</h3>
              <ul className="about__highlights">
                <li> CNC Section Punching for precision shaping</li>
                <li> Roll Forming & Plasma Cutting for superior handling</li>
                <li> Blast Cleaning & Bandsaw Cutting for smooth finishing</li>
                <li> MIG Welding & Hot Bending for high-strength fabrication</li>
              </ul>

              <h3> World-Class Galvanizing Plants</h3>
              <ul className="about__highlights">
                <li> <b>Plant 1:</b> Shade Size 15m x 86m | Bath: 8m (L) x 1.2m (W) x 1.6m (D)</li>
                <li> <b>Plant 2:</b> Shade Size 21m x 66m | Bath: 10.25m (L) x 1.3m (W) x 1.6m (D)</li>
              </ul>

              <p>
                With our state-of-the-art equipment and dedicated workforce, Vishal Engineers ensures precision-engineered 
                solutions, highest quality standards, and on-time project execution.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CompanyInfrastructure;

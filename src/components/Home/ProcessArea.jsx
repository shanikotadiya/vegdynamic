import Link from 'next/link';

const ProcessArea = () => {
  const processData = [
    {
      id: 1,
      icon: "assets/img/icon/procurement.svg",
      title: "Procurement",
    },
    {
      id: 2,
      icon: "assets/img/icon/fabrication.svg",
      title: "Fabrication",
    },
    {
      id: 3,
      icon: "assets/img/icon/inspection.svg",
      title: "Inspection",
    },
    {
      id: 4,
      icon: "assets/img/icon/galvanizing.svg",
      title: "Hot – Dip Galvanizing",
    },
    {
      id: 5,
      icon: "assets/img/icon/box.svg",
      title: "Packing and Bundling",
    },
    {
      id: 6,
      icon: "assets/img/icon/shipment.svg",
      title: "Dispatch",
    },
  ];
  return (
    <div>
      <section
        className="process__area pt-120 pb-105"
        style={{
            background: `url(assets/img/bg/process-bg.jpg)`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section__wrapper section__wrapper-2 mb-30 text-center">
                <span className="st-meta-2">Our Process</span>
                <h4 className="section__title">Company work process</h4>
              </div>
            </div>
          </div>
          <div className="row mt-30">
            {processData.map((process) => {
              return (
                <div key={process.id} className="col-xl-3 col-lg-3 col-md-6">
                  <div className="process__item text-center mb-40">
                    <div className="process__content">
                      <div className="process__list-icon2 mb-20">
                        <img src={`${process.icon}`} alt="icon" />
                      </div>
                      <span>Step 0{`${process.id}`}</span>
                      <h5 className="p-name mt-20">
                        <Link href="#">{process.title}</Link>
                      </h5>
                      {/* <div className="process__more">
                        <Link href="/services-details">
                          <a><i className="fa-light fa-arrow-right-long"></i></a>
                        </Link>
                      </div> */}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProcessArea;

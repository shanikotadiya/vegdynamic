import Link from "next/link";
const ServicesArea = () => {
  const servicesData = [
    {
      id: 1,
      redirect: true,
      icon: "/assets/img/icon/prototype.png",
      key: "prototype",
      title: "Prototyping",
      discription:
        "Precise prototype fabrication for steel structures and infrastructure projects.",
    },
    {
      id: 2,
      redirect: true,
      icon: "/assets/img/icon/electrical.png",
      key: "electrical",
      title: "Electrical",
      discription:
        "Premium steel components for electrical transmission towers and substations.",
    },
    {
      id: 3,
      redirect: true,
      icon: "/assets/img/icon/telecommunication.png",
      key: "telecommunication",
      title: "Telecommunication",
      discription:
        "Reliable galvanized steel solutions for telecom towers and communication networks.",
    },
    {
      id: 4,
      redirect: true,
      icon: "/assets/img/icon/windpower.png",
      key: "windmill",
      title: "Windmill",
      discription:
        "Durable steel structures supporting efficient wind energy generation systems.",
    },
    {
      id: 5,
      redirect: true,
      icon: "/assets/img/icon/solarcell.png",
      key: "solar",
      title: "Solar",
      discription:
        "Customized steel frames and mounts for solar panel installations.",
    },
    {
      id: 6,
      redirect: true,
      icon: "/assets/img/icon/road.png",
      key: "roadways",
      title: "Roadways",
      discription:
        "Galvanized steel products ensuring durable and safe road infrastructure.",
    },
    {
      id: 7,
      redirect: true,
      icon: "/assets/img/icon/agriculture.png",
      key: "agriculture",
      title: "Agriculture",
      discription:
        "Steel solutions designed for irrigation, fencing, and agricultural advancements.",
    },
    {
      id: 8,
      redirect: true,
      icon: "/assets/img/icon/structural.png",
      key: "structural",
      title: "Structural",
      discription:
        "High-quality steel fabrication for industrial, commercial, and structural needs.",
    },
    {
      id: 9,
      redirect: false,
      icon: "/assets/img/icon/tmt-bars.png",
      key: "TMT Bars",
      title: "TMT Bars",
      discription:
        "High-strength, corrosion-resistant TMT bars for durable and reliable construction projects.",
    },
    {
      id: 10,
      redirect: true,
      icon: "/assets/img/icon/customization.png",
      key: "customization",
      title: "Customization",
      discription:
        "Tailored steel solutions for unique infrastructure and industrial challenges.",
    },
  ];

  return (
    <div>
      <section className="services__area-2 pt-90 pb-80">
        <div className="container">
          <div className="row mt-30">
            {servicesData.map((service) => {
              return (
                <Link
                  key={service.id}
                  href={
                    service.redirect
                      ? `/services-details/${service.key}`
                      : "#"
                  }
                >
                  <div className="col-xl-3 col-lg-3 col-md-6">
                    <div className="services__item services__item-grid text-center mb-40">
                      <div className="services__item-content">
                        <div className="ser__icon mb-30">
                          <img
                            src={service.icon}
                            alt="img"
                            width={50}
                            height={60}
                          />
                        </div>
                        <h5 className="ser__title mb-10">{service.title}</h5>
                        <p>{service.discription}</p>
                        <div className="ser__more-option mt-15">
                          <Link
                            href={
                              service.redirect
                                ? `/services-details/${service.key}`
                                : "#"
                            }
                          >
                            <a>
                              Service Details
                              <i className="fal fa-long-arrow-right"></i>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesArea;

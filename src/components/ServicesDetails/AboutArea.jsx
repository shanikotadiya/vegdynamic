import Link from "next/link";

const AboutArea = ({ selectedService, ServiceDetails }) => {
  
  const validServices = selectedService.subDescription.filter(
    (service) => service.key.trim() != "" && service.content.trim() == ""
  );

  return (
    <div>
      <section className="about__area pt-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="about__image about__image-2">
                <div className="about__image-big">
                  <img
                    src={selectedService.image1}
                    alt={`image_${selectedService.image1}`}
                  />
                </div>
                <div className="about__image-small about__image-small-2">
                  <img
                    src={selectedService.image2}
                    alt={`image_${selectedService.image2}`}
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="about__right-2">
                <div className="about__info pb-20">
                  <div className="section-2__wrapper mb-30">
                    {selectedService &&
                    selectedService.title &&
                    selectedService.title !== "" ? (
                      <h5 className="section__title-sm">
                        {selectedService.title}
                      </h5>
                    ) : (
                      <h5 className="section__title-sm">
                        {selectedService.title}
                      </h5>
                    )}
                  </div>
                  {selectedService && selectedService.discription ? (
                    <p className="about__info_sub">
                      {selectedService?.discription}
                    </p>
                  ) : (
                    <p className="about__info_sub">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Ab non voluptas quisquam mollitia dignissimos ad est, nam
                      magni omnis officiis praesentium itaque vel a quod odio
                      repellat porro illum soluta quos, numquam maxime velit
                      maiores labore? Voluptates pariatur suscipit ut tempora
                      odit sed unde quas reprehenderit? Provident quos at beatae
                      odio voluptas ea sapiente perspiciatis. Natus ut
                      consequatur, iure, voluptates tenetur ad officiis
                      molestias aliquam ducimus est laudantium earum nihil?
                      Voluptatibus consequatur id ullam eaque in! Natus debitis
                      itaque perferendis excepturi. Dolorem quo laboriosam
                      voluptate ipsam dolor, reprehenderit dignissimos quas illo
                      cumque. Accusantium, tenetur officiis hic perferendis modi
                      nisi molestiae.
                    </p>
                  )}
                </div>
                {validServices.map((item, index) => (
                  <ul key={index}>
                    <li className="fw-bold">{item.key}</li>
                  </ul>
                ))}
                {/* <div className="about__button mt-35">
                  <Link href="/about" >
                    <a className="tp-touch-btn">Learn More <i className="fa-light fa-arrow-right-long"></i></a>
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

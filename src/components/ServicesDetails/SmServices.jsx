import { useState } from "react";

const SmServices = ({ currentService }) => {
  const validServices = currentService.subDescription.filter(
    (service) => service.key.trim() !== "" && service.content.trim() !== ""
  );

  const [cardcontent, setCardContent] = useState(validServices?.[0]?.content || "");
  const [isContentVisible, setIsContentVisible] = useState(true);
  const [activeCardId, setActiveCardId] = useState(1);
  


  const defaultContent = `
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
    Laboriosam eligendi eaque voluptas minus nihil! Dolores, excepturi ab! 
    Libero deserunt, dicta ab voluptatem voluptas at voluptatibus, 
    laboriosam voluptate laudantium corporis consectetur doloremque explicabo.
  `;

  const handleCardClick = (id, content) => {    
    setIsContentVisible(false); // First hide content to reset animation
    setTimeout(() => {
      setActiveCardId(id);
      setCardContent(content);
      setIsContentVisible(true); // Show content after a short delay to trigger animation
    }, 150); // Delay to reset the animation (short timeout)
  };

  return (
    <div>
      {validServices.length > 0 && (
        <div className="sm-services__area grey-bg-5 pt-120 pb-100 mt-155">
          <div className="container">
            <div className="sm-services__lists-2">
              <div className="row all-list">
                {validServices.map((service) => {
                  return (
                    <div
                      key={service.id}
                      className="col-xl-3 col-lg-4 col-md-6"
                    >
                      <div className="sm-services__item mb-30">
                        <div
                          className="flip-card"
                          onClick={() =>
                            handleCardClick(
                              service.content === ""
                                ? defaultContent
                                : service.id,
                              service.content
                            )
                          }
                        >
                          <div className="flip-card-inner flip-card-inner-2">
                            {/* <div className="flip-card-front flip-card-front-2"> */}
                            <div
                              className={`flip-card-front flip-card-front-2 ${
                                activeCardId === service.id ? "active-card" : ""
                              }`}
                            >
                              <div className="flip-card-icon flip-card-icon-2 mb-20">
                                <i className={`${service.icon}`}></i>
                              </div>
                              <h5 className="flip-card-title flip-card-title-2">
                                {service.key}
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-12">
                <div className="company__sm-about text-center">
                  <div
                    className={`zoom-text ${
                      isContentVisible && cardcontent ? "show" : ""
                    }`}
                  >
                    {activeCardId !== null && (
                      <div className="row">
                        {/* Left Column: Image */}
                        <div className="col-xl-4 col-sm-4 col-md-12">
                          <img
                            src={
                              validServices.find((s) => s.id === activeCardId)
                                ?.img
                            }
                            alt="Service Image"
                            className="img-fluid service-image"
                            // style={{ height: "90%", borderRadius: "5px"}}
                          />
                        </div>

                        {/* Right Column: Content */}
                        <div className="col-xl-8 col-sm-8 col-md-12">
                          <p
                            className="flipcard-show-content text-center"
                            dangerouslySetInnerHTML={{ __html: cardcontent }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SmServices;

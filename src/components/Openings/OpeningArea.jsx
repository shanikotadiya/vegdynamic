import LogoCard from "../Complianceslogos/logocard";
import OpeningCard from "./OpeningCard";
export default function OpeaningsArea() {
  return (
    <>
      <section className="">
        <div className="container">
          <div className="openingarea">
            <div className="row ">
              <div className="col-lg-6">
                <div className="section__wrapper mb-45">
                  <h4 className="section__title">Openings</h4>
                  <div className="r-text">
                    <span>Current</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-start">
              <OpeningCard
                profile="Solidworks Design Engineer"
                experience="3 years"
                filename="file-1"
              />
              <OpeningCard
                profile="Marketing"
                experience="5 year"
                filename="file-2"
              />
              <OpeningCard
                profile="Store keeper"
                experience="3 year"
                filename="file-3"
              />
              <OpeningCard
                profile="Purchase Manager"
                experience="3 year"
                filename="file-3"
              />
            </div>
            <p className="pt-20 m-0 pb-0">
              Apply for the listed job openings using the form below or directly
              share your resume with us at{" "}
              <a href="hr@vegtower.com">hr@vegtower.com</a> to explore career
              opportunities with Vishal Engineers & Galvanizers
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

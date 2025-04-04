import SingleCompanyAbout from "../common/SingleCompanyAbout";

const CompanyAboutDetails = () => {
  return (
    <section className="container">
        <div className="mt-50 mb-50 sub_details">
          <SingleCompanyAbout
            icon="flaticon-engineering"
            title="High Accuracy and Precision"
            sub="Ensuring flawless fabrication with unmatched precision for superior performance and reliability."
          />
          <SingleCompanyAbout
            icon="flaticon-industrial-robot-1"
            title="Quality Assurance"
            sub="Rigorous testing and strict standards guarantee premium quality in every steel product."
          />
          <SingleCompanyAbout
            icon="flaticon-pushcart"
            title="Timely Delivery"
            sub="Efficient processes and commitment to deadlines ensure on-time project completion, every time."
          />
        </div>
    </section>
  );
};

export default CompanyAboutDetails;

import React from "react";

const SingleCompanyAbout = ({ icon, title, sub }) => {
  return (
      <div className="col-xl-4 col-lg-4">
        <div className="sdf__item mb-30">
          <div className="sdf__icon">
            <i className={icon}></i>
          </div>
          <div className="sdf__text">
            <h6>{title}</h6>
            <p>{sub}</p>
          </div>
        </div>
      </div>
  );
};

export default SingleCompanyAbout;

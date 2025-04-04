import React from "react";

const OpeningCard = ({  profile, experience, filename }) => {
  // const handleClick = (filename) => {
  //   const pdfUrl = './docs/testpdf.pdf';  // Place the PDF in the 'public' folder
  //   window.open(pdfUrl, '_blank');
  // };

  return (
    <div
      className="card"
      // onClick={() => handleClick(filename)}
    >
      {/* <img src={logoUrl} alt="Logo" className="logo" /> */}
      <h6 className="title">{profile}</h6>
      <p className="description">Min Experiance: {experience}</p>
    </div>
  );
};

export default OpeningCard;
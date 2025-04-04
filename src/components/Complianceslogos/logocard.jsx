import React from "react";

const LogoCard = ({ logoUrl, title, description, filename }) => {
  const handleClick = (filename) => {
    const pdfUrl = './docs/testpdf.pdf';  // Place the PDF in the 'public' folder
    window.open(pdfUrl, '_blank');
  };

  return (
    <div
      className="card align-items-center"
      onClick={() => handleClick(filename)}
    >
      <img src={logoUrl} alt="Logo" className="logo" />
      <h3 className="title">{title}</h3>
      <p className="description">{description}</p>
    </div>
  );
};

export default LogoCard;

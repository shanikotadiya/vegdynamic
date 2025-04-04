import React, { useState } from "react";
const MarketingMaterials = [
  {
    particular: "Company Profile",
    version: "1.1",
    documentType: "PDF",
    filename: "vegpl_galva_rebars_catalogue.pdf",
  },
];
const CertificationsApprovals = [
  {
    particular: "Indian Standard 94.1988",
    date: "1988",
    documentType: "PDF",
    filename: "indian_standard_12594.1988.pdf",
  },
  {
    particular: "BIS Vishal Engineers",
    date: "20 Jul 2023",
    documentType: "PDF",
    filename: "bis_vishal_renewal_endorsement_copy.pdf",
  },
  {
    particular: "DISHGS",
    date: "27 Dec 2004",
    documentType: "PDF",
    filename: "new_factory_licence_upto_2027.pdf",
  },
  {
    particular: "GETCO Vendor Registration",
    date: "08 Sep 2023",
    documentType: "PDF",
    filename: "getco_vendor_registration.pdf",
  },
  {
    particular: "UDYAM Registration Certificate",
    date: "13 Mar 2021",
    documentType: "PDF",
    filename: "udyam_registration_certi-vegpl.pdf",
  },
  {
    particular: "ESIC Registration Certificate",
    date: "09 Feb 2011",
    documentType: "PDF",
    filename: "esic_registration_certificate.pdf",
  },
  {
    particular: " Certificate of Incorporation",
    date: "09 Apr 2011",
    documentType: "PDF",
    filename: "certificate_of_incorporation.pdf",
  },
  {
    particular: "PF Certificate",
    date: "29 Dec 2015",
    documentType: "PDF",
    filename: "vegpl_pf_certificate.pdf",
  },
];
export default function ResourceCenterDataTable() {
  const [resourceCenterDataTable, setResourceCenterTable] = useState(
    CertificationsApprovals
  );
  const [activeTab, setActiveTab] = useState("CertificationsApprovals");



  return (
    <>
      {/* <PortfolioArea /> */}
      <section className="pt-50 pb-90">
        <div className="row">
          <div className="col-12">
            <div className="text-center">
              <div className="portfolio-filter mb-40">
                <button
                  className={
                    activeTab === "CertificationsApprovals" ? "active" : ""
                  }
                  onClick={() => {
                    setActiveTab("CertificationsApprovals");
                    setResourceCenterTable(CertificationsApprovals);
                  }}
                >
                  Certifications & Approvals
                </button>

                <button
                  className={activeTab === "MarketingMaterials" ? "active" : ""}
                  onClick={() => {
                    setActiveTab("MarketingMaterials");
                    setResourceCenterTable(MarketingMaterials);
                  }}
                >
                  Marketing Materials
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <table
              border={1}
              style={{
                width: "100%",
                borderCollapse: "collapse",
                textAlign: "center",
              }}
            >
              <thead>
                <tr>
                  <th>Particular</th>
                  <th>
                    {resourceCenterDataTable[0].version ? "Version" : "Date"}
                  </th>
                  <th>Document Type</th>
                  <th>Download</th>
                </tr>
              </thead>
              <tbody>
                {resourceCenterDataTable.map((item, index) => (
                  <tr key={index}>
                    <td>{item.particular}</td>
                    <td>{item.version ? item.version : item.date}</td>
                    <td>{item.documentType}</td>
                    <td>
                      <a
                        href={`/docs/${item.filename}`}
                        download={item.download}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()} // Prevent unwanted propagation
                      >
                        Download
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}

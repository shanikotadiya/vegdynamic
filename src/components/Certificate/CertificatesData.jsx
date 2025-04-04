import { useState } from "react";
import { FaCheckCircle, FaCertificate, FaAward } from "react-icons/fa";

const CertificatesData = () => {
  const [activeTab, setActiveTab] = useState("standards");

  const tabs = [
    { id: "standards", label: "Indian Standards", icon: <FaCheckCircle /> },
    { id: "certifications", label: "Certifications", icon: <FaCertificate /> },
    { id: "approvals", label: "Approvals", icon: <FaAward /> },
  ];

  const data = {
    standards: ["IS 4759 & 2629", "IS 12594 -1988", "IS 802 Part 2"],
    certifications: ["ISOQAR", "UKAS"],
    approvals: ["PGCIL", "GETCO", "BSNL", "RVPNL", "MPTCL"],
  };

  return (
    <section className="certificates-section">
      <div className="container">
        <h2 className="section-title text-center">Certificates & Compliance</h2>

        {/* Tabs Navigation */}
        <div className="tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="content">
          {data[activeTab].map((item, index) => (
            <div key={index} className="content-item">
              <span className="content-icon">{tabs.find((t) => t.id === activeTab).icon}</span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesData;

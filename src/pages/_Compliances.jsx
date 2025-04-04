import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import SEO from "../components/seo";
import CompliancesLogo from "../components/Complianceslogos/complianceslogo";
export default function Compliances() {
  return (
    <>
      <main>
        <SEO pageTitle="Faq" />
        <Header />
        <Breadcrumb title="Compliances" subtitle="Compliances Page" />
        <CompliancesLogo/>
        <Footer />
      </main>
    </>
  );
}

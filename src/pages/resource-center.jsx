import Breadcrumb from "../components/common/Breadcrumb";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import SEO from "../components/seo";
import ResourceCenterDataTable from "../components/DataTable/Datatable.jsx";

export default function ResurceCenter() {
  return (
    <>
      <main>
        <SEO pageTitle="Services Details" />
        <Header />
        <Breadcrumb title="Details" subtitle="Resource Center" />
        <ResourceCenterDataTable/>
        <Footer />
      </main>
    </>
  );
}

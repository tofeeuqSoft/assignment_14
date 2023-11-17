import React from "react";
import PageName from "../components/PageName";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import ServicesMain from "../components/ServicesMain";

function ServicesPage() {
  return (
    <div className="services">
      <PageName />
      <ServicesMain />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default ServicesPage;

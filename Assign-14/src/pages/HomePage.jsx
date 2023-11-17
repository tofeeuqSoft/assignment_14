import React from "react";
import Hero from "../components/Hero";
import WorkList from "../components/WorkList";
import StatList from "../components/StatList";
import FeatureProducts from "../components/FeatureProducts";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div className="homepage">
      <Hero />
      <WorkList />
      <StatList />
      <FeatureProducts />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default HomePage;

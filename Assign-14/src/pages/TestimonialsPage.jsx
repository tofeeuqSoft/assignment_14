import React from "react";
import PageName from "../components/PageName";
import TestimonialsMain from "../components/TestimonialsMain";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

function TestimonialsPage() {
  return (
    <div className="testimonials">
      <PageName />
      <TestimonialsMain />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default TestimonialsPage;

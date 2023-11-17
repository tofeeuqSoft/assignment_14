import React from "react";
import { TestimonialList } from "../../public/database/TestimonialList";

function TestimonialsMain() {
  return (
    <div className="testimonialsMain">
      <div className="row">
        <h2 className="col-md-6 teamMembersH">Testimonial List</h2>
      </div>
      <div className="row mt-3">
        <h6 className="col-md-5 tmT">
          Better Agency/SEO Solution At Your Fingertips
        </h6>
      </div>
      <div className="row mt-4">
        {TestimonialList.map((testimoni, i) => {
          const { src, desc, name, designation } = testimoni;
          return (
            <div className="col-md-4" key={i.toString()}>
              <div className=" m-2 singleTestimoni ">
                <img src={src} alt="" className=" img-fluid" />
                <p>{desc}</p>
                <div className="testimoniOf">
                  <h3 className="mb-3 ">{name}</h3>
                  <h5>{designation}</h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TestimonialsMain;

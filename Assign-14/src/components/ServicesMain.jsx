import React from "react";
import { ourServices } from "../../public/database/ourServices";

function ServicesMain() {
  return (
    <div>
      <div className="servicesMain">
        <div className="row">
          <h2 className="col-md-6 teamMembersH">Our All Services</h2>
        </div>
        <div className="row mt-3">
          <h6 className="col-md-5 tmT">We Provide BestWeb design services</h6>
        </div>
        <div className="row ">
          {ourServices.map((service, i) => {
            const { title, desc, images } = service;
            return (
              <div key={i.toString} className="col-lg-6  ">
                <div className="row m-2">
                  <div className="singleservice">
                    <h3>{title}</h3>
                    <h5>{desc}</h5>
                    <div className="servicesimgs">
                      {images.map((img, i) => {
                        return (
                          <img
                            key={i.toString()}
                            src={img.src}
                            alt=""
                            className="img-fluid"
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ServicesMain;

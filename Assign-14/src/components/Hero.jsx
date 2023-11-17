import React from "react";
import OurPartners from "./OurPartners";

function Hero() {
  return (
    <>
      <div className="hero container-fluid">
        <div className="row align-items-center rw">
          <div className="col-lg-6 left">
            <h1>Increase Your Customers Loyalty and Satisfaction</h1>
            <p>
              We help businesses like yours earn more customers, standout from
              competitors, make more money
            </p>
            <button className=" heroBtn btn btn-success mt-3">
              {" "}
              Get Started
            </button>
          </div>
          <div className="col-lg-6 right ">
            <div className="row rightUp">
              <div className=" img1">
                <img
                  src="images/hero_Images/Rectangle_1241.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className=" img2">
                <img
                  src="images/hero_Images/Rectangle_1242.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="row rightDown">
              <div className="img1">
                <img
                  src="images/hero_Images/Rectangle_1243.png"
                  alt=""
                  className="img-fluid recImg3"
                  style={{ height: "164px", objectFit: "cover" }}
                />
              </div>
              <div className=" img2">
                <img
                  src="images/hero_Images/Rectangle_1244.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <OurPartners />
        </div>
      </div>
    </>
  );
}

export default Hero;

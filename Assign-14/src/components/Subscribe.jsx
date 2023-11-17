import React from "react";

function Subscribe() {
  return (
    <div className="subscribe">
      <div className="flex-col">
        <h3 className="subscribehead">subscribe</h3>
        <div className=" mt-2">
          <div className="col-md-6 mx-auto">
            <h5 className="subscribetitle ">
              Subscribe to get the latest news about us
            </h5>
          </div>
        </div>
        <div className=" mt-1 mb-4">
          <p className="para">
            Please drop your email below to get daily update about what we do
          </p>
        </div>
        <div className=" justify-content-center inpRegion">
          <input
            type="text"
            placeholder="Enter Your Email Adress"
            className="subInput"
          />
          <button className="btn btn-danger subscribebtn ">Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;

import React, { useEffect, useState } from "react";
import { featureproducts } from "../../public/database/featureProduct";

function FeatureProducts() {
  const [featureProjects, setFeatureProjects] = useState([]);

  const [firstProject, setFirstProject] = useState([]);

  useEffect(() => {
    setFeatureProjects(featureproducts.slice(1));
  }, []);

  useEffect(() => {
    setFirstProject(featureproducts.slice(0, 1));
  }, []);

  return (
    <div className="featurePro">
      <div className="row">
        <h6 className="ms-3 fpheading">Feature Projects</h6>
      </div>
      <div className="row">
        <h4 className="ms-3 mt-5 col-md-6">
          We provide the Perfect Solution to your business growth
        </h4>
      </div>
      <div className="row mt-5">
        {firstProject &&
          firstProject.map((project, i) => {
            const { img, date, title } = project;
            return (
              <div className="col-md-6" key={i.toString()}>
                <div className="row ">
                  <img src={img} alt="" className="img-fluid firstImg" />
                  <h5 className="mt-4 date">{date}</h5>
                  <h4 className="mb-4 projectTitle">{title}</h4>
                </div>
              </div>
            );
          })}

        <div className="col-md-6">
          <div className="row  ">
            {featureProjects &&
              featureProjects.map((project, i) => {
                const { img, date, title } = project;
                return (
                  <div className="col-md-6" key={i.toString()}>
                    <div className="row ">
                      <img src={img} alt="" className="img-fluid restImg" />
                      <h5 className="date mt-2">{date}</h5>
                      <h4 className="mb-3 projectTitle">{title}</h4>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureProducts;

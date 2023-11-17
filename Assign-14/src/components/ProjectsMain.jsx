import React from "react";
import { allProjects } from "../../public/database/allProjects";

function ProjectsMain() {
  return (
    <div className="projectsMain">
      <div className="row">
        <h2 className="col-md-6 teamMembersH">All Project</h2>
      </div>
      <div className="row mt-3">
        <h6 className="col-md-5 tmT">
          Better Agency/SEO Solution At Your Fingertips
        </h6>
      </div>
      <div className="row mt-4">
        {allProjects.map((project, i) => {
          const { title, src } = project;
          return (
            <div className="col-md-6" key={i.toString()}>
              <div className=" m-2 singleproject ">
                <img src={src} alt="" className=" img-fluid " />
                <h3 className="">{title}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectsMain;

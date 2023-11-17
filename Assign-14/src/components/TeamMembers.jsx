import React from "react";
import { teamMembers } from "../../public/database/teamMembers";

function TeamMembers() {
  return (
    <div className="teamMembers ">
      <div className="row">
        <h2 className="col-sm-4 teamMembersH">Our Team Member</h2>
      </div>
      <div className="row mt-3">
        <h6 className="col-sm-4 tmT">Check our awesome team members</h6>
      </div>
      <div className="row mt-4">
        {teamMembers.map((member, i) => {
          const { img, title } = member;
          return (
            <div className="col-md-4" key={i.toString()}>
              <div className="row m-2 singlemember ">
                <img src={img} alt="" className="memberImg img-fluid " />
                <h3 className="my-2 p-3">{title}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TeamMembers;

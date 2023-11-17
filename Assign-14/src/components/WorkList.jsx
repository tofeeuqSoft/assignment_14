import React from "react";
import { workList } from "../../public/database/Work_List";

function WorkList() {
  return (
    <div className="worklist">
      <div className="row">
        <h6 className="ms-3 wlheading">Work-list</h6>
      </div>
      <div className="row mt-5">
        <h4 className="col-md-6 ms-3">
          We provide the Perfect Solution to your business growth
        </h4>
      </div>
      <div className="row mt-3">
        {workList.map((work, i) => {
          const { img, title, desc } = work;
          return (
            <div className="col-md-4  bg-white" key={i.toString()}>
              <div className="row">
                <div className="work">
                  <img src={img} alt="" className="img-fluid" />
                  <h5>{title}</h5>
                  <p>{desc}</p>
                  <button className="btn btn-white">Learn more ➡</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WorkList;

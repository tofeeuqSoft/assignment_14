import React from "react";
import { statlist } from "../../public/database/counter";

function StatList() {
  return (
    <div className="statlist ">
      <div className="row">
        {statlist.map((stat, i) => {
          const { img, amount, title } = stat;
          return (
            <div className="col-md-3" key={i.toString()}>
              <div className="row m-1 ">
                <div className="stat ">
                  <img src={img} alt="" className="stat-img img-fluid my-4" />
                  <h4 className="mb-3">{amount}</h4>
                  <p>{title}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default StatList;

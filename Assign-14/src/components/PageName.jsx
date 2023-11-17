import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

function PageName() {
  const [pageName, setPageName] = useState("");
  let location = useLocation();

  useEffect(() => {
    setPageName(location.pathname.slice(1));
  }, []);
  return (
    <div className="row pagename flex-column">
      <div className="col-sm-4">
        <h2 className="pagenameH">{pageName}</h2>
      </div>
      <div className="col-sm-4">
        Home &gt;{""}
        <NavLink className="pnLink" to={"/team"}>
          {pageName}
        </NavLink>
      </div>
    </div>
  );
}

export default PageName;

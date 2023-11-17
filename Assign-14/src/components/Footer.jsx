import React from "react";
import facebook from "/images/WEB_LOGO/Group32.png";
import twitter from "/images/WEB_LOGO/Group33.png";
import linkedIn from "/images/WEB_LOGO/Group34.png";
import instagram from "/images/WEB_LOGO/Vector.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="row">
        <div className="col-md-4">
          <h3>WEB LOGO</h3>
          <p className="footerP">
            Some footer text about the Agency. Just a little description to help
            people understand you better
          </p>
          <div className="logo">
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={linkedIn} alt="" />
            <img src={instagram} alt="" />
          </div>
        </div>
        <div className="col-md-4  footerQL ">
          <h4 className="ql">Quick Links</h4>
          <ul className="footerUl">
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Portfolio</a>
            </li>
            <li>
              <a href="">About us</a>
            </li>
            <li>
              <a href="">Contact us</a>
            </li>
          </ul>
        </div>
        <div className="col-md-4 footerAddress ">
          <div className="footerInner">
            <h4 className="addressH">Address</h4>
            <h5 className="address">
              Design Agency Head Office. Airport Road United Arab Emirate
            </h5>
          </div>
        </div>
      </div>
      <div className="row">
        <h5>Copyright Design Agency 2022</h5>
      </div>
    </footer>
  );
}

export default Footer;

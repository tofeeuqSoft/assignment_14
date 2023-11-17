import React from "react";
import { NavLink } from "react-router-dom";

function AppNavbar() {
  return (
    <>
      <header className="header">
        <h2 className="mainlogo">
          Design<span className="agency">AGENCY</span>{" "}
        </h2>
        <nav className="navLink">
          <NavLink
            className={({ isActive, isPending }) =>
              isActive ? "active link" : isPending ? "pending link" : "link"
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink className="link" to="/team">
            Team
          </NavLink>
          <NavLink className="link" to="/services">
            Services
          </NavLink>
          <NavLink className="link" to="/projects">
            Projects
          </NavLink>
          <NavLink className="link" to="/testimonials">
            Testimonials
          </NavLink>
          <NavLink className="link login" to="#">
            Login
          </NavLink>
          <NavLink className="link register" to="#">
            Register
          </NavLink>
        </nav>
      </header>
    </>
  );
}

export default AppNavbar;

import React from "react";
import "../Style/Header.css";
import mainlogo from "../Image/mainlogo.png";


function Header() {
  return (
    <div className="header_container">
     <nav className="navbar navbarclass navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img
            src={mainlogo}
            alt="logo not load"
            style={{ width: "3rem", height: "3rem" }}
          />
          <h3 style={{ display: "inline-block" }}>
            <span className="ml-4" style={{ fontWeight: "700", color: "navy" }}>
              <i>
              Radiant Retreats
              </i>
            </span>
          </h3>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto ulclass w-100 ">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                ROOMS <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                DININGS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                FACITILIES
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                MEETINGS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                MENU
              </a>
            </li>
            <li className="nav-item">
              <button className="btn btn-danger btn-lg">
                Book Now
              </button>
            </li>
          </ul>
        </div>
      </nav>

    </div>
  );
}

export default Header;

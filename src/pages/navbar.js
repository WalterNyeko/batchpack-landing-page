import React from "react";
import { NavLink } from "react-router-dom";
import Routes from "../helpers/index";

export default function navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img
            src="assets/img/batchpack bigger.svg"
            className="navbar-brand-img"
            alt="..."
          />
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fe fe-x" />
          </button>

          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                id="navbarPages"
                to="/sms"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Programmable SMS
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                id="navbarPages"
                to="/verify"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Verify
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarAccount"
                href={Routes.login}
                aria-haspopup="true"
                aria-expanded="false"
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

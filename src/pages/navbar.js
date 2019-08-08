import React from "react";
import { NavLink } from "react-router-dom";
import Routes from "../helpers/index";

export default function navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container">
        <NavLink class="navbar-brand" to="/">
          <img
            src="assets/img/batchpack bigger.svg"
            class="navbar-brand-img"
            alt="..."
          />
        </NavLink>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>

        <div class="collapse navbar-collapse" id="navbarCollapse">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fe fe-x" />
          </button>

          <ul class="navbar-nav ml-auto">
            <li class="nav-item dropdown">
              <NavLink
                class="nav-link dropdown-toggle"
                id="navbarPages"
                to="/sms"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Programmable SMS
              </NavLink>
            </li>
            <li class="nav-item dropdown">
              <NavLink
                class="nav-link dropdown-toggle"
                id="navbarPages"
                to="/verify"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Verify
              </NavLink>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
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

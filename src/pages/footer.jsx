import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="py-8 py-md-11 bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4 col-lg-3">
              <img
                src="assets/img/batchpack bigger.svg"
                className="footer-brand img-fluid mb-2"
                width="136px"
                alt=""
              />

              <p className="text-gray-700 mb-2 footer-font">
                Just another rocket message.
              </p>

              <ul className="list-unstyled list-inline list-social mb-6 mb-md-0">
                <li className="list-inline-item list-social-item mr-3">
                  <a href="#!" className="text-decoration-none">
                    <img
                      src="assets/img/icons/social/medium.svg"
                      className="list-social-icon"
                      alt=""
                    />
                  </a>
                </li>
                <li className="list-inline-item list-social-item mr-3">
                  <a href="#!" className="text-decoration-none">
                    <img
                      src="assets/img/icons/social/twitter.svg"
                      className="list-social-icon"
                      alt=""
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <h6 className="font-weight-bold text-uppercase text-gray-700">
                Products
              </h6>

              <ul className="list-unstyled text-muted mb-6 mb-md-8 mb-lg-0">
                <li className="">
                  <NavLink to="/sms" className="text-reset">
                    Programmable SMS
                  </NavLink>
                </li>
                <li className="">
                  <NavLink to="/verify" className="text-reset">
                    BatchPack Verify
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <h6 className="font-weight-bold text-uppercase text-gray-700">
                Services
              </h6>

              <ul className="list-unstyled text-muted mb-6 mb-md-8 mb-lg-0">
                <li className="">
                  <a
                    href="https://batchpack.github.io/Doc/#introduction"
                    className="text-reset"
                  >
                    Developers
                  </a>
                </li>
                <li className="">
                  <NavLink to="/contact" className="text-reset">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-4 offset-md-4 col-lg-2 offset-lg-0">
              <h6 className="font-weight-bold text-uppercase text-gray-700">
                Resources
              </h6>

              <ul className="list-unstyled text-muted mb-0">
                <li className="">
                  <a href="#!" className="text-reset">
                    Support
                  </a>
                </li>
                <li className="">
                  <NavLink to="/pricing" className="text-reset">
                    Pricing
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <h6 className="font-weight-bold text-uppercase text-gray-700">
                Legal
              </h6>

              <ul className="list-unstyled text-muted mb-0">
                <li className="">
                  <NavLink to="/terms" className="text-reset">
                    Terms of Use
                  </NavLink>
                </li>
                <li className="">
                  <a href="#!" className="text-reset">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;

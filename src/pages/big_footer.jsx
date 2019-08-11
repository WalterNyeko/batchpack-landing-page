import React from "react";
import { NavLink } from "react-router-dom";

const BigFooter = () => {
  return (
    <div>
      <section className="pt-9 pt-md-12 bg-gray-200">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 text-center">
              <h1 className="pricing-header">Pricing </h1>

              <p className="lead text-gray-700">
                Fast, reliable message delivery through our globally connected
                API.
              </p>
            </div>
          </div>
          <div className="card mb-5">
            <div className="card-body">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">
                        <h3 className="pricing-header">General</h3>
                      </th>
                      <th scope="col">
                        <h3 className="pricing-header">SMS</h3>
                      </th>
                      <th scope="col">
                        <h3 className="pricing-header">OTP</h3>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        {" "}
                        <img
                          src="https://res.cloudinary.com/dko7n7x16/image/upload/v1563693502/speech-bubble_iwhzi0.svg"
                          width="20px"
                        />{" "}
                        Local SMS
                      </th>
                      <td>$0.004</td>
                      <td>Free</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        {" "}
                        <img
                          src="https://res.cloudinary.com/dko7n7x16/image/upload/v1563693502/agenda_v1bziz.svg"
                          width="20px"
                        />{" "}
                        SMS Numbers{" "}
                      </th>
                      <td>$5 Monthly</td>
                      <td>Free</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <img
                          src="https://res.cloudinary.com/dko7n7x16/image/upload/v1563693502/access_di9ylh.svg"
                          width="20px"
                        />{" "}
                        BatchPack Verify
                      </th>
                      <td>$0.004</td>
                      <td>Free</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <img
                          src="https://res.cloudinary.com/dko7n7x16/image/upload/v1563693636/id-card_r3uxjn.svg"
                          width="20px"
                        />{" "}
                        Sender ID
                      </th>
                      <td>Free</td>
                      <td>Free</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="position-relative mt-n16">
        <div className="shape shape-bottom shape-fluid-x svg-shim text-dark">
          <svg
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>

      <section className="pt-16 bg-dark">
        <footer className="py-8 py-md-11 bg-dark">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-4 col-lg-3">
                <img
                  src="assets/img/batchpack bigger.svg"
                  className="footer-brand img-fluid mb-2"
                  width="136px"
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
                      />
                    </a>
                  </li>
                  <li className="list-inline-item list-social-item mr-3">
                    <a href="#!" className="text-decoration-none">
                      <img
                        src="assets/img/icons/social/twitter.svg"
                        className="list-social-icon"
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
      </section>
    </div>
  );
};
export default BigFooter;

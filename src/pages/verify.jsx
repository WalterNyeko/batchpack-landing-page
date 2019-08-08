import React from "react";
import Navbar from "./navbar";
import { NavLink } from "react-router-dom";

const Verify = () => {
  return (
    <div>
      <Navbar />
      <section class="border-bottom">
        <div class="container">
          <div class="row align-items-stretch">
            <div
              class="col-12 col-md-5 py-8 py-md-14 order-md-1 aos-init aos-animate"
              data-aos="fade-right"
            >
              <h1 class="display-3">BatchPack Verify</h1>

              <p class="lead text-muted mb-6 mb-md-8">
                Fight fraud before it starts. Validate users  via SMS and Voice
                using the Verify API.
              </p>

              <p>Verify yourself first</p>

              <form>
                <div class="form-row">
                  <div class="col-12 col-lg">
                    <div class="form-group mb-lg-0">
                      <div class="row">
                        <div class="col-5">
                          <input
                            type="text"
                            name="countryCode"
                            id="countryCode"
                            class="form-control"
                            placeholder="+256"
                          />
                        </div>
                        <div class="col-7">
                          <input
                            type="text"
                            name="phone"
                            id="phone"
                            class="form-control"
                            placeholder="148107578543"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-lg-auto">
                    <button
                      type="submit"
                      class="btn btn-block btn-primary shadow lift"
                    >
                      Send OTP
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section class="pt-8 pt-md-11 bg-gradient-light">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12 col-md-10 col-lg-8 text-center">
              <span class="badge badge-pill badge-success-soft mb-3">
                <span class="h6 text-uppercase">Rocket Message</span>
              </span>

              <h1>How the Verify API works</h1>

              <p class="font-size-lg text-gray-700 mb-7 mb-md-9">
                Verify uses two API endpoints to seamlessly check that a user is
                the owner of the phone number they provide.
              </p>
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-md-6 aos-init aos-animate"
              data-aos="fade-up"
            >
              <div class="card shadow-light-lg mb-6 mb-md-0 lift lift-lg">
                <div class="position-relative">
                  <div class="shape shape-bottom shape-fluid-x svg-shim text-white">
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

                <div class="card-body position-relative">
                  <h3>Start The Initiate Endpoint</h3>

                  <p class="text-muted">
                    When the user is validating their phone number, Verify sends
                    the user a 4-10 digit verification code via SMS
                  </p>

                  <a
                    href="https://batchpack.github.io/Doc/#send-otp"
                    class="font-weight-bold text-decoration-none"
                  >
                    View documntation
                    <i class="fe fe-arrow-right ml-3" />
                  </a>
                </div>
              </div>
            </div>

            <div
              class="col-12 col-md-6 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div class="card shadow-light-lg lift lift-lg">
                <div class="position-relative" />

                <div class="card-body position-relative">
                  <h3>Then Verify The OTP</h3>

                  <p class="text-muted">
                    Verify checks the user’s input matches the code. If they
                    match, Verify registers the phone number as approved.
                  </p>

                  <a
                    href="https://batchpack.github.io/Doc/#complete-verification"
                    class="font-weight-bold text-decoration-none"
                  >
                    View Documentation
                    <i class="fe fe-arrow-right ml-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-8 py-md-11 border-bottom">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-12 col-md-6 order-md-2">
              <img
                src="assets/img/illustrations/illustration-1.png"
                class="img-fluid mb-6 mb-md-0"
              />
            </div>
            <div class="col-12 col-md-6 order-md-1">
              <span class="badge badge-pill badge-primary-soft mb-3">
                <span class="h6 text-uppercase">Scalable</span>
              </span>

              <h2>The benefits of using BatchPack Verify</h2>

              <p class="font-size-lg text-gray-700 mb-6 mb-md-6">
                The Verify API determines the quantity, type, and locale of
                phone numbers you’ll need to verify users, saving you from
                spending cycles purchasing and managing phone numbers.
              </p>

              <div class="row">
                <div class="col-12 col-lg-6">
                  <div class="d-flex">
                    <div class="badge badge-rounded-circle badge-primary-soft mt-1 mr-4">
                      <i class="fe fe-check" />
                    </div>

                    <p>Integrate Verify easily</p>
                  </div>

                  <div class="d-flex">
                    <div class="badge badge-rounded-circle badge-primary-soft mt-1 mr-4">
                      <i class="fe fe-check" />
                    </div>

                    <p class="mb-lg-0">Handles complex telcos</p>
                  </div>
                </div>
                <div class="col-12 col-lg-6">
                  <div class="d-flex">
                    <span class="badge badge-rounded-circle badge-primary-soft mt-1 mr-4">
                      <i class="fe fe-check" />
                    </span>

                    <p>Infinite flexibility</p>
                  </div>

                  <div class="d-flex">
                    <div class="badge badge-rounded-circle badge-primary-soft mr-1 mr-4">
                      <i class="fe fe-check" />
                    </div>

                    <p class="mb-0">Number management</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="pt-9 pt-md-12 bg-gray-200">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12 col-md-10 col-lg-8 text-center">
              <h1 class="pricing-header">Pricing </h1>

              <p class="lead text-gray-700">
                Fast, reliable message delivery through our globally connected
                API.
              </p>
            </div>
          </div>
          <div class="card mb-5">
            <div class="card-body">
              <div class="table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">
                        <h3 class="pricing-header">General</h3>
                      </th>
                      <th scope="col">
                        <h3 class="pricing-header">SMS</h3>
                      </th>
                      <th scope="col">
                        <h3 class="pricing-header">OTP</h3>
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
                      <td>$0.0220</td>
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
                      <td>$0.001</td>
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

      <div class="position-relative mt-n16">
        <div class="shape shape-bottom shape-fluid-x svg-shim text-dark">
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

      <section class="pt-16 bg-dark">
        <footer class="py-8 py-md-11 bg-dark">
          <div class="container">
            <div class="row">
              <div class="col-12 col-md-4 col-lg-3">
                <img
                  src="assets/img/batchpack bigger.svg"
                  class="footer-brand img-fluid mb-2"
                  width="136px"
                />

                <p class="text-gray-700 mb-2 footer-font">
                  Just another rocket message.
                </p>

                <ul class="list-unstyled list-inline list-social mb-6 mb-md-0">
                  <li class="list-inline-item list-social-item mr-3">
                    <a href="#!" class="text-decoration-none">
                      <img
                        src="assets/img/icons/social/medium.svg"
                        class="list-social-icon"
                      />
                    </a>
                  </li>
                  <li class="list-inline-item list-social-item mr-3">
                    <a href="#!" class="text-decoration-none">
                      <img
                        src="assets/img/icons/social/twitter.svg"
                        class="list-social-icon"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-6 col-md-4 col-lg-2">
                <h6 class="font-weight-bold text-uppercase text-gray-700">
                  Products
                </h6>

                <ul class="list-unstyled text-muted mb-6 mb-md-8 mb-lg-0">
                  <li class="">
                    <NavLink to="/sms" class="text-reset">
                      Programmable SMS
                    </NavLink>
                  </li>
                  <li class="">
                    <NavLink to="/verify" class="text-reset">
                      BatchPack Verify
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div class="col-6 col-md-4 col-lg-2">
                <h6 class="font-weight-bold text-uppercase text-gray-700">
                  Services
                </h6>

                <ul class="list-unstyled text-muted mb-6 mb-md-8 mb-lg-0">
                  <li class="">
                    <a
                      href="https://batchpack.github.io/Doc/#introduction"
                      class="text-reset"
                    >
                      Developers
                    </a>
                  </li>
                  <li class="">
                    <a href="contact.html" class="text-reset">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-6 col-md-4 offset-md-4 col-lg-2 offset-lg-0">
                <h6 class="font-weight-bold text-uppercase text-gray-700">
                  Resources
                </h6>

                <ul class="list-unstyled text-muted mb-0">
                  <li class="">
                    <a href="#!" class="text-reset">
                      Support
                    </a>
                  </li>
                  <li class="">
                    <a href="pricing.html" class="text-reset">
                      Pricing
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-6 col-md-4 col-lg-2">
                <h6 class="font-weight-bold text-uppercase text-gray-700">
                  Legal
                </h6>

                <ul class="list-unstyled text-muted mb-0">
                  <li class="">
                    <NavLink to="/terms" class="text-reset">
                      Terms of Use
                    </NavLink>
                  </li>
                  <li class="">
                    <a href="#!" class="text-reset">
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
export default Verify;

import React from "react";
import { NavLink } from "react-router-dom";
import Routes from "../helpers/index";
import Navbar from "./navbar";

const ProgrammableSms = () => {
  return (
    <div>
      <Navbar />
      <section class="py-10 py-md-14 bg-primary banner" id="welcome">
        <div class="shape shape-blur-3 svg-shim text-white">
          <svg
            viewBox="0 0 1738 487"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0H1420.92C1420.92 0 2134.35 457.505 1420.92 485.868C707.502 514.231 0 0 0 0Z"
              fill="url(#paint0_linear)"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="0"
                y1="0"
                x2="1049.98"
                y2="912.68"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="currentColor" stop-opacity="0.075" />
                <stop offset="1" stop-color="currentColor" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12 col-md-10 col-lg-8 text-center">
              <h1 class="font-weight-bold text-white">Programmable SMS</h1>

              <p class="lead text-white mb-8">
                Send and receive messages worldwide with an SMS API trusted by
                over 400,000 developers.
              </p>

              <a
                href={Routes.login}
                class="btn btn-white shadow lift"
              >
                Get started with 15 free SMS
              </a>
            </div>
          </div>
        </div>
      </section>

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

      <section class="pt-8 pt-md-10" id="about">
        <div class="container">
          <div class="row">
            <div class="col-12 text-center" />
          </div>
          <div class="row justify-content-center">
            <div class="col-12 col-md-10 col-lg-8 text-center">
              <h2 class="font-weight-bold">
                Connect to 7 billion devices worldwide
              </h2>

              <p class="font-size-lg text-muted mb-9">
                Landkit is where your team can come together to get stuff done.
                Chat, files, wikis, documentation, and more.
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-lg-6">
              <div class="row align-items-center mb-8" data-aos="fade-up">
                <div class="col-4 col-lg-5">
                  <img
                    src="assets/img/illustrations/illustration-4.png"
                    class="img-fluid"
                  />
                </div>
                <div class="col-8 col-lg-7">
                  <h3 class="font-weight-bold mb-2">Resilient REST API</h3>

                  <p class="text-gray-700 mb-0">
                    Integrate our high availability, auto-scaling API, including
                    built-in redundancies.
                  </p>
                </div>
              </div>

              <div class="row align-items-center mb-8" data-aos="fade-up">
                <div class="col-4 col-lg-5">
                  <img
                    src="assets/img/illustrations/illustration-8.png"
                    class="img-fluid"
                  />
                </div>
                <div class="col-8 col-lg-7">
                  <h3 class="font-weight-bold mb-2">Phone numbers</h3>

                  <p class="text-gray-700 mb-0">
                    Set up localized numbers with immediate access to SMS-, MMS.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-6">
              <div class="row align-items-center mb-8" data-aos="fade-up">
                <div class="col-4 col-lg-5">
                  <img
                    src="assets/img/illustrations/illustration-7.png"
                    class="img-fluid"
                  />
                </div>
                <div class="col-8 col-lg-7">
                  <h3 class="font-weight-bold mb-2">Analytics</h3>

                  <p class="text-gray-700 mb-0">
                    Keep track of what's happening in your company from a
                    centralized dashboard.
                  </p>
                </div>
              </div>

              <div class="row align-items-center mb-8" data-aos="fade-up">
                <div class="col-4 col-lg-5">
                  <img
                    src="assets/img/illustrations/illustration-6.png"
                    class="img-fluid"
                  />
                </div>
                <div class="col-8 col-lg-7">
                  <h3 class="font-weight-bold mb-2">Permissions</h3>

                  <p class="text-gray-700 mb-0">
                    Control who has access to which projects and data through
                    our control panel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="py-8 py-md-11">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-12 col-md-6 col-lg-5" data-aos="fade-up">
              <span class="badge badge-pill badge-success-soft mb-3">
                <span class="h6 text-uppercase">Pricing</span>
              </span>

              <h2 class="font-weight-bold">
                $0.0220 Per sms
                <br />
                <span class="">to any phone & destination</span>.
              </h2>

              <p class="font-size-lg text-gray-700">
                Using our single innovative platform you can remove all your
                communication dependencies and the messy rat's nest of email,
                calls, texts, wikis, and apps you currently have.
              </p>

              <form class="mb-8">
                <div class="form-row">
                  <div class="col-12 col-md-auto">
                    <button class="btn btn-success-soft">
                      Get free API Key
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div class="col-12 col-md-6 col-lg-6 offset-lg-1">
              <div
                class="card card-border border-success shadow-lg mb-5"
                data-aos="fade-up"
              >
                <div class="card-body">
                  <div class="list-group list-group-flush">
                    <div class="list-group-item d-flex align-items-center">
                      <div class="mr-auto">
                        <p class="font-weight-bold mb-1">
                          Transaction Messages
                        </p>

                        <p class="font-size-sm text-muted mb-0">
                          Send message on realitime transactions
                        </p>
                      </div>

                      <div class="badge badge-rounded-circle badge-success-soft ml-4">
                        <i class="fe fe-check" />
                      </div>
                    </div>
                    <div class="list-group-item d-flex align-items-center">
                      <div class="mr-auto">
                        <p class="font-weight-bold mb-1">
                          Guaranteed 99% uptime
                        </p>

                        <p class="font-size-sm text-muted mb-0">
                          Our server network never goes down.
                        </p>
                      </div>

                      <div class="badge badge-rounded-circle badge-success-soft ml-4">
                        <i class="fe fe-check" />
                      </div>
                    </div>
                    <div class="list-group-item d-flex align-items-center">
                      <div class="mr-auto">
                        <p class="font-weight-bold mb-1">Pay as you go model</p>

                        <p class="font-size-sm text-muted mb-0">
                          Pay for only what you use, as low as $0.0600
                        </p>
                      </div>

                      <div class="badge badge-rounded-circle badge-success-soft ml-4">
                        <i class="fe fe-check" />
                      </div>
                    </div>
                    <div class="list-group-item d-flex align-items-center">
                      <div class="mr-auto">
                        <p class="font-weight-bold mb-1">
                          OTP verification in one call
                        </p>

                        <p class="font-size-sm text-muted mb-0">
                          Let's verify your users number before you save.
                        </p>
                      </div>

                      <div class="badge badge-rounded-circle badge-success-soft ml-4">
                        <i class="fe fe-check" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p class="font-size-sm text-center text-gray-500 mb-0">
                * Free credits to start testing
              </p>
            </div>
          </div>
        </div>
      </section>

      <div class="position-relative">
        <div class="shape shape-bottom shape-fluid-x svg-shim text-white">
          <svg
            viewBox="0 0 2880 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M720 28H0V56H995.5H1639.5H2880V28H2160C2160 28 1874 -9.82909e-10 1440 0C1006 9.829e-10 720 28 720 28Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>

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
                    <a href="sms.html" class="text-reset">
                      Programmable SMS
                    </a>
                  </li>
                  <li class="">
                    <a href="verify.html" class="text-reset">
                      BatchPack Verify
                    </a>
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
export default ProgrammableSms;

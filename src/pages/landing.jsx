import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./navbar";
import Routes from "../helpers";

const landing = () => {
  return (
    <div>
      <Navbar />
      <section class="position-relative pt-12 pt-md-14 mt-n11">
        <div class="shape shape-fluid-x shape-blur-2 svg-shim text-light">
          <svg
            viewBox="0 0 1313 768"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M442.794 768C605.882 768 748.362 679.773 825.111 548.444L825.294 549C825.294 549 825.543 548.251 826.056 546.819C839.139 524.212 850.279 500.339 859.248 475.43C901.996 397.81 989.306 277.09 1144.29 206L1143.37 205.307C1230.34 171.296 1295.63 94.049 1312.83 0H1.29419V295.514C0.631105 305.423 0.294189 315.422 0.294189 325.5C0.294189 569.886 198.408 768 442.794 768Z"
              fill="currentColor"
            />
          </svg>
        </div>

        <div class="container">
          <div class="row align-items-center text-center text-md-left">
            <div class="col-12 col-md-6">
              <img
                src="assets/img/illustrations/illustration-4.png"
                alt="..."
                class="img-fluid mw-130 float-right mb-6 mb-md-0"
                data-aos="fade-right"
              />
            </div>
            <div class="col-12 col-md-6">
              <h1 class="font-weight-bold">
                <div data-aos="fade-left">Single api</div>
                <div data-aos="fade-left" data-aos-delay="100">
                  for everything message.
                </div>
              </h1>

              <p
                class="font-size-lg text-muted mb-0"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                Single API platform for sms, customer service, two-factor
                authentication and notifications.
              </p>
              <br />
              <div class="text-center text-md-left">
                <a href={Routes.login} class="btn btn-primary shadow lift mr-1">
                  Get Free API Key
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="py-6 py-md-8 border-bottom">
        <div class="container">
          <div class="row align-items-center justify-content-center">
            <div class="col-6 col-sm-4 col-md-2 mb-4 mb-md-0">
              <div class="img-fluid text-gray-600 mb-2 mb-md-0 svg-shim">
                <img
                  src="assets/img/Fieldinsight Logo.svg"
                  class="navbar-brand-img"
                />
              </div>
            </div>
            <div class="col-6 col-sm-4 col-md-2 mb-4 mb-md-0">
              <div class="img-fluid text-gray-600 mb-2 mb-md-0 svg-shim">
                <img src="assets/img/Ariga Logo.svg" class="navbar-brand-img" />
              </div>
            </div>
            <div class="col-6 col-sm-4 col-md-2 mb-4 mb-md-0">
              <div class="img-fluid text-gray-600 mb-2 mb-md-0 svg-shim">
                <img
                  src="assets/img/Lendsqr Logo.svg"
                  class="navbar-brand-img"
                />
              </div>
            </div>
            <div class="col-6 col-sm-4 col-md-2 mb-4 mb-md-0">
              <div class="img-fluid text-gray-600 mb-2 mb-md-0 svg-shim">
                <img
                  src="assets/img/Quidax Logo.svg"
                  class="navbar-brand-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="py-8 py-md-11 bg-gray-200">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12 col-md-10 col-lg-7 text-center">
              <h2 class="font-weight-bold">
                Engage customers using a single API.
              </h2>

              <p class="font-size-lg text-muted mb-7 mb-md-9">
                No matter what you're working on, it's just a simple plug & play
                solution.
              </p>
            </div>
          </div>
          <div class="form-row">
            <div class="col-12 col-lg-6 d-lg-flex pb-1 mb-4">
              <div
                class="card shadow-light-lg overflow-hidden"
                data-aos="fade-up"
              >
                <div class="row">
                  <div class="col-md-4 position-relative">
                    <img
                      src="assets/img/illustrations/illustration-8.png"
                      class="h-75 position-absolute right-0 mt-7 mr-n4"
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body py-7 py-md-9 text-center">
                      <h4 class="font-weight-bold text-right">
                        Programmable SMS
                      </h4>

                      <p class="text-muted mb-0 text-right">
                        Send and receive messages worldwide with an SMS API
                        trusted by over 400,000 developers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-6 d-lg-flex pb-1 mb-4">
              <div
                class="card shadow-light-lg overflow-hidden text-center"
                data-aos="fade-up"
              >
                <div class="row">
                  <div class="col-md-8">
                    <div class="card-body py-7 py-md-9 text-right">
                      <h4 class="font-weight-bold">Verify API</h4>

                      <p class="text-muted mb-0 text-right">
                        Use a single API for sending verification tokens when
                        onboarding users
                      </p>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <img
                      src="assets/img/illustrations/illustration-6.png"
                      class="h-75 position-absolute left-0 mt-7"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div
                class="card shadow-light-lg overflow-hidden text-center text-lg-left"
                data-aos="fade-up"
              >
                <div class="row">
                  <div class="col-md-4 position-relative">
                    <img
                      src="assets/img/illustrations/illustration-2.png"
                      class="h-75 position-absolute left-0 mt-6"
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body py-7 py-md-9">
                      <h4 class="font-weight-bold text-right">Anything SMS.</h4>

                      <p class="text-muted mb-0 text-right">
                        Talk to your customer the way they talk to their
                        friends.Seamless, hassle-free, and on their preferred
                        channels.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-8 pt-md-11 pb-md-12">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-4 text-center">
              <h1 class="display-2 font-weight-bold text-primary-desat">
                <span
                  data-toggle="countup"
                  data-from="0"
                  data-to="97"
                  data-aos
                  data-aos-id="countup:in"
                >
                  99
                </span>
                %
              </h1>

              <p class="text-muted mb-6 mb-md-0">Messaging uptime count</p>
            </div>
            <div class="col-12 col-md-4 text-center">
              <h1 class="display-2 font-weight-bold text-primary-desat">
                <span
                  data-toggle="countup"
                  data-from="00.0"
                  data-to="1.9"
                  data-decimals="1"
                  data-aos
                  data-aos-id="countup:in"
                >
                  90
                </span>
                M
              </h1>

              <p class="text-muted mb-6 mb-md-0">
                Total massage sent using BatchPack
              </p>
            </div>
            <div class="col-12 col-md-4 text-center">
              <h1 class="display-2 font-weight-bold text-primary-desat">
                <span
                  data-toggle="countup"
                  data-from="0.0"
                  data-to="7.0"
                  data-decimals="1"
                  data-aos
                  data-aos-id="countup:in"
                >
                  7.0
                </span>
                /7.0
              </h1>

              <p class="text-muted mb-0">Our average review across board.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="py-10 py-md-13 bg-gray-200 bg-between">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12 col-md-10 col-lg-8 text-center">
              <h2 class="font-weight-bold">
                Start building without credit card
              </h2>

              <p class="font-size-lg text-muted mb-8 px-lg-9">
                We can help you build a better business faster. Have a feel of
                what our documentation looks like.
              </p>

              <a
                href="https://batchpack.github.io/Doc/#introduction"
                class="btn btn-primary-desat lift"
              >
                Developers Hub
              </a>
            </div>
          </div>
        </div>
      </section>

      <div class="position-relative">
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
                  <a href="/sms" class="text-reset">
                    Programmable SMS
                  </a>
                </li>
                <li class="">
                  <a href="/verify" class="text-reset">
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
                  <a href="terms.html" class="text-reset">
                    Terms of Use
                  </a>
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
    </div>
  );
};
export default landing;

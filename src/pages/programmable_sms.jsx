import React from "react";
import Routes from "../helpers/index";
import Navbar from "./navbar";
import BigFooter from "./big_footer";

const ProgrammableSms = () => {
  return (
    <div>
      <Navbar />
      <section className="py-10 py-md-14 bg-primary banner" id="welcome">
        <div className="shape shape-blur-3 svg-shim text-white">
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

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 text-center">
              <h1 className="font-weight-bold text-white">Programmable SMS</h1>

              <p className="lead text-white mb-8">
                Send and receive messages worldwide with an SMS API trusted by
                over 400,000 developers.
              </p>

              <a href={Routes.login} className="btn btn-white shadow lift">
                Get started with 15 free SMS
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="position-relative">
        <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
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

      <section className="pt-8 pt-md-10" id="about">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center" />
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 text-center">
              <h2 className="font-weight-bold">
                Connect to 7 billion devices worldwide
              </h2>

              <p className="font-size-lg text-muted mb-9">
                BatchPack is where your team can come together to get stuff
                done. SMS service to reach your clients as fast as possible.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="row align-items-center mb-8" data-aos="fade-up">
                <div className="col-4 col-lg-5">
                  <img
                    src="assets/img/illustrations/illustration-4.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="col-8 col-lg-7">
                  <h3 className="font-weight-bold mb-2">Resilient REST API</h3>

                  <p className="text-gray-700 mb-0">
                    Integrate our high availability, auto-scaling API, including
                    built-in redundancies.
                  </p>
                </div>
              </div>

              <div className="row align-items-center mb-8" data-aos="fade-up">
                <div className="col-4 col-lg-5">
                  <img
                    src="assets/img/illustrations/illustration-8.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="col-8 col-lg-7">
                  <h3 className="font-weight-bold mb-2">Phone numbers</h3>

                  <p className="text-gray-700 mb-0">
                    Set up localized numbers with immediate access to SMS-, MMS.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="row align-items-center mb-8" data-aos="fade-up">
                <div className="col-4 col-lg-5">
                  <img
                    src="assets/img/illustrations/illustration-7.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="col-8 col-lg-7">
                  <h3 className="font-weight-bold mb-2">Analytics</h3>

                  <p className="text-gray-700 mb-0">
                    Keep track of what's happening in your company from a
                    centralized dashboard.
                  </p>
                </div>
              </div>

              <div className="row align-items-center mb-8" data-aos="fade-up">
                <div className="col-4 col-lg-5">
                  <img
                    src="assets/img/illustrations/illustration-6.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="col-8 col-lg-7">
                  <h3 className="font-weight-bold mb-2">Permissions</h3>

                  <p className="text-gray-700 mb-0">
                    Control who has access to which projects and data through
                    our control panel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8 py-md-11">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 col-lg-5" data-aos="fade-up">
              <span className="badge badge-pill badge-success-soft mb-3">
                <span className="h6 text-uppercase">Pricing</span>
              </span>

              <h2 className="font-weight-bold">
                $0.0041 Per sms
                <br />
                <span className="">to any phone & destination</span>.
              </h2>

              <p className="font-size-lg text-gray-700">
                Using our single innovative platform you can remove all your
                communication dependencies and the messy rat's nest of email,
                calls, texts, wikis, and apps you currently have.
              </p>

              <form className="mb-8">
                <div className="form-row">
                  <div className="col-12 col-md-auto">
                    <button className="btn btn-success-soft">
                      Get free API Key
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-12 col-md-6 col-lg-6 offset-lg-1">
              <div
                className="card card-border border-success shadow-lg mb-5"
                data-aos="fade-up"
              >
                <div className="card-body">
                  <div className="list-group list-group-flush">
                    <div className="list-group-item d-flex align-items-center">
                      <div className="mr-auto">
                        <p className="font-weight-bold mb-1">
                          Transaction Messages
                        </p>

                        <p className="font-size-sm text-muted mb-0">
                          Send message on realitime transactions
                        </p>
                      </div>

                      <div className="badge badge-rounded-circle badge-success-soft ml-4">
                        <i className="fe fe-check" />
                      </div>
                    </div>
                    <div className="list-group-item d-flex align-items-center">
                      <div className="mr-auto">
                        <p className="font-weight-bold mb-1">
                          Guaranteed 99% uptime
                        </p>

                        <p className="font-size-sm text-muted mb-0">
                          Our server network never goes down.
                        </p>
                      </div>

                      <div className="badge badge-rounded-circle badge-success-soft ml-4">
                        <i className="fe fe-check" />
                      </div>
                    </div>
                    <div className="list-group-item d-flex align-items-center">
                      <div className="mr-auto">
                        <p className="font-weight-bold mb-1">
                          Pay as you go model
                        </p>

                        <p className="font-size-sm text-muted mb-0">
                          Pay for only what you use, as low as $0.0600
                        </p>
                      </div>

                      <div className="badge badge-rounded-circle badge-success-soft ml-4">
                        <i className="fe fe-check" />
                      </div>
                    </div>
                    <div className="list-group-item d-flex align-items-center">
                      <div className="mr-auto">
                        <p className="font-weight-bold mb-1">
                          OTP verification in one call
                        </p>

                        <p className="font-size-sm text-muted mb-0">
                          Let's verify your users number before you save.
                        </p>
                      </div>

                      <div className="badge badge-rounded-circle badge-success-soft ml-4">
                        <i className="fe fe-check" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="font-size-sm text-center text-gray-500 mb-0">
                * Free credits to start testing
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="position-relative">
        <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
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
      <BigFooter />
    </div>
  );
};
export default ProgrammableSms;

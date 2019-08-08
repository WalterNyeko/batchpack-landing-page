import React from "react";

const Terms = () => {
  return (
    <div>
      <div
        className="modal fade"
        id="modalExample"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="modalExampleTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>

              <div className="text-center">
                <img
                  src="assets/img/illustrations/illustration-1.png"
                  alt="..."
                  className="img-fluid mb-3"
                  style={{ width: "200px" }}
                />
              </div>

              <h2
                className="font-weight-bold text-center mb-1"
                id="modalExampleTitle"
              >
                Schedule a demo with us
              </h2>

              <p className="font-size-lg text-center text-muted mb-6 mb-md-8">
                We can help you solve company communication.
              </p>

              <form>
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="form-label-group">
                      <input
                        type="text"
                        className="form-control form-control-flush"
                        id="registrationFirstNameModal"
                        placeholder="First name"
                      />
                      <label htmlFor="registrationFirstNameModal">
                        First name
                      </label>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="form-label-group">
                      <input
                        type="text"
                        className="form-control form-control-flush"
                        id="registrationLastNameModal"
                        placeholder="Last name"
                      />
                      <label htmlFor="registrationLastNameModal">
                        Last name
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="form-label-group">
                      <input
                        type="email"
                        className="form-control form-control-flush"
                        id="registrationEmailModal"
                        placeholder="Email"
                      />
                      <label htmlFor="registrationEmailModal">Email</label>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="form-label-group">
                      <input
                        type="password"
                        className="form-control form-control-flush"
                        id="registrationPasswordModal"
                        placeholder="Password"
                      />
                      <label htmlFor="registrationPasswordModal">
                        Password
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <button className="btn btn-block btn-primary mt-3 lift">
                      Request a demo
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="modalSignupHorizontal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="modalSignupHorizontalTitle"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-lg modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            <div className="card card-row">
              <div className="row no-gutters">
                <div
                  className="col-12 col-md-6 bg-cover card-img-left"
                  style={{
                    backgroundImage: "url(assets/img/photos/photo-8.jpg)"
                  }}
                >
                  <img
                    src="assets/img/photos/photo-8.jpg"
                    alt="..."
                    className="img-fluid d-md-none invisible"
                  />

                  <div className="shape shape-right shape-fluid-y svg-shim text-white d-none d-md-block">
                    <svg
                      viewBox="0 0 112 690"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M116 0H51V172C76 384 0 517 0 517V690H116V0Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="card-body">
                    <button
                      type="button"
                      className="modal-close close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>

                    <h2
                      className="mb-0 font-weight-bold text-center"
                      id="modalSignupHorizontalTitle"
                    >
                      Sign Up
                    </h2>

                    <p className="mb-6 text-center text-muted">
                      Simplify your workflow in minutes.
                    </p>

                    <form className="mb-6">
                      <div className="form-group">
                        <label
                          className="sr-only"
                          htmlFor="modalSignupHorizontalEmail"
                        >
                          Your email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="modalSignupHorizontalEmail"
                          placeholder="Your email"
                        />
                      </div>

                      <div className="form-group mb-5">
                        <label
                          className="sr-only"
                          htmlFor="modalSignupHorizontalPassword"
                        >
                          Create a password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="modalSignupHorizontalPassword"
                          placeholder="Create a password"
                        />
                      </div>

                      <button
                        className="btn btn-block btn-primary"
                        type="submit"
                      >
                        Sign up
                      </button>
                    </form>

                    <p className="mb-0 font-size-sm text-center text-muted">
                      Already have an account?{" "}
                      <a href="signin-illustration.html">Log in</a>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="modalSignupVertical"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="modalSignupVerticalTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="card">
              <button
                type="button"
                className="modal-close close text-white"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>

              <img
                src="assets/img/photos/photo-7.jpg"
                alt="..."
                className="card-img-top"
              />

              <div className="position-relative">
                <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
                  <svg
                    viewBox="0 0 2880 480"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2160 0C1440 240 720 240 720 240H0V480H2880V0H2160Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>

              <div className="card-body">
                <h2
                  className="mb-0 font-weight-bold text-center"
                  id="modalSignupVerticalTitle"
                >
                  Sign Up
                </h2>

                <p className="mb-6 text-center text-muted">
                  Simplify your workflow in minutes.
                </p>

                <form className="mb-6">
                  <div className="form-group">
                    <label
                      className="sr-only"
                      htmlFor="modalSignupVerticalEmail"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="modalSignupVerticalEmail"
                      placeholder="Your email"
                    />
                  </div>

                  <div className="form-group mb-5">
                    <label
                      className="sr-only"
                      htmlFor="modalSignupVerticalPassword"
                    >
                      Create a password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="modalSignupVerticalPassword"
                      placeholder="Create a password"
                    />
                  </div>

                  <button className="btn btn-block btn-primary" type="submit">
                    Sign up
                  </button>
                </form>

                <p className="mb-0 font-size-sm text-center text-muted">
                  Already have an account?{" "}
                  <a href="signin-illustration.html">Log in</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="modalSigninHorizontal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="modalSigninHorizontalTitle"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-lg modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            <div className="card card-row">
              <div className="row no-gutters">
                <div
                  className="col-12 col-md-6 bg-cover card-img-left"
                  style={{
                    backgroundImage: "url(assets/img/photos/photo-1.jpg)"
                  }}
                >
                  <img
                    src="assets/img/photos/photo-1.jpg"
                    alt="..."
                    className="img-fluid d-md-none invisible"
                  />

                  <div className="shape shape-right shape-fluid-y svg-shim text-white d-none d-md-block">
                    <svg
                      viewBox="0 0 112 690"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M116 0H51V172C76 384 0 517 0 517V690H116V0Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="card-body">
                    <button
                      type="button"
                      className="modal-close close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>

                    <h2
                      className="mb-0 font-weight-bold text-center"
                      id="modalSigninHorizontalTitle"
                    >
                      Sign In
                    </h2>

                    <p className="mb-6 text-center text-muted">
                      Simplify your workflow in minutes.
                    </p>

                    <form className="mb-6">
                      <div className="form-group">
                        <label
                          className="sr-only"
                          htmlFor="modalSigninHorizontalEmail"
                        >
                          Your email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="modalSigninHorizontalEmail"
                          placeholder="Your email"
                        />
                      </div>

                      <div className="form-group mb-5">
                        <label
                          className="sr-only"
                          htmlFor="modalSigninHorizontalPassword"
                        >
                          Create a password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="modalSigninHorizontalPassword"
                          placeholder="Create a password"
                        />
                      </div>

                      <button
                        className="btn btn-block btn-primary"
                        type="submit"
                      >
                        Sign in
                      </button>
                    </form>

                    <p className="mb-0 font-size-sm text-center text-muted">
                      Don't have an account yet?{" "}
                      <a href="signin-illustration.html">Sign up</a>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="modalSigninVertical"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="modalSigninVerticalTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="card">
              <button
                type="button"
                className="modal-close close text-white"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>

              <img
                src="assets/img/photos/photo-21.jpg"
                alt="..."
                className="card-img-top"
              />

              <div className="position-relative">
                <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
                  <svg
                    viewBox="0 0 2880 480"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2160 0C1440 240 720 240 720 240H0V480H2880V0H2160Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>

              <div className="card-body">
                <h2
                  className="mb-0 font-weight-bold text-center"
                  id="modalSigninVerticalTitle"
                >
                  Sign In
                </h2>

                <p className="mb-6 text-center text-muted">
                  Simplify your workflow in minutes.
                </p>

                <form className="mb-6">
                  <div className="form-group">
                    <label
                      className="sr-only"
                      htmlFor="modalSigninVerticalEmail"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="modalSigninVerticalEmail"
                      placeholder="Your email"
                    />
                  </div>

                  <div className="form-group mb-5">
                    <label
                      className="sr-only"
                      htmlFor="modalSigninVerticalPassword"
                    >
                      Create a password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="modalSigninVerticalPassword"
                      placeholder="Create a password"
                    />
                  </div>

                  <button className="btn btn-block btn-primary" type="submit">
                    Sign in
                  </button>
                </form>

                <p className="mb-0 font-size-sm text-center text-muted">
                  Don't have an account yet?{" "}
                  <a href="signin-illustration.html">Sign up</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Terms;

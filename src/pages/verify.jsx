import React from "react";
import Navbar from "./navbar";
import BigFooter from "./big_footer";
import {
  showErrorNotification,
  showSuccessNotification
} from "../helpers/index";

class Verify extends React.Component {
  state = {
    code: "",
    number: "",
    isLoading: false,
    verified: false,
    message: "",
    errors: {}
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.state.message !== "") {
        this.setState({ message: "" });
      }
    }, 10000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleInputChange = event => {
    const {
      target: { name, value }
    } = event;
    this.setState({ [name]: value });
  };

  handleSubmit = async event => {
    event.preventDefault();
    this.setState({ isLoading: true, verified: false });
    const { code, number } = this.state;
    if (!code) {
      const error = { code: "code is missing" };
      await this.setState({ errors: error, isLoading: false });
    } else if (!number) {
      const error = { number: "number is missing" };
      await this.setState({ errors: error, isLoading: false });
    } else {
      await this.setState({ errors: {} });
      const data = {
        countryCode: code,
        phone: number
      };
      fetch("https://server.batchpack.co/otp_test", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(data => {
          if (data.message === "OTP has been sent") {
            showSuccessNotification(data.message);
            this.setState({ verified: true, message: data.message });
          } else {
            this.setState({
              message: "Please check your internet connections and try again"
            });
          }
        })
        .catch(error => {
          this.setState({ message: "Server is unreachable" });
        })
        .finally(done => {
          this.setState({ isLoading: false, number: "", code: "" });
        });
    }
  };
  render() {
    return (
      <div>
        <Navbar />
        <section className="border-bottom">
          <div className="container">
            <div className="row align-items-stretch">
              <div
                className="col-12 col-md-5 py-8 py-md-14 order-md-1 aos-init aos-animate"
                data-aos="fade-right"
              >
                <h1 className="display-3">BatchPack Verify</h1>

                <p className="lead text-muted mb-6 mb-md-8">
                  Fight fraud before it starts. Validate users  via SMS and
                  Voice using the Verify API.
                </p>

                <p>Verify yourself first</p>
                {this.state.verified &&
                this.state.message === "OTP has been sent" ? (
                  <span className="text-success h3">{this.state.message}</span>
                ) : (
                  <span className="text-danger h3">{this.state.message}</span>
                )}

                <form onSubmit={this.handleSubmit}>
                  <div className="form-row">
                    <div className="col-12 col-lg">
                      <div className="form-group mb-lg-0">
                        <div className="row">
                          <div className="col-5">
                            <input
                              type="text"
                              name="code"
                              id="countryCode"
                              className={
                                this.state.errors.code
                                  ? "error form-control"
                                  : "form-control"
                              }
                              placeholder="+256"
                              onChange={this.handleInputChange}
                              value={this.state.code}
                            />
                          </div>
                          <div className="col-7">
                            <input
                              type="text"
                              name="number"
                              id="phone"
                              className={
                                this.state.errors.number
                                  ? `error form-control`
                                  : `form-control`
                              }
                              placeholder="148107578543"
                              onChange={this.handleInputChange}
                              value={this.state.number}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-auto">
                      {this.state.isLoading ? (
                        <button
                          type="submit"
                          className="btn btn-block btn-primary shadow lift"
                        >
                          Sending OTP...
                        </button>
                      ) : (
                        <button
                          type="submit"
                          className="btn btn-block btn-primary shadow lift"
                        >
                          Send OTP
                        </button>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-8 pt-md-11 bg-gradient-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-8 text-center">
                <span className="badge badge-pill badge-success-soft mb-3">
                  <span className="h6 text-uppercase">Rocket Message</span>
                </span>

                <h1>How the Verify API works</h1>

                <p className="font-size-lg text-gray-700 mb-7 mb-md-9">
                  Verify uses two API endpoints to seamlessly check that a user
                  is the owner of the phone number they provide.
                </p>
              </div>
            </div>
            <div className="row">
              <div
                className="col-12 col-md-6 aos-init aos-animate"
                data-aos="fade-up"
              >
                <div className="card shadow-light-lg mb-6 mb-md-0 lift lift-lg">
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

                  <div className="card-body position-relative">
                    <h3>Start The Initiate Endpoint</h3>

                    <p className="text-muted">
                      When the user is validating their phone number, Verify
                      sends the user a 4-10 digit verification code via SMS
                    </p>

                    <a
                      href="https://batchpack.github.io/Doc/#send-otp"
                      className="font-weight-bold text-decoration-none"
                    >
                      View documntation
                      <i className="fe fe-arrow-right ml-3" />
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="col-12 col-md-6 aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="card shadow-light-lg lift lift-lg">
                  <div className="position-relative" />

                  <div className="card-body position-relative">
                    <h3>Then Verify The OTP</h3>

                    <p className="text-muted">
                      Verify checks the user’s input matches the code. If they
                      match, Verify registers the phone number as approved.
                    </p>

                    <a
                      href="https://batchpack.github.io/Doc/#complete-verification"
                      className="font-weight-bold text-decoration-none"
                    >
                      View Documentation
                      <i className="fe fe-arrow-right ml-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 py-md-11 border-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-md-6 order-md-2">
                <img
                  src="assets/img/illustrations/illustration-1.png"
                  className="img-fluid mb-6 mb-md-0"
                />
              </div>
              <div className="col-12 col-md-6 order-md-1">
                <span className="badge badge-pill badge-primary-soft mb-3">
                  <span className="h6 text-uppercase">Scalable</span>
                </span>

                <h2>The benefits of using BatchPack Verify</h2>

                <p className="font-size-lg text-gray-700 mb-6 mb-md-6">
                  The Verify API determines the quantity, type, and locale of
                  phone numbers you’ll need to verify users, saving you from
                  spending cycles purchasing and managing phone numbers.
                </p>

                <div className="row">
                  <div className="col-12 col-lg-6">
                    <div className="d-flex">
                      <div className="badge badge-rounded-circle badge-primary-soft mt-1 mr-4">
                        <i className="fe fe-check" />
                      </div>

                      <p>Integrate Verify easily</p>
                    </div>

                    <div className="d-flex">
                      <div className="badge badge-rounded-circle badge-primary-soft mt-1 mr-4">
                        <i className="fe fe-check" />
                      </div>

                      <p className="mb-lg-0">Handles complex telcos</p>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="d-flex">
                      <span className="badge badge-rounded-circle badge-primary-soft mt-1 mr-4">
                        <i className="fe fe-check" />
                      </span>

                      <p>Infinite flexibility</p>
                    </div>

                    <div className="d-flex">
                      <div className="badge badge-rounded-circle badge-primary-soft mr-1 mr-4">
                        <i className="fe fe-check" />
                      </div>

                      <p className="mb-0">Number management</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <BigFooter />
      </div>
    );
  }
}
export default Verify;

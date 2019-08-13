import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

class Contact extends React.Component {
  state = {
    fullName: "",
    email: "",
    concern: "",
    isLoading: false,
    success: false,
    message: "",
    errors: {}
  };
  handleInputChange = event => {
    const {
      target: { name, value }
    } = event;
    this.setState({ [name]: value });
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

  handleSubmit = async event => {
    event.preventDefault();
    this.setState({ isLoading: true, success: false });
    const { email, fullName, concern } = this.state;
    if (!fullName) {
      const error = { fullName: "Please provide your full name" };
      await this.setState({ errors: error, isLoading: false });
    } else if (!email) {
      const error = {
        email: "We need your email so that we can get back to you!"
      };
      await this.setState({ errors: error, isLoading: false });
    } else if (!concern) {
      const error = {
        concern: "Let us know what your issue or recommendation is!"
      };
      await this.setState({ errors: error, isLoading: false });
    } else {
      this.setState({ errors: {} });
      const data = {
        fullname: fullName,
        email: email,
        message: concern
      };
      fetch("https://server.batchpack.co/contact", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(data => {
          if (data.message === "message sent to admin successfully") {
            this.setState({ success: true, message: data.message });
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
          this.setState({
            isLoading: false,
            email: "",
            fullName: "",
            concern: ""
          });
        });
    }
  };
  render() {
    return (
      <div>
        <Navbar />
        <section
          className="py-10 py-md-14 overlay overlay-black overlay-60 bg-cover"
          style={{ backgroundImage: "url(assets/img/covers/cover-5.jpg)" }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-8 text-center">
                <h1 className="display-2 font-weight-bold text-white">
                  Let's Talk!.
                </h1>

                <p className="lead text-white-75 mb-0">
                  We always want to hear from you! Let us know how we can best
                  help you and we'll do our very best.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="position-relative">
          <div className="shape shape-bottom shape-fluid-x svg-shim text-light">
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

        <section className="pt-8 pt-md-11 pb-8 pb-md-14">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-8 text-center">
                <h2 className="font-weight-bold">
                  Let us hear from you directly!
                </h2>

                <p className="font-size-lg text-muted mb-7 mb-md-9">
                  We always want to hear from you! Let us know how we can best
                  help you and we'll do our very best.
                </p>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-12 col-md-12 col-lg-10">
                <form>
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <div className="form-group mb-5">
                        <label for="contactName">Full name</label>

                        <input
                          type="text"
                          className="form-control"
                          id="contactName"
                          placeholder="Full name"
                          name="fullName"
                          onChange={this.handleInputChange}
                          value={this.state.fullName}
                        />
                        {this.state.errors.fullName && (
                          <span className="text-danger">
                            {this.state.errors.fullName}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="form-group mb-5">
                        <label for="contactEmail">Email</label>

                        <input
                          type="email"
                          className="form-control"
                          id="contactEmail"
                          placeholder="hello@domain.com"
                          name="email"
                          onChange={this.handleInputChange}
                          value={this.state.email}
                        />
                        {this.state.errors.email && (
                          <span className="text-danger">
                            {this.state.errors.email}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group mb-7 mb-md-9">
                        <label for="contactMessage">
                          What can we help you with?
                        </label>

                        <textarea
                          className="form-control"
                          id="contactMessage"
                          rows="5"
                          placeholder="Tell us what we can help you with!"
                          name="concern"
                          onChange={this.handleInputChange}
                        >
                          {this.state.concern}
                        </textarea>
                        {this.state.errors.concern && (
                          <span className="text-danger">
                            {this.state.errors.concern}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-center row">
                    {this.state.success &&
                    this.state.message ===
                      "message sent to admin successfully" ? (
                      <div>
                        <span className="text-success h3">
                          {this.state.message}
                        </span>
                        <br />
                        <div className="col-auto">
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
                              className="btn btn-primary lift"
                              onClick={this.handleSubmit}
                            >
                              Send Message
                            </button>
                          )}
                        </div>
                      </div>
                    ) : (
                      <div>
                        <span className="text-danger h3">
                          {this.state.message}
                        </span>
                        <br />
                        <div className="col-auto">
                          {this.state.isLoading ? (
                            <button
                              type="submit"
                              className="btn btn-primary lift"
                              onClick={this.handleSubmit}
                            >
                              Sending Message...
                            </button>
                          ) : (
                            <button
                              type="submit"
                              className="btn btn-primary lift"
                              onClick={this.handleSubmit}
                            >
                              Send Message
                            </button>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <div className="position-relative">
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
        <Footer />
      </div>
    );
  }
}
export default Contact;

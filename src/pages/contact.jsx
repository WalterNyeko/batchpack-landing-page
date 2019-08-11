import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";

const Contact = () => {
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
              <h2 className="font-weight-bold">Let us hear from you directly!</h2>

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
                      />
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
                      />
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
                      />
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-auto">
                    <button type="submit" className="btn btn-primary lift">
                      Send message
                    </button>
                  </div>
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
};
export default Contact;

import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

class Pricing extends React.Component {
  state = {
    prices: []
  };

  componentWillMount() {
    this.fetchPrices();
  }

  fetchPrices = () => {
    fetch("https://api.batchpack.co/get_pricing", {
      method: "GET",
      headers: {
        "content-type": "application/json"
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ prices: data });
      })
      .catch(error => {})
      .finally(done => {});
  };
  render() {
    const { prices } = this.state;
    return (
      <div>
        <Navbar />
        <section className="pt-8 pt-md-11 pb-8 pb-md-14">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-md">
                <h2>SMS Pricing</h2>

                <p className="font-size-lg text-gray-700 mb-md-0">
                  Send Rocket Messages For Less
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <hr className="my-6 my-md-8" />
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-8">
                <div className="card">
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th scope="col">Country</th>
                            <th scope="col">Code</th>
                            <th scope="col">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          {prices && prices.length
                            ? prices.map(eachPrice => (
                                <tr>
                                  <th scope="row">{eachPrice.country}</th>
                                  <td>{eachPrice.countryCode}</td>
                                  <td>$ {eachPrice.amount}</td>
                                </tr>
                              ))
                            : null}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="card shadow-light-lg">
                  <div className="card-body">
                    <h4>Have a question?</h4>

                    <p className="font-size-sm text-gray-800 mb-5">
                      Not sure exactly what you’re looking for or just want
                      clarification? We’d be happy to chat with you and clear
                      things up for you. Anytime!
                    </p>

                    <h6 className="font-weight-bold text-uppercase text-gray-700 mb-2">
                      Email us
                    </h6>

                    <p className="font-size-sm mb-0">
                      <a
                        href="mailto:hello@batchpack.co"
                        className="text-reset"
                      >
                        hello@batchpack.co
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
export default Pricing;

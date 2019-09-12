import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import ourprices from "../files/prices";

class Pricing extends React.Component {
  state = {
    prices: [],
    country: ""
  };

  componentWillMount() {
    this.setState({ prices: ourprices });
  }

  handleInputChange = async event => {
    const { name, value } = event.target;
    await this.setState({ [name]: value });
    const { country } = this.state;
    this.findByCountry(country);
  };

  findByCountry = country => {
    if (country === "") {
      this.setState({ prices: ourprices });
    } else {
      const { prices } = this.state;
      const filteredList = prices.filter(
        eachRow =>
          String(eachRow.Country).startsWith(country) ||
          String(eachRow.Country).endsWith(country) ||
          String(eachRow.Country).includes(country)
      );
      this.setState({ prices: filteredList });
    }
  };
  render() {
    const { country, prices } = this.state;
    return (
      <div>
        <Navbar />
        <section className="pt-8 pt-md-11 pb-8 pb-md-14">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-8 col-md">
                <h2>SMS Pricing</h2>

                <p className="font-size-lg text-gray-700 mb-md-0">
                  Send Rocket Messages For Less
                </p>
              </div>
              <div className="col-4 col-md">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://res.cloudinary.com/dko7n7x16/image/upload/v1565949449/BatchPack_-_SMS_Prices_jhl1xk.pdf"
                >
                  <div className="btn btn-primary">Download Price Card</div>
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <hr className="my-6 my-md-8" />
              </div>
            </div>
            <div className="row">
              <div className="col-4 col-md-4"></div>
              <input
                type="text"
                className="form-control col-4 col-md-4"
                placeholder="Search By Country..."
                defaultValue={this.state.country}
                onChange={this.handleInputChange}
                name="country"
              />
              <div className="col-4 col-md-4"></div>

              <div className="col-12 col-md-12 table-card">
                <div className="card">
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th scope="col">Code</th>
                            <th scope="col">Country</th>
                            <th scope="col">Description</th>
                            <th scope="col">SMSAmount</th>
                          </tr>
                        </thead>
                        <tbody>
                          {prices && prices.length
                            ? prices.map(eachPrice => (
                                <tr>
                                  <td>{eachPrice.ISO}</td>
                                  <th scope="row">{eachPrice.Country}</th>
                                  <td>{eachPrice.Description}</td>
                                  <td className="amount">
                                    $ {parseFloat(eachPrice.Price.amount)}
                                  </td>
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

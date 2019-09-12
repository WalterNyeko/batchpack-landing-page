import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./pages/landing";
import ProgrammableSms from "./pages/programmable_sms";
import Verify from "./pages/verify";
import Terms from "./pages/terms";
import Contact from "./pages/contact";
import Pricing from "./pages/pricing";
import Privacy from "./pages/privacy";
import "./index.css";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Route exact path="/" component={Landing} />
        <Route exact path="/sms" component={ProgrammableSms} />
        <Route exact path="/verify" component={Verify} />
        <Route exact path="/terms" component={Terms} />
        <Route exact path="/privacy" component={Privacy} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/pricing" component={Pricing} />
      </BrowserRouter>
    </div>
  );
}

export default App;

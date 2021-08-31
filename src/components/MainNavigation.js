import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeOne from "./pages/home/homeOne";
import NotFound from "./pages/notfound";
import Pricing from "./pages/pricing";
import Services from "./pages/services/services";
import ServiceDetails from "./pages/services/servicedetails/Content";
import Typography from "./pages/typography";
import ShortCodes from "./pages/shortcodes";
import RequestQuote from "./pages/requestquote";
import About from "./pages/about";
import Contact from "./pages/contact/contactus";
import ContactusOption from "./pages/contact/contactusoption";

function MainNavigation() {

  return (
    <Router>
      <Switch>
        {/** Home */}
        <Route path="/" exact={true} component={HomeOne} />
        <Route path="/home-one" exact={true} component={HomeOne} />
        {/** Pages */}
        <Route path="/notfound" exact={true} component={NotFound} />
        <Route path="/pricing" exact={true} component={Pricing} />
        <Route path="/requestquote" exact={true} component={RequestQuote} />
        <Route path="/shortcodes" exact={true} component={ShortCodes} />
        <Route path="/typography" exact={true} component={Typography} />
        {/** About Services Contact */}
        <Route path="/about" exact={true} component={About} />
        <Route path="/services" exact={true} component={Services} />
        <Route path="/servicedetails" exact={true} component={ServiceDetails} />
        <Route path="/contact" exact={true} component={Contact} />
        <Route path="/contactusoption" exact={true} component={ContactusOption} />

        {/** invalid routes redirection */}
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default MainNavigation;

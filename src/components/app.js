import React, { Component } from "react";
import moment from "moment";
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import PortfolioDetail from "./portfolio/portfolio-detail";
import NoMatch from "./pages/no-match"

export default class App extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div className="app">
        <Router>
          <div>
            <NavigationContainer />
            <h1>Brandon Ward Portfolio</h1>
            <div>{moment().format("MMMM Do YYYY, h:mm:ss a")}</div>
            
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about-me" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/blog" component={Blog} />
              <Route exact path="/portfolio/:slug" component={PortfolioDetail} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

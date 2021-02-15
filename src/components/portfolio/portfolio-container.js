import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
  //State
  //Lifecycle Methods
  constructor() {
    super();
    console.log("Portfolio container has rendered");
  }

  render() {
    return (
      <div>
        <h2>Portfolio items go here...</h2>
        <PortfolioItem />
      </div>
    )
  }
}
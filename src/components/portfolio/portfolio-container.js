import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
  //State
  //Lifecycle Methods
  constructor() {
    super();
    this.state = {
      pageTitle: "Welcome to My Portfolio",
      data: [
        {title: "Quip"},
        {title: "Eventright"},
        {title: "Ministry Safe"}
      ]
    }
  }

  portfolioItems () { 
    return this.state.data.map(item => {
      return <PortfolioItem title={item.title} />
      // return <h2>{item}</h2>
    })
  }

  render() {
    return (
      <div>
        <h2>{this.state.pageTitle}</h2>
        {this.portfolioItems()}
      </div>
    )
  }
}
import axios from "axios";
import React, { Component } from "react";

import PortfolioSideBarList from "../portfolio/portfolio-sidebar-list"

export default class PortfolioManager extends Component {
  constructor () {
    super();

    this.state = {
      isLoading: false,
      portfolioItems: []
    }
  }

  getPortfolioItems() {
    axios.get('https://bward.devcamp.space/portfolio/portfolio_items', {withCredentials: true})
      .then(res => {
        this.setState({
          isLoading: false,
          portfolioItems: [...res.data.portfolio_items]
        })
      })
      .catch(err => {
        console.log("Error: ", err)
      })
  }

  componentDidMount() {
    this.getPortfolioItems();
  }

  render() {
    return (
      <div className="portfolio-manager-wrapper">
        <div className="left-column">
          <h1>PortfolioForm...</h1>
        </div>
        <div className="right-column">
          <PortfolioSideBarList data={this.state.portfolioItems}/>
        </div>
      </div>
    );
  }
}

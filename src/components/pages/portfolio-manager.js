import axios from "axios";
import React, { Component } from "react";
import PortfolioForm from "../portfolio/portfolio-form";

import PortfolioSideBarList from "../portfolio/portfolio-sidebar-list"

export default class PortfolioManager extends Component {
  constructor () {
    super();

    this.state = {
      isLoading: false,
      portfolioItems: []
    }

    this.handleSuccessfulFormSubmission = this.handleSuccessfulFormSubmission.bind(this);
    this.handleFormSubmissionError - this.handleFormSubmissionError(this);
  }

  handleSuccessfulFormSubmission(portfolioItem) {

  }

  handleFormSubmissionError(error) {
    console.log("handleSubmissionError: ", error);
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
           <PortfolioForm 
            handleSuccessfulFormSubmission={this.handleSuccessfulFormSubmission}
            handleFormSubmissionError={this.handleFormSubmissionError}
           />
        </div>
        <div className="right-column">
          <PortfolioSideBarList data={this.state.portfolioItems}/>
        </div>
      </div>
    );
  }
}

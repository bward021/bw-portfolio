import axios from "axios";
import React, { Component } from "react";
import PortfolioForm from "../portfolio/portfolio-form";

import PortfolioSideBarList from "../portfolio/portfolio-sidebar-list";

export default class PortfolioManager extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
      portfolioItems: [],
      portfolioToEdit: {}
    };

    this.handleNewFormSubmission = this.handleNewFormSubmission.bind(
      this
    );
    this.handleEditFormSubmission = this.handleEditFormSubmission.bind(
      this
    );
    this.handleFormSubmissionError - this.handleFormSubmissionError(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.clearPortfolioToEdit = this.clearPortfolioToEdit.bind(this);
  }

  clearPortfolioToEdit() {
    this.setState({
      portfolioToEdit: {}
    })
  }

  handleEditClick(portfolioItem) {
    this.setState({
      portfolioToEdit: portfolioItem
    })
  }

  handleDeleteClick(portfolioItem) {
    axios.delete(
      `https://api.devcamp.space/portfolio/portfolio_items/${portfolioItem.id}`,
      { withCredentials: true }
    ).then(response => {
      this.setState({
        portfolioItems: this.state.portfolioItems.filter(item => {
          return item.id !== portfolioItem.id;
        })
      })
      return response.data
    }).catch (error => {
      console.log("HDC Error: ", error)
    })
  }

  handleEditFormSubmission() {
    this.getPortfolioItems();
  }


  handleNewFormSubmission(portfolioItem) {
    console.log("handleNewFormSubmission", portfolioItem);
    this.setState({
      portfolioItems: [portfolioItem].concat(this.state.portfolioItems),
    });
  }

  handleFormSubmissionError(error) {
    console.log("handleSubmissionError: ", error);
  }

  getPortfolioItems() {
    axios
      .get(
        "https://bward.devcamp.space/portfolio/portfolio_items?order_by=created_at&direction=desc",
        { withCredentials: true }
      )
      .then((res) => {
        this.setState({
          isLoading: false,
          portfolioItems: [...res.data.portfolio_items],
        });
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  }

  componentDidMount() {
    this.getPortfolioItems();
  }

  render() {
    return (
      <div className="portfolio-manager-wrapper">
        <div className="left-column">
          <PortfolioForm
            handleEditFormSubmission={this.handleEditFormSubmission}
            handleNewFormSubmission={this.handleNewFormSubmission}
            handleFormSubmissionError={this.handleFormSubmissionError}
            clearPortfolioToEdit={this.clearPortfolioToEdit}
            portfolioToEdit={this.state.portfolioToEdit}
          />
        </div>
        <div className="right-column">
          <PortfolioSideBarList
            handleEditClick={this.handleEditClick}
            handleDeleteClick={this.handleDeleteClick}
            data={this.state.portfolioItems}
          />
        </div>
      </div>
    );
  }
}

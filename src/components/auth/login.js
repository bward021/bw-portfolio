import React, { Component } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errorText: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    axios
      .post(
        "https://api.devcamp.space/sessions",
        {
          client: {
            email: this.state.email,
            password: this.state.password,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.status === "created") {
          this.props.handleSuccessfulAuth();
        } else {
          this.props.handleUnsuccessfulAuth();
          this.setState({
            errorText: "Wrong Email or Password",
          });
        }
      })
      .catch((error) => {
        console.log("Some error occured", error);
        this.setState({
          errorText: "an error occured",
        });
      });
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
      errorText: "",
    });
  }

  render() {
    return (
      <div>
        <h1>LOGIN TO ACCESS YOUR DASHBOARD</h1>

        <div>{this.state.errorText}</div>

        <form onSubmit={this.handleSubmit} className="auth-form-wrapper">
          <div className="form-group">
            <FontAwesomeIcon icon="envelope" />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <FontAwesomeIcon icon="lock" />

            <input
              type="password"
              name="password"
              placeholder="Your Password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <button className="btn" type="submit">Login</button>
          </div>
        </form>
      </div>
    );
  }
}

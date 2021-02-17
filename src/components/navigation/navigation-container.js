import React, { Component } from "react";

export default class NavigationComponen extends Component {
  constructor() {
    super();

    this.state = {
      navigation: "Nav-Bar",
    };
  }

  render() {
    return (
      <div>
        <button>Home</button>
        <button>About</button>
        <button>Contact</button>
        <button>Blog</button>
        {true ? <button>Add Blog</button> : null }
      </div>
      );
  }
}

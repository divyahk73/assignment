import React, { Component } from "react";
import test from "./test.json";
import Members from "./components/Members";
import "./styles.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      members: test.members
    };
  }
  render() {
    console.log(this.state.members);
    return (
      <div>
        <Members members={this.state.members} />
      </div>
    );
  }
}

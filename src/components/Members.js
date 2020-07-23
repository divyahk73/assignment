import React, { Component } from "react";
import Member from "./Member";

export default class Members extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: props.members
    };
  }
  render() {
    const members = this.state.members;
    return (
      <div className="mx-auto py-5" style={{ width: "300px" }}>
        <h3>List of Users Names</h3>

        {members.map(member => {
          return (
            <ul className="list-group">
              <li className="list-group-item">
                <Member key={member.id} members={member} />
              </li>
            </ul>
          );
        })}
      </div>
    );
  }
}

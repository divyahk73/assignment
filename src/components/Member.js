import React, { Component } from "react";
import Modal from "react-modal";
import Calendar from "./Calendar";
import ListDateAvaliable from "./ListDateAvailable";

export default class Member extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: null,
      isOpen: false
    };
  }
  openModal = members => {
    this.setState({ isOpen: true });
  };
  closeModal = () => {
    this.setState({ members: null, isOpen: false });
  };
  render() {
    const members = this.props.members;
    return (
      <div>
        <div>
          <a
            href={"#" + members.real_name}
            onClick={() => this.openModal(members)}
          >
            {members.real_name}
          </a>
        </div>
        {this.state.isOpen && (
          <Modal isOpen={true} onRequestClose={this.closeModal}>
            <div>
              <button className="float-right" onClick={this.closeModal}>
                X
              </button>
            </div>
            <div className="d-block my-5 float-right">
              <Calendar />
            </div>
            <div className="my-5">
              {members.activity_periods.map((item, index) => (
                <ListDateAvaliable key={index} item={item} />
              ))}
            </div>
          </Modal>
        )}
      </div>
    );
  }
}

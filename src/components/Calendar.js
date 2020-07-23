import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
class Calendar extends React.Component {
  state = {
    seletedDate: new Date()
  };

  handleChange = date => {
    this.setState({
      seletedDate: date
    });
  };

  render() {
    return (
      <DatePicker
        selected={this.state.seletedDate}
        onChange={this.handleChange}
      />
    );
  }
}
export default Calendar;

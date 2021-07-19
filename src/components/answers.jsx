import React, { Component } from "react";
import "../App.css";

class Answers extends Component {
  render() {
    return (
      <div>
        <h4 className="answersText">{this.props.answer}</h4>
      </div>
    );
  }
}

export default Answers;

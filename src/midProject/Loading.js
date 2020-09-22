import React, { Component } from "react";
import "./loading.css";

class Loading extends Component {
  render() {
    return (
      <div className="spinner">
        <div className="dot1" />
        <div className="dot2" />
      </div>
    );
  }
}

export default Loading;
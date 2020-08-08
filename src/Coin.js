import React, { Component } from "react";
import "./Coin.css";

export default class Coin extends Component {
  render() {
    return (
      <div>
        <img src={this.props.img} alt={this.props.altImg} />
      </div>
    );
  }
}

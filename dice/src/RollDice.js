import React, { Component } from "react";
import "./RollDice.css";
import Die from "./Die";

export default class RollDice extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"]
  };
  constructor(props) {
    super(props);
    this.state = {
      die1: "one",
      die2: "one",
      rolling: false
    };
    this.roll = this.roll.bind(this);
  }
  roll() {
    let rand = Math.floor(Math.random() * this.props.sides.length);
    let temp = this.props.sides[rand];
    let rand1 = Math.floor(Math.random() * this.props.sides.length);
    let temp1 = this.props.sides[rand1];
    this.setState({ die1: temp, die2: temp1, rolling: true });

    setTimeout(() => {
      this.setState({ rolling: false });
    }, 1000);
  }

  render() {
    return (
      <div className="RollDice">
        <div className="RollDice-container">
          <Die face={this.state.die1} rolling={this.state.rolling} />
          <Die face={this.state.die2} rolling={this.state.rolling} />
        </div>
        <button onClick={this.roll} disabled={this.state.rolling}>
          {this.state.rolling ? "Rolling..." : "ROLL DICE!"}
        </button>
      </div>
    );
  }
}

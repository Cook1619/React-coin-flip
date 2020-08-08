import React, { Component } from "react";
import Coin from "./Coin";
import { choice } from "./helper";

export default class CoinFlip extends Component {
  static defaultProps = {
    coins: [
      { side: "heads", imgSrc: "https://tinyurl.com/react-coin-heads-jpg" },
      {
        side: "tails",
        imgSrc:
          "https://www.marshu.com/articles/images-website/articles/presidents-on-coins/dime-coin-tail.jpg",
      },
    ],
  };
  constructor(props) {
    super(props);
    this.state = {
      currCoin: null,
      heads: 0,
      tails: 0,
      flips: 0,
    };
    this.handleCoinFlip = this.handleCoinFlip.bind(this);
  }
  handleCoinFlip() {
    const newCoin = choice(this.props.coins);
    this.setState((currentState) => {
      return {
        flips: currentState.flips + 1,
        currCoin: newCoin,
        heads: currentState.heads + (newCoin.side === "heads" ? 1 : 0),
        tails: currentState.tails + (newCoin.side === "tails" ? 1 : 0),
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Let's Flip a coin!</h1>
        {this.state.flips > 0 && (
          <Coin
            img={this.state.currCoin.imgSrc}
            altImg={this.state.currCoin.side}
          />
        )}
        <button onClick={this.handleCoinFlip}>FLIP ME</button>
        <p>{`Out of ${this.state.flips}, there are ${this.state.heads} heads, and ${this.state.tails} tails.`}</p>
      </div>
    );
  }
}

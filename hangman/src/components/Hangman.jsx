import React, { Component } from "react";
import Image from "./Image";
import Keyboard from "./Keyboard";
const axios = require("axios");

export default class Hangman extends Component {
  constructor(props) {
    super(props);

    this.state = {
      word: "",
      counter: 0,
      guessed: []
    };
  }

  componentDidMount() {
    axios
      .get("https://random-word-api.herokuapp.com/word?number=1")
      .then((result) =>
        this.setState({
          word: result.data[0],
          counter: 0,
          guessed: []
        })
      )
      .catch((error) => console.log(error));
  }

  resetButton = () => {
    //Reload the page
  };

  render() {
    return (
      <div>
        <h1>Hangman Game</h1>
        <div>
          <Image />
        </div>
        <div>
          <p>Guess the Word:</p>
          <p>{/*The word we need to guess*/}</p>
          <Keyboard />
          <button onClick={this.resetButton}>Reset</button>
        </div>
      </div>
    );
  }
}

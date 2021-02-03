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

  guessedWord() {
    return this.state.word.split("").map(letter => {
      if (this.state.guessed.includes(letter)) return letter
      else return " _ "
    });
  }

  handleGuess = e => {
    // get the values of the clicked letter an
    let value = "e"
    if (this.state.word.includes(value)) {
      this.setState({
        guessed: [...(this.state.guessed), value],
      });
    } else {
      this.setState({
        counter: this.state.counter + 1
      });
    }


  }

  resetButton = () => {
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
  };

  render() {
    return (
      <div>
        <h1>Hangman Game</h1>
        <div>
          <Image mistakes={this.state.counter} />
        </div>
        <div>
          <p>Guess the Word:</p>
          <p>{!(this.state.counter >= 6) ? this.guessedWord() : this.state.word}</p>
          {(this.guessedWord().join("") === this.state.word) ? "YOU WON !! " : null}
          {(this.state.counter >= 6) ? "YOU LOST !!" : <Keyboard />}
          <br />
          <button onClick={this.resetButton}>Reset</button>
        </div>
      </div>
    );
  }
}

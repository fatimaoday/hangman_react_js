import React, { Component } from "react";
import Image from "./Image";
import "../App.css";
// import Keyboard from "./Keyboard";
const axios = require("axios");

export default class Hangman extends Component {
  constructor(props) {
    super(props);

    this.state = {
      word: "",
      counter: 0,
      guessed: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://random-word-api.herokuapp.com/word?number=1")
      .then((result) =>
        this.setState({
          word: result.data[0],
          counter: 0,
          guessed: [],
        })
      )
      .catch((error) => console.log(error));
  }

  guessedWord() {
    return this.state.word.split("").map((letter) => {
      if (this.state.guessed.includes(letter)) return letter;
      else return " _ ";
    });
  }

  handleGuess = (e) => {
    // get the values of the clicked letter an
    let value = e.target.value;
    if (this.state.word.includes(value)) {
      this.setState({
        guessed: [...this.state.guessed, value],
      });
    } else {
      this.setState({
        counter: this.state.counter + 1,
        guessed: [...this.state.guessed, value]
      });
    }
  };

  resetButton = () => {
    this.componentDidMount();
  };

  generateButtons= () => {
    const letters = [
      "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
      "p","q","r","s","t","u","v","w","x","y","z",
    ];
    const keys = letters.map((letter) => (
      
      <button
        className="buttons"
        onClick={this.handleGuess}
        disabled={this.state.guessed.includes(letter)}
        value={letter}
      >
        {letter}
      </button>
    ));
    return (
      <div>
        
        {keys}
      </div>
    );
  };

  render() {
    const keyboard = this.generateButtons();
    return (
      <div>
        <div>
          <Image mistakes={this.state.counter} />
        </div>
        <div>
          <p>Guess the Word:</p>
          <p>
            {!(this.state.counter >= 6) ? this.guessedWord() : this.state.word}
          </p>
          {this.guessedWord().join("") === this.state.word
            ? "YOU WON !! "
            : null}
          {this.state.counter >= 6 ? (
            "YOU LOST !!"
          ) : (
            <p>{keyboard}</p>
          )}
          <br />
          <button className ="buttons" onClick={this.resetButton}>Play Again</button>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import Image from "./Image";
import chalkbutton from './hangman_images/chalkbutton.png';
import './keyboard.css'


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
    let value = e
    console.log(value)
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
    this.componentDidMount();
  };

  handleClick = e => {
    let letter = e.target.value;
    this.setState(st => ({
      guessed: st.guessed.add(letter),
    }))
  };

  generateButtons() {
    const letters = [
      "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
      "t", "u", "v", "w", "x", "y", "z",
    ];
    const keyboard = letters.map((letter) =>
      <div key={letter}>

        <button className="buttons"

          onClick={() => this.handleGuess(letter)}
          // disabled={this.state.guessed.has(letter)}
          value={letter}>
          <div>
            <img className="button-img" src={chalkbutton} alt='buttons'></img>
            {letter}
          </div>

        </button>

      </div>)
    return (
      <div className='buttons-container'>
        {keyboard}
      </div>
    );
  }


  render() {
    const keyboard = this.generateButtons()
    return (
      <div className='main'>
        <div>
          <Image mistakes={this.state.counter} />
        </div>
        <div className='keyboard'>
          <p>{!(this.state.counter >= 6) ? this.guessedWord() : this.state.word}</p>
          {(this.guessedWord().join("") === this.state.word) ? "YOU WON !! " : null}
          {(this.state.counter >= 6) ? "YOU LOST !!" : <p>{keyboard}</p>}
          <button className='reset' onClick={this.resetButton}>Reset</button>
          <div className='counter'>Mistakes: {this.state.counter}/6</div>
        </div>
      </div>
    );
  }
}

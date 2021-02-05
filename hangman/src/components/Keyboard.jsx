import React, { Component } from "react";
import './keyboard.css';
import chalkButton from './hangman_images/chalkbutton.svg';

export default class Keyboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mistakes: 0,
      guessed: new Set([]),
    }
  }
  handleClick = letter => {

    this.setState(st => ({
      guessed: st.guessed.add(letter),
    }))
  };

  render() {
    const letters = [
      "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
      "t", "u", "v", "w", "x", "y", "z",
    ];
    const keyboard = letters.map((letter) =>
      <div// className="buttons"
        style={{ backgroundImage: `url(${chalkButton})` }}
        onClick={() => this.handleClick(letter)}
        disabled={this.state.guessed.has(letter)}
        value={letter}
      >
        {letter}
      </div>)
    return (
      <div>
        <h1>Keyboard</h1>
        {keyboard}
      </div>
    );
  }
}

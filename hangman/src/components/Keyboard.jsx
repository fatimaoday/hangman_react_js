import React, { Component } from "react";
import '../App.css';

export default class Keyboard extends Component {
    constructor(props){
        super(props);
        this.state={
            mistakes: 0,
            guessed: new Set([]),
            clickedBefore:false,
        }
    }
    handleClick=e => {
        let letter = e.target.value;
        this.setState(st => ({
          guessed: st.guessed.add(letter),
        }))};
    
  render() {
    const letters = [
      "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
      "t","u","v","w","x","y","z",
    ];
    const keyboard = letters.map((letter)=>
    <button className="buttons"
    onClick={this.handleClick}
    disabled={this.state.guessed.has(letter)}
    
    value={letter}>
        {letter}
    </button>)
    return (
      <div>
        <h1>Keyboard</h1>
        {keyboard}
      </div>
    );
  }
}

import React, { Component } from "react";
import hangman0 from './hangman images/hangman0.png';
import hangman1 from './hangman images/hangman1.png';
import hangman2 from './hangman images/hangman2.png';
import hangman3 from './hangman images/hangman3.png';
import hangman4 from './hangman images/hangman4.png';
import hangman5 from './hangman images/hangman5.png';
import hangman6 from './hangman images/hangman6.png';
import './hangman.css'

export default class Image extends Component {
  render() {
    return <div style={{ textAlign: "center" }}>
      {(() => {
        switch (this.props.mistakes) {
          case 0:
            return (
              <img className='hangman' src={hangman0} alt="hangman" />
            )
          case 1:
            return (
              <img className='hangman' src={hangman1} alt="hangman" />
            )
          case 2:
            return (
              <img className='hangman' src={hangman2} alt="hangman" />
            )
          case 3:
            return (
              <img className='hangman' src={hangman3} alt="hangman" />
            )
          case 4:
            return (
              <img className='hangman' src={hangman4} alt="hangman" />
            )
          case 5:
            return (
              <img className='hangman' src={hangman5} alt="hangman" />
            )
          case 6:
            return (
              <img className='hangman' src={hangman6} alt="hangman" />
            )
          default:
            return (
              <img className='hangman' src={hangman0} alt="hangman" />
            )
        }
      })()}
    </div>;
  }
}

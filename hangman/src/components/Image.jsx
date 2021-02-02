import React, { Component } from "react";
import hangmanImg from '../hangman.png';
import './hangman.css'

export default class Image extends Component {
  render() {
    return <div><img className='hangman' src={hangmanImg} alt="hangman" /></div>;
  }
}

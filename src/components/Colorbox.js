// mein Versuch
import React, { Component } from "react";
// import Boxes from "./Boxes";
import "./Boxes.css";

class Colorbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: undefined,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  generateRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
  }

  handleClick() {
    const randomColor = this.generateRandomColor();
    this.setState({ backgroundColor: randomColor });
  }

  render() {
    const randomColor = this.generateRandomColor();
    return (
      <div
        className='Color-grid-container'
        style={{ backgroundColor: randomColor }}>
        <button
          onClick={this.handleClick}
          style={{ backgroundColor: randomColor }}></button>
        <button
          onClick={this.handleClick}
          style={{ backgroundColor: randomColor }}></button>
        <button
          onClick={this.handleClick}
          style={{ backgroundColor: randomColor }}></button>
        <button
          onClick={this.handleClick}
          style={{ backgroundColor: randomColor }}></button>
        <button
          onClick={this.handleClick}
          style={{ backgroundColor: randomColor }}></button>
        <button
          onClick={this.handleClick}
          style={{ backgroundColor: randomColor }}></button>
        <button
          onClick={this.handleClick}
          style={{ backgroundColor: randomColor }}></button>
        <button
          onClick={this.handleClick}
          style={{ backgroundColor: randomColor }}></button>
        <button
          onClick={this.handleClick}
          style={{ backgroundColor: randomColor }}></button>
        <button
          onClick={this.handleClick}
          style={{ backgroundColor: randomColor }}></button>
        <button
          onClick={this.handleClick}
          style={{ backgroundColor: randomColor }}></button>
        <button
          onClick={this.handleClick}
          style={{ backgroundColor: randomColor }}></button>
        <button
          onClick={this.handleClick}
          style={{ backgroundColor: randomColor }}></button>
        <button
          onClick={this.handleClick}
          style={{ backgroundColor: randomColor }}></button>
        <button
          onClick={this.handleClick}
          style={{ backgroundColor: randomColor }}></button>
        <button
          onClick={this.handleClick}
          style={{ backgroundColor: randomColor }}></button>
        <button
          onClick={this.handleClick}
          style={{ backgroundColor: randomColor }}></button>
        <button
          onClick={this.handleClick}
          style={{ backgroundColor: randomColor }}></button>
      </div>
    );
  }
}
export default Colorbox;

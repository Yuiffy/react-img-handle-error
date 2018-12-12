import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const images = ['static/ki-ringtone.mp3', 'static/image1.jpg', logo];

class ImgPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      imgIndexA: 0
    };
    this.changeImage = this.changeImage.bind(this);
  }

  changeImage(stateName, images) {
    const length = images.length;
    const { [stateName]: originIndex } = this.state;
    const newIndex = (originIndex + 1) % length;
    this.setState({ [stateName]: newIndex });
  }

  render() {
    const { imgIndexA } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={images[imgIndexA]} className="App-logo" alt="logo"
               onError={(e) => {
                 console.log("image error", e);
                 this.changeImage('imgIndexA', images);
               }}
          />
          <p>
            use onError=... on <code>&lt;img /></code> to handle image load error.
            see the console to see error info.
          </p>
          <a
            className="App-link"
            // href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              this.setState({ imgIndexA: 0 });
            }}
          >Reset to 0</a>
          <a className="App-link" onClick={() => {
            this.changeImage('imgIndexA', images);
          }}>Next</a>
        </header>
      </div>
    );
  }
}

export default ImgPage;

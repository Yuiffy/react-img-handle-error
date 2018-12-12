import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const images = ['static/ki-ringtone.mp3', 'static/image1.jpg', logo];

const arrayToBackground = (array) => {
  return array.map(url => `url("${url}")`).join(', ');
};

class CssPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      backgroundImage: arrayToBackground(images)
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
    const { backgroundImage } = this.state;
    console.log('backgroundImage', backgroundImage);
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-logo App-logo2" style={{ backgroundImage }} />
          <p>
            use style to set many image, if one error, will load next.
            <br/>
            background-image: {backgroundImage};
            <br/>
            use Chrome Tool --- Network Page, can see it will request the first of array, if error then request second.
          </p>
        </header>
      </div>
    );
  }
}

export default CssPage;

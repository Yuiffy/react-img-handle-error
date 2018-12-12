import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ImgPage from "./ImgPage";
import CssPage from "./CssPage";

const images = [ImgPage];

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      page: ImgPage
    };
  }

  render() {
    const { page:ThePage } = this.state;
    return (
      <div style={{backgroundColor: 'black'}}>
        <button className='button'  onClick={() => {
          this.setState({ page: ImgPage });
        }}>&lt;img></button>
        <button className='button' onClick={() => {
          this.setState({ page: CssPage });
        }}>css background</button>
        <ThePage></ThePage>
      </div>
    );
  }
}

export default App;

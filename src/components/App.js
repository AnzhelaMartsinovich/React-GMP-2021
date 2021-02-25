import React, { Component } from 'react';

import hello from '../img/hello.svg';
import reactImg from '../img/react.png';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>
          <img src={hello} className='hello-img' alt='hello-img' />
          world!
        </h1>
        <img src={reactImg} className='react-img' className='react-img' />
      </div>
    );
  }
}

export default App;

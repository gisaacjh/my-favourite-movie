import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyName from './name.js'
import MyFavouriteMovie from './myFavMov.js'

class App extends Component {
  render() {
    return (
      <div className='nom'>
        <MyName />
        <MyFavouriteMovie />
      </div>
    );
  }
}

export default App;

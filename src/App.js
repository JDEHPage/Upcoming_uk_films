import React, { Component } from 'react';
import MoviesBox from './containers/MoviesBox';
import './App.css';


class App extends Component {
  render() {
    return (
    <div className='app-main'>
    <MoviesBox/>
    </div>
    );
  }
}

export default App;

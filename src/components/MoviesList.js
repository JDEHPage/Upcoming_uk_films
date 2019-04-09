import React, { Component } from 'react';
import Movies from './Movies';
import './MoviesList.css';

class MoviesList extends Component {
  render(){

    const moviesNodes = this.props.data.map(movie => {
      return (
        <Movies key={movie.id} url={movie.url} name={movie.name}></Movies>
      );
    })

    return (
      <div className="movies-list">
        <ul>
          {moviesNodes}
        </ul>
      </div>
    );
  }
}

export default MoviesList;

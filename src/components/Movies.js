import React, { Component } from 'react';
import './Movies.css';

class Movies extends Component {

  render(){
    const { name, url } = this.props
    return (
      <div className="movie">
        <li><a href={url}>{name}</a></li>
      </div>

    );
  }
}

export default Movies;

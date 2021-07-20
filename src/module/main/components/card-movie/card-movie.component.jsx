import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CardMovie extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className='card text-left'>
          <Link to={`/movie-detail/${movie.maPhim}`}>
        <img className='card-img-top' src={movie.hinhAnh} alt='' />
        <div className='card-body'>
          <h4 className='card-title'>{movie.tenPhim}</h4>
          <p className='card-text'>{movie.moTa}</p>
        </div>
        </Link>
      </div>
    );
  }
}

export default CardMovie;

// import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovieListAction } from '../../../../store/actions/movie.action';
import CardMovie from '../../components/card-movie/card-movie.component';

class Home extends Component {
  renderMovieList = () =>
    this.props.movieList.map((movie, index) => (
      <div className='col-4' key={index}>
       <CardMovie movie={movie} />
      </div>
    ));

  render() {
    return (
      <div>
        <h1 className='text-center'>Danh Sách Phim</h1>
        <div className='row'>{this.renderMovieList()}</div>
      </div>
    );
  }

  componentDidMount() {
   this.props.getMovieList();
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMovieList: (movieList) => {
      dispatch(getMovieListAction(movieList));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    movieList: state.movie.movieList,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

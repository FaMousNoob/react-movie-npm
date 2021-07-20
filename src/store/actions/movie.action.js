import { GET_MOVIE_LIST } from '../constants/movie.constants';
import { getMovieListApi } from '../../api/movie.api';
// import axios from 'axios';

export const getMovieListAction = () => {
  return (dispatch) => {
    getMovieListApi()
      .then((res) => {
        console.log(res);
        dispatch({
          type: GET_MOVIE_LIST,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

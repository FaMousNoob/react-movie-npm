import { combineReducers } from 'redux';
import { movieReducer } from './moviereducer';

export const rootReducer = combineReducers({
  movie: movieReducer,
});

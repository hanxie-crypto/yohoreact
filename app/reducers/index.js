import { combineReducers } from 'redux';
import navlist from 'reducers/navlist';
import { routeReducer as routing } from 'redux-simple-router';

const rootReducer = combineReducers({
  navlist,
  routing
});

export default rootReducer;

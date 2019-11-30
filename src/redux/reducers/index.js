import { combineReducers } from 'redux';

import restaurants from './restaurants';
import users from './users';

const reducers = combineReducers({
  restaurants,
  users,
});

export default reducers;

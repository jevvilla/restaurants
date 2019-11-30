import * as types from '../actions/types';

const INITIAL_STATE = {
  isFetching: false,
  error: null,
  restaurants: [],
};

const restaurantReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCHING_RESTAURANTS_REQUEST:
      return { ...state, isFetching: true };

    case types.FETCHING_RESTAURANTS_FAILURE:
      return { ...state, isFetching: false, error: action.payload };

    case types.FETCHING_RESTAURANTS_SUCCESS:
      return { ...state, isFetching: false, restaurants: action.payload };

    default:
      return state;
  }
};

export default restaurantReducer;

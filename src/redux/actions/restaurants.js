import * as types from './types';

export const fetchingRestaurantsRequest = () => ({
  type: types.FETCHING_RESTAURANTS_REQUEST,
});

export const fetchingRestaurantsSuccess = data => ({
  type: types.FETCHING_RESTAURANTS_SUCCESS,
  payload: data,
});

export const fetchingRestaurantsFailure = err => ({
  type: types.FETCHING_USERS_FAILURE,
  payload: err,
});

export const fetchingRestaurants = city => {
  return async dispatch => {
    dispatch(fetchingRestaurantsRequest());
    try {
      const response = await fetch(`url/${city}`);
      const { results } = await response.json();
      dispatch(fetchingRestaurantsSuccess(results));
    } catch (err) {
      dispatch(fetchingRestaurantsFailure(err));
    }
  };
};

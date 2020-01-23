import axios from 'axios';
import * as types from './types';

import { BASE_URL, API_KEY } from '../../common/constants';

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

export const fetchingCityCode = (city = 'Florida') => {
  return async dispatch => {
    dispatch(fetchingRestaurantsRequest());
    try {
      const {
        // eslint-disable-next-line camelcase
        data: { location_suggestions },
      } = await axios(`${BASE_URL}/cities?q=${city}`, {
        headers: {
          'user-key': API_KEY,
        },
      });

      const cityCode = location_suggestions[0].id;
      const restaurants = await fetchingRestaurants(cityCode);

      dispatch(fetchingRestaurantsSuccess(restaurants));
    } catch (err) {
      dispatch(fetchingRestaurantsFailure(err));
    }
  };
};

const fetchingRestaurants = async cityCode => {
  try {
    const {
      data: { cuisines },
    } = await axios(`${BASE_URL}/cuisines?city_id=${cityCode}`, {
      headers: {
        'user-key': API_KEY,
      },
    });
    return cuisines;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
    return [];
  }
};

import * as types from './types';

export const getUserByEmailAndPassword = credentials => ({
  type: types.GET_USER_BY_EMAIL_AND_PASSWORD,
  payload: credentials,
});

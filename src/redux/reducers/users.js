import * as types from '../actions/types';

const INITIAL_STATE = {
  users: [
    {
      username: 'pedro',
      email: 'pedro.email.com',
      password: '0000',
    },
  ],
  history: [],
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_USER_BY_EMAIL:
      return state;

    case types.REGISTER_USER:
      return state;

    case types.GET_USER_HISTORY:
      return state;

    default:
      return state;
  }
};

export default userReducer;

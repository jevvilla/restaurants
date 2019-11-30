import * as types from '../actions/types';

const INITIAL_STATE = {
  users: [
    {
      username: 'pedro',
      email: 'pedro.email.com',
      password: '0000',
    },
  ],
  userLogged: null,
  history: [],
};

const findUser = (action, state) => {
  const { email, password } = action.payload;

  return state.users.find(user => {
    if (user.email === email && user.password === password) {
      return user;
    }
    return null;
  });
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_USER_BY_EMAIL_AND_PASSWORD:
      // eslint-disable-next-line no-case-declarations
      const userLogged = findUser(action, state);
      return { ...state, userLogged };

    case types.REGISTER_USER:
      return state;

    case types.GET_USER_HISTORY:
      return state;

    default:
      return state;
  }
};

export default userReducer;

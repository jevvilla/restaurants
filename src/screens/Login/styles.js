import { StyleSheet } from 'react-native';

import { colors, sizes } from '../../common/styles';

export default StyleSheet.create({
  container: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: sizes.base * 2,
    borderRadius: sizes.radius,
  },
  input: {
    backgroundColor: colors.gray2,
    width: '100%',
    height: 50,
    paddingHorizontal: sizes.base,
    marginVertical: sizes.base,
    borderRadius: sizes.radius,
  },
  loginButton: {
    backgroundColor: colors.secondary,
    padding: sizes.base,
    width: '50%',
    borderRadius: sizes.radius,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: sizes.base,
  },
  loginButtonTitle: {
    color: colors.white,
    fontWeight: 'bold',
  },
  LoginErrorMessage: {
    color: colors.accent,
  },
});

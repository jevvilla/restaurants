import { StyleSheet } from 'react-native';

import { colors, sizes } from '../../common/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: sizes.base * 2,
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
  searchButton: {
    backgroundColor: colors.secondary,
    padding: sizes.base,
    width: '50%',
    borderRadius: sizes.radius,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: sizes.base,
  },
  searchButtonTitle: {
    color: colors.white,
    fontWeight: 'bold',
  },
  searchContainer: {
    alignItems: 'center',
  },
  couisinesContainer: {
    flex: 1,
    marginTop: sizes.base,
  },
  cousineItem: {
    color: colors.accent,
    fontWeight: 'bold',
  },
});

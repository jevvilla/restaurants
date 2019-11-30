import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import * as routes from '../../common/navigation/routes';

const Login = props => {
  const goToHome = () => {
    const { navigation } = props;

    navigation.navigate(routes.HOME);
  };

  return (
    <View>
      <TouchableOpacity onPress={goToHome}>
        <Text>GO TO HOME</Text>
      </TouchableOpacity>
    </View>
  );
};

Login.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;

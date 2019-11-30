import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import * as routes from '../../common/navigation/routes';

const Home = props => {
  const goToHistory = () => {
    const { navigation } = props;

    navigation.navigate(routes.HISTORY);
  };

  return (
    <View>
      <TouchableOpacity onPress={goToHistory}>
        <Text>UserOverview</Text>
      </TouchableOpacity>
    </View>
  );
};

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Home;

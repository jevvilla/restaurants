import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ActivityIndicator, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { colors } from '../../common/styles';
import * as strings from '../../common/strings';
import * as restaurantsActions from '../../redux/actions/restaurants';

import styles from './styles';

const Home = props => {
  const {
    restaurant: { restaurants, isFetching },
  } = props;
  const [cityName, setCityName] = useState('Miami');

  const onChangeTextInputHandler = value => setCityName(value);

  const searchRestaurants = () => {
    const {
      actions: { fetchingCityCode },
    } = props;

    fetchingCityCode(cityName);
  };

  // eslint-disable-next-line react/prop-types
  const renderItem = ({ item }) => (
    <Text style={styles.cousineItem}>{`• ${item.cuisine.cuisine_name}`}</Text>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Text>{strings.HOME_TITLE}</Text>
        <TextInput
          style={styles.input}
          placeholder={strings.SEARCH_CITY_PLACEHOLDER}
          value={cityName}
          onChangeText={onChangeTextInputHandler}
        />
        <TouchableOpacity style={styles.searchButton} onPress={searchRestaurants}>
          <Text style={styles.searchButtonTitle}>{strings.SEARCH_CITY_BUTTON_TEXT}</Text>
        </TouchableOpacity>
      </View>

      {isFetching && <ActivityIndicator size="small" color={colors.accent} />}

      <View style={styles.couisinesContainer}>
        <FlatList data={restaurants} renderItem={renderItem} showsVerticalScrollIndicator={false} />
      </View>
    </View>
  );
};

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  actions: PropTypes.shape({
    fetchingCityCode: PropTypes.func,
  }).isRequired,
  restaurant: PropTypes.shape({
    restaurants: PropTypes.arrayOf(
      PropTypes.shape({
        item: PropTypes.shape({
          cuisine: PropTypes.shape({
            cuisine_name: PropTypes.string,
          }),
        }),
      }),
    ),
    isFetching: PropTypes.bool,
  }).isRequired,
};

const mapStateToProps = state => {
  return {
    restaurant: state.restaurants,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(restaurantsActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

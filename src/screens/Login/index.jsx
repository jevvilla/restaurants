import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as routes from '../../common/navigation/routes';
import * as strings from '../../common/strings';
import * as userActions from '../../redux/actions/users';

import styles from './styles';

const Login = props => {
  const [credentials, setCredentials] = useState({
    email: null,
    password: null,
  });
  const [loginError, setLoginError] = useState(false);

  const onChangeTextInputHandler = (key, value) => setCredentials({ ...credentials, [key]: value });

  const login = () => {
    const {
      actions: { getUserByEmailAndPassword },
    } = props;

    if (credentials.email && credentials.password) {
      getUserByEmailAndPassword({ ...credentials });
    }
  };

  const goToHome = () => {
    const { navigation } = props;

    navigation.navigate(routes.HOME);
  };

  useEffect(() => {
    const {
      users: { userLogged },
    } = props;

    if (userLogged) {
      goToHome();
    } else {
      setLoginError(true);
    }
  }, [props]);

  return (
    <View style={styles.container}>
      <Text>{strings.LOGIN_TITLE}</Text>
      <Text>{strings.LOGIN_SUBTITLE}</Text>

      <TextInput
        style={styles.input}
        placeholder={strings.EMAIL_PLACEHOLDER}
        onChangeText={value => onChangeTextInputHandler('email', value)}
      />
      <TextInput
        style={styles.input}
        placeholder={strings.PASSWORD_PLACEHOLDER}
        secureTextEntry
        onChangeText={value => onChangeTextInputHandler('password', value)}
      />

      <TouchableOpacity style={styles.loginButton} onPress={login}>
        <Text style={styles.loginButtonTitle}>{strings.LOGIN_BUTTON_TEXT}</Text>
      </TouchableOpacity>
      {loginError && <Text style={styles.LoginErrorMessage}>{strings.LOGIN_ERROR_MESSAGE}</Text>}
    </View>
  );
};

Login.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  actions: PropTypes.shape({
    getUserByEmailAndPassword: PropTypes.func.isRequired,
  }).isRequired,
  users: PropTypes.shape({
    userLogged: PropTypes.shape({}).isRequired,
  }).isRequired,
};

const mapStateToProps = state => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(userActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

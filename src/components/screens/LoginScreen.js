import React from 'react';
import PropTypes from 'prop-types';
import { Button, Text, View } from 'react-native';

import NavMenu from '../NavMenu';
import styles from './screenStyles';

const LoginScreen = ({ navigation }) => (
  <View style={styles.container}>
    <NavMenu current={'Login'} />
    <View style={styles.subContainer}>
      <Text style={styles.welcome}>Screen A</Text>
      <Text style={styles.instructions}>This is great</Text>
      <Button
        onPress={() => navigation.dispatch({ type: 'Login' })}
        title="Log in"
      />
    </View>
  </View>
);

LoginScreen.propTypes = {
  navigation: PropTypes.object.isRequired
};

LoginScreen.navigationOptions = {
  title: 'Log In'
};

export default LoginScreen;

// import {
//     Header,
//     Button,
//     Card,
//     CardSection,
//     Spinner
//   } from './components/common';

// const LoginScreen = ({ navigation }) => (
//     <View style={styles.navView}>

//       <LoginForm navigation={navigation} />
//     </View>
//   );

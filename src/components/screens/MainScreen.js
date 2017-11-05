import React from 'react';
import { View } from 'react-native';

import LoginMessage from '../LoginMessage';
import AuthButton from '../AuthButton';
import NavMenu from '../NavMenu';
import styles from './screenStyles';

const MainScreen = () => (
  <View style={styles.container}>
    <NavMenu current={'Main'} />
    <View style={styles.subContainer}>
      <LoginMessage />
      <AuthButton />
    </View>
  </View>
);

MainScreen.navigationOptions = {
  title: 'Home Screen'
};

export default MainScreen;

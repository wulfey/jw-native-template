import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';

import AppReducer from './reducers';
import AppWithNavigationState from './navigators/AppNavigator';
import LoginForm from './components/LoginForm';

//refactored to match:
// https://github.com/react-community/react-navigation/blob/master/examples/ReduxExample/App.js

// import {
//   Header,
//   Button,
//   Card,
//   CardSection,
//   Spinner
// } from './components/common';

export default class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCUjo_T0mrIXC4Zf2TmQrjx-t2P_33ESB4',
      authDomain: 'jw-native-template.firebaseapp.com',
      databaseURL: 'https://jw-native-template.firebaseio.com',
      projectId: 'jw-native-template',
      storageBucket: 'jw-native-template.appspot.com',
      messagingSenderId: '702470956204'
    });
  }

  // <Header headerText="Redux Stack" />
  // <RootNavigator />
  render() {
    const store = createStore(AppReducer, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <View style={styles.containerView}>
          <AppWithNavigationState />
        </View>
      </Provider>
    );
  }
}

const styles = {
  containerView: {
    flex: 1
  }
};

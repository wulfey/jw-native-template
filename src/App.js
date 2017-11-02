import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import LibraryList from './components/LibraryList';

import {
  Header,
  Button,
  Card,
  CardSection,
  Spinner
} from './components/common';

export default class App extends Component {
  state = { loggedIn: null };

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={styles.containerView}>
          <Header headerText="Redux Stack" />
          <LibraryList />
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

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationActions } from 'react-navigation';
import {
  SelectedButton,
  Button,
  Card,
  CardSection,
  Input,
  Spinner
} from './common';

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});

class NavMenu extends Component {
  //   console.log('In LoginStatusMessage');

  MainButton(selected) {
    console.log(selected);
    if (selected) {
      return <SelectedButton>Main</SelectedButton>;
    }
    return (
      <Button
        onPress={() =>
          this.props.dispatch(
            NavigationActions.navigate({ routeName: 'Main' })
          )}
      >
        Main
      </Button>
    );
  }

  EmployeesButton(selected) {
    if (selected) {
      return <SelectedButton>Employees</SelectedButton>;
    }
    return (
      <Button
        onPress={() =>
          this.props.dispatch(
            NavigationActions.navigate({ routeName: 'Employees' })
          )}
      >
        Employees
      </Button>
    );
  }

  LoginButton(selected) {
    if (selected) {
      return <SelectedButton>Login</SelectedButton>;
    }
    return (
      <Button
        onPress={() =>
          this.props.dispatch(
            NavigationActions.navigate({ routeName: 'Login' })
          )}
      >
        Login
      </Button>
    );
  }
  render() {
    const { isLoggedIn, current } = this.props;
    // if (!isLoggedIn) {
    //   return <Text>Please log in</Text>;
    // }
    return (
      <CardSection>
        {this.MainButton(current === 'Main')}
        {this.EmployeesButton(current === 'Employees')}
        {this.LoginButton(current === 'Login')}
      </CardSection>
    );
  }
}

NavMenu.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn
});

export default connect(mapStateToProps)(NavMenu);

// <CardSection>
// <Button
//   onPress={() =>
//     this.props.dispatch(
//       NavigationActions.navigate({ routeName: 'Main' })
//     )}
// >
//   Main
// </Button>

// <Button
//   onPress={() =>
//     this.props.dispatch(
//       NavigationActions.navigate({ routeName: 'Employees' })
//     )}
// >
//   Employees
// </Button>

// <Button
//   onPress={() =>
//     this.props.dispatch(
//       NavigationActions.navigate({ routeName: 'Login' })
//     )}
// >
//   Login
// </Button>
// </CardSection>

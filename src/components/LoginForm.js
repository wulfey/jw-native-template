import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import firebase from 'firebase';
import { connect } from 'react-redux';

import * as actions from '../actions/index';

// import { emailChanged, passwordChanged } from '../actions/';

import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  // componentWillReceiveProps() {
  //   // console.log(this.props);
  //   // if (this.props.user !== null) {
  //   //   this.props.navigation.navigate('Employees');
  //   // }
  // }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }
  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }
  onButtonPress() {
    console.log(this.props);
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  onLogoutPress() {
    this.props.logout();
  }

  showButton() {
    if (this.props.loading) {
      return <Spinner size="small" />;
    }
    if (this.props.user !== null) {
      return <Button onPress={this.onLogoutPress.bind(this)}>Logout</Button>;
    }

    return <Button onPress={this.onButtonPress.bind(this)}>Login</Button>;
  }

  showInputs() {
    if (this.props.user === null) {
      return (
        <View>
          <CardSection>
            <Input
              label={'Email'}
              onChangeText={this.onEmailChange.bind(this)}
              value={this.props.email}
              placeholder={'email@gmail.com'}
            />
          </CardSection>
          <CardSection>
            <Input
              label={'Password'}
              onChangeText={this.onPasswordChange.bind(this)}
              value={this.props.password}
              placeholder={'*********'}
              secureTextEntry
            />
          </CardSection>
        </View>
      );
    }
    return (
      <CardSection>
        <Text style={styles.labelStyle}>Welcome {this.props.user.email}</Text>
      </CardSection>
    );
  }

  render() {
    const { errorTextStyle } = styles;
    console.log(this.props);
    return (
      <Card>
        {this.showInputs()}
        <Text style={errorTextStyle}>{this.props.error}</Text>

        <CardSection>{this.showButton()}</CardSection>
      </Card>
    );
  }
}

// map APPLICATION level REDSUX state to props ...
// const mapStateToProps = state => {
//   return {
//     email: state.auth.email,
//     password: state.auth.password
//   };
// };

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  }
};

const mapStateToProps = ({
  auth: { email, password, error, loading, user, nav }
}) => {
  return { email, password, error, loading, user, nav };
};

// const NavigationLoginForm = withNavigation(LoginForm);

export default connect(mapStateToProps, actions)(LoginForm);

import React, { Component } from 'react';
import firebase from 'firebase';
import { Text, View, TextInput } from 'react-native';
import { Button, Card, CardSection, InputBox, Spinner } from './common';

export default class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false };
  onButtonPress() {
    this.setState({ error: '', loading: true });
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginFail() {
    console.log('Login Failed');
    this.setState({ error: 'Authentication Failed.', loading: false });
  }

  onLoginSuccess() {
    console.log('Login Successful');
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }
    return <Button onPress={this.onButtonPress.bind(this)}>Log In</Button>;
  }

  render() {
    const { errorTextStyle } = styles;
    return (
      <Card>
        <CardSection>
          <InputBox
            label={'Email'}
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
            placeholder={'email@gmail.com'}
          />
        </CardSection>

        <CardSection>
          <InputBox
            label={'Password'}
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
            placeholder={'*********'}
            secureTextEntry
          />
        </CardSection>

        <Text style={errorTextStyle}>{this.state.error}</Text>

        <CardSection>{this.renderButton()}</CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

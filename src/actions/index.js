import firebase from 'firebase';

import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  LOGOUT
} from './types';

export function emailChanged(text) {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
}

export function passwordChanged(text) {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
}

export const loginUser = ({ email, password }) => {
  return dispatch => {
    dispatch({ type: LOGIN_USER });

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => onLoginSuccess(dispatch, user))
      .catch(error => {
        console.log(error);
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(user => onLoginSuccess(dispatch, user))
          .catch(() => onLoginFail(dispatch));
      });
  };
};

export const logout = () => {
  return dispatch => {
    dispatch({ type: LOGOUT });

    firebase
      .auth()
      .signOut()
      .then(() => console.log('Signed Out'))
      .catch(error => {
        console.log(error);
      });
  };
};

const onLoginSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
};

const onLoginFail = dispatch => {
  dispatch({
    type: LOGIN_USER_FAIL
  });
};

// .then(this.onLoginSuccess.bind(this))
// .catch(this.onLoginFail.bind(this));
//   const navigateAction = NavigationActions.navigate({
//     routeName: 'Profile',

//     params: {},

//     action: NavigationActions.navigate({ routeName: 'SubProfileRoute' })
//   });

//   this.props.navigation.dispatch(navigateAction);

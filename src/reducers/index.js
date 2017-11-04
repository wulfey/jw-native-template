import { combineReducers } from 'redux';

import AuthReducer from './AuthReducer';

export default combineReducers({
  auth: AuthReducer
});

// application store now has a 'state' of libraries
// libraries: []
// dummy reducer:
// dummy: () => []

import { combineReducers } from 'redux';

import AuthReducer from './AuthReducer';
import NavReducer from './NavReducer';

const AppReducer = combineReducers({
  auth: AuthReducer,
  nav: NavReducer
});
export default AppReducer;
// application store now has a 'state' of libraries
// libraries: []
// dummy reducer:
// dummy: () => []

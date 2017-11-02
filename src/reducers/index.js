import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectedReducer from './SelectedReducer';

export default combineReducers({
  libraries: LibraryReducer,
  selected: SelectedReducer
});

// application store now has a 'state' of libraries
// libraries: []

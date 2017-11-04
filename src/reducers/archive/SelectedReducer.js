import { SELECTION } from '../actions/types';

//state argument is not application state, it is the state for this reducer
export default (state = [], action) => {
  switch (action.type) {
    case SELECTION:
      return action.payload;
    default:
      return state;
  }
};

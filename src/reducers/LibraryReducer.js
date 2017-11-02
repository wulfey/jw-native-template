import data from './LibraryList.json';

export default () => data;

//state argument is not application state, it is the state for this reducer
// export default (state = [], action) => {
//   switch (action.type) {
//     case 'BOOK_SELECTED':
//       return action.payload;
//     default:
//       return state;
//   }
// };

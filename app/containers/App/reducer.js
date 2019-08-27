import { CHANGE_LOCATION } from './constants';

// The initial state of the App
export const initialState = {
  language: 'en',
  location: ''
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LOCATION: {
      const newState = {
        ...state,
        location: action.location
      };

      return newState;
    }
    default:
      return state;
  }
}

export default appReducer;

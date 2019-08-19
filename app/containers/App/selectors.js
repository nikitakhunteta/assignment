import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobalState = (state) => state.global || initialState;

const makeSelectLocation = () => createSelector(
  selectGlobalState,
  (state) => state.location
);

export {
  selectGlobalState,
  makeSelectLocation
};

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHotelState = (state) => state.hotels || initialState;

const makeSelectLoading = () => createSelector(
  selectHotelState,
  (state) => state.list.loading
);

const makeSelectHotelsError = () => createSelector(
  selectHotelState,
  (state) => state.list.error
);

const makeSelectHotels = () => createSelector(
  selectHotelState,
  (state) => state.list.data
);

const makeSelectHotelsData = () => createSelector(
  selectHotelState,
  (state) => state.list
);

const makeSelectListingInfo = () => createSelector(
  selectHotelState,
  (state) => state.info
);

export {
  makeSelectLoading,
  makeSelectHotelsError,
  makeSelectHotels,
  makeSelectHotelsData,
  makeSelectListingInfo
};

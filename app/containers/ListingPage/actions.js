/*
 * Listing page Actions
 */

import {
  FETCH_HOTELS,
  FETCH_HOTELS_SUCCESS,
  FETCH_HOTELS_ERROR,
} from './constants';

/**
 * Load the hotels list, this action starts the request saga
 */
export function fetchHotelsList({filters,paginator}) {
  return {
    type: FETCH_HOTELS,
    filters,
    paginator
  };
}

/**
 * Dispatched when the hotels are loaded by the request saga
 */
export function fetchHotelsSuccess(data) {
  return {
    type: FETCH_HOTELS_SUCCESS,
    hotels:data,
  };
}

/**
 * Dispatched when loading the hotels fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of FETCH_HOTELS_ERROR passing the error
 */
export function fetchHotelsError(error) {
  return {
    type: FETCH_HOTELS_ERROR,
    error,
  };
}

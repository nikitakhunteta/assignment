/*
 * App Actions
 *
 * Actions change things in your application
 */

import {
  CHANGE_LOCATION,

} from './constants';

/**
 *change the location in global state
 */
export function changeLocation(location) {
  return {
    type: CHANGE_LOCATION,
    location
  };
}

/**
 * Gets the data from api
 */

import {
  call, put, select, takeLatest
} from 'redux-saga/effects';
import { FETCH_HOTELS } from './constants';
import { fetchHotelsSuccess, fetchHotelsError } from './actions';
import request from 'utils/request';


export function* getHotels({paginator}) {
  const requestURL = `/api/getHotelsList?pageNumber=${paginator.current}`;

  try {
    const data = yield call(request, requestURL);
    yield put(fetchHotelsSuccess(data));
  } catch (err) {
    yield put(fetchHotelsError(err));
  }
}

export default function* fetchHotelsList() {
  yield takeLatest(FETCH_HOTELS, getHotels);
}

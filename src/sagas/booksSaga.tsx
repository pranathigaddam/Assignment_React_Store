import { call, put, takeLatest } from 'redux-saga/effects';
import { 
  FETCH_BOOKS_LIST, 
  FETCH_COUNTRIES_LIST, 
  FETCH_STATES_LIST,
  FETCH_CITIES_LIST,
} from '../constants/books';

import fetchData from '../api';
import { 
  setBooksListAction, 
  setCountriesAction, 
  setStatesAction, 
  setCitiesAction,
  setError
} from '../actions/books';

function* fetchBooksList() {
  try {
    let url = `https://5f43f3343fb92f00167531ed.mockapi.io/api/bookslist`;
    yield put(setError(""));
    const json = yield call(fetchData, url);
    yield put(setBooksListAction(json));
  } catch(error) {
    yield put(setError(error.toString()));
  }
}

function* fetchCountriesList() {
  try {
    let url = "https://5f43f3343fb92f00167531ed.mockapi.io/api/address-country"; 
    yield put(setError(""));
    const json = yield call(fetchData, url);
    yield put(setCountriesAction(json));
  } catch(error) {
    yield put(setCountriesAction([]));
  }
}

function* fetchStatesList(countryCode: any) {
  try {
    let url = `http://5f43f3343fb92f00167531ed.mockapi.io/api/address-state?countryCode=${countryCode.countryCode}`;
    yield put(setError(""));
    const json = yield call(fetchData, url); 
    yield put(setStatesAction(json));
  } catch(error) {
    yield put(setStatesAction([]));
  }
}

function* fetchCitiesList(stateCode: any) {
  try {
    let url = `https://5f4a5bb641cb390016de33f5.mockapi.io/address-city?stateCode=${stateCode.stateCode}`;
    yield put(setError(""));
    const json = yield call(fetchData, url);
    yield put(setCitiesAction(json));
  } catch(error) {
    yield put(setCitiesAction([]));
  }
}

export default function* actionWatcher() {
    yield takeLatest(FETCH_BOOKS_LIST, fetchBooksList);
    yield takeLatest(FETCH_COUNTRIES_LIST, fetchCountriesList);
    yield takeLatest(FETCH_STATES_LIST, fetchStatesList);
    yield takeLatest(FETCH_CITIES_LIST, fetchCitiesList)
}

 
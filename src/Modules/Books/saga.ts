import { put, takeLatest } from 'redux-saga/effects';
import { 
  FETCH_BOOKS_LIST, 
  SET_BOOKS_LIST, 
  FETCH_COUNTRIES_LIST, 
  SET_COUNTRIES_LIST, 
  FETCH_STATES_LIST,
  SET_STATES_LIST, 
  FETCH_CITIES_LIST,
  SET_CITIES_LIST
} from './constants';

function* fetchBooksList() {
  const json = yield fetch(`https://5f43f3343fb92f00167531ed.mockapi.io/api/bookslist`)
    .then(response => response.json());   
  yield put({ type: SET_BOOKS_LIST, payload: { booksList: json }});
}

function* fetchCountriesList() {
  const json = yield fetch(`https://5f43f3343fb92f00167531ed.mockapi.io/api/address-country`)
    .then(response => response.json());   
  yield put({ type: SET_COUNTRIES_LIST, payload: { countriesList: json }});
}

function* fetchStatesList(countryCode: any) {
  const json = yield fetch(`http://5f43f3343fb92f00167531ed.mockapi.io/api/address-state?countryCode=${countryCode.countryCode}`)
  .then(response => response.json());  
  yield put({ type: SET_STATES_LIST, payload: { statesList: json }});
}

function* fetchCitiesList(stateCode: any) {
  const json = yield fetch(`https://5f4a5bb641cb390016de33f5.mockapi.io/address-city?stateCode=${stateCode.stateCode}`)
  .then(response => response.json());  
  yield put({ type: SET_CITIES_LIST, payload: { citiesList: json }});
}

export default function* actionWatcher() {
     yield takeLatest(FETCH_BOOKS_LIST, fetchBooksList);
     yield takeLatest(FETCH_COUNTRIES_LIST, fetchCountriesList);
     yield takeLatest(FETCH_STATES_LIST, fetchStatesList);
     yield takeLatest(FETCH_CITIES_LIST, fetchCitiesList)

}


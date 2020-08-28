import { put, takeLatest } from 'redux-saga/effects';
import { SET_BOOKS_LIST, FETCH_BOOKS_LIST } from './constants';

function* fetchBooksList() {
  const json = yield fetch('https://5f43f3343fb92f00167531ed.mockapi.io/api/bookslist')
        .then(response => response.json());   
  yield put({ type: SET_BOOKS_LIST, payload: { booksList: json }});
}

export default function* actionWatcher() {
     yield takeLatest(FETCH_BOOKS_LIST, fetchBooksList)
}


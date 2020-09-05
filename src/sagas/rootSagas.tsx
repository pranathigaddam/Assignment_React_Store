import { all } from 'redux-saga/effects';
import booksSagaWatcher from './booksSaga';

export default function* rootSaga() {
    yield all([
        booksSagaWatcher(),
    ]);
}
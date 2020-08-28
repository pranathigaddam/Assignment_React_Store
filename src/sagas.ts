
import { all } from 'redux-saga/effects';
import actionWatcher from './Modules/Books/saga';

export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}
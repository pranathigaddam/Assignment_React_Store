import { createStore, applyMiddleware, compose } from 'redux';
import 'regenerator-runtime/runtime';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

export function configureStore(initialState = {}) {
    const enhancer = compose(
      applyMiddleware(sagaMiddleware),
    );
    const store = createStore(rootReducer, initialState, enhancer);
    sagaMiddleware.run(sagas);
    return store;
}


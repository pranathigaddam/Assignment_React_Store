import { createStore, applyMiddleware, compose } from 'redux';
import 'regenerator-runtime/runtime';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from '../reducers/rootReducer';
import sagas from '../sagas/rootSagas';

const sagaMiddleware = createSagaMiddleware();

export function configureStore(initialState = {}) {
    const enhancer = compose(
      applyMiddleware(sagaMiddleware),
    );
    const store = createStore(rootReducer, initialState, enhancer);
    sagaMiddleware.run(sagas);
    return store;
}

//, window.__REDUX_DEVTOOLS_EXTENTION__&& window.REDUX_DEVTOOLS_EXTENTION__()
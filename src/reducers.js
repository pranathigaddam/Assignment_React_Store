import { combineReducers } from 'redux';
import books from './Modules/Books/reducer';

const appReducer = combineReducers({
    books
});

// const initialState = appReducer({}, {});
const rootReducer = (state, action) => {
    return appReducer(state, action);
}

export default rootReducer;
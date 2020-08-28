import { combineReducers } from 'redux';
import books from './Modules/Books/reducer';


export const rootReducer = combineReducers({
    books
});

export type RootState = ReturnType<typeof rootReducer>




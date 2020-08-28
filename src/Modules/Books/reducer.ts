import { SET_BOOKS_LIST, booksState, BooksActionTypes, FETCH_BOOKS_LIST, ADD_BOOK_TO_CART } from './constants';

const initialState: booksState = {
    booksList: [],
    isLoading: false,
    cartItems: []
  }

export default function booksReducer( state= initialState, action: BooksActionTypes) : booksState {
    switch(action.type as string) {
        case FETCH_BOOKS_LIST:
            return { ...state,  isLoading: true}
        case SET_BOOKS_LIST:
            return { ...state, ...action.payload, isLoading: false }
        case ADD_BOOK_TO_CART:
            // console.log("state.booksList",state.booksList);
            let cartItemsArray = [...state.booksList, action.payload];
            let cartItemsArrayObj = {cartItems: cartItemsArray }
            // console.log("newCartItems",cartItems);
            return { ...state}
        default:
            return state;
    }
}
import { FETCH_BOOKS_LIST, ADD_BOOK_TO_CART } from './constants';

export function getBooksListAction(){
    return {
        type: FETCH_BOOKS_LIST
    }
}

export function AddBookToCartAction(book: object) {
    console.log("book", book);
    return {
        type: ADD_BOOK_TO_CART,
        payload: book
    }
}

export const SET_BOOKS_LIST = "SET_BOOKS_LIST";
export const FETCH_BOOKS_LIST = "FETCH_BOOKS_LIST";
export const ADD_BOOK_TO_CART = "ADD_BOOK_TO_CART";


export interface Book {
  id: string;
  title: string;
  price: number;
  createdDate: Date;
  description: string;
};
  
export interface booksState {
  booksList: Book[],
  isLoading: boolean,
  cartItems: Book[],
}

interface SetBooksListAction {
  type: typeof SET_BOOKS_LIST,
  payload: Book[]
}

interface AddBookToCartAction { 
  type: typeof ADD_BOOK_TO_CART,
  payload: Book
}

export type BooksActionTypes = SetBooksListAction | AddBookToCartAction;


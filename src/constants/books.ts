export const SET_BOOKS_LIST = "SET_BOOKS_LIST";
export const FETCH_BOOKS_LIST = "FETCH_BOOKS_LIST";
export const ADD_BOOK_TO_CART = "ADD_BOOK_TO_CART";
export const FETCH_COUNTRIES_LIST = "FETCH_COUNTRIES_LIST";
export const SET_COUNTRIES_LIST = "SET_COUNTRIES_LIST";
export const FETCH_STATES_LIST = "FETCH_STATES_LIST";
export const SET_STATES_LIST = "SET_STATES_LIST";
export const FETCH_CITIES_LIST = "FETCH_CITIES_LIST";
export const SET_CITIES_LIST = "SET_CITIES_LIST";
export const SET_SHIPPING_ADDRESS_LIST = "SET_SHIPPING_ADDRESS_LIST";
export const CLEAR_CART_ITEMS = "CLEAR_CART_ITEMS";
export const SET_BOUGHT_ITEMS = "SET_BOUGHT_ITEMS";
export const SET_SHOWMORE_ITEMS = "SET_SHOWMORE_ITEMS";
export const SET_SELECTED_TABNAME = "SET_SELECTED_TABNAME";
export const SET_ERROR = "SET_ERROR";

export interface Book {
  id: string
  title: string
  price: number
  bookImage: string
  createdDate: number
  description: string
  authorName: string
  pageCount: number
  ISBN: number
  isDelivered?: boolean
  deliveredDate?: Date
}

export interface ShippingAddress{
  addressLine1: string
  addressLine2: string
  city: string
  state: string,
  country: string
}

export interface booksState {
  booksList: Book[]
  isLoading: boolean
  cartItems: Book[],
  myOrders: Book[],
  shippingAddress: ShippingAddress
  countriesList: Country[]
  statesList: State[]
  citiesList: City[]
  showMoreItemsCount: number  
  selectedTabName: string,
  error: string
}

export interface Country {
  id: string
  country: string
  countryCode: number
}

export interface State {
  id: string
  state: string
  stateCode: number
  countryCode: number
}

export interface City {
  id: string
  city: string
  cityCode: number
  stateCode: number
}

interface addBookToCartAction { 
  type: typeof ADD_BOOK_TO_CART,
  payload: Book[]
}

export type BooksActionTypes = addBookToCartAction;


import { 
    SET_BOOKS_LIST, 
    booksState, 
    BooksActionTypes, 
    FETCH_BOOKS_LIST, 
    ADD_BOOK_TO_CART, 
    SET_COUNTRIES_LIST,
    SET_STATES_LIST,
    SET_CITIES_LIST,
    SET_SHIPPING_ADDRESS_LIST,
    CLEAR_CART_ITEMS,
    SET_BOUGHT_ITEMS,
    SET_SHOWMORE_ITEMS,
    SET_SELECTED_TABNAME,
    SET_ERROR
} from '../constants/books';

const initialState: booksState = {
    booksList: [],
    isLoading: false,
    cartItems: [],
    myOrders: [],
    shippingAddress: {
        addressLine1: "",
        addressLine2: "",
        city: "-1",
        state: "-1",
        country: "-1",
    },
    countriesList: [],
    statesList: [],
    citiesList: [],
    showMoreItemsCount: 10,
    selectedTabName: "",
    error: ""
  }

export default function booksReducer( state= initialState, action: BooksActionTypes) : booksState {
    switch(action.type as string) {
        case FETCH_BOOKS_LIST:
            return { ...state,  isLoading: true}
        case SET_BOOKS_LIST:
            return { ...state, ...action.payload, isLoading: false }
        case ADD_BOOK_TO_CART:
            return { ...state, cartItems:[...action.payload, ...state.cartItems]}
        case SET_COUNTRIES_LIST:
            return { ...state, ...action.payload, statesList: [], citiesList: [] }
        case SET_STATES_LIST:
            return { ...state, ...action.payload, citiesList: [] }
        case SET_CITIES_LIST:
            return { ...state, ...action.payload }
        case SET_SHIPPING_ADDRESS_LIST:
            return { ...state, ...action.payload }
        case CLEAR_CART_ITEMS:
            return { ...state, cartItems: action.payload}
        case SET_BOUGHT_ITEMS: 
            return { ...state, myOrders: [...action.payload, ...state.myOrders]}
        case SET_SHOWMORE_ITEMS:
            return {...state, ...{ showMoreItemsCount: state.showMoreItemsCount + 10 }}
        case SET_SELECTED_TABNAME:
            return {...state, ...action.payload}
        case SET_ERROR:
            return {...state, ...action.payload}
        default:
            return state;
    }
}
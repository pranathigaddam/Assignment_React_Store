import { 
    City,
    Book,
    Country,
    State,
    FETCH_BOOKS_LIST,
    ADD_BOOK_TO_CART, 
    FETCH_COUNTRIES_LIST, 
    FETCH_STATES_LIST, 
    FETCH_CITIES_LIST, 
    ShippingAddress,
    SET_SHIPPING_ADDRESS_LIST,
    CLEAR_CART_ITEMS,
    SET_BOUGHT_ITEMS,
    SET_SHOWMORE_ITEMS,
    SET_SELECTED_TABNAME,
    SET_BOOKS_LIST,
    SET_STATES_LIST,
    SET_COUNTRIES_LIST,
    SET_CITIES_LIST,
    SET_ERROR
} from '../constants/books';

export function getBooksListAction(){
    return {
        type: FETCH_BOOKS_LIST
    }
}

export function setBooksListAction(booksList:Book[]){
    return {
        type: SET_BOOKS_LIST,
        payload: { booksList: booksList }
    }
}

export function getCountriesList() {
    return {
        type: FETCH_COUNTRIES_LIST
    }
}

export function setCountriesAction(countriesList:Country[]){
    return {
        type: SET_COUNTRIES_LIST,
        payload: { countriesList: countriesList }
    }
}

export function getStatesList(countryCode: string) {
    return {
        type: FETCH_STATES_LIST,
        countryCode
    }
}

export function setStatesAction(statesList:State[]){
    return {
        type: SET_STATES_LIST,
        payload: { statesList: statesList }
    }
}

export function getCitiesList(stateCode: string) {
    return {
        type: FETCH_CITIES_LIST,
        stateCode
    }
}

export function setCitiesAction(citiesList:City[]){
    return {
        type: SET_CITIES_LIST,
        payload: { citiesList: citiesList }
    }
}

export function addBookToCartAction(book: Book[]) {
    return {
        type: ADD_BOOK_TO_CART,
        payload: book
    }
}

export function setShippingAddress(shippingAddress:ShippingAddress) {
    return {
        type: SET_SHIPPING_ADDRESS_LIST,
        payload: { shippingAddress:  shippingAddress}
    }
}
export function ClearCartAddedItems(book: Book[]) {
    return {
        type: CLEAR_CART_ITEMS,
        payload: book
    }
}

export function setBoughtBooks(book: Book[]) {
    return {
        type: SET_BOUGHT_ITEMS,
        payload: book
    }
}

export function setShowmoreItemsCount() {
    return {
        type: SET_SHOWMORE_ITEMS
    }
}

export function setSelectedTabName(tabname: object) {
    return {
        type: SET_SELECTED_TABNAME,
        payload: tabname
    }
}
export function setError(error:string) {
    return {
        type: SET_ERROR,
        payload: { error: error }
    }
}

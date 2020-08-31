import { 
    FETCH_BOOKS_LIST,
    ADD_BOOK_TO_CART, 
    FETCH_COUNTRIES_LIST, 
    FETCH_STATES_LIST, 
    FETCH_CITIES_LIST, 
    Book,
    ShippingAddress,
    SET_SHIPPING_ADDRESS_LIST,
    CLEAR_CART_ITEMS,
    SET_BOUGHT_ITEMS,
    SET_SHOWMORE_ITEMS,
    SET_SELECTED_IABNAME
} from './constants';

export function getBooksListAction(){
    return {
        type: FETCH_BOOKS_LIST
    }
}

export function addBookToCartAction(book: Book[]) {
    return {
        type: ADD_BOOK_TO_CART,
        payload: book
    }
}

export function getCountriesList() {
    return {
        type: FETCH_COUNTRIES_LIST
    }
}

export function getStatesList(countryCode: string) {
    return {
        type: FETCH_STATES_LIST,
        countryCode
    }
}

export function getCitiesList(stateCode: string) {
    return {
        type: FETCH_CITIES_LIST,
        stateCode
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
        type: SET_SELECTED_IABNAME,
        payload: tabname
    }
}

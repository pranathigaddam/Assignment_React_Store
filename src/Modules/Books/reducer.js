
const initialState = {
    count: 0
}

export default function booksReducer( state= initialState, action) {
    switch(action.type) {
        case "add":
            return state;
        default:
            return state;
    }
}
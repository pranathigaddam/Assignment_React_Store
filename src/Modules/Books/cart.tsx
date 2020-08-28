import React from "react";
import './style.css';
import {useSelector, useDispatch } from 'react-redux';

interface Props {
    props: any
}

interface RootState {
    books: any;
    booksList: object,
    isLoading: boolean
}

function Cart(props: Props) {
    const books = useSelector((state: RootState) => state.books );
    console.log("books", books);
    return(
        <div>Hello pranthi Book Cart</div>
    )
}
export default Cart;

import React, { useCallback, useEffect } from "react";
import {useSelector, useDispatch } from 'react-redux';
import { getBooksListAction, AddBookToCartAction } from './actions';
import { Link } from "react-router-dom";
import './style.css';

interface Props {
    match: { params: { id: string; }; },
    props: any,
}

interface RootState {
    books: any;
    booksList: object,
    isLoading: boolean
}
  
function BooksView (props:Props ) {
    const dispatch = useCallback(useDispatch(), [])
    const books = useSelector((state: RootState) => state.books );
    console.log("book===booksview",books);
    
    useEffect(() => {
        dispatch(getBooksListAction());
    }, [dispatch]);

    const handleCartItem = (book: object) => {
        dispatch(AddBookToCartAction(book));
    }
    console.log("books",books)

    const book = books.booksList.find((book: { id: string; }) => book.id === props.match.params.id) || {};
    const { title="", price="", description="" } = book;
    return(
        <div className="mainContainer">
            <div>
                <img src="" alt="Heelo"/>
            </div>
            <div>
                <div>
                    <ul>
                        <li>
                            <span>Book Title:</span>
                             <span>{title}</span>
                        </li>
                        <li>
                            <span>Book Price:</span>
                            <span>{price}</span>
                        </li>
                        <li>
                            <span>Author Name:</span>
                            <span>{title}</span>
                        </li>
                        <li>
                            <span>Page Count:</span>
                            <span>{title}</span>
                        </li>
                        <li>
                            <span>ISBN:</span>
                            <span>{title}</span>
                        </li>
                        <li>
                            <Link to="/cart"><button onClick={e =>handleCartItem(book)}>Add to Cart</button></Link>
                            <Link to="/cart"><button>Buy Now</button></Link>
                        </li>
                    </ul>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}
export default BooksView;

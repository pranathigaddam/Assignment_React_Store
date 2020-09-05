import React, { useCallback, useEffect } from "react";
import {useSelector, useDispatch } from 'react-redux';
import { getBooksListAction, addBookToCartAction, setBoughtBooks, setSelectedTabName } from '../../actions/books';
import { Link } from "react-router-dom";
import './style.css';
import { Book } from "../../constants/books";

interface Props {
    match: { params: { id: string; }; },
}

interface RootState {
    books: any;
    booksList: Book[],
    isLoading: boolean
}
  
function BooksView (props:Props ) {
    const dispatch = useCallback(useDispatch(), [])
    const books = useSelector((state: RootState) => state.books );
    
    useEffect(() => {
        dispatch(getBooksListAction());
    }, [dispatch]);

    const handleCartItem = (book: Book) => {
        dispatch(addBookToCartAction([book]));
        dispatch(setSelectedTabName({selectedTabName: "Cart"}));
    }

    const handleBuybook = (book: Book) => {
        book["isDelivered"] = true;
        book["deliveredDate"] = new Date();
        dispatch(setBoughtBooks([book]));
        dispatch(addBookToCartAction([book]));
    }

    const book = books.booksList.find((book: { id: string; }) => book.id === props.match.params.id) || {};
    const { title="", price="", description="", authorName="", pageCount="", ISBN="", bookImage="" } = book;
    const isAddressAdded = Object.values(books.shippingAddress).filter(item => item).length === 5 ? true : false;
       return(
        <div className="mainContainer">
            <div className="bookViewBlock">
            <div className="bookViewAvatar">
                <div className="bookAvatarBlock lg">
                    <img src={bookImage} alt="Book"/>
                </div>
            </div>
            <div className="bookViewDetails">
                <div className="bookViewInfo">
                    <h2>{title}</h2>
                    <p className="bookPrice">Price: &#8377;{price}</p>
                    <p>Author Name: {authorName}</p>
                    <p>Page Count:{pageCount}</p>
                    <p>ISBN: {ISBN}</p>
                    {!isAddressAdded && <p>*  To Add shipping Address to Click on Add to Cart</p>}
                    <div className="bookViewActions">
                        <Link to="/cart"><button className="primaryBtn" onClick={e =>handleCartItem(book)}> Add to Cart</button></Link>
                        <Link to="/buy-book"><button onClick={e => handleBuybook(book)} disabled={!isAddressAdded} className={isAddressAdded ?"primaryBtn" : "disabledBtn"}>Buy Now</button></Link>
                    </div>
                    <div className="bookDescBlock">
                        <h3>Description:</h3>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default BooksView;

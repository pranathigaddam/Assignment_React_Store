import React, { useEffect, useCallback} from "react";
import { Link } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import { getBooksListAction, setShowmoreItemsCount, setSelectedTabName } from './actions';
import { Book } from "./constants";
import './style.css';

interface RootState {
    books: any
    booksList: Book[]
    isLoading: boolean
}
  
function BooksList () {
    const dispatch = useCallback(useDispatch(), []);
    const books = useSelector((state: RootState) => state.books );
    const { booksList, showMoreItemsCount } = books;
    
    useEffect(() => {
        dispatch(getBooksListAction());
    }, [dispatch]);

    const handleShowmoreItems = () => {
        dispatch(setShowmoreItemsCount())
    }

    const handleBookView = (book: Book) => {
        dispatch(setSelectedTabName({selectedTabName: book.title}));
    }

    return (
        <div className="mainContainer" data-cy="mainContainer">
            <div className="booksBlock"  data-cy="booksBlock">
                {booksList.length > 0 ?
                    booksList.slice(0, showMoreItemsCount).map((book: Book, i: number) => {
                    return( 
                        <div className="bookBlockWrapper" key={i.toString()} data-cy={`bookBlockWrapper${i.toString()}`}>
                            <div className="bookBlockTop">
                                <img src={book.bookImage} alt="Book"  data-cy="bookBlockWrapperImage"/>
                            </div>
                            <div  className="bookBlockBottom" data-cy="bookBlockBottom">
                                <span className="bookTitle" data-cy="bookTitle">{book.title}</span>
                                <span className="bookDesc" data-cy="bookDes">{book.description}</span>
                                <div className="buyBtn" data-cy="bookViewBtn" onClick={e => handleBookView(book)}><Link to={`/book-view/${book.id}`}><button>Buy Book</button></Link></div>
                            </div>
                        </div>)
                })
                : null
            }
            </div>
            { booksList.length > showMoreItemsCount && <div className="booksBlock bookBlockShowmore"><span onClick={handleShowmoreItems}>show more</span></div>}
        </div>
    )
}

export default BooksList;
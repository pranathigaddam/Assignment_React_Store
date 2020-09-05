import React, { useEffect, useCallback} from "react";
import { Link } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import { getBooksListAction, setShowmoreItemsCount, setSelectedTabName } from '../../actions/books';
import { Book } from "../../constants/books";
import './style.css';
import Nodata from "../common-components/Nodata/noData";
import Loader from "../common-components/loader/loader";

interface RootState {
    books: any
    booksList: Book[]
}
  
function BooksList () {
    const dispatch = useCallback(useDispatch(), []);
    const books = useSelector((state: RootState) => state.books );
    const { booksList, showMoreItemsCount, error, isLoading } = books;
    
    useEffect(() => {
        dispatch(getBooksListAction());
        dispatch(setSelectedTabName({selectedTabName: ""}));
    }, [dispatch]);

    const handleShowmoreItems = () => {
        dispatch(setShowmoreItemsCount())
    }

    const handleBookView = (book: Book) => {
        dispatch(setSelectedTabName({selectedTabName: book.title}));
    }

    if (error !== "") {
        return <div className="noData">{error}</div>
    }
    return (
        <div className="mainContainer">
            {isLoading && <Loader/>}
            {
                !isLoading && 
                <React.Fragment>
                <div className="booksBlock">
                    {booksList.length > 0 ?
                        booksList.slice(0, showMoreItemsCount).map((book: Book, i: number) => {
                        return( 
                            <div className="bookBlockWrapper" key={i.toString()}>
                                <div className="bookBlockTop">
                                    <img src={book.bookImage} alt="Book"/>
                                </div>
                                <div  className="bookBlockBottom">
                                    <span className="bookTitle">{book.title}</span>
                                    <span className="bookDesc">{book.description}</span>
                                    <div className="buyBtn" onClick={e => handleBookView(book)}><Link to={`/book-view/${book.id}`}><button>View Book</button></Link></div>
                                </div>
                            </div>)
                    })
                    : <Nodata/>
                }
                </div>
                { (booksList.length > showMoreItemsCount) && <div className="bookBlockShowmore"><span onClick={handleShowmoreItems}>show more</span></div>}
                </React.Fragment>
            }
        </div>
    )
}

export default BooksList;
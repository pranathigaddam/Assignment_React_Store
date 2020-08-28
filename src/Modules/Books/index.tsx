import React, { useEffect, useCallback} from "react";
import './style.css';
import { Link } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import { getBooksListAction } from './actions';

interface Props {
    props: any,
}

interface RootState {
    books: any,
    booksList: object,
    isLoading: boolean
}
  
function BooksList (props: Props) {
    const dispatch = useCallback(useDispatch(), [])
    const books = useSelector((state: RootState) => state.books );
    
    useEffect(() => {
        dispatch(getBooksListAction());
    }, [dispatch]);
    
    return (
        <div className="mainContainer">
            <div className="booksBlock">
                {books.booksList.map((book: { title: string; description: string; id: number}, i: number) => {
                    return( 
                    <div className="bookBlockWrapper" key={i.toString()}>
                    <div className="bookBlock">
                        <div className="bookBlockTop">
                        </div>
                        <div className="bookBlockBottom">
                        <div className="bookTitle"><span>{book.title}</span></div>
                        <div><span>{book.description}</span></div>
                        <div className="buyBtn"><Link to={"/book-view/"+book.id}><button>Buy Book</button></Link></div>
                        </div>
                    </div>
                    </div>)
                })}
            </div>
        </div>
    )
}

export default BooksList;
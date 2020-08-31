import React from "react";
import { useSelector } from 'react-redux';
import './style.css';
import { Book } from "./constants";


interface RootState {
    books: any;
    myOrders: Book[]
}

function Myorders () {
    const books = useSelector((state: RootState) => state.books);

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const getOrderPlacedDate = (date: Date) => {
        return `${date.getDate()} ${monthNames[date.getMonth()]}, ${date.getFullYear()}`
    }
    return(
        <div className="mainContainer">
            <div className="borderCardBlock">
            { 
                books.myOrders.length > 0 ?
                books.myOrders.map((book: Book, i: number)=> {
                    return(
                        <div className="bookOrderCard" key={i.toString()}>
                            <div className="bookOrderHeader">
                                <p className="header-left">Order Placed: {book.deliveredDate ? getOrderPlacedDate(book.deliveredDate) : ""}</p>
                                <p className="header-right">Status: <span className="statusDelivered">Delivered</span></p>
                            </div>
                            <div className="bookOrderDetails">
                                <div className="bookViewAvatar">
                                    <div className="bookAvatarBlock sm">
                                        <img src={book.bookImage} alt="bookimage" />
                                    </div>
                                </div>
                                <div className="bookOrderView">
                                    <div className="bookViewInfo">
                                        <h3>{book.title}</h3>
                                        <p>{book.authorName}</p>
                                        <p className="bookPrice">&#8377;{book.price}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
                :  <div className="noData"> No items are ordered</div>
            }
        </div>
    </div>)
}
export default Myorders;

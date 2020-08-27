import React from "react";
import './style.css';
import { Link } from "react-router-dom";


const booksArray = [
    { title: "Javascript Advanced Guide", disciption: "Everty Javascript Developer Should Know"},
    { title: "Nodejs Advanced Guide", disciption: "Everty Javascript Developer Should Know"},
    { title: "ExpressJs Advanced Guide", disciption: "Everty Javascript Developer Should Know"},
    { title: "Mongodb Advanced Guide", disciption: "Everty Javascript Developer Should Know"},
    { title: "CSS Advanced Guide", disciption: "Everty Javascript Developer Should Know"},
    { title: "CSS Advanced Guide", disciption: "Everty Javascript Developer Should Know"},
    { title: "CSS Advanced Guide", disciption: "Everty Javascript Developer Should Know"},
    { title: "CSS Advanced Guide", disciption: "Everty Javascript Developer Should Know"},
    { title: "CSS Advanced Guide", disciption: "Everty Javascript Developer Should Know"},
    { title: "CSS Advanced Guide", disciption: "Everty Javascript Developer Should Know"},
    { title: "CSS Advanced Guide", disciption: "Everty Javascript Developer Should Know"},
    { title: "CSS Advanced Guide", disciption: "Everty Javascript Developer Should Know"},
    { title: "CSS Advanced Guide", disciption: "Everty Javascript Developer Should Know"},
    { title: "CSS Advanced Guide", disciption: "Everty Javascript Developer Should Know"},
    { title: "CSS Advanced Guide", disciption: "Everty Javascript Developer Should Know"},
    { title: "CSS Advanced Guide", disciption: "Everty Javascript Developer Should Know"},
    { title: "CSS Advanced Guide", disciption: "Everty Javascript Developer Should Know"},
    { title: "CSS Advanced Guide", disciption: "Everty Javascript Developer Should Know"},
    { title: "CSS Advanced Guide", disciption: "Everty Javascript Developer Should Know"},
    { title: "CSS Advanced Guide", disciption: "Everty Javascript Developer Should Know"},
    { title: "CSS Advanced Guide", disciption: "Everty Javascript Developer Should Know"},
    { title: "CSS Advanced Guide", disciption: "Everty Javascript Developer Should Know"},
    { title: "CSS Advanced Guide", disciption: "Everty Javascript Developer Should Know"}
  ];
  

function BooksList (props) {
    return (
        <div className="mainContainer">
            <div className="booksBlock">
                {booksArray.map((book, i) => {
                    return( 
                    <div className="bookBlockWrapper" key={i.toString()}>
                    <div className="bookBlock">
                        <div  className="bookBlockTop">
                        </div>
                        <div  className="bookBlockBottom">
                        <div className="bookTitle"><span>{book.title}</span></div>
                        <div><span>{book.disciption}</span></div>
                        <div className="buyBtn"><Link to="/book-view"><button>Buy Book</button></Link></div>
                        </div>
                    </div>
                    </div>)
                })}
            </div>
        </div>
    )
}

export default BooksList;
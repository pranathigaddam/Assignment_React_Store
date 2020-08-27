import React from "react";
import './style.css';


function BooksView (props) {
    return(
        <div className="mainContainer">
            <div>
                <img src=""/>
            </div>
            <div>
                <div>
                    <ul>
                        <li>
                            <span>Book Title:</span>
                            <span>Book Title</span>
                        </li>
                        <li>
                            <span>Book Price:</span>
                            <span>Book Title</span>
                        </li>
                        <li>
                            <span>Author Name:</span>
                            <span>Book Title</span>
                        </li>
                        <li>
                            <span>Page Count:</span>
                            <span>Page Count</span>
                        </li>
                        <li>
                            <span>ISBN:</span>
                            <span>ISBN</span>
                        </li>
                        <li>
                            <button>Add to Cart</button>
                            <button>Buy Now</button>
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

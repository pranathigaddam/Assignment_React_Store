import React from 'react';
import "./style.css";

const Loader = () => {
    return (
        <div className="loadingContainer">
            <div className="loadingBlock">
               <h4><i className="fa fa-spinner fa-spin"></i>Loading</h4> 
            </div>
        </div>
    )
}

export default Loader;

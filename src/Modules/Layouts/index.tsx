import React from "react";
import './style.css';
import { Link } from "react-router-dom";

interface Props {
    component: React.ReactType,
    props: any
}

function Layouts({component:Component, props}: Props){
    return (
        <div className="container">
            <div className="header">
                <div className="header-left">
                    <Link to="/">eCommerce Site</Link>
                </div>
                <div className="header-right">
                    <ul>
                        <li><Link to="/">Home</Link></li> 
                        <li><Link to="/my-orders">My Orders</Link></li> 
                        <li><Link to="/cart">Cart</Link></li> 
                    </ul>
                </div>
            </div>
            <Component {...props}/>
        </div>
    )
}


export default Layouts;
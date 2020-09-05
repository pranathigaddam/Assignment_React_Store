import React, { useCallback } from "react";
import './style.css';
import { Link } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import { setSelectedTabName } from "../../actions/books";


interface Props {
    component: React.ReactType,
    props: any
}

interface RootState {
    books: any
}

function Layouts({component:Component, props}: Props){
    const { selectedTabName } = useSelector((state: RootState) => state.books );
    const dispatch = useCallback(useDispatch(), []);
    const handleTabChange = (tabName: string) => {
        dispatch(setSelectedTabName({selectedTabName: tabName}))
    }
    return (
        <div className="container">
            <div className="header">
                <div className="headerLeft">
                    <ul>
                        <li><Link to="/">eCommerce Site</Link></li> 
                        {selectedTabName && <li className="headerTabname">{selectedTabName}</li>}    
                    </ul>
                </div>
                <div className="headerRight">
                    <ul>
                        <li><Link to="/">Home</Link></li> 
                        <li onClick={e => handleTabChange("My Orders")}><Link to="/my-orders">My Orders</Link></li> 
                        <li onClick={e => handleTabChange("Cart")}><Link to="/cart">Cart</Link></li> 
                    </ul>
                </div>
            </div>
            <Component {...props}/>
        </div>
    )
}


export default Layouts;
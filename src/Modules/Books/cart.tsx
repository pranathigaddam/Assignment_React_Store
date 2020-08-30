import React, { useState, useEffect, useCallback} from "react";
import './style.css';
import {useSelector, useDispatch} from 'react-redux';
import { Book, Country, State, City, ShippingAddress } from "./constants";
import { Link } from "react-router-dom";
import { getCountriesList, getStatesList, getCitiesList, setShippingAddress, ClearCartAddedItems, setBoughtBooks, setSelectedTabName } from './actions';

interface Props {
    props: any
}

interface RootState {
    books: any
    booksList: Book[],
    isLoading: boolean,
    cartItems: any
    countriesList: Country[]
    statesList: State[]
    citiesList: City[]
    shippingAddress: ShippingAddress
}

function Cart(props: Props) {
    const dispatch = useCallback(useDispatch(), []);
    const [deliveredAddress, setDeliveredAddress] = useState({addressLine1: "", addressLine2: "", city: "-1", state: "-1", country: "-1"});
    const [isFormError, setFormError] = useState(false);
    const [isShippingAddressSaved, setShippingAddressSaved] = useState(false);
    const books = useSelector((state: RootState) => state.books );
    const { cartItems, countriesList, statesList, citiesList, shippingAddress } = books;

    useEffect(() => {
        if (Object.values(shippingAddress).filter(item => item).length !== 5) {
            dispatch(getCountriesList());
        }
    }, [dispatch, shippingAddress]);

    useEffect(() => {
        if (Object.values(shippingAddress).filter(item => item).length === 5 && isShippingAddressSaved === false) {
            dispatch(getStatesList(shippingAddress.country));
            dispatch(getCitiesList(shippingAddress.state));
            setDeliveredAddress((prevState)=> { return { ...prevState, ...shippingAddress}});
        }
        if (isShippingAddressSaved === true) {
            alert("Saved Successfully")
        }
    }, [shippingAddress, dispatch, isShippingAddressSaved]);

    const handleAddressChange = (e: { target: { name: string; value: string; }; }) => {
        let addressObj = {[e.target.name]: e.target.value};
        setDeliveredAddress((prevState)=> { return { ...prevState, ...addressObj}});
    }

    const handleSelectCountryChange = (e: { target: { value: string; name: string; }; }) => {
        dispatch(getStatesList(e.target.value));
        
        let countryObj = {[e.target.name]: e.target.value};
        setDeliveredAddress((prevState)=> { return { ...prevState, ...countryObj, state: "-1", city: "-1"}});
    }

    const handleSelectStateChange = (e: { target: { value: string; name: string; }; }) => {
        dispatch(getCitiesList(e.target.value));
        let stateObj = {[e.target.name]: e.target.value};
        setDeliveredAddress((prevState)=> { return { ...prevState, ...stateObj, city: "-1"}});
    }

    const handleSelectCityChange = (e: { target: { value: string; name: string; }; }) => {
        let cityObj = {[e.target.name]: e.target.value};
        setDeliveredAddress((prevState)=> { return { ...prevState, ...cityObj}});
    }

    const handleShippingAddressSave = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        let isFormError = false;

        if (deliveredAddress.addressLine1 === "") { isFormError = true }
        if ( deliveredAddress.addressLine2 === "") { isFormError = true }
        if ( deliveredAddress.city === "-1") { isFormError = true }
        if ( deliveredAddress.state === "-1") { isFormError = true }
        if ( deliveredAddress.country === "-1") { isFormError = true }
        if (!isFormError) {
            setFormError(false);
            dispatch(setShippingAddress(deliveredAddress));
            setShippingAddressSaved(true);
        } else {
            setFormError(true);
        }
    }

    const handleClearCartAddedItems = () => {
        dispatch(ClearCartAddedItems());
    }

    const handleBuybook = (books: Book[]) => {
        books.forEach((book) => {
            book["isDelivered"] = true;
            book["deliveredDate"] = new Date();
        });
        
        dispatch(setBoughtBooks(books));
        dispatch(setSelectedTabName({selectedTabName: ""}));
    }

    console.log("books",books);
    const itemsPrice = books.cartItems.reduce((total: number, item: { price: number; })=> {
        return total + item.price;
    }, 0);
    const totalTaxPerItems = books.cartItems.length * 7.50;
    const shippingCharge =  books.cartItems.length > 0  ? 5 : 0;
    const totalAmount = itemsPrice + totalTaxPerItems + shippingCharge;
    const isAddressAdded = Object.values(books.shippingAddress).filter(item => item).length === 5 ? true : false;

    return(
        <div className="mainContainer">
            <div className="bookViewBlock">
                <div className="cartInfoBlock">
                    <div className="cartFormBlock">
                        <h3 className="cartPageHeading">Shipping Address <span className={isFormError ? "error" : ""}>(All Fields Required)</span></h3>
                        <div className="custonInputField">
                            <input className="fullWidth" name="addressLine1" value={deliveredAddress.addressLine1} placeholder="Address Line 1" onChange={handleAddressChange}/>
                        </div>
                        <div className="custonInputField">
                            <input className="fullWidth" name="addressLine2" value={deliveredAddress.addressLine2}  placeholder="Address Line 2" onChange={handleAddressChange}/>
                        </div>
                        <div className="custonInputField">
                            <select placeholder="Country" className="width50 mrgRight" name="country" value={deliveredAddress.country} onChange={handleSelectCountryChange}>
                                <option value="-1">Country</option>
                                {
                                    countriesList.map((country: { countryCode: number; country: string }, i: number)=> {
                                        return <option key={i.toString()} value={country.countryCode}>{country.country}</option>
                                    })
                                }
                            </select>
                            <select placeholder="State" className="width50" name="state" onChange={handleSelectStateChange} value={deliveredAddress.state}>
                                <option value="-1">State</option>
                                {
                                    statesList.map((state: { stateCode: number; state: string }, i: number)=> {
                                        return <option key={i.toString()} value={state.stateCode}>{state.state}</option>
                                    })
                                }      
                            </select>
                        </div>
                        <div className="custonInputField">
                            <select className="fullWidth" placeholder="City" name="city" onChange={handleSelectCityChange} value={deliveredAddress.city}>
                            <option value="-1">City</option>
                            {
                                citiesList.map((city: { cityCode: number; city: string }, i: number)=> {
                                    return <option key={i.toString()} value={city.cityCode}>{city.city}</option>
                                })
                            }    
                            </select>
                        </div>
                        <div className="bookViewActions">
                            <button className="primaryBtn" onClick={handleShippingAddressSave}>{Object.values(shippingAddress).filter(item => item).length === 5 ? "Update" : "Save"}</button>
                        </div>
                    </div>
                </div>
                <div className="cartInfoBlock">
                    <div className="cartSummary">
                        <h3 className="cartPageHeading"> Shopping Bag</h3>
                        <div className="cartSelectedBooks">
                            { cartItems.length > 0  ?
                                    cartItems.map((book: Book, i: number) => {
                                        return (
                                            <div className="cartSelectedBookItem" key={i.toString()}>
                                                <div className="bookImg">
                                                    <img src={book.bookImage} alt="Cart"/>
                                                </div>
                                                <div className="bookName">
                                                    <h3>{book.title}</h3>
                                                </div>
                                            </div>
                                        )
                                    })
                                :
                                "No items are added."
                            }
                        </div>
                        <div className="cartPaymentInfo">
                            <h2 className="cartPageHeading">Payment Info</h2>
                            <div className="cartItem">
                                <p>Items Price:</p>
                                <p>${itemsPrice}</p>
                            </div>
                            <div className="cartItem">
                                <p>Tax:</p>
                        <p>${totalTaxPerItems}</p>
                            </div>
                            <div className="cartItem">
                                <p>Shipping Charge:</p>
                                <p>${shippingCharge}</p>
                            </div>
                            <div className="cartItem totalPrice">
                                <p>Total</p>
                                <p className="totalCount">${totalAmount}</p> 
                            </div>
                            <div className="bookViewActions">
                                <Link to="/buy-book"><button onClick={e => handleBuybook(cartItems)} disabled={!isAddressAdded} className={isAddressAdded ? "primaryBtn" : "disabledBtn"}> Checkout </button></Link>
                                <button className="defaultBtn" onClick={handleClearCartAddedItems}> Cancel </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cart;

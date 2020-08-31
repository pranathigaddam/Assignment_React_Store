import React, { useEffect, useCallback} from "react";
import './style.css';
import {useSelector, useDispatch} from 'react-redux';
import { Book, Country, State, City, ShippingAddress } from "./constants";
import { ClearCartAddedItems } from "./actions";

interface Props {
    props: any
}

interface RootState {
    books: any
    cartItems: any
    countriesList: Country[]
    statesList: State[]
    citiesList: City[]
    shippingAddress: ShippingAddress
}

function BuyBook(props: Props) {
    const dispatch = useCallback(useDispatch(), []);
    const books = useSelector((state: RootState) => state.books );
    const { cartItems, countriesList, statesList, citiesList, shippingAddress, myOrders } = books;

    useEffect(() => {
        return ()=> {
            let oldCartItems = [...cartItems];
            myOrders.forEach((order: { id: string; }) => {
                let index = oldCartItems.findIndex((cart: { id: string; }) => cart.id === order.id);
                if(index > -1) {
                    oldCartItems.splice(index, 1);
                    dispatch(ClearCartAddedItems([...oldCartItems]));
                }
            });  
        }
    }, [dispatch,myOrders, cartItems]);

    const itemsPrice = books.cartItems.reduce((total: number, item: { price: number; })=> {
        return total + item.price;
    }, 0);
    const totalTaxPerItems = books.cartItems.length * 7.50;
    const shippingCharge =  books.cartItems.length > 0  ? 5 : 0;
    const totalAmount = itemsPrice + totalTaxPerItems + shippingCharge;

    const cityName = citiesList.filter((city: { cityCode: number; }) => city.cityCode === Number(shippingAddress.city))[0];
    const stateName = statesList.filter((state: { stateCode: number; }) => state.stateCode === Number(shippingAddress.state))[0];
    const countryName = countriesList.filter((country: { countryCode: number; }) => country.countryCode === Number(shippingAddress.country))[0];
    return(
        <div className="mainContainer">
            <div className="bookViewBlock">
                <div className="cartInfoBlock">
                    <div className="cartFormBlock">
                        <h3 className="cartPageHeading">Shipping Address</h3>
                        <div>
                            <p>Address Line1:  {shippingAddress.addressLine1}</p>
                            <p>Address Line2:  {shippingAddress.addressLine2}</p>
                            <p>City: {(cityName && cityName.city) || ""}</p>
                            <p>State: {(stateName && stateName.state) || ""}</p>
                            <p>Country: {(countryName && countryName.country) || ""}</p>
                        </div>
                    </div>
                </div>
                <div className="cartInfoBlock">
                    <div className="cartSummary">
                        <h3 className="cartPageHeading"> Shopping Bag</h3>
                        <div className="cartSelectedBooks">
                            { cartItems.length > 0  ?
                                    cartItems.map((book: Book, i: number) => {
                                        return book && book.isDelivered ?
                                            (<div className="cartSelectedBookItem" key={i.toString()}>
                                                <div className="bookImg">
                                                    <img src={book.bookImage} alt="Cart"/>
                                                </div>
                                                <div className="bookName">
                                                    <h3>{book.title}</h3>
                                                </div>
                                            </div>)
                                           
                                        : ""
                                    })
                                :
                                <div>No items are added.</div>
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
                            <div className="cartItem totalPrice" >
                                <p>Total</p>
                                <p className="totalCount ">${totalAmount}</p> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="orderStatus totalPrice"><h3>Order Successful!</h3></div>
        </div>
    )
}
export default BuyBook;

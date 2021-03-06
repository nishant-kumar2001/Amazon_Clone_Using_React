import React from 'react';
import CurrencyFormat from 'react-currency-format';
import "./CheckoutProduct.css";
import { useStateValue } from './StateProvider';

function CheckoutProduct({id,title,image,price,rating}){

    const [{basket},dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove from basket ...
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id : id,
        });
    };

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt=""/>

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className ="checkoutProduct__price">
                    {/* <small>₹</small>
                    <strong>{price}</strong> */}


                <CurrencyFormat 
                renderText = {(value) => (
                    <strong>{`${value}`}</strong>
                    )}


                    decimalScale={2}
                    value={price}  
                    displayType={'text'}
                    thousandSeparator = {true}
                    thousandSpacing={'2s'}
                    fixedDecimalScale = {true}
                    prefix={'₹'}
                />
                    
                </p>
                <div className="checkoutProduct__rating">
                {Array(rating)
                    .fill()
                    .map ((_) => (
                        <p>⭐</p>
                    ))
                }
            </div>
            

            <button onClick={removeFromBasket}>Remove from basket</button>

            </div>
        </div>
    )
}



export default CheckoutProduct;
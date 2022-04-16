import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} =props;
 //console.log(cart);
 let total = 0;
 let shipping = 0;
 let quantity = 0;

 for(const product of cart){
     total = total + (product.price * product.quantity);
     shipping = shipping + product.shipping;
     quantity = quantity + product.quantity;
 }
const tax = parseFloat((total * 0.1).toFixed(2));
const GrandTotal = total + shipping+ tax;
    return (
        <div className='Cart'>
              <h3>Order summery </h3>
              <p>Selected Item: {quantity} </p>
              <p>Total Price: ${total}</p>
              <p>Totoal Shipping: ${shipping} </p>
              <p>Tax: {tax}</p>
              <h4>Grand Total: {GrandTotal.toFixed(2)} </h4> 
        </div>
    );
};

export default Cart;
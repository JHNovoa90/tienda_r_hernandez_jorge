import React from 'react'
import './CartWidget.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { useState } from 'react';
import { useEffect } from 'react';
const image = require('./cart-image.png');


const CartWidget = () => {
  const {itemCount} = useContext(CartContext);

  useEffect( () => {
    console.log("Sth happened");
    console.log(itemCount);
  }, [itemCount])
  return (
    <div>
      {console.log("rendering",itemCount)}
      <Link to = '/cart' className = 'no-under-link-black'>
        {itemCount === 0 ?
        <div className = 'cart-div-without-items'> 
            <img src={ image } alt="cart" id = 'small-image'/>
            <p id = "label-cart"> Cart </p>
        </div>
        :
        <div className='cart-div-with-items'>
            <img src={ image } alt="cart" id = 'small-image'/>
            <p id = "label-cart"> Cart {`(${itemCount})`}</p>
        </div>
        }

      </Link>
        
    </div>
  )
}

export default CartWidget
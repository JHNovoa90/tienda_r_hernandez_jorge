import React from 'react'
import './CartWidget.css';
import { Link } from 'react-router-dom';
const image = require('./cart-image.png');
import { CartContext } from '../context/CartContext';


const CartWidget = ({items}) => {

  const cartContext = useContext(CartContext);
  const { cart } = cartContext;

  return (
    <div>
      <Link to = '/cart' className = 'no-under-link-black'>
        <div className='cart-div'>
            <img src={ image } alt="cart" id = 'small-image'/>
            <p id = "label-cart"> Cart ({items})</p>
        </div>
        <div>{cart.length}</div>
      </Link>
        
    </div>
  )
}

export default CartWidget
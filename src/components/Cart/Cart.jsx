import React, { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'
import './Cart.css'

const Cart = ({items}) => {
  const {emptyCart, calculateTotalCartValue} = useContext(CartContext);
  console.log(calculateTotalCartValue);

  return (
    <div className = 'div-main-Cart'>
        <div className = 'div-items'>
            { items.map( (item) => {
                console.log(item);
                return ( <CartItem item = {item}/> )
            })}
        </div>

        <div className = 'div-total'>
            <h4> Total : <strong> {calculateTotalCartValue()} € </strong></h4>
            <Link to = '/checkout'>
              <button className = 'btn btn-success'> Proceso de pago </button>
            </Link>
        </div>
        <div className = 'div-button'>
            <button className = 'btn btn-info' onClick = {() => emptyCart()}> Limpiar carrito </button>
        </div>
    </div>
  )
}

export default Cart
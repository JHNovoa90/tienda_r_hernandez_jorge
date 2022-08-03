import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import './CartItem.css'

const CartItem = ({item}) => {
  const {removeItem} = useContext(CartContext);
  return (
    <div className = 'div-main2'> 
        <div className = 'div-photo'>
            <img src={item.url} alt="product" width = {150} height = {130}/>
        </div>

        <div className = 'div-details'>
            <h4> {item.name} </h4>
            <h6> {item.brand} </h6>
            <p id = 'special-paragraph'> <strong> {item.price} € </strong></p> 
            <p id = 'special-paragraph'> {`Quantity : ${item.itemQuantity}`} </p> 
        </div>
        
        <div className = 'div-button'>
            <button className = 'btn btn-info' onClick = {() => removeItem(item)}> Borrar</button>
        </div>
    </div>
  )
}

export default CartItem
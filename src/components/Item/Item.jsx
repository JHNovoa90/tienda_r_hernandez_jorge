import './Item.css';
import { Link } from 'react-router-dom';
import React, { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext';

const Item = ({item}) => {
  const { addToCart } = useContext(CartContext);
  const objectForCart = {...item, itemQuantity : 1}
  return (
    <div className = 'item-container'>
      <div className = 'image-container'>
        <Link to = {`/items/${item.id}`}>
          <img src={item.url} alt="item" width = {200} height = {200}/>
        </Link>
      </div>
      <div className = 'details-container'>
          <Link to = {`/items/${item.id}`} className = 'no-under-link'>
            <h5 className = 'white-text item-title'> {item.name} </h5>
          </Link>
          <p className = 'grey-text'> <i>"{item.description}"</i></p>
          <h6 className = 'white-text'> <strong>{item.price} € </strong> </h6>
          <div>
            <button id = 'button-cart' onClick = {() => addToCart(objectForCart)}> <strong> Añadir al carrito </strong> </button>
            <Link to = {`/items/${item.id}`} >
            <button id = 'button-wishlist'> <strong> Detalles </strong> </button>
            </Link>
          </div>

        </div>
    </div>
  )
}

export default Item
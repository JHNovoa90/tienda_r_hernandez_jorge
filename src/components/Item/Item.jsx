import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';
import AddToCart from '../AddToCart/AddToCart';

const Item = ({item}) => {

  const cartContext = useContext(CartContext);
  const { addToCart} = cartContext;

  const onAdd = (qty) => {
    addToCart(item, qty)
  }

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
            <button id = 'button-cart'> <strong> Añadir al carrito </strong> </button>
            <Link to = {`/items/${item.id}`} >
            <button id = 'button-wishlist'> <strong> Detalles </strong> </button>
            </Link>
          </div>
          <AddToCart stock={item.stock} initial={1} onAdd={onAdd}/>
        </div>
    </div>
  )
}

export default Item
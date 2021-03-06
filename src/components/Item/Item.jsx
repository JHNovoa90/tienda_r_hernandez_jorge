import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';
//import Products from '../../helpers/Products';

const Item = ({item}) => {
  return (
    <div className = 'item-container'>
      <div className = 'image-container'>
          <Link to = {`/items/${item.id}`}>
            <img src={item.url} alt="item" width = {200} height = {200}/>
          </Link>
      </div>
      <div className = 'details-container'>
        <Link to = {`/items/${item.id}`} className = 'no-under-link'>
          <h5 className = 'black-text item-title'> {item.nombre} </h5>
        </Link>
          <p className = 'grey-text'> <i>"{item.description}"</i></p>
          <h6 className = 'black-text'> <strong>{item.precio} € </strong> </h6>
          <div>
            <button id = 'button-cart'> <strong> Añadir al carrito </strong> </button>
            <Link to = {`/detalles/${item.id}`} >
            <button id = 'button-detail'> <strong> Detalles</strong> </button>
            </Link>
          </div>

        </div>
    </div>
  )
}

export default Item
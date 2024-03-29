import React from 'react'
import Item from '../Item/Item';
import './ItemList.css';

const ItemList = ({items}) => {

  return (
    <div>
        <div className = 'div-contenedor'>
        {items.map(function(producto) {
          return < Item key = {producto.id} item = {producto} />
          })}
        </div>
    </div>
  )
}
export default ItemList
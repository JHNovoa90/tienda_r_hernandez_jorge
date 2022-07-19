import React from 'react'
//import AddToCart from '../AddToCart/AddToCart'
import './ItemDetail.css'

const ItemDetail = ({item}) => {
  return (
    <div className = 'div-item-detail-container'>
        <div className = 'div-key-product-info'>
            <div className = 'div-titles'>
                <h2> {item.nombre} </h2>
                <h6> {item.brand} </h6>
            </div>
            <div className = 'div-image-detail'>
                <img src = {item.url}  alt = "product-image"/>
            </div>
            <div className = 'div-product-details'>
                <p> Descripcion: {item.description} </p>
                <p> Precio: {item.precio}€ </p>
            </div>

            <div className = 'div-add-to-cart'>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail
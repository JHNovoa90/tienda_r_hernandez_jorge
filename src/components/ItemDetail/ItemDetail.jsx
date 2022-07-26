import React from 'react'
import AddToCart from '../AddToCart/AddToCart'
import './ItemDetail.css'

const ItemDetail = ({item}) => {
  return (
    <div className = 'div-item-detail-container'>
        <div className = 'div-image-container'>
            <img src = {item.url} alt = "product" className = 'imagen-product'/>
        </div>
        <div className = 'div-key-product-info'>
            <div className = 'div-titles'>
                <h2> {item.name} </h2>
                <h6> {item.brand} </h6>
            </div>

            <div className = 'div-product-details'>
                <p> {item.description} </p>
                <p className = 'price-text'> {item.price} € </p>
                <div className = 'div-add-to-cart'>
                    <AddToCart />
                </div>
            </div>


        </div>
    </div>
  )
}

export default ItemDetail
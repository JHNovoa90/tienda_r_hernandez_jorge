import './ItemDetail.css'
import AddToCart from '../AddToCart/AddToCart'
import GoToCart from '../GoToCart/GoToCart.jsx'
import { useState, useContext } from 'react'
import {CartContext}  from '../../contexts/CartContext'

const ItemDetail = ({item}) => {
    const [purchase, setPurchase] = useState(false);
    const { addToCart } = useContext(CartContext);
    const userAddToCart = (itemQuantity) => {
        addToCart({...item, itemQuantity})
        setPurchase(true);
    }
  return (
    <div className = 'div-item-detail-container'>
        <div className = 'div-image-container'>
            <img src = {item.url} alt = "product-imagen" className = 'imagen-product'/>
        </div>
        <div className = 'div-key-product-info'>
            <div className = 'div-titles'>
                <h2> {item.name} </h2>
                <h6> {item.brand} </h6>
            </div>

            <div className = 'div-product-details'>
                <p> {item.description} </p>
                <p className = 'price-text'> {item.price} € </p>
                {!purchase ?
                    <div className = 'div-add-to-cart'>
                        {}
                        <AddToCart onAdd = {userAddToCart}/>
                    </div>
                :
                    <div className = 'div-go-to-cart'> 
                        <GoToCart />
                    </div>
                }

            </div>


        </div>
    </div>
  )
}

export default ItemDetail
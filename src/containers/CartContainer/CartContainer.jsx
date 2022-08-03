import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import Cart from '../../components/Cart/Cart';
import { Link } from 'react-router-dom';
import './CartContainer.css';

const CartContainer = () => {

  const {cartList, cartIsEmpty} = useContext(CartContext);
  const [loadedCart, setLoadedCart] = useState(false);
  const [cartIsEmptyVar, setCartIsEmptyVar] = useState(cartIsEmpty);

  const getProducts = (delay) => {
    let promise = new Promise ((resolve, reject) => {
      setTimeout( () => {
        resolve(true)
      }, delay)
    })
    return promise;
  }

  useEffect(() => {
    getProducts(1000)
    .then( (resp) => {
      setLoadedCart(resp);
    })
  }, [])

  return (
    <div>
      {cartIsEmptyVar ? 
      <div> 
        <p id = 'white-text'> El carrito esta vacío. ¿Porque no le echas un ojo a nuestras novedades?.</p>
        <button className = 'btn btn-info' id = 'btn-store'>
          <Link to = '/'>
            Volver a la tienda
          </Link>
        </button>
      </div>
      :
        <div>
          {!loadedCart ?
          <div> Loading the cart items...</div>
          :
          <div>
            <Cart items = {cartList} />
          </div>
          }
        </div>
      }
  </div>
  )
}

export default CartContainer

  
import React from 'react'
import { Link } from 'react-router-dom'
import './GoToCart.css'

const GoToCart = () => {
  return (
    <div className = 'main-div-GoToCart'> 
        <div id = 'div-btn-GoToCart'>
          <Link to = '/cart' >
              <button className = 'btn btn-info btn-margin'> Ir al carrito </button>
          </Link> 
          <Link to = '/'>
            <button className = 'btn btn-success btn-margin '> Seguir Comprando</button>
          </Link>
        </div>

        
    </div>
  )
}

export default GoToCart
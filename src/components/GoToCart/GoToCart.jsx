import React from 'react'
import { Link } from 'react-router-dom'

const GoToCart = () => {
  return (
    <div className = 'main-div'>
        <p> This is the GoToCart Component</p> 
        <Link to = '/cart' >
            <button className = 'btn btn-success'> Ir al carrito </button>
        </Link>
        <Link to='/'>
            <button className = 'btn btn-info w-75 btn-buy'> Seguir Comprando </button>
        </Link> 
        
    </div>
  )
}

export default GoToCart
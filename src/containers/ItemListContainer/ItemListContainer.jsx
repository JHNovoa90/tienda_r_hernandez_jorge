import React from 'react'
import './ItemListContainer.css'

const ItemListContainer = ({greeting}) => {
  return (
    <div className = 'div-principal'>
        <div className = 'div-secundario'>
            <p> {greeting} </p>
        </div>
    </div>
  )
}

export default ItemListContainer
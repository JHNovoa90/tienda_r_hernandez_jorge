import React from 'react'
import { useState } from 'react'
import './AddToCart.css'

const AddToCart = ({onAdd}) => {

    const [itemQuantity, setItemQuantity] = useState(1);

    function aumentar() {
        if (itemQuantity < 100) {
            setItemQuantity( itemQuantity + 1);
        }
    }

    function disminuir() {
        if (itemQuantity > 1) {
            setItemQuantity( itemQuantity - 1);
        }
    }

    return (
        <div className = 'div-general'>
            <p> Elige la cantidad deseada</p>
            <div className = 'div-key-components'>
                <button className = 'btn btn-primary' onClick = {disminuir}> - </button>
                <div className = 'center'>
                    <p className = 'item-counter-label'> {itemQuantity} </p>
                </div>
                <button className = 'btn btn-primary' onClick = {aumentar}> + </button>
            </div>
            <button className = 'btn btn-primary w-75 btn-buy' onClick = {() => onAdd(itemQuantity)} > Añadir al carrito </button>
            
        </div>
    )
}

export default AddToCart
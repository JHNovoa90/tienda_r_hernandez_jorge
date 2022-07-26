import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './AddToCart.css'

const AddToCart = () => {

    const [itemQuantity, setItemQuantity] = useState(0);

    function aumentar() {
        if (itemQuantity <100) {
            setItemQuantity( itemQuantity + 1);
        }
        
    }

    function disminuir() {
        if (itemQuantity >0) {
            setItemQuantity( itemQuantity - 1);
        }
        
    }

    return (
        <div className = 'div-general'>
            <p> Numero de copias</p>
            <div className = 'div-key-components'>
                <button className = 'btn btn-primary' onClick = {disminuir}> - </button>
                <div className = 'center'>
                    <p className = 'item-counter-label'> {itemQuantity} </p>
                </div>
                <button className = 'btn btn-primary' onClick = {aumentar}> + </button>
            </div>
            <Link to = {`/cart`} >
            <button className = 'btn btn-primary w-75 btn-buy'> Comprar </button>
            </Link>
            <button className = 'btn btn-info w-75 btn-buy'> Favorito </button>
        </div>
    )
}

export default AddToCart
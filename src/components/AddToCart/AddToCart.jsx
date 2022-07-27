import React from 'react';
import { useState } from 'react';
//import { Link } from 'react-router-dom';
import Intercambiabilidad from '../Intercambiabilidad/Intercambiabilidad';
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
                    <Intercambiabilidad/>                            
            </div>
    )
}

export default AddToCart
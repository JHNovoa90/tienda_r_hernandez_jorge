import React, { useState } from 'react'

 const ItemCount = ({ initial, stock, onAdd}) => {

    const [count, setCount] = useState(initial)

    const suma = () => {
        count < stock ? setCount(count + 1) : alert("No hay stock")
        //if (count < stock) {
            //setCount(count + 1)
        //}else{
        //alert("Stock maximo")
        //}
    }
    const resta = () => {
        if (count > initial) {
            setCount(count -1)
        }else{
            alert(`Compra minima:${initial}`)
        }
    }
    const reset = () =>{
        setCount(initial)    
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={resta}>-</button>
            <button onClick={suma}>+</button>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
            <button onClick={reset}>reset</button>
        </div>
    )
 }

export default ItemCount

import { useState } from "react";
import { Link } from "react-router-dom";


const InputCount= ()=> {

    return (
        <>
        <Link to='/cart'>
            <button
                className="btn btn-outline-primary"
                onClick={()=>console.log('ir a cart')}
                >Ir al carrito </button> 
        </Link>
        <Link to='/'>
            <button
                className="btn btn-outline-primary"
                onClick={()=>console.log('ir al home')}
                >Seguir comprando</button>
        </Link>
        </>
    )
}

const ButtonCount= ({handleInter})=> {
    return <button
                className="btn btn-outline-success"
                onClick={handleInter}
                >Agregar al carrito</button>

}

const Intercambiabilidad =() => {

    const[inputType, setInputType ] = useState ('button')

    const handleInter=()=>{
        setInputType('input')
    }


    return (
        <div>
                {
                    inputType === 'button' ?
                        <ButtonCount handleInter={handleInter}/>
                    :
                        <InputCount/>            
                }
        </div>
    )
}

export default Intercambiabilidad
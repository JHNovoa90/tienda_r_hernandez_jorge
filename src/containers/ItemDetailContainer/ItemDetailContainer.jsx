import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Products from '../../helpers/Products';
import ItemDetail from '../../components/ItemDetail/ItemDetail.jsx';

const ItemDetailContainer = ({productId}) => {

  const [producto, setProducto] = useState(0);
  
  function getItem() {
    let promesa = Products(2000, true);
    console.log(promesa);
    return promesa
  } 

  useEffect( () => {
    getItem().then( (response) => {
      let producto = response.find((product) => product.id === productId);
      setProducto(producto);
    });
  }, []) 
  return (
    <div>
      {producto === 0 ? 
      <p className = 'white-text'> Loading...</p>
      :
      <ItemDetail item = {producto} />}
    </div>
  )
}

export default ItemDetailContainer
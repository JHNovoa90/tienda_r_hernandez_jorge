import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Products from '../../helpers/Products';
import ItemDetail from '../../components/ItemDetail/ItemDetail.jsx';
import './ItemDetailContainer.css';


const ItemDetailContainer = () => {

  const {productId} = useParams();

  const [product, setProduct] = useState(0);
  
  function getItem() {
    return Products(true, 2000);
  } 

  useEffect( () => {
    console.log(new Date());
    getItem().then( (response) => {
      let product = response.find((product) => product.id === productId);
      setProduct(product);
    });
  }, []) 

  return (
    <div>
      <p className = 'white-text'> Item Detail Container</p>
      {product === 0 ? 
      <div> 
        <p className = 'white-text'> Loading...</p>
      </div>
      :
      <div className = 'div-centered'> 
        <ItemDetail item = {product} />   
      </div>
}
    </div>
  )
}

export default ItemDetailContainer
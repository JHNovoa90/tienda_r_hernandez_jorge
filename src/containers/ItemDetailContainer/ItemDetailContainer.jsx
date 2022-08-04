import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail.jsx';
import './ItemDetailContainer.css';
import { doc, getDoc, getFirestore } from 'firebase/firestore';


const ItemDetailContainer = () => {

  const {productId} = useParams();

  const [product, setProduct] = useState(0);
  
  useEffect( () => {
    const db = getFirestore();
    const item = doc(db, 'items', productId);
    getDoc(item).then( (snapshot) => {
      setProduct({id : snapshot.id, ...snapshot.data()})
    })
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
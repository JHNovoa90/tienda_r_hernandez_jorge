import React from 'react'
import ItemList from '../../components/ItemList/ItemList'
import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

const ItemListContainer = () => {

    const {pathname} = useLocation();
    const {categoryId} = useParams();
    let [products, setProducts] = useState([]);

    function createQuery(itemsCollection) {
        let q;
        console.log(pathname);
        switch (pathname) {
            case ('/'):
                console.log("a");
                q = itemsCollection;
                break;
            case('/categories/' + categoryId):
            console.log("b");
                q = query(itemsCollection,
                    where('category', '==', categoryId)
                    );
                break;
            case ('/TopVentas'):
                q = query(itemsCollection,
                    where('TopVentas', '==', true)
                    );
                break;
            default:
                q =  itemsCollection;
                break;
    }
    return q;
}

function getProducts() {
    setProducts([]);
    const db = getFirestore();
    const itemsCollection = collection(db, 'items');
    const productsQuery = createQuery(itemsCollection);
    let firebaseProducts = [];
    getDocs(productsQuery).then( (snapshot) => {
        firebaseProducts = (snapshot.docs.map( (doc) => ({id : doc.id, ...doc.data()})));
        setProducts(firebaseProducts)
    })
    
}

useEffect(() => {
    getProducts();
}, [categoryId, pathname])

return (
    <div>
        <p className = 'white-text'> This is an Item List Container </p>
        {products.length === 0 ? 
        <p className = 'white-text'> Loading ...</p>    
        :
        <div className = 'div-centered'>
            <ItemList items = {products}/> 
        </div>
    }
    </div>
)
}


export default ItemListContainer
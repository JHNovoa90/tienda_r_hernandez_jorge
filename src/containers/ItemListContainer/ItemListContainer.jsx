import React from 'react'
import ItemList from '../../components/ItemList/ItemList'
import Products from '../../helpers/Products';
import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const {pathname} = useLocation();
    const {categoryId} = useParams();
    let [productos, setProductos] = useState([]);

    function filterProducts(productsArray) {
        let productsToShow;
        switch (pathname) {
            case ('/'):
                return productsArray
            case('/categories/' + categoryId):
                productsToShow = productsArray.filter( (item) => item.category === categoryId);
                return productsToShow
            case ('/TopVentas'):
                productsToShow = productsArray.filter( (item) => item.TopVentas === true);
                return productsToShow
            default:
                return productsArray
        }
    }
    useEffect(() => {
        let promesa = Products(true, 2000);
        promesa.then( (response) => {
        let productsToShow = filterProducts(response);
        setProductos(productsToShow);
        });
    }, [])
    
    return (
        <div>
            <p className = 'white-text'> This is an Item List Container </p>
            {productos.length === 0 ? 
            <p> Loading ...</p>    
            :
            <div className = 'div-centered'>
                <ItemList items = {productos}/> 
            </div>
        }
        </div>
    )
    }

export default ItemListContainer
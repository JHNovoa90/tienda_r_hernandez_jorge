import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext([]);

const CartContextProvider = ({children}) => {
    
    const [cartList, setCartList] = useState([]);
    
    const añadirCarrito = (product) => {
        let productoExistente = false;
        cartList.forEach( (prod) => {
            if (prod.id ===product.id) {
                productoExistente = true;
                console.log("El producto ya está añadido al array");
            }
        });

        if (productoExistente) {
            let existingProduct = cartList.find((prod) => prod.id === product.id);
            console.log("El producto recibido por parámetro");
            console.log(product);
            console.log("El producto encontrado en el array");
            console.log(existingProduct);
            console.log("La cantidad");
            console.log(typeof product.itemQuantity);
            console.log(typeof existingProduct.itemQuantity);
            existingProduct.itemQuantity = existingProduct.itemQuantity + product.itemQuantity;            
        } else {
            setCartList([...cartList, product]);
        }
    }
        
    return (
        <CartContext.Provider value = {{
            cartList,
            añadirCarrito
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;
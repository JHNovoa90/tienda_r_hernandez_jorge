import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext([]);

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);
    const [itemCount, setItemCount] = useState(0);
    const [firstProduct, setFirstProduct] = useState(true);

    const calculateTotalItems = () => {
        let counter = 0;
        cartList.forEach(element => {
        counter += element.itemQuantity;
        });
        setItemCount(counter);
      }
    
    const addToCart = (product) => {
        let productoExistente = false;
        cartList.forEach( (prod) => {
            if (prod.id ===product.id) {
                productoExistente = true;
            }
        });

        if (productoExistente) {
            let existingProduct = cartList.find((prod) => prod.id === product.id);
            existingProduct.itemQuantity = existingProduct.itemQuantity + product.itemQuantity;            
            calculateTotalItems();
        } else {
            if (firstProduct) {
                setItemCount(product.itemQuantity);
                setCartList([...cartList, product]);
                setFirstProduct(false);
            } else {
                setCartList([...cartList, product]);
                setItemCount(itemCount + product.itemQuantity);
            }
        }
    }

    const emptyCart = () => {
        console.log("Emptying Cart");
        setItemCount(0);
        setCartList([]);
    }

    const cartIsEmpty = () => {
        if (itemCount === 0) {
            return true
        } else {
            return false
        }
    }

    const removeItem = (item) => {
        const index = cartList.indexOf(item);
        console.log(index);
        cartList.splice(index, 1);
        calculateTotalItems();
    }

    const calculateTotalCartValue = () => {
        let total = 0;
        cartList.forEach ((prod) => {
            total += prod.price*prod.itemQuantity;
        })
        return total;
    }
        
    return (
        <CartContext.Provider value = {
            {
            cartList,
            itemCount,
            addToCart,
            emptyCart,
            cartIsEmpty,
            removeItem,
            calculateTotalCartValue
            }
        }>
        
            {children}
        
        </CartContext.Provider>
    )
}

export default CartContextProvider;
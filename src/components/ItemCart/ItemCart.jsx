import React, { useContext } from "react";
import { CartContext } from '../../contexts/CartContext';
import styles from './ItemCart.css'

export const ItemCart = ({ item }) => {
  /* Traemos del context las funciones para agregar y sacar productos del carrito */
  const { editItemToCart } = useContext(CartContext);

  /* Desestructuramos el item para sacar solo la id */
  const { amount } = item;

  return (
    <div className={styles.cartItem3}>
      <img src={item.img} alt={item.name3} />
      <div className={styles.dataContainer3}>
        <div className={styles.left2}>
          <p>{item.name}</p>
          <div className={styles.buttons3}>
            <button onClick={() => editItemToCart(item._id, "add", amount)}>
              AGREGAR
            </button>
            <button onClick={() => editItemToCart(item._id, "del", amount)}>
              SACAR
            </button>
          </div>
        </div>
        <div className={styles.right3}>
          <div>{item.amount}</div>
          <p>Total: ${item.amount * item.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemCart
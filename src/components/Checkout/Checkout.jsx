import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import './Checkout.css'

const Checkout = () => {
  const { cartList, cartIsEmpty, calculateTotalCartValue} = useContext(CartContext); 

  const verifyFields = () => {
    const emailOne = document.getElementById('emailOne').value;
    const emailTwo = document.getElementById('emailTwo').value;
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const emptyField = '';
    if (name !== emptyField && phone !== emptyField && emailOne !== emptyField && emailTwo !== emptyField) {
      if (validEmail(emailOne)) {
        emailOne === emailTwo ? 
        sendOrder(generateOrder(name, emailOne, phone))
        :
        alert("Sorry, the emails do not match");      
      } else {
        alert('The email address is incorrect');
      }
    } else {
      alert("One of the fields is Empty");
    }
  }

  function validEmail(e) {
    // eslint-disable-next-line 
    var filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
    // eslint-disable-next-line 
    return String(e).search (filter) != -1;
  }

  const generateOrder = (name, email, phone) => {
    const order = {
      buyer : {name : name, email : email, phone : phone},
      items : cartList,
      date : new Date(),
      total : calculateTotalCartValue()
    }
    return order
  }

  const sendOrder = (order) => {
    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');
    addDoc(ordersCollection, order)
    .then ( ( {id} ) => setOrderId (id));

  }

  const setOrderId = (id) => {
    const successMessage = {
      title : '¡Su compra se ha realizado con exito!',
      text : 'Su identificación de pedido es: ' + id,
      imageUrl : 'https://miro.medium.com/max/500/0*DgONYCgblBRusT4j'
    }
    Swal.fire(successMessage);
  }
  return (
    <div className = 'div-main-Checkout'> 
      { !cartIsEmpty() ?
        <div>
        <h4> Verificacion </h4>
        <h3> Paso 1: Revisa tus productos</h3>
        <div>
          {cartList.map( element => {
           return (<li key = {element.id}> {element.name} x {element.itemQuantity}</li>)
          })
          }
          <h5 id = 'purchase-value-checkout'> Total De la Compra : €{calculateTotalCartValue()}</h5>
        </div>
        <br />
        <h3> Paso 2: Rellena tus datos personales</h3>
        <div className = 'div-details-Checkout'>
          <input type="text" placeholder = 'Nombre' id = 'name'/>
          <input type="email" placeholder = 'email' id = 'emailOne'/>
          <input type="email" placeholder = 'Verificar email' id = 'emailTwo'/>
          <input type="tel" placeholder = 'telefono' pattern = '[0-9]{2}-[0-9]{4}-[0-9]{4}' id = 'phone'/>
        </div>
        <br />
        <button className = 'btn btn-success' onClick={verifyFields}> Realizar pedido </button>
      </div>
        :
        <div>
          <p className = 'white-text'> Oops, parece que el carrito está vacío. </p>   
          <br />
          <Link to = '/'>
            <button className = 'btn btn-success'> Volver a la tienda </button>
          </Link>
        </div>
      }
    </div>
  )
}

export default Checkout
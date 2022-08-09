import './Menu.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Menu = function () {
    const [productCategoriesVisible, setProductCategoriesVisible] = useState(false);

    const cambiarVisibilidad = () => {
     if (productCategoriesVisible === true) {
          setProductCategoriesVisible(false);
     } else {
          setProductCategoriesVisible(true);
     }
    }
    return (
        <div className = "div-menu">          
          <div className = 'superior-menu'>
               <h1> E-GAMEPROJECT </h1>
               <div id = 'div1'>
                    <div id = 'div2'>
                         <ul>
                              <li> <Link to = '/'> Home </Link> </li>
                              <li> <Link to = '/TopVentas'> TopVentas </Link> </li> 
                              <li> <a onClick = {cambiarVisibilidad} id = 'link-products' > Plataforma </a> </li>
                         </ul>
                    </div>
               </div>
          </div>

          {productCategoriesVisible && 
          <div className = 'categories-menu'> 
               <div id = 'div3'>
                    <ul>
                         <li> <Link to = '/categories/PC'> PC </Link> </li>
                         <li> <Link to = '/categories/Nintendo'> Nintendo </Link> </li>
                         <li> <Link to = '/categories/XBOX'> XBOX </Link> </li>
                         <li> <Link to = '/categories/Playstation'> Playstation </Link> </li>
                    </ul>
               </div>
          </div>
          }
          <div className = 'right'>
               <CartWidget/>
          </div> 
     </div>
    );
}

export default Menu;
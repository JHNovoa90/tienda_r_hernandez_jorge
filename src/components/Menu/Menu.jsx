import './Menu.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

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
                              <li> <Link to = '7'> Home </Link> </li>

                              <li>
                              <a href = "/TopVentas"> TopVentas </a>
                              </li>

                              <li>
                                   <a onClick = {cambiarVisibilidad} id = 'link-products' > Plataforma </a>
                              </li>
                         </ul>
                    </div>
               </div>
          </div>

          {productCategoriesVisible == true 
          && 
          <div className = 'categories-menu'> 
               <div id = 'div3'>
                    <ul>
                         <li>
                              <a href="/categories/PC"> PC </a>
                         </li>

                         <li>
                              <a href="/categories/Nintendo"> Nintendo </a>
                         </li>

                         <li>
                              <a href="/categories/XBOX"> XBOX </a>
                         </li>

                         <li>
                              <a href="/categories/Playstation"> Playstation </a>
                         </li>
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
import './Menu.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const Menu = function () {
    return (
        <div className = "div-menu">
          <div className = 'center'> 
               <h1> E-GAMEPROJECT </h1>
               <ul>
                    <li>
                         <a href = "/inicio"> Home </a>
                    </li>

                    <li>
                         <a href = "/topVentas"> TopVentas </a>
                    </li>

               </ul>
          </div>

          <div className = 'right'>
               <Link to = '/cart'>
                    <CartWidget items = "0"/>
               </Link>
          </div> 
        </div>
    );
}

export default Menu;
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Navigate } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import CartContainer from './containers/CartContainer/CartContainer';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import CartContextProvider from './contexts/CartContext';
import { createContext } from 'react';
import CheckoutContainer from './containers/CheckoutContainer/CheckoutContainer';

const Contexto = createContext([]);
function App() {

  console.log(Contexto);
  return (
    
    <CartContextProvider> 
      <BrowserRouter> 
        <div className="App">
          <Menu />
          <Routes>
            <Route path = '/' element = {<ItemListContainer />} > </Route>
            <Route path = '/cart' element = {<CartContainer />} > </Route>
            <Route path = 'checkout' element = {<CheckoutContainer />} > </Route>
            <Route path = '/categories/:categoryId' element = {<ItemListContainer />} > </Route>
            <Route path = '/items/:productId' element = {<ItemDetailContainer />} > </Route>
            <Route path = '/TopVentas' element = {<ItemListContainer />} > </Route>
            <Route path = '*' element = {<Navigate to = '/' />}> </Route>
            
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;

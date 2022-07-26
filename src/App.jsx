import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Navigate } from 'react-router-dom';
//import { lazy, Suspense } from 'react';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import CartContainer from './containers/CartContainer/CartContainer';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';

function App() {

  return (
    <BrowserRouter> 
      <div className="App">
        <Menu />
        <Routes>
          <Route path = '/' element = {<ItemListContainer />} > </Route>
          <Route path = '/cart' element = {<CartContainer />} > </Route>
          <Route path = '/categories/:categoryId' element = {<ItemListContainer />} > </Route>
          <Route path = '/items/:productId' element = {<ItemDetailContainer />} > </Route>
          <Route path = '/TopVentas' element = {<ItemListContainer />} />
          <Route path = '*' element = {<Navigate to = '/' />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

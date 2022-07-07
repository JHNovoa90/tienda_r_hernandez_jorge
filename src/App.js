import logo from './logo.svg';
import NavBar from './components/NavBar/NavBar';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './Containers/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="Hola soy ItemListContainer"/>
    </div>
  );
}

export default App;

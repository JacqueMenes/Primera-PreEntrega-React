import './App.css';
import Nav from "./Components/Nav/Nav";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Saludo from "./Components/Saludo/Saludo"



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ItemListContainer greeting="Your Style, Indumentaria Femenina y Accesorios" />
        
        <Nav /> 
        
       

        <Saludo nombreCliente="Cliente" apellidoCliente="Apellido"/>
    
      </header>
      
      
    </div>
  );
}


export default App;

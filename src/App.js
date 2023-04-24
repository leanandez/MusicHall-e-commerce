import './App.css';
import Navbar from "./components/NavBar.jsx"
import "bootstrap/dist/css/bootstrap.min.css"
import ItemListContainer from './pages/ItemListContainer';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import ItemDetailContainer from './pages/ItemDetailContainer';
import { CartProvider } from './context/cartContext';
import { Cart } from './pages/Cart';





function App() {
  return (
    <div className="App">
      <CartProvider> 
      <BrowserRouter>
      <Navbar />
          <Routes>
              <Route path="/MusicHall-e-commerce" element={<ItemListContainer/>}/>
              <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
              <Route path="/item/:itemId" element={<ItemDetailContainer/>}/> 
              <Route path="/cart" element={<Cart/>}/>
              
              
          </Routes>
          
      </BrowserRouter>
      </CartProvider> 
      
    </div>
    
  );
}

export default App;

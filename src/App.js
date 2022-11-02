import './App.css';
import Navbar from "./components/NavBar.jsx"
import "bootstrap/dist/css/bootstrap.min.css"
import ItemListContainer from './pages/ItemListContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetailContainer from './pages/ItemDetailContainer';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
          <Routes>
              <Route path="/" element={<ItemListContainer/>}/>
              <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
              <Route path="/item/:itemId" element={<ItemDetailContainer/>}/> 
          </Routes>
          
      </BrowserRouter>
      
      
    </div>
    
  );
}

export default App;

import CartWidget from "./CartWidget.jsx"



import { Link } from "react-router-dom"
import { useCartContext } from "../context/cartContext.jsx";

function NavBar() {
  const { cart, getCartQty } = useCartContext();
 



  return (
    <nav className="navBar">
      <Link to="/"><div className="navBrand">MusicHall</div></Link>
      <div className="navCategories">
        <Link to="/category/guitar">Guitars</Link>
        <Link to="/category/bass">Basses</Link>
        <Link to="/category/drum">Drums</Link>
      </div>
      <Link to="/cart"><div className="navCart"><CartWidget number={getCartQty()} /></div></Link>

    </nav>



  );
}



export default NavBar;
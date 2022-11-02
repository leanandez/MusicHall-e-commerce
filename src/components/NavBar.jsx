import CartWidget from "./CartWidget.jsx"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer} from "react-router-bootstrap"
import {Link} from "react-router-dom"

function NavBar(){
    return (
        <>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand as={Link} to="/">MusicHall</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/category/guitars">Guitars</Nav.Link>
                <Nav.Link as={Link} to="/category/basses">Basses</Nav.Link>
                <Nav.Link as={Link} to="/category/drums">Drums</Nav.Link>
              </Nav> 
              <Nav className="header__cart"><CartWidget/></Nav>
              </Container>
      </Navbar>
      </>
      );
    }
     {/* <header className="header">
         <nav className="header__title"><h1>MusicHall</h1></nav>
         <nav className="header-nav">
         <a href="">Guitarras</a>
         <a href="">Bajos</a>
         <a href="">Baterias</a>
         </nav>
         <nav className="header__cart"><CartWidget/></nav>
     </header> */}


export default NavBar;
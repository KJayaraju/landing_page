/*import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand logo" href="#">Qwik Notify</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav card">
          <li className="nav-item">
            <a className="nav-link hom" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link hom1" href="#">Product</a>
          </li>
          <li className="nav-item">
            <a className="nav-link hom1" href="#">Solution</a>
          </li>
          <li className="nav-item">
            <a className="nav-link hom1" href="#">Explore</a>
          </li></ul>
          <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link card2" href="#">Join Community</a>
          </li>
          <li className="nav-item">
            <a className="nav-link card3" href="#">Get early Access</a>
          </li>
          </ul>
      </div>
    </nav>
  );
};

export default Navbar;*/
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import log from './log.png';


const CustomNavbar = () => {
  return (
    <Navbar expand="lg" bg="light" variant="light" className="p-3">
      <Navbar.Brand href="#" className="logo"><img 
            src={log} 
            alt="Qwik Notify logo" 
            width="30" 
            height="30" 
            className="d-inline-block align-top"
            style={{ marginRight: '8px' }}
          />Qwik Notify</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="me-auto card ">
          <Nav.Link href="#" className="hom">Home</Nav.Link>
          <Nav.Link href="#" className="hom1">Product</Nav.Link>
          <Nav.Link href="#" className="hom1">Solution</Nav.Link>
          <Nav.Link href="#" className="hom1">Explore</Nav.Link>
        </Nav>
        <Nav className="ms-auto">
          <Nav.Link href="#" className="card2">Join Community</Nav.Link>
          <Nav.Link href="#" className="card3">Get Early Access</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;



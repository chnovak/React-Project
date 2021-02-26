import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';

export default function Navibar() {
  return (
    <nav>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">To Do List!</Navbar.Brand>
        <Nav className="mr-auto">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <Link to="/about" className="nav-link">About</Link>
        </Nav>
      </Navbar>
    </nav>
  );
}
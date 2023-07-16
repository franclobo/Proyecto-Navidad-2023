import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ProyectoNavidad from '../assets/design/logo-fondo.png';
import { BsFacebook } from 'react-icons/bs';

function ColorSchemesExample() {

  const handleClick = () => {
    window.open('https://www.facebook.com/Proyecto-Navidad-100080703520947', '_blank');
  }

  return (
    <>
      {["xl"].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src={ProyectoNavidad}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              Proyecto Navidad
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Proyecto Navidad
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end align-items-center flex-grow-1 pe-3 gap-3">
                  <Nav.Link href="#colaboradores">Nosotros</Nav.Link>
                  <BsFacebook onClick={handleClick} />
                  <Nav.Link href="#donar" className="btn-donar" >Donar</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default ColorSchemesExample;

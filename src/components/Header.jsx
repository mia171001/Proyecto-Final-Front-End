import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { GrRestroomMen } from "react-icons/gr";
import { GrRestroomWomen } from "react-icons/gr";
import { IoDiamondOutline } from "react-icons/io5";
import { MdOutlineLaptopChromebook } from "react-icons/md";

function Header({ onSearchChange }) {
    return (
        <>
            <Navbar key={false} expand={false} className="nav-container" fixed="top">
                <Container fluid>
                    <Navbar.Brand href="/">
                        <img
                            className='logo'
                            src="/images/logo.png" // Ruta directa a la imagen avif
                            alt="Logo de Blue Store" // Texto alternativo para accesibilidad
                        />
                         <img
                            className='logo-copy'
                            src="/images/logo-copia.png" // Ruta directa a la imagen avif
                            alt="Logo de Blue Store" // Texto alternativo para accesibilidad
                        />
                    </Navbar.Brand>
                    <Form className="container-search">
                        <Form.Control
                            type="search"
                            placeholder="Hola, ¿Que estas buscando?"
                            className="search-nav"
                            onChange={onSearchChange}
                        />
                        <img src="/images/icons8-search-50.png" alt="" className="search-icon" />
                    </Form>
                    <div className="d-flex align-items-center category-icon-container">
                        <span className="subTitle">Categorías</span>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`}/>
                    </div>
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${false}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
                                Seleccione la categoría
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="/category/women's clothing">
                                    <GrRestroomWomen /> Ropa para mujer
                                </Nav.Link>
                                <Nav.Link href="/category/men's clothing">
                                    <GrRestroomMen /> Ropa para hombre
                                </Nav.Link>
                                <Nav.Link href="/category/jewelery">
                                    <IoDiamondOutline /> Joyería
                                </Nav.Link>
                                <Nav.Link href="/category/electronics">
                                    <MdOutlineLaptopChromebook /> Tecnología
                                </Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar >
        </>
    );
};

export default Header;

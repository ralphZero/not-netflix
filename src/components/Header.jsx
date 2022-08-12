import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from '../assets/logo.png';

const Header = () => {
    return (
        <Navbar fixed='top' bg="dark" className="bg-transparent bgshadow" variant="dark">
            <Container className="px-xs-2 px-md-4 px-lg-5" fluid>
            <Navbar.Brand href="/">
                <img src={logo} height={30} alt="logo" />
            </Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">Movies</Nav.Link>
                <Nav.Link href="#features">TV Shows</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;

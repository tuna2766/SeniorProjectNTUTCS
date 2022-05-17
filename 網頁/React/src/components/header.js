import { Navbar, Container, Nav, Form, FormControl, Button} from 'react-bootstrap'; 
import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';        
import Logo from '../images/logo.png'

const Header = () => {

        return(
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container fluid>
                <Navbar.Brand href="/"> <img width="85" height="80"  src={Logo}  alt="logo" /> </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                   <Nav.Link href="/member/login">登入</Nav.Link>
                   <Nav.Link href="/member/register">註冊</Nav.Link>                
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Header
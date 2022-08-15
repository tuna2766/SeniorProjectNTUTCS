import { Navbar, Container, Nav, Form, FormControl, Button} from 'react-bootstrap'; 
import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';        
import Logo from '../images/logo.png'
let userName = window.sessionStorage.getItem('userName')
if(userName === null){
    userName = 'login'
}
const Header = () => {
    const logOut=()=>{
        window.sessionStorage.clear()
         window.location.href = `/member/login`
        
    }
    const TypeView=()=>{
        if(userName === 'login'){
            return(<Nav>
                <Nav.Link href="/member/login">登入</Nav.Link>
                <Nav.Link href="/member/register">註冊</Nav.Link>
                <Nav.Link href="/member/adminlogin">管理員登入</Nav.Link>
                </Nav>)
        }
        else{
            return(<Nav>
                <Nav.Link disabled={userName !== 'login'}>{userName}</Nav.Link>
                <Nav.Link onClick={logOut}>登出</Nav.Link>
                <Nav.Link href="/member/history">歷史紀錄</Nav.Link>
                <Nav.Link href="/member/accountInfo">個人資料</Nav.Link>
                </Nav>)
        }
    }

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
                   {TypeView()} 
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Header
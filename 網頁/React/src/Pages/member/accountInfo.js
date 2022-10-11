import './components/style.css'
import axios from 'axios'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Link } from 'react-router-dom'
import { useState } from 'react'
import home from "../Home"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
let userName = window.sessionStorage.getItem('userName')
let email = window.sessionStorage.getItem('email')
let password = window.sessionStorage.getItem('password')
let Phone_number = window.sessionStorage.getItem('Phone_number')
let Fishing_boat_name = window.sessionStorage.getItem('Fishing_boat_name')
let Fishing_area = window.sessionStorage.getItem('Fishing_area')
let Fishing_License_Number = window.sessionStorage.getItem('Fishing_License_Number')

const accountInfo = () => {

    const GoBack = (e) => {
        window.location.href = "../";
    }
    const editInfo = (e) => {
        window.location.href = "./editAccountInfo";
    }
    return (
        <div className='accountInfo' >
            <h1>會員資料</h1>
            <Container className='accountInfoDisplay'>
            <Row >
                <Col sm={4}>電子郵件  <br></br> <span>*必填</span> </Col>
                <Col sm={8}><h2 id='spanEmail' >{email}</h2> </Col>
            </Row>
            <Row >
                <Col sm={4}>帳號     <br></br> <span>*必填</span>

                </Col>
                <Col sm={8} ><h2 id='spanUserName'>{userName}</h2></Col>
            </Row>
            <Row >
                <Col sm={4}>密碼     <br></br> <span>*必填</span>

                </Col>
                <Col sm={8}><h2 id='spanPassWord'>{password}</h2></Col>
            </Row>
            <Row >
                <Col sm={4}>電話     

                </Col>
                <Col sm={8}><h2 id='spanPassWord'>{Phone_number}</h2> </Col> 
            </Row>
            <Row >
                <Col sm={4}>漁船名稱</Col>
                <Col sm={8}>{Fishing_boat_name}</Col>
            </Row>
            <Row >
                <Col sm={4}>漁船作業區域  </Col>
                <Col sm={8}>{Fishing_area}</Col>
            </Row>
            <Row >
                <Col sm={4}>許可證號碼<br></br> <span>*必填</span></Col>
                <Col sm={8}>{Fishing_License_Number}</Col>
            </Row>
            </Container>
            <Container className='accountInfoDisplayButton' >
            <Row className="justify-content-md-center">
                <Col xs lg="2">
                    <button onClick={GoBack} className='button-ex2'>返回</button>
                </Col>
                <Col xs lg="2">
                    <button onClick={editInfo} className='button-ex1'>編輯</button>                
                </Col>
            </Row>
            </Container>
      </div>
    )
    
}
        



export default accountInfo

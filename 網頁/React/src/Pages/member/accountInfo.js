import './components/style.css'
import axios from 'axios'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Link } from 'react-router-dom'
import { useState } from 'react'
import home from "../Home"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Login = () => {

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
                <Col sm={4}>姓名     <br></br> <span>*必填</span>

                </Col>
                <Col sm={8}>---</Col>
            </Row>
            <Row >
                <Col sm={4}>電子郵件  <br></br> <span>*必填</span> </Col>
                <Col sm={8}>---</Col>
            </Row>
            <Row >
                <Col sm={4}>公司名稱  <br></br> <span>*必填</span></Col>
                <Col sm={8}>---</Col>
            </Row>
            <Row >
                <Col sm={4}>漁船名稱</Col>
                <Col sm={8}>---</Col>
            </Row>
            <Row >
                <Col sm={4}>作業區域  </Col>
                <Col sm={8}>---</Col>
            </Row>
            <Row >
                <Col sm={4}>許可證號碼<br></br> <span>*必填</span></Col>
                <Col sm={8}>---</Col>
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
        



export default Login

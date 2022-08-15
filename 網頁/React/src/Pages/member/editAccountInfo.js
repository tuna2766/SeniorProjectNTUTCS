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
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [phone,setPhone] = useState('')
    const send = () =>{
    }
    const GoBack = (e) => {
        window.location.href = "../";
    }
    const editDone = (e) => {
        window.location.href = "./accountInfo";
    }
    return (
        <div className='accountInfo' >
            <h1>會員資料</h1>
            <Container className='accountInfoDisplay'>
            <Row >
                <Col sm={4}>姓名     <br></br> <span>*必填</span>

                </Col>
                <Col sm={8}>
                    <input type='text' size="50" name="Name" placeholder='請輸入帳號' value={name} onChange={(e) => {setName(e.target.value)}}></input>

                </Col>
            </Row>
            <Row >
                <Col sm={4}>電子郵件  <br></br> <span>*必填</span> </Col>
                <Col sm={8}>                            
                    <input type='email' size="50" name="email" placeholder='請輸入E-mail' value={email} onChange={(e) => {setEmail(e.target.value)}} ></input>
                </Col>
            </Row>
            <Row >
                <Col sm={4}>公司名稱  <br></br> <span>*必填</span></Col>
                <Col sm={8}>                        
                <input type='text' size="50" name="Industry_ID" placeholder='請輸入公司名稱'></input>
                </Col>
            </Row>
            <Row >
                <Col sm={4}>漁船名稱</Col>
                <Col sm={8}>
                    <input type='text' size="50"  name="boat_name"placeholder='請輸入漁船名稱' ></input>
                </Col>
            </Row>
            <Row >
                <Col sm={4}>作業區域  </Col>
                <Col sm={8}>                        
                <input type='text' size="50"  name="area" placeholder='請輸入漁船作業區域'></input>
                </Col>
            </Row>
            <Row >
                <Col sm={4}>許可證號碼<br></br> <span>*必填</span></Col>
                <Col sm={8}>
                    <input type='text' size="50" name="Phone" placeholder='請輸入許可證號碼'></input>
                </Col>
            </Row>
            </Container>
            <Container className='accountInfoDisplayButton' >
            <Row className="justify-content-md-center">
                <Col xs lg="2">
                    <button onClick={GoBack} className='button-ex2'>取消</button>
                </Col>
                <Col xs lg="2">
                    <button onClick={editDone} className='button-ex1'>編輯完成</button>                
                </Col>
            </Row>
            </Container>

      </div>
    )
}
        



export default Login

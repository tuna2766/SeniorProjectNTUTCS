import './components/style.css'
import axios from 'axios'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Link } from 'react-router-dom'
import { useState } from 'react'
import home from "../Home"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { isValidInputTimeValue } from '@testing-library/user-event/dist/utils';
let userName = window.sessionStorage.getItem('userName')



const EditAccountInfo = () => {
    const [ID,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [Phone_number,setPhone] = useState('')
    const [Fishing_boat_name,setBoat] = useState('')
    const [Fishing_area,setArea] = useState('')
    const [Fishing_License_Number,setLicense] = useState('')
    const GoBack = (e) => {
        window.location.href = "../";
    }
    const editDone = (e) => {
        setName(userName)
        if (Phone_number.length !== 10    &&  Phone_number.length !==0){
            alert("電話號碼輸入錯誤!");
          }
        else{  
            axios({
                method: 'POST',
                url: 'http://localhost:7000/member/editAccountInfo',
                data:{
                    email: email,
                    username: ID,
                    password: password,
                    Phone_number : Phone_number,
                    Fishing_boat_name:Fishing_boat_name,
                    Fishing_area:Fishing_area,
                    Fishing_License_Number:Fishing_License_Number
                }
                }).then((result) => {
                    console.log(result)
                    if(result.data.state==="200"){        
                        window.sessionStorage.setItem('userName',result.data.userName)
                        window.sessionStorage.setItem('password',result.data.password)
                        window.sessionStorage.setItem('email',result.data.email)
                        window.sessionStorage.setItem('Phone_number',result.data.Phone_number)
                        window.sessionStorage.setItem('Fishing_boat_name',result.data.Fishing_boat_name)
                        window.sessionStorage.setItem('Fishing_area',result.data.Fishing_area)
                        window.sessionStorage.setItem('Fishing_License_Number',result.data.Fishing_License_Number)                        
                    alert("編輯成功! 請重新登入!");
                    window.sessionStorage.clear()
                    window.location.href = `/member/login`                
                }
                else if(result.data.state === '500'){
                    alert(result.data.error)
                  }
            });
        }
    };


    return (
        <div className='accountInfo' >
            <h1>會員資料</h1>
            <Container className='accountInfoDisplay'>
            <Row >
                <Col sm={4}>電子郵件  </Col>
                <Col sm={8}>                            
                    <input type='email' size="50" id='email' name="strEmail" placeholder='請輸入要修改的E-mail'  onChange={(e) => {setEmail(e.target.value)}} ></input>
                </Col>
            </Row>
            <Row >
                <Col sm={4}>帳號
                </Col>
                <Col sm={8}>
                    <h2>{userName}</h2>
                </Col>
            </Row>

            <Row >
                <Col sm={4}>密碼  </Col>
                <Col sm={8}>                            
                    <input type='text' size="50" id='password'name="password" placeholder='請輸入要修改的密碼'  onChange={(e) => {setPassword(e.target.value)}} ></input>
                </Col>
            </Row>
            <Row >
                <Col sm={4}>電話 </Col>
                <Col sm={8}>                        
                <input type='text' size="50" id='Phone_number' name="Phone_number" placeholder='請輸入電話號碼'  onChange={(e) => {setPhone(e.target.value)}} ></input>
                </Col>
            </Row>
            <Row >
                <Col sm={4}>漁船名稱</Col>
                <Col sm={8}>
                    <input type='text' size="50" id='Fishing_boat_name'  name="Fishing_boat_name"placeholder='請輸入漁船名稱'   onChange={(e) => {setBoat(e.target.value)}} ></input>
                </Col>
            </Row>
            <Row >
                <Col sm={4}>作業區域  </Col>
                <Col sm={8}>                        
                <input type='text' size="50" id='Fishing_area' name="Fishing_area" placeholder='請輸入漁船作業區域'  onChange={(e) => {setArea(e.target.value)}} ></input>
                </Col>
            </Row>
            <Row >
                <Col sm={4}>許可證號碼</Col>
                <Col sm={8}>
                    <input type='text' size="50" id='Fishing_License_Number' name="Fishing_License_Number" placeholder='請輸入許可證號碼'  onChange={(e) => {setLicense(e.target.value)}} ></input>
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
     



export default EditAccountInfo

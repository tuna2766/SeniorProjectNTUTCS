import React, { useEffect, useState} from 'react'
import axios from 'axios'
import { useNavigate as navigate } from "react-router-dom";
import './components/style.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Link } from 'react-router-dom'
import home from "../Home"
import Container from 'react-bootstrap/Container';
import {Card, Button} from 'react-bootstrap'; 

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./components/style.css"
let user_Name = window.sessionStorage.getItem('userName')


const History = () => {   
    
    const [ID, setUsername] = useState("");
    const [Photo, setPhoto] = useState([""]);

    useEffect(()=>{       
        axios({
            method: 'get',
            url: 'http://localhost:7000/member/history',
            data:{
                username: 'AAA',
               }
          })
          .then((result) => {
            setPhoto(result.data)})
          .catch((err) => { console.error(err) })
    },[])  

    const listPhoto = Photo.map((data)=>{
        let fishType=''
        if(data.fingerlings === 'ALB'){
            fishType='長鰭鮪'
        }
        else if(data.fingerlings === 'BET'){
            fishType='大目鮪'
        }
        else if(data.fingerlings === 'DOL'){
            fishType='鬼頭刀'
        }        
        else if(data.fingerlings === 'LAG'){
            fishType='紅皮刀'
        }        
        else if(data.fingerlings === 'Shark'){
            fishType='鯊魚'
        }        
        else if(data.fingerlings === 'YFT'){
            fishType='黃鰭鮪'
        }        
        else {
            fishType='其他'
        }
        if(data !== undefined){
            return(                
                <Col  md="3" >
                    <Card style={{ width: 'auto' }} className="h-100">
                            <Card.Img variant="top" src={data.photo}  alt={data.fingerlings} width="250" height="150"/>
                            <Card.Body className="d-flex flex-column">
                                <Card.Title className="text-center fw-bold">魚種:{fishType}</Card.Title>
                                <Card.Text className="fw-light fs-6">捕獲時間: {data.catch_date}<br></br>漁獲量: {data.yield_of_catch}<br></br></Card.Text>
                            </Card.Body>
                    </Card>
                </Col>
            )
                
            }
        else{
            return(
                <p>hi</p>

            )
        }
    })

    return (
        <div className='accountInfo'>
            <h1>歷史紀錄</h1>    
            <div className='accountInfoDisplay'>   
                <Container > 
                        <Row>
                        {listPhoto}
                        </Row>
                </Container>         
            </div>
        </div>
    )

}

export default History
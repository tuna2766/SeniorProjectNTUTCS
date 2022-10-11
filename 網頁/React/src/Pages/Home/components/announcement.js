import React, { useEffect, useState} from 'react'
import axios from 'axios'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Navbar, Container, Nav, Form, FormControl, Button} from 'react-bootstrap'; 
import { render } from 'react-dom'

const Announcement = ({}) => {
    const [announcement, setAnnouncement] = useState([""]);
    useEffect(()=>{       
        axios({
            method: 'get',
            url: 'http://localhost:7000/components/announcement'
          })
          .then((result) => {
            setAnnouncement(result.data)})
          .catch((err) => { console.error(err) })
    },[]) 
    const listAnnouncement = announcement.map((data)=>{
        if(data !== undefined){
            return(
                <div>   
                    <li>• {data}</li>
                    <hr></hr>
                </div> 
            )
                
            }
        else{
            return(
                <p>hi</p>

            )
        }
    })

    return(
        <Nav>
            <div>
                {listAnnouncement}
            </div>
        </Nav>
    )
  }
  
  
  export default Announcement
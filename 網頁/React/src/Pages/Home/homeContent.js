import { StyleSheet, Text, View } from 'react-native';
import { Navbar, Container, Nav, Form, FormControl, Button} from 'react-bootstrap'; 
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import  Marquee  from './components/marquee.js'
import  fish     from './components/fish.jpg'
import Announcement from "./components/announcement.js"
import './homeContent.css'
let userName = window.sessionStorage.getItem('userName')
const HomeContent = ({}) => {
    const TypeView = () =>{
        if(userName ===null){
            return(
                <view>
                    <div className='Announcement' >
                        <h1>公告</h1>

                        <Announcement/>
                    </div>
                </view> 
                )               
        }
        else{
            return(
                <view>
                    <div className='marquee'>
                        <Marquee/>
                    </div>
                    <img src={fish} ></img>
                </view>                
                )
        }
    }



    return (
            <div className='homepage'>
                    {TypeView()}
            </div>

    )
}


export default HomeContent
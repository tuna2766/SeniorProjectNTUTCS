import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import  Marquee  from './components/marquee.js'
import  fish     from './components/fish.jpg'
import './homeContent.css'
const HomeContent = ({}) => {
    return (
            <div className='homepage'>
                <div className='marquee' onmouseover="this.stop()" onmouseout="this.start()">
                    <Marquee/>
                </div>
                <img src={fish} ></img>
            </div>

    )
}

export default HomeContent
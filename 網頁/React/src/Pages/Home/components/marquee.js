import React from 'react'
import { render } from 'react-dom'
import Announcement from "./announcement.js"


const Marquee = ({}) => {
  return(
    <marquee direction="up" width="800" height="50" loop="-1"  scrollamount="1" >
      <Announcement/>
    </marquee>

  )

}


export default Marquee
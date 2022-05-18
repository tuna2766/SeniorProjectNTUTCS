import React from 'react'
import { render } from 'react-dom'


const Marquee = ({}) => {
  return(
    <marquee direction="up" width="800" height="50" loop="-1"  scrollamount="1" >
      <li>公告1</li>
      <li>公告2</li>
      <li>公告3</li>
      <li>公告4</li>
      <li>公告5</li>
      <li>公告6</li>
    </marquee>

  )

}


export default Marquee
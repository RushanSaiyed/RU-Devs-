import React from 'react'
import Navbar from './Navbar'
import image from "../images/startup.svg"
import { NavLink } from 'react-router-dom'
import Common from './Common'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Common name="Grow your business with" head="We are the team of talented developer making websites." projecttitle="Have Project in mind ? Let's Connect" imgsrc={image} visit='/contact' btnname='Get Started'/>
       
    </div>
  )
}

export default Home
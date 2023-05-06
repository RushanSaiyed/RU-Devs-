import React from 'react'
import Navbar from './Navbar'
import image from "../images/banner2.svg"
import Common from './Common'

const About = () => {
  return (
    <div>
      <Navbar />
      <Common name="Welcome to About Page" imgsrc={image} visit='/contact' btnname='Contact Now'/>
    </div>
  )
}

export default About
import React from 'react'
import Navbar from './Navbar'
import ContactCard from './ContactCard'
import { FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <section className='contact-section'>
      <div className="container">
        <h1 className='contact-head'>
          Contact Us
        </h1>
        <div className="contact-details">
        <div className="row">
          <div className="col-md-4">
            <ContactCard icon={<FaMapMarkerAlt  />} titlehead="Our Address" title="Ahmedabad GJ, IN 380001" />
          </div>
          <div className="col-md-4">
            <ContactCard icon={<FaMapMarkerAlt />} titlehead="Email Us" title="info@rudevs.com" />
          </div>
          <div className="col-md-4">
            <ContactCard icon={<FaMapMarkerAlt />} titlehead="Call Us" title="+91 9999999999" />
          </div>
        </div>
        </div>
      </div>
      </section>
    </div>
  )
}

export default Contact
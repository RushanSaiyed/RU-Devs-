import React from 'react'
import image from "../images/startup.svg"
import { NavLink } from 'react-router-dom'

const Common = (props) => {
  return (
    <div>
        <section className='home-section'>
            <div className="container">
                <div className="row desktop-flex ">
                  <div className="col-md-6">
                    <div className="main-text">
                      <h1>{props.name} <span>R | U Devs</span></h1>
                      <h2>{props.head}</h2>
                      <h2>{props.projecttitle}</h2>
                      <div className="start-btn">
                        <NavLink to="/service " className='btn'>{props.btnname}</NavLink>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="main-img text-center">
                      <img src={props.imgsrc} className='img-fluid animated' alt="Image Not Found" />
                    </div>
                  </div>
                </div>
            </div>
        </section>

    </div>
  )
}

export default Common;
import React from 'react'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom';
import { FaCode } from 'react-icons/fa';

const Card = (props) => {
    
    return (
        <>
            <div className="col-md-6 col-12" >
                <div className="card ">
                    <div className="card-body">
                        <div className="ico">
                        <i>{props.icon}</i>
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.description}</p>
                        </div>
                       
                        {/* <NavLink to="" className="btn btn-primary">Go somewhere</NavLink> */}
                    </div>
                </div> 
            </div>
        </>
    )
}

export default Card;
import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <NavLink className="navbar-brand" to="/" >R | U Devs</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <NavLink activeClassName='menu-active' className="nav-link active " aria-current="page" to="/">Home</NavLink>
                            <NavLink activeClassName='menu-active'  className="nav-link " to="/about">About</NavLink>
                            <NavLink activeClassName='menu-active'  className="nav-link" to="/service">Service</NavLink>
                            <NavLink activeClassName='menu-active'  className="nav-link" to="/contact">Contact</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
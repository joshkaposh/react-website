import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Navbar extends Component {

    render() { 
        return (
            <header id="header">
                <nav className="nav-desktop">
                    <ul className="navbar">
                        <li className="logo"><h1><Link to="/">enCourage Family</Link></h1></li>
                        <li className="navbar-item"><Link to="/get-started">Get Started</Link></li>
                        <li className="navbar-item"><Link to="/docs">Docs</Link></li>
                        <li className="navbar-item"><Link to="/download">Download</Link></li>
                        <li className="navbar-item"><Link to="/contact-us">Contact Us</Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Navbar;
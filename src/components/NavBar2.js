import React from 'react'
import {Link} from 'react-router-dom';
import '../styles/NavBar2.scss'

export default function NavBar2() {
    return (
        <div className="NavBar2--container">
              <div  className="NavBar2--content-container">
                <Link to='/' className="NavBar2__link">
                    <div className="NavBar2--content" >Home</div>
                </Link>
                <Link to='/projects' className="NavBar2__link">
                <div className="NavBar2--content">Projects</div>
                </Link>
                <Link to='/about' className="NavBar2__link">
                    <div className="NavBar2--content">About</div>
                </Link>
                <Link to='/contact' className="NavBar2__link">
                    <div className="NavBar2--content">Contact</div>
                </Link>
            </div>
        </div>
    )
}

import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import '../styles/NavBar.scss'


export default function NavBar() {


    const [navDisplay, setNavDisplay] = useState(false)

    const handleOnclickNavBar=()=>{
        setNavDisplay(!navDisplay)
      }

    return (
        <div className={navDisplay? "navbar--main-container show":"navbar--main-container hide"}>
            <button className="navbar--button-display" onClick={handleOnclickNavBar}>
                <div className={!navDisplay? "animated__cross-bar-one crosszero":"animated__cross-bar-one crossone"}></div>
                <div className={!navDisplay? "animated__cross-bar-one crosszero":"animated__cross-bar-one crosstwo"}></div>
            </button>

            <div  className="navbar--content-container">
                <Link to='/' className="navBar__link">
                    <div className="navbar--content" >Home</div>
                </Link>
                <Link to='/projects' className="navBar__link">
                <div className="navbar--content">Projects</div>
                </Link>
                <Link to='/about' className="navBar__link">
                    <div className="navbar--content">About Me</div>
                </Link>
                <Link to='/contact' className="navBar__link">
                    <div className="navbar--content">Contact Me</div>
                </Link>
            </div>
         
        </div>
    )
}

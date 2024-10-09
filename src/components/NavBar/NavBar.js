import { useState } from 'react'
import { Link } from 'react-router-dom';
import { FiMenu } from "react-icons/fi";
// import {HOME_DATA} from "../../assets/data/HomeData";

import './NavBar.scss';
import DarkModeSlider from '../DarkModeSlider/DarkModeSlider';


function NavBar() {
    const [open, setOpen] = useState(false);

    return (
        <>
        {/* <div className="welcome-overlay fade-out"><img src={home.logoGif}></img></div> */}
        <div className="nav-bar">
            <div className="nav-bar-content header-color">
                <div className="menu" onClick={() => setOpen(!open)}>
                    <FiMenu className="menu-icon"></FiMenu>
                </div>
                {open ? 
                <div className="overlay" onClick={() => setOpen(!open)}>
                    <div className="menu-dropdown">
                            <Link  to="/" className="dropdown-link" onClick={() => setOpen(!open)}>Home</Link>
                            <Link  to="/about" className="dropdown-link" onClick={() => setOpen(!open)}>About</Link>
                            <Link to="/projects" className="dropdown-link" onClick={() => setOpen(!open)}>Projects</Link>
                            <Link to="/contact" className="dropdown-link" onClick={() => setOpen(!open)}>Contact</Link>
                    </div>
                </div>
                : null}
                <div className="logo-container">
                    <Link to="/">
                        {/* <img src={logo} className="logo" alt="logo" /> */}
                        <div className="nav-bar-logo-text">João Moraes</div>
                    </Link>
                </div>
                <div className="links-container">
                    <Link  to="/" className="link-title">Home</Link>
                    <Link  to="/about" className="link-title">About</Link>
                    <Link to="/projects" className="link-title">Projects</Link>
                    <Link to="/contact" className="link-title">Contact</Link>
                </div>
                <div className="slider-container">
                    <DarkModeSlider></DarkModeSlider>
                </div>
            </div>
        </div>
        </>
    );
}

export default NavBar;
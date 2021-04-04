import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';

import './NavBar.scss';

function NavBar() {
    return (
        <div className="nav-bar">
            <div className="nav-bar-content">
                <div className="logo-container">
                    <Link to="/projects">
                        <img src={logo} className="logo" alt="logo" />
                    </Link>
                </div>
                <div className="links-container">
                    <div>
                        <a className="link-title" href="">Home</a>
                        <a className="link-title" href="">About</a>
                        <Link to="/projects" className="link-title">Projects</Link>
                        <Link to="/contact" className="link-title">Contact</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
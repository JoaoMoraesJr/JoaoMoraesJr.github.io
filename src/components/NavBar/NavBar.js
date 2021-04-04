import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';

import './NavBar.scss';

function NavBar() {
    return (
        <div className="nav-bar">
            <div className="nav-bar-content">
                <div className="logo-container">
                    <img src={logo} className="logo" alt="logo" />
                </div>
                <div className="links-container">
                    <div>
                        <a className="link-title" href="">Home</a>
                        <a className="link-title" href="">About</a>
                        <Link to="/projects">
                            <a className="link-title">Projects</a>
                        </Link>
                        <a className="link-title" href="">Contact</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
import logo from '../../assets/jolomoju.png';

import './NavBar.scss';

function NavBar() {
    return (
        <div className="nav-bar">
        <div className="nav-bar-content">
            <div className="logo-container">
                <img src={logo} className="logo" alt="logo" />
            </div>
            <div className="links-container">
                <ul className="nav-links">
                    <li><a className="link-title" href="home">Home</a></li>
                    <li><a className="link-title" href="about">About</a></li>
                    <li><a className="link-title" href="projects">Projects</a></li>
                    <li><a className="link-title" href="contact">Contact</a></li>
                </ul>
            </div>
        </div>
        </div>
    );
}

export default NavBar;
import logo from '../../assets/jolomoju.png';

import './NavBar.css';

function NavBar() {
    return (
        <div className="Nav-bar">
            <div className="Logo-container">
                <img src={logo} className="Logo" alt="logo" />
            </div>
            <div className="Links-container">
                <ul className="Nav-links">
                    <li><a href="home">Home</a></li>
                    <li><a href="about">About</a></li>
                    <li><a href="projects">Projects</a></li>
                    <li><a href="contact">Contact</a></li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;
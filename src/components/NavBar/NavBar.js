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
                    <ul className="nav-links">
                        <li><a className="link-title" href="">Home</a></li>
                        <li><a className="link-title" href="">About</a></li>
                        <li><a className="link-title" href="">Projects</a></li>
                        <li><a className="link-title" href="">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
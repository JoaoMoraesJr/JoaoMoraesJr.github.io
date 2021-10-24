import './Footer.scss';
import { FaLinkedin, FaGithub, FaItchIo, FaInstagram } from 'react-icons/fa'
import { GrMail } from "react-icons/gr";

function Footer() {
    return (
        <div className="footer">
            <div className="footer-content">
                {/* <div className="footer-list-container">
                    <ul className="footer-lists language-list">
                        <li><a>EN</a></li>
                        <li><a>|</a></li>
                        <li><a>PT-BR</a></li>
                        <li><a>|</a></li>
                        <li><a>FR</a></li>
                    </ul>
                </div> */}
                <div className="footer-list-container">
                    <ul className="footer-lists contact-list">
                        <li>
                            <a className="footer-contact" title="joaojr1997@gmail.com" href="mailto:joaojr1997@gmail.com" target="_blank">
                                <GrMail />
                            </a>
                        </li>
                        <li>
                            <a className="footer-contact" title="/in/JoaoMoraesJr" href="https://www.linkedin.com/in/joaomoraesjr" target="_blank">
                                <FaLinkedin/>
                            </a>
                        </li>
                        <li>
                            <a className="footer-contact" title="JoaoMoraesJr" href="https://github.com/JoaoMoraesJr" target="_blank">
                                <FaGithub/>
                            </a>
                        </li>
                        <li>
                            <a className="footer-contact" title="jolomoju" href="https://jolomoju.itch.io/" target="_blank">
                                <FaItchIo/>
                            </a>
                        </li>
                        <li>
                            <a className="footer-contact" title="jolomoju" href="https://www.instagram.com/jolomoju/" target="_blank">
                                <FaInstagram/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;

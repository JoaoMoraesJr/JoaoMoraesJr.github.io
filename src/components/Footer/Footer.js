import './Footer.scss';
import { FaLinkedin, FaGithub, FaItchIo, FaInstagram } from 'react-icons/fa'
import { GrMail } from "react-icons/gr";
import ReactGA from "react-ga4";

function Footer() {

    function sendContactFooterInfo (contactId) {
        switch(contactId) {
            case 0: 
                ReactGA.event({
                    category: "Click",
                    action: "Click on Email",
                    label: "Footer"
                });
                break;
            case 1: 
                ReactGA.event({
                    category: "Click",
                    action: "Click on LinkedIn",
                    label: "Footer"
                });
                break;
            case 2: 
                ReactGA.event({
                    category: "Click",
                    action: "Click on Github",
                    label: "Footer"
                });
                break;
            case 3: 
                ReactGA.event({
                    category: "Click",
                    action: "Click on Itch.io",
                    label: "Footer"
                });
                break;
            case 4: 
                ReactGA.event({
                    category: "Click",
                    action: "Click on Instagram",
                    label: "Footer"
                });
                break;
            default:
                break;
        }
    };

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
                            <a className="footer-contact" onClick={() => sendContactFooterInfo(0)} title="E-mail: joaojr1997@gmail.com" href="mailto:joaojr1997@gmail.com" target="_blank" rel="noreferrer">
                                <GrMail />
                            </a>
                        </li>
                        <li>
                            <a className="footer-contact" onClick={() => sendContactFooterInfo(1)} title="LinkedIn: /in/JoaoMoraesJr" href="https://www.linkedin.com/in/joaomoraesjr" target="_blank" rel="noreferrer">
                                <FaLinkedin/>
                            </a>
                        </li>
                        <li>
                            <a className="footer-contact" onClick={() => sendContactFooterInfo(2)} title="Github: JoaoMoraesJr" href="https://github.com/JoaoMoraesJr" target="_blank" rel="noreferrer">
                                <FaGithub/>
                            </a>
                        </li>
                        <li>
                            <a className="footer-contact" onClick={() => sendContactFooterInfo(3)} title="Itch.io: jolomoju" href="https://jolomoju.itch.io/" target="_blank" rel="noreferrer">
                                <FaItchIo/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;

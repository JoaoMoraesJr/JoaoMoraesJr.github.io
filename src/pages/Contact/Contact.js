import './Contact.scss';
import { FaLinkedin, FaGithub, FaItchIo } from 'react-icons/fa'
import { GrMail } from "react-icons/gr";
import { useEffect } from 'react';
import ReactGA from "react-ga4";

function Contact() {

    useEffect(()=> {
        ReactGA.send({ hitType: "pageview", page: "/contact", title:"Contact" });
    }, []);

    function sendContactInfo (contactId) {
        switch(contactId) {
            case 0: 
                ReactGA.event({
                category: "Click",
                action: "Click on Email",
                label: "Contact"
                });
                break;
            case 1: 
                ReactGA.event({
                category: "Click",
                action: "Click on LinkedIn",
                label: "Contact"
                });
                break;
            case 2: 
                ReactGA.event({
                category: "Click",
                action: "Click on Github",
                label: "Contact"
                });
                break;
            case 3: 
                ReactGA.event({
                category: "Click",
                action: "Click on Itch.io",
                label: "Contact"
                });
                break;
            case 4: 
                ReactGA.event({
                category: "Click",
                action: "Click on Instagram",
                label: "Contact"
                });
                break;
            default:
                break;
        }
    };

    return(
        <div className="contact-page page-margin">
            <div className="contact-text">
            <h1>Contact</h1>
            <p>Need more information, want to work together or simply want to have a chat?</p>
            <p>You can reach me in one of the social media.</p>
            </div>
            <div className="contact-container">
                <div className="contact-links">
                    <a className="contact" onClick={() => sendContactInfo(0)} title="jolomoju@gmail.com" href="mailto:jolomoju@gmail.com" target="_blank" rel="noreferrer">
                        <GrMail title="E-mail" className="contact-icon primary-color" /> 
                        <span className="contact-text text-color"><b>E-mail:</b> jolomoju@gmail.com</span>
                    </a>
                    <a className="contact" onClick={() => sendContactInfo(1)} title="/in/JoaoMoraesJr" href="https://www.linkedin.com/in/joaomoraesjr" target="_blank" rel="noreferrer">
                        <FaLinkedin title="LinkedIn" className="contact-icon secondary-color" /> 
                        <span className="contact-text text-color"><b>LinkedIn:</b> /in/JoaoMoraesJr</span>
                    </a>
                    <a className="contact" onClick={() => sendContactInfo(2)} title="JoaoMoraesJr" href="https://github.com/JoaoMoraesJr" target="_blank" rel="noreferrer">
                        <FaGithub title="Github" className="contact-icon primary-color" /> 
                        <span className="contact-text text-color"><b>Github:</b> JoaoMoraesJr</span>
                    </a>
                    <a className="contact" onClick={() => sendContactInfo(3)} title="jolomoju" href="https://jolomoju.itch.io/" target="_blank" rel="noreferrer">
                        <FaItchIo title="itch.io" className="contact-icon secondary-color" /> 
                        <span className="contact-text text-color"><b>Itch.io:</b> jolomoju.itch.io</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact;
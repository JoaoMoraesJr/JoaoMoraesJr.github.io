import './Contact.scss';
import { FaLinkedin, FaGithub, FaItchIo } from 'react-icons/fa'
import { GrMail } from "react-icons/gr";
import { useEffect } from 'react';
import { CONTACT_DATA } from '../../assets/data/ContactData';
import ReactGA from "react-ga4";

function Contact() {
    let contacts = CONTACT_DATA;

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
                    <a className="contact" onClick={() => sendContactInfo(0)} title={contacts.email.name} href={"mailto: " + contacts.email.name} target="_blank" rel="noreferrer">
                        <GrMail title="E-mail" className="contact-icon primary-color" /> 
                        <span className="contact-text text-color"><b>E-mail:</b> {contacts.email.name}</span>
                    </a>
                    <a className="contact" onClick={() => sendContactInfo(1)} title={contacts.linkedin.name} href={contacts.linkedin.link} target="_blank" rel="noreferrer">
                        <FaLinkedin title="LinkedIn" className="contact-icon secondary-color" /> 
                        <span className="contact-text text-color"><b>LinkedIn:</b> {contacts.linkedin.name}</span>
                    </a>
                    <a className="contact" onClick={() => sendContactInfo(2)} title={contacts.github.name} href={contacts.github.link} target="_blank" rel="noreferrer">
                        <FaGithub title="Github" className="contact-icon primary-color" /> 
                        <span className="contact-text text-color"><b>Github:</b> {contacts.github.name}</span>
                    </a>
                    <a className="contact" onClick={() => sendContactInfo(3)} title={contacts.itchio.name} href={contacts.itchio.link} target="_blank" rel="noreferrer">
                        <FaItchIo title="itch.io" className="contact-icon secondary-color" /> 
                        <span className="contact-text text-color"><b>Itch.io:</b> {contacts.itchio.name}</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact;
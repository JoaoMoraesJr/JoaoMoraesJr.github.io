import './Contact.scss';
import { FaLinkedin, FaGithub, FaItchIo, FaInstagram } from 'react-icons/fa'
import { GrMail } from "react-icons/gr";

function Contact() {

    return(
        <div className="contact-page">
            <div className="contact-text">
            <h1>Contact</h1>
            <p>Need more information, want to work together or simply want to have a chat?</p>
            <p>You can reach me in one of the social media.</p>
            </div>
            <div className="contact-container">
                <div className="contact-links">
                    <a className="contact" title="joaojr1997@gmail.com" href="mailto:joaojr1997@gmail.com" target="_blank">
                        <GrMail title="E-mail" className="contact-icon pink" /> 
                        <span className="contact-text">joaojr1997@gmail.com</span>
                    </a>
                    <a className="contact" title="/in/JoaoMoraesJr" href="https://www.linkedin.com/in/joaomoraesjr" target="_blank">
                        <FaLinkedin title="LinkedIn" className="contact-icon black" /> 
                        <span className="contact-text">/in/JoaoMoraesJr</span>
                    </a>
                    <a className="contact" title="JoaoMoraesJr" href="https://github.com/JoaoMoraesJr" target="_blank">
                        <FaGithub title="Github" className="contact-icon pink" /> 
                        <span className="contact-text">JoaoMoraesJr</span>
                    </a>
                    <a className="contact" title="jolomoju" href="https://jolomoju.itch.io/" target="_blank">
                        <FaItchIo title="itch.io" className="contact-icon black" /> 
                        <span className="contact-text"> jolomoju.itch.io</span>
                    </a>
                    <a className="contact" title="jolomoju" href="https://www.instagram.com/jolomoju/" target="_blank">
                        <FaInstagram title="Instagram" className="contact-icon pink" /> 
                        <span className="contact-text">@jolomoju</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact;
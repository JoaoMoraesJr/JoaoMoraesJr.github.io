import './About.scss';
import { FaLinkedin, FaGithub, FaItchIo, FaInstagram } from 'react-icons/fa'
import { GrMail } from "react-icons/gr";
import {ABOUT_DATA} from "../../assets/data/AboutData";

function About() {

    let about = ABOUT_DATA;

    return(
        <div>
            <div className="about-headline">
                <div><img src={about.profilePhoto} className="profile-photo" alt="profile-photo"/></div>
                <h1 className="about-title">{about?.title}</h1>
                <p className="about-text">{about?.description}</p>
            </div>
        </div>
    )
}

export default About;
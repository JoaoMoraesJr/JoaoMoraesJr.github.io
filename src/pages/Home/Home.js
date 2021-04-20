import './Home.scss';
import { FaAngular, FaReact, FaUnity, FaPython, FaLinkedin, FaGithub, FaItchIo, FaInstagram } from 'react-icons/fa'
import { SiDotNet, SiBlender } from 'react-icons/si'
import { GrMail } from "react-icons/gr";
import {HOME_DATA} from "../../assets/data/HomeData";
import {PROJECTS_INFO} from "../../assets/data/ProjectsData";
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { Link} from 'react-router-dom';
import { CONTACT_DATA } from '../../assets/data/ContactData';

function Home() {

    let home = HOME_DATA;
    let contacts = CONTACT_DATA;
    const projects = [];

    for (var i = 0; i < 3; i++) {
        projects.push(
            <li key={i} className="projects-item">
                <Link to={`/projects/${PROJECTS_INFO.projectList[i].name}`}>
                    <ProjectCard projectInfo={PROJECTS_INFO.projectList[i]} />
                </Link>
            </li>
        )
    }

    return(
        <div className="home">
            <div className="home-section">
                <div className="profile-photo-container"><img className="profile-photo-img" src={home.profilePhoto} alt="profile-photo"/></div>
                <h1 className="headline">{home?.headline}</h1>
                <p className="home-text">{home?.description}</p>
            </div>
            <div className="home-section">
                <div className="turquoise-background" style={{height: 515}}></div>
                <span><strong>What I do</strong></span>
                <p className="home-text">Subtitle about my work experience and about what technologies I know and use in my projects or work.</p>
                <ul className="home-inline-list technologies-list">
                    <li className = "technologies-item">
                        <div className="technologies-icons"><FaAngular /><FaReact /><SiDotNet /></div>
                        <span><strong>Web development</strong></span>
                        <span>Full stack experience in web development</span>
                    </li>
                    <li className = "technologies-item">
                        <div className="technologies-icons"><FaUnity /><SiBlender /></div>
                        <span><strong>Game Development</strong></span>
                        <span>experience building games from art to coding</span>
                    </li>
                    <li className = "technologies-item" style={{paddingRight: 0}}>
                        <div className="technologies-icons"><FaPython /></div>
                        <span><strong>Artificial Inteligence</strong></span>
                        <span>Experience on research, developing AI models</span>
                    </li>
                </ul>
                <div className="center-container">
                <Link to="/about" className="button-primary">
                    <span>See more about me</span>
                </Link>
                </div>
            </div>
            <div className="home-section">
                <span><strong>My Projects</strong></span>
                <p className="home-text">Subtitle about my personal project and about what technologies I know and use in my projects or work.</p>
                <div className="center-container">
                    <ul className="home-inline-list">
                        {projects}
                    </ul>
                </div>
                <div className="center-container">
                    <Link to="/projects" className="button-primary">
                        <span>See my projects</span>
                    </Link>
                </div>
            </div>
            <div className="home-section">
                <div className="turquoise-background" style={{height: 500}}></div>
                <span><strong>Contact</strong></span>
                <p className="home-text">You can reach me in one of my social media.</p>
                <div className="center-container">
                    <ul className="home-inline-list">
                        <li><a className="home-contact-item" title={contacts.email.name} href={contacts.email.link} target="_blank"><GrMail className="contact-icon pink" /></a></li>
                        <li><a className="home-contact-item" title={contacts.linkedin.name} href={contacts.linkedin.link} target="_blank"><FaLinkedin className="contact-icon black" /></a></li>
                        <li><a className="home-contact-item" title={contacts.github.name} href={contacts.github.link} target="_blank"><FaGithub className="contact-icon pink" /></a></li>
                        <li><a className="home-contact-item" title={contacts.itchio.name} href={contacts.itchio.link} target="_blank"><FaItchIo className="contact-icon black" /></a></li>
                        <li><a className="home-contact-item" title={contacts.instagram.name} href={contacts.instagram.link} target="_blank"><FaInstagram className="contact-icon pink" /></a></li>

                    </ul>
                </div>
                <div className="center-container">
                    <Link to="/contact" className="button-primary">
                        <span>Contact Me</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home;
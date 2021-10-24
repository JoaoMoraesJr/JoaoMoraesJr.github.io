import './Home.scss';
import { FaLinkedin, FaGithub, FaItchIo, FaInstagram } from 'react-icons/fa';
import { AiOutlineCopyright } from "react-icons/ai";
import { GrMail } from "react-icons/gr";
import {HOME_DATA} from "../../assets/data/HomeData";
import {PROJECTS_INFO} from "../../assets/data/ProjectsData";
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { Link} from 'react-router-dom';
import { CONTACT_DATA } from '../../assets/data/ContactData';
import TechnologiesList from '../../components/TechnologiesList/TechnologiesList';
import CV from '../../assets/JoaoALMoraesCV.pdf'

function Home() {

    let home = HOME_DATA;
    let contacts = CONTACT_DATA;
    const projects = [];

    let projectClass = "projects-item";
    for (var i = 0; i < 3; i++) {
        if (i == 2) projectClass += " last-project";
        projects.push(
            <li key={i} className={projectClass}>
                <Link to={`/projects/${PROJECTS_INFO.projectList[i].name}`}>
                    <ProjectCard projectInfo={PROJECTS_INFO.projectList[i]} />
                </Link>
            </li>
        )
    }

    return(
        <div className="home">
            <div className="home-section first-section">
                <div className="profile-photo-container"><img className="profile-photo-img" src={home.profilePhoto} alt="profile-photo"/></div>
                <h1 className="headline">{home?.headline}</h1>
                <p className="home-text">Hello, my name is João Moraes, a <b>Computer Scientist</b> currently working at DELL as a <b>Software Engineer</b>. I love everything related to technology, and particularly in some areas that I like to focus like web development, game development, and artificial intelligence.</p>
                <p className="home-text">With a <b>curious mind</b> that needs to be constantly fed with more knowledge and discoveries, I have a special <b>passion for creating</b> things, that extends to many different areas, like applications, robots, games, arts, music, etc. This website is my space to showcase some of these interests, be welcomed!</p>
                <div className="home-cv"><span className="button-primary" onClick={() => window.open(CV, '_blank')}>Download CV</span></div>
            </div>
            <div className="home-section">
                <div className="turquoise-background technology-background"></div>
                <span><strong>What I do</strong></span>
                <p className="home-text">There are three main areas that I like to focus professionally.</p>
                <TechnologiesList></TechnologiesList>
                <div className="center-container">
                    <Link to="/about" className="button-primary">
                        <span>See more about me</span>
                    </Link>
                </div>
            </div>
            <div className="home-section">
                <span><strong>My Projects</strong></span>
                <p className="home-text">I love to develop my own projects! Here you can take a look at some of them.</p>
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
            <div className="copyright-section ">
                <div className="copyright-background"></div>
                <div className="center-container">
                    <span>Copyright <AiOutlineCopyright/> 2021 João Moraes</span>
                </div>
            </div>
        </div>
    )
}

export default Home;
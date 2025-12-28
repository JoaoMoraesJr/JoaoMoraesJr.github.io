import './Home.scss';
import { FaLinkedin, FaGithub, FaItchIo } from 'react-icons/fa';
import { GrMail } from "react-icons/gr";
import {HOME_DATA} from "../../assets/data/HomeData";
import {PROJECTS_INFO} from "../../assets/data/ProjectsData";
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { Link} from 'react-router-dom';
import { CONTACT_DATA } from '../../assets/data/ContactData';
import TechnologiesList from '../../components/TechnologiesList/TechnologiesList';
import CV from '../../assets/JoaoMoraesCV.pdf'
import ReactGA from "react-ga4";
import { useEffect } from 'react';

function Home() {

    useEffect(()=> {
        ReactGA.send({ hitType: "pageview", page: "/", title:"Home" });
    }, []);

    let home = HOME_DATA;
    let contacts = CONTACT_DATA;
    const projects = [];

    let projectClass = "projects-item";
    for (var i = 0; i < 3; i++) {
        if (i === 2) projectClass += " last-project";
        projects.push(
            <li key={i} className={projectClass}>
                <Link to={`/projects/${PROJECTS_INFO.projectList[i].name}`}>
                    <ProjectCard projectInfo={PROJECTS_INFO.projectList[i]} />
                </Link>
            </li>
        )
    }

    function downloadCV () {
        window.open(CV, '_blank')
        ReactGA.event({
          category: "Download",
          action: "Download CV",
          label: "Home"
        });
    };

    function sendContactHomeInfo (contactId) {
        switch(contactId) {
            case 0: 
                ReactGA.event({
                    category: "Click",
                    action: "Click on Email",
                    label: "Home"
                });
                break;
            case 1: 
                ReactGA.event({
                    category: "Click",
                    action: "Click on LinkedIn",
                    label: "Home"
                });
                break;
            case 2: 
                ReactGA.event({
                    category: "Click",
                    action: "Click on Github",
                    label: "Home"
                });
                break;
            case 3: 
                ReactGA.event({
                    category: "Click",
                    action: "Click on Itch.io",
                    label: "Home"
                });
                break;
            case 4: 
                ReactGA.event({
                    category: "Click",
                    action: "Click on Instagram",
                    label: "Home"
                });
                break;
            default:
                break;
        }
    };

    return(
        <div className="home">
            <div className="home-section colored-background">
                <div className="page-margin first-section">
                    <div className="profile-photo-container home-photo-container">
                        <img className="profile-photo-img" src={home.profilePhoto} alt="profile"/>
                    </div>
                    <h1 className="headline">{home?.headline}</h1>
                    <h4 className="headline-description">{home?.jobDescription}</h4>
                    <p className="home-text">{home?.description}</p>
                    <div className="home-cv"><span className="primary-button primary-button-color" onClick={() => downloadCV()}>Download CV</span></div>
                </div>
            </div>
            <div className="home-section">
                <div className="page-margin">
                    <span><strong>What I do</strong></span>
                    <p className="home-text">There are three main areas that I like to focus professionally.</p>
                    <TechnologiesList></TechnologiesList>
                    <div className="center-container">
                        <Link to="/about" className="primary-button primary-button-color">
                            <span>See more about me</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="home-section colored-background">
                <div className="page-margin">
                    <span><strong>My Projects</strong></span>
                    <p className="home-text">I’m passionate about creating and developing new personal projects, where I explore new ideas and refine my skills. Here you’ll find a selection of my work.</p>
                    <div className="center-container">
                        <ul className="home-inline-list">
                            {projects}
                        </ul>
                    </div>
                    <div className="center-container">
                        <Link to="/projects" className="primary-button primary-button-color">
                            <span>See my projects</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="home-section">
                <div className="page-margin">
                    <span><strong>Contact</strong></span>
                    <p className="home-text">You can reach me in one of my social media.</p>
                    <div className="center-container">
                        <ul className="home-inline-list">
                            <li><a className="home-contact-item" onClick={() => sendContactHomeInfo(0)} title={"Email: " + contacts.email.name} href={contacts.email.link} target="_blank" rel="noreferrer"><GrMail className="contact-icon primary-color" /></a></li>
                            <li><a className="home-contact-item" onClick={() => sendContactHomeInfo(1)} title={"LinkedIn: " +contacts.linkedin.name} href={contacts.linkedin.link} target="_blank" rel="noreferrer"><FaLinkedin className="contact-icon secondary-color" /></a></li>
                            <li><a className="home-contact-item" onClick={() => sendContactHomeInfo(2)} title={"Github: " +contacts.github.name} href={contacts.github.link} target="_blank" rel="noreferrer"><FaGithub className="contact-icon primary-color" /></a></li>
                            <li><a className="home-contact-item" onClick={() => sendContactHomeInfo(3)} title={"Itch.io: " +contacts.itchio.name} href={contacts.itchio.link} target="_blank" rel="noreferrer"><FaItchIo className="contact-icon secondary-color" /></a></li>
                        </ul>
                    </div>
                    <div className="center-container">
                        <Link to="/contact" className="primary-button primary-button-color">
                            <span>Contact Me</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;

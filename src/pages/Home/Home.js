import './Home.scss';
import { FaAngular, FaReact, FaUnity, FaPython, FaGithub, FaItchIo, FaInstagram } from 'react-icons/fa'
import { SiDotNet, SiBlender } from 'react-icons/si'
import { GrMail } from "react-icons/gr";
import {HOME_DATA} from "../../assets/data/HomeData";
function Home() {

    let home = HOME_DATA;

    return(
        <div className="home">
            <div className="home-header">
                <div><img src={home.profilePhoto} className="profile-photo" alt="profile-photo"/></div>
                <h1 className="headline">{home?.headline}</h1>
                <p className="home-text">{home?.description}</p>
            </div>
            <div className="technologies">
                <span><strong>What I do</strong></span>
                <p className="home-text">Subtitle about my work experience and what I expect the users to feel when navigating this website</p>
                <ul className="technologies-list">
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
                <div className="center-item">
                <a className="button-primary" href="/about">
                    <span>See more about me</span>
                </a>
                </div>
            </div>
        </div>
    )
}

export default Home;